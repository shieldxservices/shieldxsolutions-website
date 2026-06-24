export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#09090B]/90 backdrop-blur border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-full border border-blue-500 flex items-center justify-center">

            <span className="font-bold text-blue-500">X</span>

          </div>

          <div>

            <h1 className="font-bold text-xl">

            <div className="flex items-center gap-3">


  <div>

    <h1 className="font-bold text-xl">

      Shield <span className="text-blue-500">X</span> Solutions

    </h1>

  </div>

</div>

            </h1>

          </div>

        </div>

        <div className="hidden lg:flex gap-10 text-sm">

          <a href="#capabilities">Services</a>

          <a href="#industries">Industries</a>

          <a href="#technology">Technology</a>

          <a href="#coverage">Coverage</a>

           <a href="#coverage">Contact</a>

        </div>

        <a
          href="tel:2017022606"
          className="bg-blue-600 px-5 py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
        >
          Call Now
        </a>

      </div>

    </nav>
  );
}