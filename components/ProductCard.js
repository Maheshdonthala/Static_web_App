export default function ProductCard({ product }) {
  return (
    <div className="border rounded overflow-hidden shadow-sm">
      <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <div className="mt-3">
          <a href="/contact" className="inline-block bg-orange-500 text-white px-3 py-1 rounded">Order</a>
        </div>
      </div>
    </div>
  );
}
