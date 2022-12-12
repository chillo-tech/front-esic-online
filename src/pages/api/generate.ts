// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import formations_list from "../../utils/data/formations";
import fs from "fs";
import { faker } from "@faker-js/faker";
import { slugify } from "../../utils/helpers";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const output = formations_list.map((sujet) => {
    return {
      ...sujet,
      short_description: faker.lorem.sentences(3),
      courses: sujet.courses.map((course) => {
        return {
          name: course.name,
          slug: slugify(course.name),
          link: "/cours/" + slugify(course.name),
          image: faker.image.abstract(640, 640),
          formation: {
            name: sujet.name,
          },
          hours: ["number", "object"].includes(typeof course.hours)
            ? course.hours
            : parseInt(course.hours + ""),
          certification:
            course.certification == undefined ? "" : course.certification,
          cpf: course.cpf,
          domain: course.domain,
          short_description: faker.lorem.sentences(3), // Short paragraph to description the course
          description: faker.lorem.paragraphs(),
          requirements: Array.from({ length: 5 }).map(() =>
            faker.lorem.sentence()
          ),
          includes: Array.from({ length: 5 }).map(() => faker.lorem.sentence()),
          achievements: Array.from({ length: 5 }).map(() =>
            faker.lorem.sentence()
          ),
          syllabus: Array.from({ length: 20 }).map(() => ({
            name: faker.random.words(5),
            lectures: Array.from({ length: 5 }).map(() => ({
              name: faker.random.words(5),
              duration: Math.floor(Math.random() * 60),
            })),
          })), // Details on lecture
        };
      }),
    };
  });

  fs.writeFileSync(
    "./src/utils/data/formations-list.json",
    JSON.stringify(output)
  );
  res.status(200).json({ name: "Data generated with success" });
}
