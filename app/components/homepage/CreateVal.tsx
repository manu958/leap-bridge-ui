import Image from "next/image";
export const metadata = {
  title: "Our Approach | My Portfolio",
  description: "How we create value through strategic execution",
};
 
export default function ApproachPage() {
  return (
    <>
      {/* TOP SECTION WITH CURVED BOTTOM */}
      <section className="relative w-full bg-white py-16 px-6 md:px-12 rounded-b-[40px] shadow-sm">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE: TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 leading-[40px]">
              <span className="text-[#356E54] font-normal">
                Our Approach to
              </span>
              <br />
              <span className="font-bold text-gray-900">Create Value</span>
            </h2>
 
            <p className="text-gray-700 leading-relaxed mb-4">
              We operate on a fractional leadership and project-based model,
              enabling clients to access senior industry expertise without
              long-term overheads.
            </p>
 
            <p className="text-gray-700 leading-relaxed">
              At LeapBridge, we believe in bridging the gap between Organisation
              Strategy & On-ground Execution. Our approach blends data-backed
              analytics with field-tested pragmatism, ensuring every recommendation
              can be executed and sustained on ground.
            </p>
          </div>
 
          {/* RIGHT SIDE: IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/assests/header/Homepage/momentum.jpg"
              alt="Our Approach Diagram"
              className="w-full max-w-md md:max-w-lg rounded-xl shadow-sm"
            />
          </div>
        </div>
      </section>
 
      {/* BOTTOM GREEN STRIP WITH CURVED TOP */}
      <section className="bg-[#356E54]  px-6 md:px-0 "
      style={{ marginTop: "calc(var(--spacing) * -10)" ,paddingTop: "50px", paddingBottom: "15px"}}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-lg md:text-2xl font-light leading-relaxed">
            We don’t just advise, we co-create, build capability, <br className="hidden md:block" />
            and stay accountable for outcomes.
          </p>
        </div>
      </section>
    </>
  );
}