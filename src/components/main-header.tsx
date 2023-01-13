import MainHeaderHamburger from "./main-header-hamburger";
import MainHeaderLogo from "./main-header-logo";

const MainHeader = () => (
  <nav className="border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <MainHeaderLogo />
      <MainHeaderHamburger />
      <div className="block w-full md:w-auto" id="navbar-default">
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
          <li>
            <a
              href="#"
              className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
              aria-current="page"
            >
              Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default MainHeader;
