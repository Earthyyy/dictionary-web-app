import FontSwitcher from "./custom/FontSwitcher";
import Logo from "./custom/Logo";
import ThemeSwitcher from "./custom/ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="mb-6 tablet:mb-[3.25rem]">
      <div className="ctnr pt-6 tablet:pt-[3.625rem] flex items-center justify-between">
        <Logo className="w-7 h-8 tablet:w-8 tablet:h-9" />
        <div className="flex items-center gap-4">
          <FontSwitcher />
          <div className="w-[1px] h-8 bg-separatorColor" />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
