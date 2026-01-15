import "./App.css";
import "./index.css";
import main from "./assets/main.jpg";
import Image from "./components/Image";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-600">Hi</h1>
      <Image source={main} alt="main image" />
    </div>
  );
}

export default App;
