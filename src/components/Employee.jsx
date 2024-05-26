// import React from "react";
import { useContext, useEffect, useState } from "react";
import employees from "../data/data";
import List from "../components/List";
import { MyContext } from "../context/context";

const Employee = () => {
  const { state, dispatch } = useContext(MyContext);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    const newData = state.cart.map((item) => item.id);
    setAddedItems(newData);
  }, [state.cart]);

  const addtoTeam = (data) => {
    dispatch({ type: "ADD_TO_TEAM", payload: data });
    // setAddedItems([...addedItems, data.id]);
  };

  return (
    <div className="border-[5px] p-5 max-h-[500px] w-[350px] box-border overflow-y-scroll flex flex-col gap-5 no-scrollbar">
      <h1 className="font-bold text-4xl">Employee</h1>
      <div className="w-full">
        {employees.map((data) => (
          <List
            key={data.id}
            name={data.first_name}
            age={data.age}
            button="Add"
            handleEvent={() => addtoTeam(data)}
            disabled={addedItems.includes(data.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Employee;
