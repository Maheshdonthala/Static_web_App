export default function Navbar() {
  return (
    <header className="bg-orange-500 shadow">
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img src="/amma.png" alt="Sri Modhakondamma" className="h-12 w-12 rounded-full object-cover ring-2 ring-white" />
          <span className="text-xl font-bold text-white">Sri Modhakondamma<br />Madugula Halwa</span>
        </a>
        <nav className="space-x-6">
          <a href="/" className="text-white hover:text-orange-100">Home</a>
          <a href="/products" className="text-white hover:text-orange-100">Products</a>
          <a href="/about" className="text-white hover:text-orange-100">About</a>
          <a href="/contact" className="text-white hover:text-orange-100">Contact</a>
        </nav>
      </div>
    </header>
  );
}
