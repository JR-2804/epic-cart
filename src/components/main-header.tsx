import Link from "next/link";

const MainHeader = () => (
  <header className="grid grid-cols-[auto_1fr] bg-pink-400 p-4">
    <p>Header</p>
    <div className="grid grid-flow-col gap-4 justify-self-end">
      <Link href="/">Home</Link>
      <Link href="/order/create">Create</Link>
      <Link href="/order/success">Success</Link>
    </div>
  </header>
);

export default MainHeader;
