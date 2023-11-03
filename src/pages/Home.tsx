import React from "react";
import Tasks from "./Tasks";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";

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
  handleDeleteCategory: (categoryId: number) => void;
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
        className="flex justify-center"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <TextField
          variant="outlined"
          label="Создайте категорию"
          type="text"
          value={categoryInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCategoryInput(e.target.value)
          }
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onAddCategory();
            }
          }}
        />
        <Button
          sx={{ marginLeft: 2 }}
          variant="contained"
          onClick={onAddCategory}
        >
          Добавить
        </Button>
      </form>
      <ul className="flex justify-center flex-col items-center space-y-4 mt-5">
        {props.categories.map((category) => (
          <div
            key={category.id}
            className="bg-gray-200 flex justify-between items-center p-4 rounded shadow-md hover:bg-gray-300 transition-colors w-96"
          >
            <Link to={`/tasks/${category.id}`} className="text-blue-500">
              {category.name}
            </Link>
            <Button
              variant="outlined"
              onClick={() => props.handleDeleteCategory(category.id)}
            >
              Удалить
            </Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Home;
