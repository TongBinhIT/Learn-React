import { useEffect, useState } from "react";
import queryString from "query-string";
import "./App.scss";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

function App() {
  const [postList, setPostList] = useState();
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totaRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requesturl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requesturl);
        const responseJson = await response.json();
        console.log(responseJson);

        const { data, pagination } = responseJson;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newpage) {
    console.log("newpage:", newpage);
    setFilters({
      ...filters,
      _page: newpage,
    });
  }

  return (
    <div>
      <h1>PostList</h1>
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
