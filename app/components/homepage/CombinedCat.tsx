export const metadata = {
  title: "Category | My Portfolio",
  description: "Combined Category Experience",
};
 
export default function CategoryPage() {
  const categories = [
  {
    title: "Home & Personal Care",
    icon: "/soap.svg", // optional category icon
    items: [
        { name: "Soaps", icon: "/assests/header/Homepage/logospage2/Image 1.svg" },
        { name: "Laundry & Home cleaners", icon: "/assests/header/Homepage/logospage2/Image 2.svg" },
        { name: "Skin Care", icon: "/assests/header/Homepage/logospage2/Image 3.svg" },
        { name: "Insect Repellents", icon: "/assests/header/Homepage/logospage2/Image 4.svg" },
        { name: "Body & Adult Diapers", icon: "/assests/header/Homepage/logospage2/Image 5.svg" },
        { name: "Male Grooming", icon: "/assests/header/Homepage/logospage2/Image 6.svg" },
        { name: "Hair care", icon: "/header/Homepage/logospage2/Image 7.svg" },
        { name: "Fem Hygiene", icon: "/assests/header/Homepage/logospage2/Image 8.svg" },
      ],
    },
    {
      title: "Foods",
      icon: "/soap.svg",
      items: [
        { name: "Chocolates & Confectionary", icon: "/assests/header/Homepage/logospage2/Image 9.svg" },
        { name: "Biscuits & Cookies", icon: "assests/header/Homepage/logospage2/Image 10.svg" },
        { name: "Soft Drink & Beverage", icon: "assests/header/Homepage/logospage2/Image 11.svg" },
        { name: "Malt Food Drinks", icon: "assests/header/Homepage/logospage2/Image 12.svg" },
        { name: "Edible Oils", icon: "assests/header/Homepage/logospage2/Image 13.svg" },
        { name: "Dairy", icon: "assests/header/Homepage/logospage2/Image 14.svg" },
        { name: "Savoury Snacks", icon: "assests/header/Homepage/logospage2/Image 15.svg" },
      ],
    },
    {
      title: "Pharma & OTC",
      icon: "/soap.svg",
      items: [
        { name: "Protein Powders", icon: "assests/header/Homepage/logospage2/Image 16.svg" },
        { name: "Rubrificients", icon: "assests/header/Homepage/logospage2/Image 17.svg" },
        { name: "Infant Formula", icon: "assests/header/Homepage/logospage2/Image 18.svg" },
        { name: "Ayurvedic & Herbals", icon: "assests/header/Homepage/logospage2/Image 19.svg" },
        { name: "Nutraceuticals", icon: "assests/header/Homepage/logospage2/Image 20.svg" },
        { name: "Vitamins & Supplements", icon: "/assests/header/Homepage/logospage2/Image 21.svg" },
        { name: "Weight Management", icon: "assests/header/Homepage/logospage2/Image 22.svg" },
        { name: "Paediatric Special Care", icon: "assests/header/Homepage/logospage2/Image 23.svg" },
      ],
    },
  ];
 
 
  return (
    <section id="category" className="container mx-auto px-4 py-12 max-w-7xl">
      <div
        className="  p-6 md:p-10" 
        // style={{ backgroundColor: "#DEEAE4" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Combined Category Experience
        </h1>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-start md:border-r-1 md:border-dotted md:border-[#356E54] last:border-none"
 
            >
              {/* Conditional rounded corners for headings */}
              <div
                className={`w-full text-white text-center py-2 font-semibold mb-6 heading_text
                ${
                  i === 0
                    ? "rounded-l-[30px]"
                    : i === 1
                    ? "rounded-none"
                    : "rounded-r-[30px]"
                }`}
                style={{ backgroundColor: "#356E54" }}
              >
                {cat.title}
              </div>
 
              <ul className="space-y-3 w-full px-10">
                {cat.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700 hover:text-green-800 transition"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-4 h-4 flex-shrink-0"
                    />
                    <span className="text-base font-semibold" >{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}