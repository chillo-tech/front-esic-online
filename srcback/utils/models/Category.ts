import Course from "./Formation";

export default interface Category {
  id: number;
  name: string;
  slug: string;
  short_description: string; // short description
  description: string; // long and details description, possibly in html.
  icon: string;
  image: string;
}
