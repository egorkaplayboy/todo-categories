import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  handleAddTask: (categoryId: number, taskTitle: string) => void;
}

const Tasks = ({ categories, handleAddTask }: Props) => {
  const [tasksInput, setTasksInput] = React.useState<string>("");
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const category = categories.find(
    (category) => category.id === Number(categoryId)
  );

  if (!category) {
    return <div>Категория не найдена</div>;
  }
  const onClickBack = () => {
    navigate("/");
  };
  const onAddTask = () => {
    if (tasksInput.trim() !== "") {
      handleAddTask(category.id, tasksInput);
      setTasksInput("");
    }
  };

  return (
    <div>
      <Typography
        variant="h6"
        color="inherit"
        component="h2"
        className="flex justify-center"
      >
        {category.name}
      </Typography>
      <form
        className="flex justify-center mt-5 mb-5"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <TextField
          variant="outlined"
          label="Добавьте задачу"
          type="text"
          value={tasksInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTasksInput(e.target.value)
          }
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onAddTask();
            }
          }}
        />
        <Button sx={{ marginLeft: 2 }} variant="contained" onClick={onAddTask}>
          Добавить
        </Button>
      </form>
      <ul className="flex justify-center flex-col items-center space-y-4 mt-5">
        {category.tasks.map((task) => (
          <li
            className="bg-gray-200 flex justify-center items-center p-4 rounded shadow-md hover:bg-gray-300 transition-colors w-96"
            key={task.id}
          >
            {task.title}
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-5">
        <Button variant="outlined" onClick={() => onClickBack()}>
          Назад
        </Button>
      </div>
    </div>
  );
};

export default Tasks;
