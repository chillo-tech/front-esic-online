import {
  LightSlide,
  LightSlideWrapper,
  LightSlideButton,
  LightSlideItem,
} from "../ui/light-slide";
import Image from "next/image";
import testimonials_list from "../../utils/data/testimonials-list";
import { testimonials } from "../../utils/data";
import QuoteSymbol from "../ui/quote-symbol";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

export default function Testimonials() {
  return (
    <section className="">
      <div className="max-w-7xl flex flex-wrap mx-auto ">
        <aside className="w-full sm:w-2/5 px-3 sm:px-12 py-12 bg-white sm:bg-secondary/10">
          <h2 className="text-3xl font-bold sm:text-5xl">
            {testimonials.title}
          </h2>
          <p className="text-xl mt-2 sm:mt-8">{testimonials.subtitle}</p>
        </aside>
        <aside className="w-full sm:w-3/5  text-white bg-secondary py-12 sm:py-0">
          <LightSlide slideSpeed={1} slideStep={10} className="relative">
            <LightSlideWrapper className="slide-wrapper flex w-full  items-center mx-auto">
              {testimonials_list.map((item, ind) => (
                <LightSlideItem
                  key={`${ind}`}
                  className="px-3 py-12 sm:py-12 sm:px-12"
                >
                  <QuoteSymbol className="mx-auto block h-10 w-10 text-white" />
                  <p className="text-center mt-4 text-gray-100 text-base sm:text-lg">
                    {item.content}
                  </p>
                  <div className="mt-4 md:mt-8 flex justify-center items-center">
                    <Image
                      src={"/images/avatar.jpeg"}
                      width={80}
                      height={80}
                      alt={item.name}
                      className="rounded-full"
                    />
                    <div className="ml-2 md:ml-3">
                      <h4 className="sm:text-lg font-semibold">{item.name}</h4>
                      <h6 className="mt-1 text-gray-200 text-sm md:text-base">
                        {item.course}
                      </h6>
                    </div>
                  </div>
                </LightSlideItem>
              ))}
            </LightSlideWrapper>
            <div className="absolute left-0 top-[40%] z-20 w-full px-1">
              <div className="flex justify-between text-center text-gray-100">
                <LightSlideButton
                  to="left"
                  className="p-2 rounded-full hover:bg-white/20"
                >
                  <HiChevronLeft className="w-8 h-8" />
                </LightSlideButton>
                <LightSlideButton
                  to="right"
                  className="p-2 rounded-full hover:bg-white/20 "
                >
                  <HiChevronRight className="w-8 h-8" />
                </LightSlideButton>
              </div>
            </div>
          </LightSlide>
        </aside>
      </div>
    </section>
  );
}
