import { Jelly } from "@uiball/loaders";
import "./loader.css";

function Loader() {
  return (
    <div className="loader_container">
      <Jelly size={150} speed={0.7} color="green" />
    </div>
  );
}

export default Loader;
