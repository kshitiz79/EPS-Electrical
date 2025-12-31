
import React from "react";

import { FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";

const BlogCard = ({ blog, onEdit, onDelete }) => {
    const { image, title, paragraph, content, linkedinUrl, link, _id, id } = blog;

    // Fallbacks for data compatibility
    const displayContent = paragraph || content;
    const displayLink = linkedinUrl || link;
    const blogId = _id || id;

    // Construct image URL
    // If image is a local path (starts with /), prepend the backend base URL
    const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://epsbackend-e3p1.onrender.com/api";
    const BASE_URL = API_BASE.replace('/api', ''); // Get the root domain (e.g. http://localhost:5000)

    const imageSrc = image && image.startsWith('/')
        ? `${BASE_URL}${image}`
        : (image || "https://images.unsplash.com/photo-1499750310159-5b5f22693851?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");

    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <a
                        href={displayLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white flex items-center gap-2 font-medium hover:underline"
                    >
                        Read on LinkedIn <FaExternalLinkAlt size={12} />
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-[#0a1f55] bg-[#0a1f55]/5 px-2 py-1 rounded-md">
                        {new Date(blog.createdAt || Date.now()).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        })}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight group-hover:text-[#0a1f55] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {displayContent}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-100 mt-auto flex justify-between items-center">
                    <a
                        href={displayLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#0a1f55] font-semibold text-sm hover:text-[#0a1f55]/80 transition-colors"
                        title="View LinkedIn Post"
                    >
                        <span className="p-2 bg-[#0a1f55]/5 rounded-full group-hover:bg-[#0a1f55]/10 transition-colors">
                            <FaLinkedinIn />
                        </span>
                        View Post
                    </a>

                    {/* Action Buttons */}
                    {(onEdit || onDelete) && (
                        <div className="flex gap-2">
                            {onEdit && (
                                <button
                                    onClick={() => onEdit(blog)}
                                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                                    title="Edit Blog"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                                </button>
                            )}
                            {onDelete && (
                                <button
                                    onClick={() => onDelete(blogId)}
                                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                    title="Delete Blog"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
