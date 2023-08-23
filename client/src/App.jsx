import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { getSector } from "./features/Auth/userapiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSector());
  }, []);

  return (
    <div className="">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
