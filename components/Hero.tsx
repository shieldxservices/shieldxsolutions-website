export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-48 pb-32">

      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[0.35em] text-blue-500 font-semibold mb-8">

            Engineering Connected Environments

          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">

            Smart, Secure & Connected

            <br />

             Smart, Secure & Connected

Technology Infrastructure

For Modern Business

          </h1>

          <p className="text-gray-400 text-xl max-w-2xl mt-10 leading-relaxed">

            We build reliable technology environments for businesses,
            commercial properties and residential communities through expert networking,
            Wi-Fi, security, access control, cabling and smart infrastructure solutions.

          </p>

          <div className="flex flex-wrap gap-4 mt-12">

            <a
              href="tel:2017022606"
              className="bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500"
            >

              📞 Call Now

            </a>

            <a
              href="sms:2017022606"
              className="border border-gray-700 px-8 py-4 rounded-xl hover:border-blue-500"
            >

              💬 Text Us

            </a>

            <a
              href="mailto:admin@shieldxservices.com"
              className="border border-gray-700 px-8 py-4 rounded-xl hover:border-blue-500"
            >

              ✉️ Email Us

            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-12">

          <div className="grid grid-cols-2 gap-10">

            <div>

              <h2 className="text-5xl font-bold text-blue-500">

                300+

              </h2>

              <p className="text-gray-400 mt-3">

                Properties Supported

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-blue-500">

                500+

              </h2>

              <p className="text-gray-400 mt-3">

                Projects Delivered

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-blue-500">

                1000+

              </h2>

              <p className="text-gray-400 mt-3">

                Clients Served

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-blue-500">

                12+

              </h2>

              <p className="text-gray-400 mt-3">

                Years Experience

              </p>

            </div>

          </div>

          <div className="mt-10 pt-10 border-t border-gray-800">

            <p className="text-gray-400">

              Service Coverage

            </p>

            <p className="text-xl mt-3 font-semibold">

              NJ • NY • PA • FL • AZ • NV

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}