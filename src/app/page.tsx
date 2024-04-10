import "./page.module.css";
import Header from "./components/header/header"
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="page-container">
      <div className="header">
        <Header></Header>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
