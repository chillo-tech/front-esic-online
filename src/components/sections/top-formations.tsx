import { top_formations } from "../../utils/data";
import formations from "../../utils/data/formations-list.json";
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

export default function TopFormations() {
  const all_formations = formations.map((item) => item.courses).flat();

  return (
    <section className="bg-secondary/5">
      <div className="py-8 sm:py-16 max-w-[81rem] mx-auto">
        <LightSlide
          slideSpeed={1}
          slideStep={50}
          showCount={4}
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
          <LightSlideWrapper className="flex w-full items-center mx-auto  mt-8">
            {all_formations.map((course: any) => (
              <LightSlideItem key={course.slug}>
                <div className="px-2">
                  <div className="w-full h-44 bg-gray-400 flex items-center justify-center">
                    <BsImageAlt className="text-gray-300 w-24 h-24" />
                  </div>
                  <div className="p-3 border h-[15rem] relative bg-white">
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
