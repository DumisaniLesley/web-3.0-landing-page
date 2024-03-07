import Link from 'next/link'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const PricingCard = ({ title, price, features, buttonText, buttonLink }) => (
  <div className="w-[280px] md:w-[250px] rounded-lg shadow-md overflow-hidden bg-white/10 backdrop-blur-xl">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {price !== "free" && (
        <p className="text-2xl font-semibold mb-4">
          <sup>$</sup>
          {price}/month
        </p>
      )}
      <hr className="my-3 w-full"/>
      <ul className="space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <IoIosCheckmarkCircle className="inline text-green-500 text-xl"/>
            <span className="text-sm">{feature} </span>
            </li>
        ))}
      </ul>
    </div>
    <div className="p-4 flex items-center justify-center">
      {buttonText && (
        <Link 
          href={buttonLink}
          className="inline-flex items-center px-4 py-3 bg-white text-black rounded-full hover:bg-gray-300 "
        >
<span className='font-semibold'>{buttonText}</span>
    <FaArrowRightLong className="ml-2" />
        </Link>
      )}
    </div>
  </div>
);

const Pricing = () => {
  const pricingData = [
    {
      title: "Free",
      price: "0",
      features: [
        "Basic features",
        "Limited storage",
        "Community support",
        "Basic features",
        "Limited storage",
        "Community support",
      ],
      buttonText: "Get Started",
      buttonLink: "#",
    },
    {
      title: "Pro",
      price: "19",
      features: [
        "All Free features",
        "Increased storage",
        "Priority support",
        "All Free features",
        "Increased storage",
        "Priority support",
      ],
      buttonText: "Upgrade Now",
      buttonLink: "#",
    },
    {
      title: "Custom",
      price: "",
      features: [
        "Enterprise-grade features",
        "Customizable options",
        "Dedicated support",
        "Enterprise-grade features",
        "Customizable",
        "Dedicated support",
      ],
      buttonText: "Contact Us",
      buttonLink: "#",
    },
  ];

  return (
    <section id="#pricing" className="px-10 lg:max-w-[1200px] mx-auto">
      <h1 className='text-center font-bold text-2xl md:text-4xl bg-gradient-to-r from-slate-100 via-gray-400 to-slate-100 bg-clip-text text-transparent'>Pricing</h1>
  <p className="text-center text-sm lg:-mt-4 mt-0">Start with a 30-day free trial. No credit card required.</p>
      <div className="grid grid-cols-1 justify-center items-center md:items-start md:flex gap-10 md:gap-6 my-10 bg-black ">
        {pricingData.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
