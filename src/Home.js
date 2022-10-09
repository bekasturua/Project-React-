import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "Lorem ipsum...", author: "mario", id: 1 },
    { title: "welcome party!", body: "Lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
    </div>
  );
};

export default Home;
