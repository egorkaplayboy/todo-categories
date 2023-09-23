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
  const [tasksInput, setTasksInput] = React.useState<string>("")
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
      <h2>{category.name}</h2>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          type="text"
          value={tasksInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTasksInput(e.target.value)
          }
        />
        <button onClick={onAddTask}>Добавить</button>
      </form>
      <ul>
        {category.tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <button onClick={() => onClickBack()}>Назад</button>
    </div>
  );
};

export default Tasks;
