const NavLinkButtons = () => {
  return (
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="nav-btn" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-btn">
            Products
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinkButtons;
