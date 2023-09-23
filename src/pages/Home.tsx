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
  handleAddCategory: (name: string) => void;
}

const Home = (props: Props) => {
  const [categoryInput, setCategoryInput] = React.useState<string>("");

  const onAddCategory = () => {
    if (categoryInput.trim() !== "") {
      props.handleAddCategory(categoryInput);
      setCategoryInput("");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          type="text"
          value={categoryInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCategoryInput(e.target.value)
          }
        />
        <button onClick={onAddCategory}>Добавить</button>
      </form>
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
