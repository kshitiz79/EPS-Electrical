import React from "react";
import DashboardPage from "./page";
import AdminGuard from "../../components/Dashboard/AdminGuard";

export default function Dashboard() {
    return (
        <AdminGuard>
            <div className="min-h-screen bg-gray-50 pt-[100px]">
                <DashboardPage />
            </div>
        </AdminGuard>
    );
}
