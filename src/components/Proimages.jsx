
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
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full items-center justify-between">
        <button
          onClick={prevImage}
          aria-label="Previous screenshot"
          className="rounded-full bg-white/90 p-1 text-2xl text-slate-700 shadow transition hover:bg-emerald-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 md:text-3xl"
        >
          <IoIosArrowDropleft />
        </button>

        <button
          onClick={nextImage}
          aria-label="Next screenshot"
          className="rounded-full bg-white/90 p-1 text-2xl text-slate-700 shadow transition hover:bg-emerald-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 md:text-3xl"
        >
          <IoIosArrowDropright />
        </button>
      </div>

      <div className="flex min-h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-inner">
        <img
          className="max-h-72 w-full rounded-lg object-contain"
          src={images[current]}
          alt={`Project ${current + 1}`}
        />
      </div>
    </div>
  );
};

export default Proimages;