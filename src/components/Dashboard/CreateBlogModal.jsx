"use client";
import React, { useState } from "react";
import { FaTimes, FaImage, FaHeading, FaLink, FaParagraph } from "react-icons/fa";

const CreateBlogModal = ({ isOpen, onClose, onCreate, initialData }) => {
    const [formData, setFormData] = useState({
        title: "",
        paragraph: "",
        linkedinUrl: "",
        imageFile: null,
        imagePreview: null,
    });
    const [loading, setLoading] = useState(false);

    // Update form data when initialData changes or modal opens
    React.useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title || "",
                paragraph: initialData.paragraph || initialData.content || "",
                linkedinUrl: initialData.linkedinUrl || initialData.link || "",
                imageFile: null,
                imagePreview: initialData.image || null,
            });
        } else {
            setFormData({
                title: "",
                paragraph: "",
                linkedinUrl: "",
                imageFile: null,
                imagePreview: null,
            });
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Create FormData for file upload
            const data = new FormData();
            data.append("title", formData.title);
            data.append("paragraph", formData.paragraph);
            data.append("linkedinUrl", formData.linkedinUrl);

            if (formData.imageFile) {
                data.append("image", formData.imageFile);
            }

            await onCreate(data, initialData?._id); // Pass FormData and ID for edit

            // Reset form
            setFormData({
                title: "",
                paragraph: "",
                linkedinUrl: "",
                imageFile: null,
                imagePreview: null,
            });
            onClose();
        } catch (error) {
            console.error("Error submitting blog:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl transform transition-all overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="bg-[#0a1f55] p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        {initialData ? "Edit Blog" : "Create New Blog"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all"
                    >
                        <FaTimes size={20} />
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-8 overflow-y-auto custom-scrollbar">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Title Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaHeading className="text-[#0a1f55]" /> Blog Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="Enter an engaging title..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a1f55] focus:ring-2 focus:ring-[#0a1f55]/20 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {/* Image Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaImage className="text-blue-500" /> Blog Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setFormData(prev => ({
                                            ...prev,
                                            imageFile: file,
                                            imagePreview: URL.createObjectURL(file)
                                        }));
                                    }
                                }}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a1f55] focus:ring-2 focus:ring-[#0a1f55]/20 outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0a1f55]/5 file:text-[#0a1f55] hover:file:bg-[#0a1f55]/10"
                            />
                            {formData.imagePreview && (
                                <div className="mt-2 relative h-32 w-full rounded-lg overflow-hidden border border-gray-200">
                                    <img
                                        src={formData.imagePreview.startsWith('blob:')
                                            ? formData.imagePreview
                                            : `${process.env.NEXT_PUBLIC_API_BASE_URL?.replace('/api', '') || 'http://localhost:5001'}${formData.imagePreview}`
                                        }
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Content Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaParagraph className="text-[#0a1f55]" /> Description
                            </label>
                            <textarea
                                name="paragraph"
                                value={formData.paragraph}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Write a brief overview..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a1f55] focus:ring-2 focus:ring-[#0a1f55]/20 outline-none transition-all resize-none placeholder:text-gray-400"
                            />
                        </div>

                        {/* LinkedIn Link Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <FaLink className="text-[#0a1f55]" /> LinkedIn Post URL
                            </label>
                            <input
                                type="url"
                                name="linkedinUrl"
                                value={formData.linkedinUrl}
                                onChange={handleChange}
                                required
                                placeholder="https://linkedin.com/post/..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a1f55] focus:ring-2 focus:ring-[#0a1f55]/20 outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {/* Actions */}
                        <div className="pt-4 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-8 py-2.5 rounded-xl bg-[#0a1f55] text-white font-semibold shadow-lg shadow-[#0a1f55]/20 hover:shadow-[#0a1f55]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (initialData ? "Updating..." : "Creating...") : (initialData ? "Update Blog" : "Create Blog")}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBlogModal;
