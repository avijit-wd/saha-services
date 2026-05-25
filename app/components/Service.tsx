import Image from "next/image";

export default function SahaDigitalServices() {
  const services = [
    "PAN Card Application Support",
    "Udyam / MSME Registration",
    "Instant Savings Account Opening",
    "Current Account Opening",
    "ATM / Debit Card Assistance",
    "Google Pay Activation",
    "PhonePe Activation",
    "Vehicle Insurance",
    "Life Insurance",
    "Term Insurance",
    "Shop Fire Insurance",
    "Tax Payment Assistance",
    "Online Job Application Fill-up",
    "Bill Payment & Recharge",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-blue-900 text-white p-10 rounded-b-3xl shadow-xl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">SAHA DIGITAL SERVICES</h1>
            <p className="text-xl mb-4">
              Banking • Insurance • Registration • Online Services
            </p>
            <p>
              One Place for Banking, Insurance, Registrations & Public Services.
            </p>

            <div className="mt-6 space-y-2">
              <p>📍 Baikhora, South Tripura</p>
              <p>📞 +91 7709817156</p>
              <p>🟢 WhatsApp: 7709817156</p>
              <p>📧 subhankar95.developer@gmail.com</p>
              <p>🏦 FINO BC ID: 15**43**</p>
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href="https://wa.me/917709817156"
                className="bg-green-600 px-5 py-3 rounded-2xl font-semibold"
              >
                WhatsApp Now
              </a>
              <button className="bg-white text-blue-900 px-5 py-3 rounded-2xl font-semibold">
                Apply Now
              </button>
            </div>
          </div>

          <div className="bg-white text-slate-700 rounded-3xl p-6 shadow-2xl">
            <h2 className="font-bold text-2xl mb-4">
              Trusted CSC & FINO Service Center
            </h2>
            <p>
              Professional service center with banking assistance, insurance
              support, registration services and online application help.
            </p>
            <div className="mt-4 relative w-full h-56 rounded-xl overflow-hidden">
              <Image
                src="/images/WhatsApp Image 2026-05-25 at 8.18.59 PM (2).jpeg"
                alt="Saha Digital Services shop front"
                fill
                className="object-cover scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div key={service} className="bg-white p-5 rounded-3xl shadow">
              ✅ {service}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Shop</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              src: "/images/WhatsApp Image 2026-05-25 at 8.18.58 PM (1).jpeg",
              alt: "Shop front view",
            },
            {
              src: "/images/WhatsApp Image 2026-05-25 at 8.18.59 PM.jpeg",
              alt: "Shop exterior with Fino banner",
            },
            {
              src: "/images/WhatsApp Image 2026-05-25 at 8.18.58 PM.jpeg",
              alt: "Shop interior",
            },
            {
              src: "/images/WhatsApp Image 2026-05-25 at 8.18.58 PM (2).jpeg",
              alt: "Waiting area",
            },
            {
              src: "/images/WhatsApp Image 2026-05-25 at 8.18.59 PM (1).jpeg",
              alt: "Service desk",
            },
            {
              src: "/images/WhatsApp Image 2026-05-25 at 8.18.59 PM (2).jpeg",
              alt: "Office interior",
            },
          ].map(({ src, alt }) => (
            <div
              key={src}
              className="relative h-52 rounded-2xl overflow-hidden shadow"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-5">
        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="font-bold text-xl">Fast Service</h3>
          <p>Quick processing with customer support.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="font-bold text-xl">Secure Documentation</h3>
          <p>Your documents handled professionally.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="font-bold text-xl">Trusted Service</h3>
          <p>CSC + FINO enabled digital service center.</p>
        </div>
      </section>

      <section className="bg-blue-950 text-white p-10 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p>Subhankar Saha</p>
          <p>Baikhora, South Tripura</p>
          <p>+91 7709817156</p>
          <p>subhankar95.developer@gmail.com</p>
          <p className="mt-6 text-sm opacity-80">
            We provide assistance and facilitation services. Banking and
            insurance services are offered through authorized partnerships.
          </p>
        </div>
      </section>
    </div>
  );
}
