import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => (
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span className="input-group-text" onClick={onClick} id="basic-addon1">
        <i className="fas fa-square" />
      </span>
    </div>
    <input
      type="text"
      className="form-control"
      onClick={onClick}
      placeholder={text}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
