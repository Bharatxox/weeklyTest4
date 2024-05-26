import { useReducer } from "react";
import "./App.css";
import Employee from "./components/Employee";
import Team from "./components/Team";
import { MyContext } from "./context/context";

const initialState = {
  cart: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_TEAM":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case "REMOVE_FROM_TEAM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="flex gap-10">
        <Employee />
        <Team />
      </div>
    </MyContext.Provider>
  );
}

export default App;
