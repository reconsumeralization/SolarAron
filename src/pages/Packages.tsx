const servicePackages = [
  {
    title: "PV Panel Cleaning",
    price: "$10/panel",
    features: [
      "Deionized water cleaning",
      "Manual squeegee application",
      "Microfiber finish"
    ]
  },
  {
    title: "Solar System Tune-Up",
    price: "$180",
    features: [
      "10 free panel cleanings",
      "General inspection included",
      "One free advanced inspection panel",
      "$340-$350 value!"
    ]
  },
  {
    title: "Advanced System Inspection",
    price: "$42.50/panel",
    features: [
      "Full diagnostic testing",
      "Thermal imaging",
      "Problem-solving consultation"
    ]
  },
  {
    title: "Bird/Debris Prevention",
    price: "$5/linear foot",
    features: [
      "6\" height wire mesh",
      "Full perimeter protection",
      "Professional installation"
    ]
  },
  {
    title: "Pool Solar Maintenance",
    price: "$150",
    features: [
      "Complete system flush",
      "3 free leak fixes",
      "10% off replacement parts"
    ]
  },
  {
    title: "Hot Water System Service",
    price: "$150",
    features: [
      "Tank and panel flush",
      "Full system diagnostics",
      "10% off parts during service"
    ]
  }
];

export default function Packages() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicePackages.map((pkg) => (
            <div key={pkg.title} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-900 dark:bg-blue-950 text-white p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-3xl font-bold text-yellow-400">{pkg.price}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-6 block text-center bg-blue-900 dark:bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors"
                  href="/services"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-blue-900 dark:text-blue-100 mb-4">
            Panel Installation Pricing
          </h2>
          <div className="text-center space-y-2">
            <p className="text-lg text-gray-800 dark:text-gray-200">
              10ft Panels: <span className="font-bold">$650</span>
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              12ft Panels: <span className="font-bold">$800</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              (Additional hanging labor: $50/panel)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
