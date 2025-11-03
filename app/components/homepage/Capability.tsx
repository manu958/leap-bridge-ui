// import Image from "next/image";
export const metadata = {
  title: "Business Momentum | My Portfolio",
  description: "How Leap Bridge creates business momentum through GTM Transformation",
};
 
export default function MomentumPage() {
  return (
    <section className="w-full bg-[#DEEAE4]  md:pt-16 pb-16 px-6 md:px-12">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className=" order-2 md:order-1">

          {/* Subheading (GTM Transformation Box) */}
          <div className="w-full bg-gradient-to-r from-[#356E54] to-[#DEEAE4] text-white font-semibold py-2 px-6 rounded-md mb-6">
            Capabilities
            </div>
 
          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Building the right people and process capabilities to sustain transformation and accelerate performance.
          </p>
 
          {/* Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-gray-800">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                3rd Party HR Services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Incentive Structuring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Field Force Capability
              </li>
            </ul>
 
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Goals KPI’s Structuring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                Distributor Management Programs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
               Cold Chain Infrastructure and Mgmt
              </li>
              {/* <li className="flex items-start gap-2">
                <span className="text-[#356E54] text-lg">•</span>
                In-store Management and Execution
              </li> */}
            </ul>
          </div>
        </div>
 
        {/* RIGHT SIDE: IMAGE */}
        <div className="flex justify-center  order-1 md:order-2">
          <div className="border-[8px] border-[#356E54] rounded-xl overflow-hidden">
            <img
              src="/assests/header/Homepage/capability.jpg"
              alt="Business Momentum"
              className="w-full max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
 