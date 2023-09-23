import React from "react";
import Tasks from "./Tasks";
import { Link } from "react-router-dom";

interface ICategory {
  id: number;
  name: string;
  tasks: {
    id: number;
    title: string;
  }[];
}

interface Props {
  categories: ICategory[];
}

const Home = (props: Props) => {
  

  return (
    <div>
      <ul>
        {props.categories.map((category) => (
          <li key={category.id}>
            <Link to={`/tasks/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
