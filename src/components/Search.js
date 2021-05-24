import React, {useMemo,  useState, useEffect } from "react";
import axios from 'axios';
import Table from "./Table";
import "../App.css";

function ArticleSearch() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8082/api/articles',
      );

      setData(result.data);
    };

    fetchData();
  }, []);


  const columns = useMemo(
    () => [

      {
        Header: "Article Title",
        accessor: "show.titles", // accessor is the "key" in the data
      },
      {
        Header: "Author",
        accessor: "show.author",
      },
      {
        Header: "Date",
        accessor: "show.publish_date", // accessor is the "key" in the data
      },
      {
        Header: "Credibity_rating",
        accessor: "show.credibity_rating", // accessor is the "key" in the data
      },
      {
        Header: "SE_method:",
        accessor: "show.SE_method:", // accessor is the "key" in the data
      },
      {
        Header: "Search_method",
        accessor: "show.reasearch_method", // accessor is the "key" in the data
      },
    ],
    []
  );
  return (
    <div className="App">
      {data}
      <Table columns={columns} data={data} />
    </div>
  );
}

export default ArticleSearch;