import MainHeaderLogo from "./main-header-logo";
import ToggleThemeButton from "./toggle-theme-button";

const MainHeader = () => (
  <nav className="border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
    <div className="container grid grid-flow-col justify-between">
      <MainHeaderLogo />
      <ToggleThemeButton />
    </div>
  </nav>
);

export default MainHeader;
