import React, { useMemo, Component } from "react";
import axios from "axios";
import "../App.css";
import Table from "./Table";
import ReactTable from "react-table";

class ArticleSearc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/articles")
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowArticleList");
      });
  }
  render() {
    const articles = this.state.articles;
    console.log("PrintArticle: " + articles);
    let articlelist;
      const columns = [
        {
          Header: "Name",
          accessor: "titles", // String-based value accessors!
          Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
        },
        {
          Header: "Age",
          accessor: "author",
          Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
        },
        {
          Header: "friendName", // Required because our accessor is not a string
          accessor: "publish_date",
          Cell: (props) => <span className="number">{props.value}</span>, // Custom cell components!
        }
      ]

      return <ReactTable data={articlelist} columns={columns} />;
    }
  
}
export default ArticleSearc;
