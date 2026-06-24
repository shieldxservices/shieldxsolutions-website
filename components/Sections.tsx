export default function Sections() {
  return (
    <>
      {/* METRICS */}

      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-800">

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">

          {[
            ["300+", "Properties & Businesses Supported"],
            ["500+", "Projects Delivered"],
            ["1000+", "Clients Served"],
            ["12+", "Years Experience"],
            ["6", "States Served"],
          ].map(([number, label]) => (

            <div key={label}>

              <h2 className="text-5xl font-bold text-blue-500">
                {number}
              </h2>

              <p className="text-gray-400 mt-3">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold mb-16">

          Services

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            "Networking & Wi-Fi",
            "Access Control",
            "Cameras & Security",
            "Cabling & Infrastructure",
            "Smart Building Solutions",
            "Managed IT Services",
            "Audio & Video Systems",
            "Support & Maintenance",
          ].map((item) => (

            <div
              key={item}
              className="bg-[#111827] p-8 rounded-3xl border border-gray-800 hover:border-blue-500 transition"
            >

              {item}

            </div>

          ))}

        </div>

      </section>

      {/* INDUSTRIES */}

      <section id="industries" className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold mb-16">

          Industries We Serve

        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

          {[
            "Corporate Offices",
            "Fitness Centers",
            "Retail Stores",
            "Restaurants",
            "Medical Offices",
            "Hospitality",
            "Residential Communities",
            "Apartment Buildings",
            "Warehouses",
            "Schools",
            "Commercial Real Estate",
            "Property Management",
          ].map((item) => (

            <div
              key={item}
              className="bg-[#111827] p-8 rounded-3xl border border-gray-800"
            >

              {item}

            </div>

          ))}

        </div>

      </section>

      {/* TECHNOLOGY */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold mb-16">

          Technology Partners

        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Cisco",
            "UniFi",
            "Salto",
            "Keri Systems",
            "DW Spectrum",
            "AWS",
            "Azure",
            "Google Cloud",
            "Microsoft",
          ].map((item) => (

            <div
              key={item}
              className="border border-gray-700 rounded-full px-6 py-3"
            >

              {item}

            </div>

          ))}

        </div>

      </section>

      {/* COVERAGE */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold mb-16">

          Service Areas

        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {[
            "New Jersey",
            "New York",
            "Pennsylvania",
            "Florida",
            "Arizona",
            "Nevada",
          ].map((item) => (

            <div
              key={item}
              className="bg-[#111827] p-8 rounded-3xl border border-gray-800"
            >

              📍 {item}

            </div>

          ))}

        </div>

      </section>

    </>
  );
}