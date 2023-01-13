import Image from "next/image";
import Link from "next/link";

const MainHeaderLogo = () => (
  <Link href="/" className="flex items-center">
    <Image
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3"
      width={30}
      height={30}
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Epic Cart
    </span>
  </Link>
);
export default MainHeaderLogo;
