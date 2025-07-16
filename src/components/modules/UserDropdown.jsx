import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

function UserDropdown() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // ref

  // Handle logout
  const handleLogout = () => {
    // Clear both tokens
    document.cookie = "accessToken=; max-age=0";
    document.cookie = "refreshToken=; max-age=0";
    navigate("/"); // Redirect to home
    window.location.reload(); // Force state reset
  };

  // Detect click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 text-sm text-gray-700"
      >
        <FaUserCircle className="w-5 h-5" />
        <span>My Market</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
          <button
            onClick={() => {
              navigate("/dashboard");
              setOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-700 transition-colors duration-150"
          >
            📋 Dashboard
          </button>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-red-700 transition-colors duration-150"
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
