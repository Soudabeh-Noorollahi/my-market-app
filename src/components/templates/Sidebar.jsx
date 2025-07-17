function Sidebar({ categories }) {
  return (
    <aside className="hidden md:block md:w-60 shrink-0 bg-white p-4 rounded-lg border-r border-gray-200 shadow-sm mt-2">
      {" "}
      <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">
        Categories
      </h4>
      {categories?.data.length ? (
        <ul className="space-y-2 max-h-[70vh] overflow-y-auto pr-1">
          {categories.data.map((category) => (
            <li
              key={category._id}
              className=" group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition"
            >
              <img
                src={`/${category.icon}.svg`}
                alt={category.name}
                className="w-5 h-5 object-contain flex-shrink-0 group-hover:scale-110 transition"
              />
              <p className="text-sm text-gray-700 font-semibold leading-5">
                {category.name}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 text-center">
          No categories found.
        </p>
      )}
    </aside>
  );
}

export default Sidebar;
