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
}

const Tasks = ({ categories }: Props) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate()
  const category = categories.find(
    (category) => category.id === Number(categoryId)
  );

  if (!category) {
    return <div>Category not found</div>;
  }
  const onClickBack = () => {
    navigate("/")
  };

  return (
    <div>
      <h2>{category.name}</h2>
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
