import { useState } from "react";
import List from "./List";
import "./styles.css";

function App() {
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);

  const onAddBook = (item) => {
    const updatedItems = [...books, { item, id: `book-${books.length + 1}` }];
    setBooks(updatedItems);
  };

  const onAddCourse = (item) => {
    const updatedItems = [
      ...courses,
      { item, id: `course-${courses.length + 1}` },
    ];
    setCourses(updatedItems);
  };

  return (
    <main className="App">
      <section>
        <h3> Books </h3>
        <List onAddItem={onAddBook} items={books} listKey="books" />
      </section>
      <section>
        <h3> Courses </h3>
        <List onAddItem={onAddCourse} items={courses} listKey="courses" />
      </section>
    </main>
  );
}

export default App;
