import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <div class="dropdown">
    <button
      class="btn btn-secondary btn-sm dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <FilterLink className="dropdown-item" filter={VisibilityFilters.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink
        className="dropdown-item"
        filter={VisibilityFilters.SHOW_ACTIVE}
      >
        Active
      </FilterLink>
      <FilterLink
        className="dropdown-item"
        filter={VisibilityFilters.SHOW_COMPLETED}
      >
        Completed
      </FilterLink>
    </div>
  </div>
);

export default Footer;
