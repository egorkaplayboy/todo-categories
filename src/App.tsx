import React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Tasks from "./pages/Tasks";
import Home from "./pages/Home";

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
      name: "Категория 1",
      tasks: [
        { id: 1, title: "Задача 1" },
        { id: 2, title: "Задача 2" },
      ],
    },
    {
      id: 2,
      name: "Категория 2",
      tasks: [
        { id: 3, title: "Задача 3" },
        { id: 4, title: "Задача 4" },
      ],
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
        <Route
          path="/tasks/:categoryId"
          element={<Tasks categories={categories} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
