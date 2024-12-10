import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Categories } from "./components/Categories";
import { Banner } from "./components/Banner";
import { MainCard } from "./components/MainCard";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <Banner />
      <MainCard />
      <Footer />
    </>
  );
}

export default App;
