import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />

      {/* Remove padding from here and let the page handle its own spacing */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
