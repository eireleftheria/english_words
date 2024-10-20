import "./App.css";
import myWords from "./wordsData";
import Table from "./components/Table/Table";
import Card from "./components/Cards/Card";
import Carousel from "./components/Carousel/Carousel";
import Missing from "./components/PageNotFound/Missing.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar></NavBar>
          <Routes>
            <Route path="/table" element={<Table></Table>}></Route>
            <Route path="/allcards" element={<Card></Card>}></Route>
            <Route
              path="/carousel"
              element={<Carousel myWords={myWords}></Carousel>}
            ></Route>
            <Route path="/*" element={<Missing />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
