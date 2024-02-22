import { TArticle } from "types";

const article: TArticle = {
  id: 0,
  image: "/images/placeholder.png",
  date: new Date(),
  title: "Grid system for better Design User Interface",
  description: `Etiam vel ipsum. Morbi facilisis vestibulum nisl. Praesent cursus laoreet felis. Integer adipiscing pretium orci. Nulla facilisi. Quisque posuere bibendum purus. Nulla quam mauris, cursus eget, convallis ac, molestie non, enim. Aliquam congue. Quisque sagittis nonummy sapien. Proin molestie sem vitae urna. Maecenas lorem. Vivamus viverra consequat enim.`,
  shortDescription: `Ut congue malesuada justo. Curabitur congue, felis at hendrerit faucibus, mauris lacus porttitor`,
  sections: [
    {
      title: "",
      index: "1.10.32",
      content: `Donec ac velit. Sed convallis vestibulum sapien. Vivamus tempor lacus sed lacus. Nunc ut lorem. Ut et tortor. Nullam varius wisi at diam. Etiam ultricies, dolor sit amet fermentum vulputate, neque libero vestibulum orci, vitae fringilla neque arcu aliquet ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque venenatis lobortis augue. Sed tempor, tellus iaculis pellentesque pharetra, pede dui malesuada mauris, vel ultrices urna mauris ac nibh. Etiam nibh odio, ultricies vehicula, vestibulum vitae, feugiat eleifend, felis. Vivamus pulvinar. Aliquam erat volutpat. Nulla egestas venenatis metus. Nam feugiat nunc quis elit egestas sagittis. Sed vitae felis. In libero arcu, rhoncus in, commodo eget, auctor in, enim. Vivamus suscipit est. Nulla dapibus, magna vel aliquet egestas, massa massa hendrerit lacus, ac rutrum tellus tellus sit amet felis. Cras viverra.`,
    },
    {
      title: " section passadena",
      index: "1.10.33",
      content: `Donec ac velit. Sed convallis vestibulum sapien. Vivamus tempor lacus sed lacus. Nunc ut lorem. Ut et tortor. Nullam varius wisi at diam. Etiam ultricies, dolor sit amet fermentum vulputate, neque libero vestibulum orci, vitae fringilla neque arcu aliquet ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque venenatis lobortis augue. Sed tempor, tellus iaculis pellentesque pharetra, pede dui malesuada mauris, vel ultrices urna mauris ac nibh. Etiam nibh odio, ultricies vehicula, vestibulum vitae, feugiat eleifend, felis. Vivamus pulvinar. Aliquam erat volutpat. Nulla egestas venenatis metus. Nam feugiat nunc quis elit egestas sagittis. Sed vitae felis. In libero arcu, rhoncus in, commodo eget, auctor in, enim. Vivamus suscipit est. Nulla dapibus, magna vel aliquet egestas, massa massa hendrerit lacus, ac rutrum tellus tellus sit amet felis. Cras viverra.`,
    },
    {
      title: "section obliaso",
      index: "1.10.34",
      content: ` Tiger ,Donec ac velit. Sed convallis vestibulum sapien. Vivamus tempor lacus sed lacus. Nunc ut lorem. Ut et tortor. Nullam varius wisi at diam. Etiam ultricies, dolor sit amet fermentum vulputate, neque libero vestibulum orci, vitae fringilla neque arcu aliquet ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque venenatis lobortis augue. Sed tempor, tellus iaculis pellentesque pharetra, pede dui malesuada mauris, vel ultrices urna mauris ac nibh. Etiam nibh odio, ultricies vehicula, vestibulum vitae, feugiat eleifend, felis. Vivamus pulvinar. Aliquam erat volutpat. Nulla egestas venenatis metus. Nam feugiat nunc quis elit egestas sagittis. Sed vitae felis. In libero arcu, rhoncus in, commodo eget, auctor in, enim. Vivamus suscipit est. Nulla dapibus, magna vel aliquet egestas, massa massa hendrerit lacus, ac rutrum tellus tellus sit amet felis. Cras viverra.`,
    },
  ],
};

const articlesIdArray = [
  [1, 5, 9],
  [8, 52, 14],
  [7, 3, 4, 2],
];

const articles: TArticle[] = Array(138)
  .fill(article)
  .map((el, idx) => ({
    ...el,
    title: `${el.title} article ${idx + 1}`,
    id: idx + 1,
    linkedArticles:
      articlesIdArray[Math.round(Math.random() * articlesIdArray.length)],
  }));


export { articles };
