import React, { useEffect } from "react";
import PropTypes from "prop-types";

const List = ({ name, age, button, handleEvent, disabled }) => {
  useEffect(() => {
    console.log(disabled);
  }, []);
  return (
    <div className="flex gap-5 w-full justify-between mb-3 items-center">
      <p className="w-6/12 text-left">{name}</p>
      <p className="w-2/12">{age}</p>
      <button
        className={`w-4/12 ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold py-2 px-4 rounded`}
        onClick={handleEvent}
        disabled={disabled}
      >
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
  disabled: PropTypes.bool,
};

export default List;
