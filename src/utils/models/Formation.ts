import Course from "./Course";

export default interface Formation {
  link: string;
  name: string;
  slug: string;
  short_description: string; // short description
  description: string; // long and details description, possibly in html.
  icon: string;
  image: string;
  courses: Course[];
}
