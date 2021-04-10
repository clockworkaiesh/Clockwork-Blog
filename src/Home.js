import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { errMessage, pageLoading, data: blogs} = useFetch('http://localhost:3000/clockwork-blogs')

  return (
    <div className="home">
      { errMessage && <div>{ errMessage }</div> }
      { pageLoading && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title='All blogs' /> }
    </div>
  );
}
 
export default Home;