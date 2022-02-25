import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <Home query={query} />
      <Footer />
    </div>
  );
}

export default App;
