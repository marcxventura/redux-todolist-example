import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const App = () => (
  <div className="row justify-content-center h-100">
    <div className="col-sm-4 align-self-center pt-4">
      <div
        style={{ height: "400px", width: "400px" }}
        className="card text-center my-auto p-0"
      >
        <div className="card-header text-center mb-3">
          <h3>Todo List</h3>
        </div>
        <div className="card-body">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
