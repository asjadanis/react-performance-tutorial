import { useCallback, useState } from "react";
import List from "./List";
import "./styles.css";

function App() {
  const [books, setBooks] = useState([]);
  const [courses, setCourses] = useState([]);

  // Uncomment these handlers and comment the useCallback
  // handlers to see unwanted re-rendering in effect.

  // const onAddBook = (item) => {
  //   const updatedItems = [...books, { item, id: `book-${books.length + 1}` }];
  //   setBooks(updatedItems);
  // };

  // const onAddCourse = (item) => {
  //   const updatedItems = [
  //     ...courses,
  //     { item, id: `course-${courses.length + 1}` }
  //   ];
  //   setCourses(updatedItems);
  // };

  const onAddBook = useCallback((item) => {
    setBooks((books) => [...books, { item, id: `book-${books.length + 1}` }]);
  }, []);

  const onAddCourse = useCallback((item) => {
    setCourses((courses) => [
      ...courses,
      { item, id: `course-${courses.length + 1}` },
    ]);
  }, []);

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
