import Image from "next/image";
import { certifications_menu } from "utils/data";
export default function CertificationsMenu({
  items,
  className,
}: {
  items: any[];
  className: string;
}) {
  return (
    <div
      className={`${className} flex absolute left-0 top-[3.7rem] bg-blue-900 shadow-xl w-full text-white`}
    >
      <ul className="grid grid-cols-3 w-full p-8 gap-8">
        {certifications_menu.map((item, index) => (
          <li key={`certif${index}`}>
            <h3 className="uppercase text-sm font-bold">{item}</h3>
            <ul className="grid grid-cols-2 gap-4 mt-4">
              {[1, 2, 3, 4].map((subItem, subIndex) => (
                <li
                  key={`certif${index}${subIndex}`}
                  className="flex items-center space-x-2"
                >
                  <article className="relative bg-gray-300 w-[50px] h-[50px]">
                    <Image
                      fill={true}
                      src="/images/icon-quality.png"
                      alt="Esic image"
                    />
                  </article>
                  <div>
                    <h4 className="text-sm font-medium">Certification ESIC</h4>
                    <h5 className="text-xs mt-1">certification esic</h5>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
