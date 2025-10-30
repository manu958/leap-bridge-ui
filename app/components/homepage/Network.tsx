import Image from "next/image";
export const metadata = {
  title: "Network | My Portfolio",
  description:
    "How Leap Bridge strengthens network efficiency through optimization and execution excellence",
};
 
export default function NetworkPage() {
  return (
    <section className="w-full bg-[#DEEAE4] py-16 px-6 md:px-12">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       
        {/* LEFT SIDE: IMAGE */}
        <div className="flex justify-center order-1 md:order-1">
          <div className="border-[8px] border-[#356E54] rounded-xl overflow-hidden">
            <Image
              src="/assests/header/Homepage/network.jpg" 
              alt="Network Efficiency"
              className="w-full max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
 
        {/* RIGHT SIDE: TEXT CONTENT */}
        <div className="order-2 md:order-2 text-left">
          {/* Heading */}
          {/* <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 leading-[40px]">
            <span className="text-[#356E54] font-normal block">
              How Leap Bridge Strengthens
            </span>
            <span className="font-bold text-gray-900 block">
              Network Efficiency
            </span>
          </h2> */}
 
          {/* Subheading (Gradient Box) */}
          <div className="w-full bg-gradient-to-r from-[#356E54] to-[#DEEAE4] text-white font-semibold py-2 px-6 rounded-md mb-6 inline-block">
            Network Optimization
          </div>
 
          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            We partner with organizations to drive efficiencies across sales & distribution verticals.
          </p>
 
          {/* Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-gray-800">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Distribution Network Optimisation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Manning Efficiencies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Cost to Serve Efficiencies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Market Mix Modelling
              </li>
            </ul>
 
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Beat Optimisation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Up sell Cross Sell Initiatives
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
      </div>
    </section>
  );
}