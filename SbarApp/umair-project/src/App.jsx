import { Link, Route, Routes } from "react-router";
import "./index.css";
import Main from "./MyAppComponents/Main";
import Footer1 from "./MyAppComponents/Footer1";
import CV from "./MyAppComponents/CV";
import Footer2 from "./MyAppComponents/Footer2";
import Header from "./MyAppComponents/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./MyAppComponents/Card";
function App() {
  return (
    <>
      <Link to="cv">
        <li>cv</li>
      </Link>
      <Routes>
        <Route path="cv" element={<CV />} />
      </Routes>
      <Header />
      <Card />
      <Main />
      <Footer2 />
      <Footer1 />
    </>


  );
}
export default App;
