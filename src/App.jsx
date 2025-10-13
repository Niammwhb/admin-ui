import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        <h2 className="text-xl font-bold">LATIHAN 1</h2>
        <nav className="p-4 bg-gray-100 md:flex md:justify-between md:items-center">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="md:flex md:space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI */}
        <h2 className="text-xl font-bold">LATIHAN 2</h2>
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-full h-auto"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-full h-auto"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-full h-auto"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-full h-auto"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-full h-auto"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="w-full h-auto"
          />
        </div>
        <hr />
        {/* LATIHAN 3 */}
        <h2 className="text-xl font-bold">LATIHAN 3</h2>
        <div className="p-4 text-center grid grid-cols-1 md:grid-cols-3 md:gap-4">
          {/* Basic Card */}
          <div className="bg-gray-200 p-6 rounded mb-4 md:mb-0">
            <h3 className="font-bold text-xl">Basic</h3>
            <p className="text-2xl mt-2">Rp 50.000</p>
          </div>

          {/* Pro Card (Middle, Larger, Different Background) */}
          <div className="bg-blue-300 text-white p-8 rounded shadow-lg mb-4 md:mb-0 md:row-span-1 md:col-span-1 md:order-2">
            <h3 className="font-bold text-2xl">Pro</h3>
            <p className="text-3xl mt-2">Rp 100.000</p>
          </div>

          {/* Premium Card */}
          <div className="bg-gray-200 p-6 rounded md:order-3">
            <h3 className="font-bold text-xl">Premium</h3>
            <p className="text-2xl mt-2">Rp 200.000</p>
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        <h2 className="text-xl font-bold">LATIHAN 4</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 min-h-screen">
          <header className="bg-gray-300 p-4 md:col-span-12">Header</header>
          <aside className="bg-gray-200 p-4 md:col-span-3">Sidebar</aside>
          <main className="bg-white p-4 border md:col-span-9">Content</main>
          <footer className="bg-gray-300 p-4 md:col-span-12">Footer</footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        <h2 className="text-xl font-bold">LATIHAN 5</h2>
        <div className="p-4 border flex flex-col md:flex-row items-center">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <h3 className="font-bold text-center">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
