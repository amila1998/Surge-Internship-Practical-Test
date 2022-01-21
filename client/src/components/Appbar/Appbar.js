import { BiMenuAltLeft } from "react-icons/bi";
import Avatar from "../Avatar/Avatar";
import "./appbar.css";

const Appbar = ({ handleSidebar }) => {
  return (
    <div className="appbar">
      <div className="appbar_wrapper">
        {/* logo */}
        <div className="appbar_logo">
          <img src="./assets/img/logo.jpg" alt="logo" />
          <p>Surge Internship - Practical Test</p>
        </div>
        {/* avatar */}
        <div className="appbar_avatar">
          <Avatar />
          <BiMenuAltLeft onClick={handleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;