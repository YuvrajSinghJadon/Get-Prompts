import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Crafting Brillianc
      <br className="max-md:hidden" />
      <span className="purple_gradient text-center">
        {" "}
        Where AI Meets Your Imagination
      </span>
    </h1>
    <p className="desc text-center">
      Promptify: Ignite your ideas with AI-powered prompts. Unleash creativity,
      explore innovation, and craft brilliance in every concept.
    </p>

    <Feed />
  </section>
);

export default Home;
