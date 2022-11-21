import {
  AiOutlineRight,
  AiOutlineEnvironment,
  AiOutlineIdcard,
  AiOutlinePhone,
} from "react-icons/ai";
import { contacts } from "../utils/data";
export default function ContactInfos() {
  return (
    <ul className="mt-2 sm:mt-4 space-y-4">
      <li className=" flex space-x-2 items-center">
        <AiOutlineEnvironment className="w-6 h-6" />
        <span>{contacts.location}</span>
      </li>
      <li className=" flex space-x-2 items-center">
        <AiOutlinePhone className="w-6 h-6 rotate-180" />
        <span>{contacts.phone}</span>
      </li>
      <li className=" flex space-x-2 items-center">
        <AiOutlineIdcard className="w-6 h-6" />
        <span>{contacts.siret}</span>
      </li>
    </ul>
  );
}
