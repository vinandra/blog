import BlogList from "./BlogList";
import useFetch from "../useFeatch";

const Home = () => {
  const { data, panding, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {panding && <div>Loading...</div>}
      {data && <BlogList blog={data} title="All Blogs!" />}
    </div>
  );
};

export default Home;
