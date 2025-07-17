import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import UserDropdown from "@/components/modules/UserDropdown";
import { getCookie } from "@/utils/cookie";

function Header() {
  // Check for the presence of the access token cookie
  const isLoggedIn = !!getCookie("accessToken");

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="logo.svg" alt="Logo" className="w-7 h-7" />
            <span className="text-lg font-bold text-red-800">MyMarket</span>
          </Link>

          <span className="h-4 border-l border-gray-300"></span>

          <span className="flex items-center gap-2">
            <img
              src="location.svg"
              alt="Location"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <p className="text-xs sm:text-sm text-gray-700">Frankfurt</p>
          </span>
        </div>

        {/* Center: Search bar (hidden on mobile) */}
        <div className=" hidden md:block flex-1 px-8 max-w-[600px]">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search ads"
              className="w-full border rounded pr-10 pl-4 py-2 text-sm bg-stone-100 placeholder-gray-400 focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-hover:text-gray-600" />
          </div>
        </div>

        {/* Right: Auth and Post Ad buttons */}
        <div className="flex items-center gap-4 sm:gap-5">
          {isLoggedIn ? (
            <UserDropdown />
          ) : (
            <Link
              to="/auth"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-700"
            >
              <img src="profile.svg" alt="Profile" className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Link>
          )}

          <Link to="/dashboard">
            <button className="bg-red-800 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 h-8 sm:h-10 rounded-md border border-red-800 hover:border-red-700 shadow-sm transition-colors duration-200">
              <span className="hidden sm:inline">Post an ad</span>
              <span className="sm:hidden">+</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile search bar under header */}
      <div className="block md:hidden w-full px-4 mt-2 mb-2">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search ads"
            className="w-full border rounded pr-10 pl-4 py-2 text-sm bg-stone-100 placeholder-gray-400 focus:outline-none"
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-hover:text-gray-600" />
        </div>
      </div>
    </header>
  );
}

export default Header;
