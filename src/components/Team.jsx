// import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/context";
import List from "./List";

const Team = () => {
  const { state, dispatch } = useContext(MyContext);

  const removeTeam = (data) => {
    dispatch({ type: "REMOVE_FROM_TEAM", payload: data });
  };

  const sortedCart = [...state.cart].sort((a, b) => a.age - b.age);

  const total = sortedCart.reduce((sum, item) => sum + item.age, 0);
  const avg = total / sortedCart.length;

  return (
    <div className="border-[5px] p-5 h-[500px] w-[350px] box-border overflow-y-scroll flex flex-col gap-5 no-scrollbar">
      <h1 className="font-bold text-4xl relative">
        Teams
        <span className="text-sm absolute right-2 top-[10px] bg-white rounded-xl text-black px-2">
          sorted
        </span>
      </h1>
      <div className="flex-1 overflow-y-scroll no-scrollbar">
        {state.cart.length === 0 ? (
          <p className="mt-[150px]">There is no item inside the cart</p>
        ) : (
          sortedCart.map((data) => (
            <List
              key={data.id}
              name={data.first_name}
              age={data.age}
              button="Remove"
              handleEvent={() => removeTeam(data)}
              disabled={false}
            />
          ))
        )}
      </div>
      <div className="sticky bottom-0 bg-white text-black py-2 border-t-2">
        <p className="font-bold">
          Average age: <span>{avg.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Team;
