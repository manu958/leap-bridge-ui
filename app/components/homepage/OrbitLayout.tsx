// import React from "react";
// import Image from "next/image";
// import { zodiak } from "@/app/fonts";

// const OrbitSection = () => {
//   return (
//     <section className="w-full py-16 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center">
          
//           {/* LEFT ORBIT + HEADING */}
//           <div className="flex flex-col items-center md:items-start space-y-6">

//             <div className="relative rounded-full border border-black bg-[#daebe3] p-[40px] sm:p-[50px] w-fit transition-all duration-300">
//               {/* Outer Icons */}
//               <Image
//                 src="/assests/header/orbits-logos/obit1/chocolate.svg"
//                 alt="icon1"
//                 width={60}
//                 height={50}
//                 className="absolute withtxt rounded-full p-[5px] w-[40px] top-[40px] left-[15px] sm:w-[50px] sm:top-[50px] sm:left-[35px] border-radius"
//               />
//               <Image
//                 src="/assests/header/orbits-logos/obit1/fast-food.svg"
//                 alt="icon2"
//                 width={30}
//                 height={30}
//                 className="absolute  rounded-full p-[5px] w-[40px] bottom-[-14px] right-[118px] sm:w-[50px] sm:bottom-[-4px] sm:right-[138px]"
//               />

//               {/* Submain */}
//               <div className="relative rounded-full border border-black bg-[#daebe3] p-[40px] sm:p-[50px]">
//                 <Image
//                   src="/assests/header/orbits-logos/obit1/drug.svg"
//                   alt="icon3"
//                   width={30}
//                   height={30}
//                   className="absolute  rounded-full p-[5px] w-[40px] top-[140px] left-[-5px] sm:w-[50px] sm:top-[180px] sm:left-[-25px]"
//                 />
//                 <Image
//                   src="/assests/header/orbits-logos/obit1/diet.svg"
//                   alt="icon4"
//                   width={30}
//                   height={30}
//                   className="absolute  rounded-full p-[5px] w-[40px] top-[-17px] right-[100px] sm:w-[50px] sm:top-[-17px] sm:right-[120px]"
//                 />
//                 <Image
//                   src="/assests/header/orbits-logos/obit1/make-up.svg"
//                   alt="icon5"
//                   width={30}
//                   height={30}
//                   className="absolute  rounded-full p-[5px] w-[40px] bottom-[100px] right-[-20px] sm:w-[50px] sm:bottom-[110px] sm:right-[-10px]"
//                 />

//                 {/* Inner */}
//                 <div className="relative rounded-full border border-black bg-[#daebe3] p-[30px] sm:p-[60px]">
//                   <Image
//                     src="/assests/header/orbits-logos/obit1/garbage.svg"
//                     alt="icon6"
//                     width={30}
//                     height={30}
//                     className="absolute  rounded-full p-[5px] w-[40px] bottom-[-5px] left-[10px] sm:w-[50px] sm:bottom-[15px] sm:left-[20px]"
//                   />
//                   <h2
//                     className={`${zodiak.className} justify-center items-center flex sm:h-[150px] sm:w-[150px] sm:text-[25px] h-[80px] w-[80px] text-[16px]  text-[#1b3233] text-center `}
//                   >
//                     Combined Category Experience
//                   </h2>
                  
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT ORBIT + HEADING */}
//             <div className="flex flex-col items-center md:items-start space-y-6">

//             <div className="relative rounded-full border border-black bg-[#daebe3] p-[40px] sm:p-[50px] w-fit transition-all duration-300">
//               {/* Outer Icons */}
//               <Image
//                 src="/assests/header/orbits-logos/orbit2/india.svg"
//                 alt="icon1"
//                 width={60}
//                 height={50}
//                 className="absolute withtxt rounded-full p-[5px] w-[40px] top-[40px] left-[15px] sm:w-[50px] sm:top-[50px] sm:left-[35px] border-radius"
//               />
//               <Image
//                 src="/assests/header/orbits-logos/orbit2/population.svg"
//                 alt="icon2"
//                 width={30}
//                 height={30}
//                 className="absolute  rounded-full p-[5px] w-[40px] bottom-[-14px] right-[118px] sm:w-[50px] sm:bottom-[-4px] sm:right-[138px]"
//               />

//               {/* Submain */}
//               <div className="relative rounded-full border border-black bg-[#daebe3] p-[40px] sm:p-[50px]">
//                 <Image
//                   src="/assests/header/orbits-logos/orbit2/online-shopping.svg"
//                   alt="icon3"
//                   width={30}
//                   height={30}
//                   className="absolute  rounded-full p-[5px] w-[40px] top-[140px] left-[-5px] sm:w-[50px] sm:top-[180px] sm:left-[-25px]"
//                 />
//                 <Image
//                   src="/assests/header/orbits-logos/orbit2/search-home.svg"
//                   alt="icon4"
//                   width={30}
//                   height={30}
//                   className="absolute  rounded-full p-[5px] w-[40px] top-[-17px] right-[100px] sm:w-[50px] sm:top-[-17px] sm:right-[120px]"
//                 />
//                 <Image
//                   src="/assests/header/orbits-logos/orbit2/supermarket.svg"
//                   alt="icon5"
//                   width={30}
//                   height={30}
//                   className="absolute  rounded-full p-[5px] w-[40px] bottom-[100px] right-[-20px] sm:w-[50px] sm:bottom-[110px] sm:right-[-10px]"
//                 />

//                 {/* Inner */}
//                 <div className="relative rounded-full border border-black bg-[#daebe3] p-[30px] sm:p-[60px]">
//                   <Image
//                     src="/assests/header/orbits-logos/orbit2/bank.svg"
//                     alt="icon6"
//                     width={30}
//                     height={30}
//                     className="absolute  rounded-full p-[5px] w-[40px] bottom-[-5px] left-[10px] sm:w-[50px] sm:bottom-[15px] sm:left-[20px]"
//                   />
//                   <h2
//                     className={`${zodiak.className} justify-center items-center flex sm:h-[150px] sm:w-[150px] sm:text-[25px] h-[80px] w-[80px] text-[16px]  text-[#1b3233] text-center `}
//                   >
//                     Channels & Geographies Expertise
//                   </h2>
                  
//                 </div>
//               </div>
//             </div>
//           </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default OrbitSection;
