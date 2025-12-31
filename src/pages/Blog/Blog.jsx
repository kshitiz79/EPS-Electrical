
import React, { useState, useEffect } from "react";
import BlogCard from "../../components/Dashboard/BlogCard.jsx";

// ...existing code...
export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // Safe client-side env lookup: prefer Vite (import.meta.env), then process if present, else fallback.
const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  "https://upfbackend.onrender.com/api";


    useEffect(() => {
        // Fetch blogs from backend
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

    return (
        <div className="min-h-screen bg-white pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0a1f55] mb-4 tracking-tight uppercase">
                        Latest Articles & Insights
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our collection of articles, updates, and expert insights shared on LinkedIn.
                    </p>
                </div>

                {/* Blog Grid */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0a1f55]"></div>
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog._id || blog.id} blog={blog} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gradient-to-br from-[#0a1f55]/5 to-[#132b74]/5 rounded-3xl shadow-sm border border-[#0a1f55]/10">
                        <h3 className="text-2xl font-bold text-[#0a1f55] mb-2">No articles found</h3>
                        <p className="text-gray-600">
                            Check back later for new updates!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
