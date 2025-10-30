// import img from "next/img";
export const metadata = {
  title: "Business Momentum | My Portfolio",
  description: "How Leap Bridge creates business momentum through GTM Transformation",
};
 
export default function MomentumPage() {
  return (
    <section className="w-full bg-[#DEEAE4] py-16 px-6 md:px-12" id="service">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center" >
        {/* LEFT SIDE: TEXT CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 leading-[40px]">
            <span className="text-[#356E54] font-normal">
              How Leap Bridge Creates
            </span>
            <br />
            <span className="font-bold text-gray-900">Business Momentum</span>
          </h2>
 
          {/* Subheading (GTM Transformation Box) */}
          <div className="w-full bg-gradient-to-r from-[#356E54] to-[#DEEAE4] text-white font-semibold py-2 px-6 rounded-md mb-6">
            GTM Transformation
            </div>
 
          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            We redefine go-to-market strategy to deliver profitable, scalable growth
            through sharper market design and execution excellence.
          </p>
 
          {/* Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-gray-800">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                GT Market entry and Distribution Expansion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Omni Channel Acceleration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Rural Expansion potential based expansion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Market Mix Modelling
              </li>
            </ul>
 
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                RTM Design and Strategy
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Pharma to Consumer Model Transition
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Modern Trade ECOM Expansion
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                In-store Management and Execution
              </li>
            </ul>
          </div>
        </div>
 
        {/* RIGHT SIDE: img */}
        <div className="flex justify-center">
          <div className="border-[8px] border-[#356E54] rounded-xl overflow-hidden">
            <img
            width={100}
            height={100}
              src="/assests/header/Homepage/logospage2/bottom-2.jpg"
              alt="Business Momentum"
              className="w-full max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
 