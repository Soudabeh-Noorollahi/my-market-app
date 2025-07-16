import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function UserDropdown() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
     // Clear both tokens
    document.cookie = "accessToken=; max-age=0";
    document.cookie = "refreshToken=; max-age=0";
    navigate("/"); // Redirect to home
    window.location.reload(); // Force state reset
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 text-sm text-gray-700"
      >
        <FaUserCircle className="w-5 h-5" />
        <span>My Market</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
