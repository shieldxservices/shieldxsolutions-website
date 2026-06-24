export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold">

          Shield <span className="text-blue-500">X</span> Solutions

        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl">

          Engineering Connected Environments.

          We design, install and support secure, reliable and scalable technology environments for businesses and properties of all sizes.

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href="tel:2017022606"
            className="bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 transition"
          >
            📞 Call (201) 702-2606
          </a>

          <a
            href="sms:2017022606"
            className="border border-gray-700 px-8 py-4 rounded-xl hover:border-blue-500 transition"
          >
            💬 Text Us
          </a>

          <a
            href="mailto:admin@shieldxservices.com"
            className="border border-gray-700 px-8 py-4 rounded-xl hover:border-blue-500 transition"
          >
            ✉️ Email Us
          </a>

        </div>

        <div className="mt-16 text-gray-500 text-sm">

          © {new Date().getFullYear()} Shield X Solutions Inc.

        </div>

      </div>

    </footer>
  );
}