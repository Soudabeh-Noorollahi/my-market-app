function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-4">
      <span className="w-8 h-8 sm:w-10 sm:h-10 border-4 border-pink-300 border-b-red-800 rounded-full animate-spin" />
      <p className="text-sm text-gray-500">Loading...</p>
    </div>
  );
}

export default Loader;
