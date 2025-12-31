"use client";
import React, { useState, useEffect } from "react";
import { FaLock, FaUnlock, FaArrowRight } from "react-icons/fa";

const ADMIN_PIN = "admin123"; // Simple PIN for demonstration

export default function AdminGuard({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "https://upfbackend.onrender.com/api";

    useEffect(() => {
        // Check session storage on mount
        const authStatus = sessionStorage.getItem("admin_authenticated");
        if (authStatus === "true") {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch(`${API_BASE}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pin }),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Login failed");
            }
            const { token } = await res.json();
            sessionStorage.setItem("admin_token", token);
            sessionStorage.setItem("admin_authenticated", "true");
            setIsAuthenticated(true);
        } catch (err) {
            setError(err.message || "Login failed");
            setPin("");
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("admin_authenticated");
        sessionStorage.removeItem("admin_token");
        setIsAuthenticated(false);
    }

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0a1f55]"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                    <div className="text-center mb-8">
                        <div className="bg-[#0a1f55]/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0a1f55]">
                            <FaLock size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0a1f55]">Admin Access</h2>
                        <p className="text-gray-500 mt-2">Enter the PIN to access the dashboard.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="w-full text-center text-2xl tracking-widest px-4 py-4 rounded-xl border border-gray-200 focus:border-[#0a1f55] focus:ring-4 focus:ring-[#0a1f55]/10 outline-none transition-all"
                                placeholder="••••••"
                                autoFocus
                            />
                            {error && (
                                <p className="text-red-500 text-sm text-center mt-3 font-medium animate-pulse">
                                    {error}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0a1f55] text-white py-3.5 rounded-xl font-semibold hover:bg-[#0a1f55]/90 transition-colors flex items-center justify-center gap-2 group"
                        >
                            Access Dashboard
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            {children}
            {/* Floating Logout Button */}
            <button
                onClick={handleLogout}
                className="fixed bottom-6 right-6 bg-white text-gray-700 p-3 rounded-full shadow-lg border border-gray-100 hover:bg-red-50 hover:text-red-600 transition-colors z-50 flex items-center gap-2 pr-4 font-medium"
                title="Logout"
            >
                <div className="bg-gray-100 p-2 rounded-full">
                    <FaUnlock size={14} />
                </div>
                Logout
            </button>
        </div>
    );
}
