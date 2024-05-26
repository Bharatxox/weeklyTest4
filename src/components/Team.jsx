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
    <div className="border-[5px] p-5 max-h-[500px] w-[350px] box-border overflow-y-scroll flex flex-col gap-5 no-scrollbar justify-between">
      <h1 className="font-bold text-4xl">Teams</h1>
      {state.cart.length == 0 ? (
        <p className="my-auto">There is no item inside the cart</p>
      ) : (
        <div>
          {sortedCart.map((data) => (
            <div key={data.id}>
              <List
                key={data.id}
                name={data.first_name}
                age={data.age}
                button="Remove"
                handleEvent={() => removeTeam(data)}
              />
            </div>
          ))}
        </div>
      )}
      <div>
        <p>
          Average age <span>{avg.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Team;
