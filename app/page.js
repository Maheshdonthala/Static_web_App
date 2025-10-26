export default function HomePage() {
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Sri Modhakondamma Madugula Halwa</h1>
          <p className="text-lg text-gray-600 mb-6">Traditional handmade halwa, crafted with love and the finest ingredients.</p>
          <p className="text-lg text-black-600 mb-6">Karanam Vamsi</p>
          <a href="/products" className="inline-block bg-orange-500 text-white px-4 py-2 rounded">See Products</a>
        </div>
        <div>
          <img src="/halva-hero.png" alt="halva hero" className="rounded shadow" />
        </div>
      </div>
    </section>
  );
}
