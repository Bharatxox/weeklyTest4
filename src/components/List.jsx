// import React from "react";
import PropTypes from "prop-types";

const List = ({ name, age, button, handleEvent, disabled }) => {
  return (
    <div className="flex gap-5 w-full justify-between mb-3 items-center">
      <p className="w-6/12 text-left">{name}</p>
      <p className="w-2/12">{age}</p>
      <button className="w-4/12" onClick={handleEvent} disabled={disabled}>
        {button}
      </button>
    </div>
  );
};
List.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  button: PropTypes.string,
  handleEvent: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

export default List;
