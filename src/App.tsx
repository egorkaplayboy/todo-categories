import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Tasks from "./pages/Tasks";
import Home from "./pages/Home";
import Container from "@mui/material/Container";

interface ICategories {
  id: number;
  name: string;
  tasks: {
    id: number;
    title: string;
  }[];
}

function App() {
  const [categories, setCategories] = React.useState<ICategories[]>([
    {
      id: 1,
      name: "Для трудоустройства",
      tasks: [
        { id: 1, title: "Выучить Node.js, Express" },
        { id: 2, title: "Выучить Next.js" },
      ],
    },
  ]);
  const handleAddCategory = (name: string) => {
    const newCategory: ICategories = {
      id: categories.length + 1,
      name,
      tasks: [],
    };
    setCategories([...categories, newCategory]);
  };
  const handleAddTask = (categoryId: number, taskTitle: string) => {
    setCategories((prevCategories) => {
      return prevCategories.map((category) => {
        if (category.id === categoryId) {
          const newTask = {
            id: category.tasks.length + 1,
            title: taskTitle,
          };
          return {
            ...category,
            tasks: [...category.tasks, newTask],
          };
        }
        return category;
      });
    });
  };

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <Container maxWidth="sm" className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                categories={categories}
                handleAddCategory={handleAddCategory}
              />
            }
          />
          <Route
            path="/tasks/:categoryId"
            element={
              <Tasks categories={categories} handleAddTask={handleAddTask} />
            }
          />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
