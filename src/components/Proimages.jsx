
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { useState } from "react";

const Proimages = ({ images }) => {

  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex items-center justify-center w-full ">

      <button
        onClick={prevImage}
        className="absolute left-2 text-3xl text-gray-700 hover:text-blue-600 cursor-pointer z-10"
      >
        <IoIosArrowDropleft />
      </button>

      <img
        className="w-[400px] h-[210px] object-contain rounded-2xl shadow-lg  px-1 py-1 bg-black border border-red-700 md:mt-[-30px]"
        src={images[current]}
        alt={`Project ${current + 1}`}
      />

      <button
        onClick={nextImage}
        className="absolute right-2 text-3xl text-gray-700 hover:text-blue-600 cursor-pointer z-10"
      >
        <IoIosArrowDropright />
      </button>

    </div>
  );
};

export default Proimages;