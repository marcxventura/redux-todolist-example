import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="row justify-content-center mb-3">
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <div class="input-group">
          <input
            className="form-control"
            ref={node => {
              input = node;
            }}
          />
          <div class="input-group-append">
            <button className="btn btn-outline-dark" type="submit">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
