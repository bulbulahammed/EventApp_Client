import Link from "next/link";

export default function MainNav() {
  return (
    <div className="hidden md:flex">
      <nav className="flex items-center gap-3 mr-8 lg:gap-4">
        <Link href="/">Home</Link>
        <Link href="/">Project</Link>
        <Link href="/">Events</Link>
        <Link href="/">Add Events</Link>
      </nav>
    </div>
  );
}
