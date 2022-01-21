import Reset from "../../components/ResetPassword/ResetPassword";
import "./resetlayout.css";

const ResetLayout = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="authlayout">
      {/* logo */}
      <div className="authlayout_logo">
        <img src="../../assets/img/logo.jpg" alt="logo" />
      </div>
      {/* form */}
      <Reset />
      {/* actions */}
      <p className="reset_p" onClick={handleClick}>
        login ?
      </p>
    </div>
  );
};

export default ResetLayout;