import {formations, top_formations } from "utils";
import { BsImageAlt } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import {
  HiAcademicCap,
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiBadgeCheck,
} from "react-icons/hi";
import {
  LightSlide,
  LightSlideButton,
  LightSlideItem,
  LightSlideWrapper,
} from "../ui/light-slide";
import Image from "next/image";
import { cn, loaderProp } from "utils/image-loader";
import { useState } from "react";

export default function TopFormations() {
  const all_formations = formations.map((item) => item.courses).flat();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="bg-secondary/5">
      <div className="py-8 sm:py-16 container mx-auto">
        <LightSlide
          slideSpeed={1}
          slideStep={50}
          showCount={3}
          changeAll={true}
          className="relative"
          id="top-formation"
        >
          <header className="flex justify-between px-1">
            <h2>{top_formations.title}</h2>
            <div className="flex space-x-2">
              <LightSlideButton
                to="left"
                className="border border-secondary text-secondary px-4 py-2"
              >
                <HiArrowNarrowLeft className="w-6 h-6" />
              </LightSlideButton>
              <LightSlideButton
                to="right"
                className="border border-secondary text-secondary px-4 py-2"
              >
                <HiArrowNarrowRight className="w-6 h-6" />
              </LightSlideButton>
            </div>
          </header>
          <LightSlideWrapper className="grid md:grid-cols-4  gap-10 items-center mx-auto  mt-8">
            {all_formations.map((course: any, index: number) => (
              <LightSlideItem key={`top-${index}-${course.slug}`}>
                <div className="px-2">
                  <div className="relative h-44 bg-gray-400 flex items-center justify-center">
                  <Image
                      fill={true}
                      src="/images/esic-image-5.jpg"
                      alt={`Empty`}
                      loader={loaderProp}
                      unoptimized={true}
                      className={cn(
                        'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                        isLoading
                          ? 'scale-110 blur-2xl grayscale'
                          : 'scale-100 blur-0 grayscale-0'
                      )}
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                  </div>
                  <div className="p-10 border h-[20rem] relative bg-white">
                    <h3 className="font-semibold">{course.name}</h3>
                    <ul className="mt-4 space-y-4 font-medium">
                      <li className="flex space-x-3 items-center">
                        <AiOutlineClockCircle className="w-6 h-6 text-secondary" />
                        <span>{course.hours} Hours</span>
                      </li>
                      <li className="flex space-x-3 items-center">
                        <HiAcademicCap className="w-6 h-6 text-secondary" />
                        <span>Certification</span>
                      </li>
                      <li className="flex space-x-3 items-center">
                        <HiBadgeCheck className="w-6 h-6 text-secondary" />
                        <span>CPF Eligible</span>
                      </li>
                      <li className="flex space-x-3 items-center">
                        <AiOutlineUser className="w-6 h-6 text-secondary" />
                        <span>Beginner</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </LightSlideItem>
            ))}
          </LightSlideWrapper>
        </LightSlide>

        <div className="mt-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>
        </div>
      </div>
    </section>
  );
}
