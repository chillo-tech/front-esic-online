import Chapter from "./Chapter";
import Formation from "./Formation";

export default interface Course {
  link: string;
  name: string;
  slug: string;
  image: string;
  hours: number | number[] | null;
  certification: string;
  cpf: string;
  domain: string;
  short_description: string; // Short paragraph to description the course
  description: string; // Possibly html content.
  requirements: string[]; // List of requirements.
  includes: string[]; // what it's includes in this courses.
  achievements: string[]; // What you will achieve from the course
  syllabus: Chapter[]; // Details on lecture
  formation: Partial<Formation>;
}
