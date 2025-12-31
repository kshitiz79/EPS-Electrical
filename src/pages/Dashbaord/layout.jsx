export const metadata = {
    title: "Dashboard - ActiveSine",
    description: "Manage your blogs and content.",
};

import AdminGuard from "@/components/dashboard/AdminGuard";

export default function DashboardLayout({ children }) {
    return (
        <AdminGuard>
            <div className="min-h-screen bg-gray-50 pt-[100px]">
                {children}
            </div>
        </AdminGuard>
    );
}
