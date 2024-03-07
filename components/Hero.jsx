import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

const bannerData = [
  {
    id: 1,
    title: "Dashboard",
  },
  {
    id: 2,
    title: "nft art",
  },
  {
    id: 3,
    title: "development",
  },
  {
    id: 4,
    title: "strategy",
  },
  {
    id: 5,
    title: "motion Design",
  },
  {
    id: 6,
    title: "site design",
  },
  {
    id: 7,
    title: "mobile",
  },
];

const heroData = [
  {
    id: 1,
    title: "240+",
    desc: "partners",
  },
  {
    id: 2,
    title: "92%",
    desc: "fast technology",
  },
]

const Hero = () => {
  return (
    <div className="py-6 lg:max-w-[1200px] mx-auto mt-10">
      <div className="px-10 flex flex-col justify-center items-center">
        <h1 className="text-center text-[40px] md:text-[65px] font-bold bg-gradient-to-r from-slate-100 via-gray-400 to-slate-100 bg-clip-text text-transparent">Web 3 Design</h1>
        <span className="text-center text-[40px] md:text-[65px] font-bold mt-2 md:-mt-5 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">Agency.</span>
      </div>
      <div className="px-10 md:px-20 grid grid-cols-1 md:flex justify-between">
        <div className="w-full h-full flex justify-center items-center">
          <Image src="/images/web3.png" alt="hero" width={340} height={500} />
        </div>
        <div className="flex flex-col items-start py-10 md:py-20">
          <div className="py-6 flex justify-between gap-6">
            {heroData.map((data) => (
              <div key={data.id} className="border border-gray-300 px-5 py-3 rounded-xl flex flex-col items-center justify-center">
                <h3 className="font-semibold text-xl md:text-3xl">{data.title}</h3>
                <span className="font-light uppercase text-[10px] md:text-[12px]">{data.desc}</span>
              </div>
            ))} 
        </div>
          <p className="text-sm max-w-[600px]">
          Elevate your digital experience with decentralized power, enhanced security, and limitless possibilities. Embrace the evolution of the internet; your journey to a smarter, more connected world starts here.
          </p>
          <button className="py-3 px-4 bg-white text-black rounded-full uppercase text-sm font-semibold mt-10">get started</button>
        </div>
      </div>
      <div className="flex items-center py-4 transform -skew-y-3 border-t border-b border-gray-600 overflow-hidden">
        {bannerData.map((data) => (
          <div key={data.id} className="flex items-center">
            <PiStarFourFill className="text-red-400 text-2xl font-extralight"/>
              <h3 className="mx-7">{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
