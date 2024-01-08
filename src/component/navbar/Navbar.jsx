import Sidebar from "../sidebar/Sidebar";
import "./style.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span>Tanjil Dev</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="facebook.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
