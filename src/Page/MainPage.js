
import '../App.css';
import Header from "../components/Header"
import Books from "../components/Books"
import "bootstrap/dist/css/bootstrap.min.css";

function MainPage() {
  return (
    <div className="page">
      <Header/>
      <div className="main-page">
      <Books/>
      </div>
    </div>
  );
}


export default MainPage;