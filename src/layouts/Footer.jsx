function Footer() {
  return (
    <footer className="w-full border-t bg-white flex-shrink-0">
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        {/* Left*/}
        <div className="mb-4 md:mb-0">
          © {new Date().getFullYear()} MyMarket. All rights reserved.
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-4 ">
          <a
            href="#"
            className="hover:underline hover:text-red-700 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:underline hover:text-red-700 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:underline hover:text-red-700 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="hover:underline hover:text-red-700 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
