import React, { useState, useEffect } from "react";
import { FaPlus, FaNewspaper } from "react-icons/fa";
import BlogCard from "../../components/Dashboard/BlogCard";
import CreateBlogModal from "../../components/Dashboard/CreateBlogModal";

export default function DashboardPage() {
    const [blogs, setBlogs] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://epsbackend-e3p1.onrender.com/api";

    // Load blogs from backend
    useEffect(() => {
        const load = async () => {
            try {
                const res = await fetch(`${API_BASE}/blogs`);
                const data = await res.json();
                setBlogs(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Failed to load blogs", err);
            } finally {
                setIsLoading(false);
            }
        };
        load();
    }, [API_BASE]);

    // Save blogs to localStorage whenever they change
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("as_blogs", JSON.stringify(blogs));
        }
    }, [blogs, isLoading]);

    const handleSaveBlog = async (formData, blogId = null) => {
        const token = sessionStorage.getItem("admin_token");
        if (!token) {
            alert("Please login with the admin PIN before creating or editing blogs.");
            return;
        }

        try {
            if (blogId) {
                // Update existing blog
                const res = await fetch(`${API_BASE}/blogs/${blogId}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                });
                if (!res.ok) {
                    if (res.status === 401) {
                        sessionStorage.removeItem("admin_token");
                        sessionStorage.removeItem("admin_authenticated");
                        alert("Your admin session is invalid or expired. Please login again.");
                        setIsModalOpen(false);
                        return;
                    }
                    const data = await res.json().catch(() => null);
                    throw new Error(data?.error || data?.message || "Update failed");
                }
                const updated = await res.json();
                setBlogs((prev) => prev.map((b) => (b._id === updated._id ? updated : b)));
            } else {
                // Create new blog
                const res = await fetch(`${API_BASE}/blogs`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                });
                if (!res.ok) {
                    if (res.status === 401) {
                        sessionStorage.removeItem("admin_token");
                        sessionStorage.removeItem("admin_authenticated");
                        alert("Your admin session is invalid or expired. Please login again.");
                        setIsModalOpen(false);
                        return;
                    }
                    const data = await res.json().catch(() => null);
                    throw new Error(data?.error || data?.message || "Create failed");
                }
                const created = await res.json();
                setBlogs((prev) => [created, ...prev]);
            }
            setEditingBlog(null);
        } catch (err) {
            alert(err.message || "Failed to save blog");
        }
    };

    const handleEditBlog = (blog) => {
        setEditingBlog(blog);
        setIsModalOpen(true);
    };

    const handleDeleteBlog = async (id) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            const token = sessionStorage.getItem("admin_token");
            try {
                const res = await fetch(`${API_BASE}/blogs/${id}`, {
                    method: "DELETE",
                    headers: { Authorization: token ? `Bearer ${token}` : "" },
                });
                if (!res.ok) throw new Error("Delete failed");
                setBlogs((prev) => prev.filter((blog) => blog._id !== id));
            } catch (err) {
                alert(err.message || "Failed to delete blog");
            }
        }
    };

    const openCreateModal = () => {
        setEditingBlog(null);
        setIsModalOpen(true);
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-10 pb-20">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-[#0a1f55] tracking-tight mb-2">
                        Blog Dashboard
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Manage and curate your latest updates for the community.
                    </p>
                </div>
                <button
                    onClick={openCreateModal}
                    className="group flex items-center gap-3 bg-[#0a1f55] text-white px-8 py-3.5 rounded-full font-semibold shadow-xl shadow-[#0a1f55]/20 hover:bg-[#0a1f55]/90 hover:shadow-2xl hover:shadow-[#0a1f55]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                >
                    <span className="bg-white/20 p-1 rounded-full group-hover:rotate-90 transition-transform duration-300">
                        <FaPlus size={14} />
                    </span>
                    Create New Blog
                </button>
            </div>

            {/* Stats / Empty State / Grid */}
            {isLoading ? (
                <div className="text-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0a1f55] mx-auto"></div>
                </div>
            ) : blogs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-[#0a1f55]/20 text-center">
                    <div className="bg-[#0a1f55]/5 p-6 rounded-full mb-6">
                        <FaNewspaper className="text-[#0a1f55]/20 text-6xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No blogs created yet</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-8">
                        Start sharing your journey! Click the button above to add your first LinkedIn blog post link.
                    </p>
                    <button
                        onClick={openCreateModal}
                        className="text-[#0a1f55] font-semibold hover:text-[#0a1f55]/80 hover:underline"
                    >
                        Create your first blog
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog._id || blog.id}
                            blog={blog}
                            onEdit={handleEditBlog}
                            onDelete={handleDeleteBlog}
                        />
                    ))}
                </div>
            )}

            {/* Modal */}
            <CreateBlogModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleSaveBlog}
                initialData={editingBlog}
            />
        </main>
    );
}
