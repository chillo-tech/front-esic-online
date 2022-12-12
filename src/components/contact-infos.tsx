import {
  AiOutlineEnvironment,
  AiOutlineIdcard,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { contacts } from "../utils/data";
export default function ContactInfos() {
  return (
    <ul className="pl-3">
      <li className="py-2 ml-3 flex space-x-2 items-center">
        <AiOutlineEnvironment className="w-6 h-6" />
        <span>{contacts.location}</span>
      </li>
      <li className="py-2 ml-3 flex space-x-2 items-center">
        <AiOutlinePhone className="w-6 h-6 rotate-180" />
        <span>{contacts.phone}</span>
      </li>
      <li className="py-2 ml-3 flex space-x-2 items-center">
        <AiOutlineIdcard className="w-6 h-6" />
        <span>{contacts.siret}</span>
      </li>
      <li className="py-2 ml-3 flex space-x-6">
        <BsFacebook className="w-6 h-6" />
        <BsLinkedin className="w-6 h-6" />
        <BsTwitter className="w-6 h-6" />
      </li>
    </ul>
  );
}
