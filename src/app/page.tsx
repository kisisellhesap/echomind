import { redirect } from "next/navigation";

const Home = () => {
  redirect("/whispers");
};

export default Home;
