import { TArticle } from "types";

const article = {
  image: "/images/placeholder.png",
  date: new Date(),
  title: "Grid system for better Design User Interface",
  description: `Etiam vel ipsum. Morbi facilisis vestibulum nisl. Praesent cursus laoreet felis. Integer adipiscing pretium orci. Nulla facilisi. Quisque posuere bibendum purus. Nulla quam mauris, cursus eget, convallis ac, molestie non, enim. Aliquam congue. Quisque sagittis nonummy sapien. Proin molestie sem vitae urna. Maecenas lorem. Vivamus viverra consequat enim.`,
  shortDescription: `Ut congue malesuada justo. Curabitur congue, felis at hendrerit faucibus, mauris lacus porttitor`,
  body: `
    <h3>Section 1.10.32</h3>
    <p>
        Donec ac velit. Sed convallis vestibulum sapien. Vivamus tempor lacus sed lacus. Nunc ut lorem. Ut et tortor. Nullam varius wisi at diam. Etiam ultricies, dolor sit amet fermentum vulputate, neque libero vestibulum orci, vitae fringilla neque arcu aliquet ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque venenatis lobortis augue. Sed tempor, tellus iaculis pellentesque pharetra, pede dui malesuada mauris, vel ultrices urna mauris ac nibh. Etiam nibh odio, ultricies vehicula, vestibulum vitae, feugiat eleifend, felis. Vivamus pulvinar. Aliquam erat volutpat. Nulla egestas venenatis metus. Nam feugiat nunc quis elit egestas sagittis. Sed vitae felis. In libero arcu, rhoncus in, commodo eget, auctor in, enim. Vivamus suscipit est. Nulla dapibus, magna vel aliquet egestas, massa massa hendrerit lacus, ac rutrum tellus tellus sit amet felis. Cras viverra.
    </p>
    <h3>Section 1.10.33 of "de Finibus Bonorum et Malorum"</h3>
    <p>
        "Donec in nisl. Fusce vitae est. Vivamus ante ante, mattis laoreet, posuere eget, congue vel, nunc. Fusce sem. Nam vel orci eu eros viverra luctus. Pellentesque sit amet augue. Nunc sit amet ipsum et lacus varius nonummy. Integer rutrum sem eget wisi. Aenean eu sapien. Quisque ornare dignissim mi. Duis a urna vel risus pharetra imperdiet. Suspendisse potenti.
        Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi. Morbi auctor lorem non justo. Nam lacus libero, pretium at, lobortis vitae, ultricies et, tellus. Donec aliquet, tortor sed accumsan bibendum, erat ligula aliquet magna, vitae ornare odio metus a mi. Morbi ac orci et nisl hendrerit mollis. Suspendisse ut massa. Cras nec ante. Pellentesque a nulla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.     
    </p>
    <h3>Section</h3>
    <p>
        Aliquam tincidunt urna. Nulla ullamcorper vestibulum turpis. Pellentesque cursus luctus mauris.
        Curabitur sit amet libero eget enim eleifend lacinia. Vivamus sagittis volutpat dui. Suspendisse potenti. Morbi a nibh eu augue fermentum posuere. Curabitur elit augue, porta quis, congue aliquam, rutrum non, massa. Integer mattis mollis ipsum. Sed tellus enim, mattis id, feugiat sed, eleifend in, elit. Phasellus non purus sed elit viverra rhoncus. Vestibulum id tellus vel sem imperdiet congue. Aenean in arcu. Nullam urna justo, imperdiet eget, volutpat vitae, semper eu, quam. Sed turpis dui, porttitor ut, egestas ac, condimentum non, wisi. Fusce iaculis turpis eget dui. Quisque pulvinar est pellentesque leo. Ut nulla elit, mattis vel, scelerisque vel, blandit ut, justo. Nulla feugiat risus in erat.
    </p>
    <h3>Section 1.10.33</h3>
    <p>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    </p>
    <h3>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
    <p>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    </p>
    `,
};

const articles: TArticle[] = Array(138)
  .fill(article)
  .map((el, idx) => ({
    ...el,
    title: `${el.title} article ${idx + 1}`,
    id: idx + 1,
  }));

export { articles };
