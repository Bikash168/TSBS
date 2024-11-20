import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 text-white">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <h1 className="text-2xl font-bold">Biotech College</h1>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/admissions">Admissions</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
