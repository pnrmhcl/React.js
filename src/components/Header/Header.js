import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/login");
  };
  return (
    <div className="logo_text">
      Beyza Pınar Mıhcıoğlu
      <div className="header_container">
        <div>
          <button className="logout_btn" onClick={handleClick}>
            Logout
          </button>
        </div>
        <div>
          <button className="logout_btn">Chaincert</button>
          <button className="logout_btn">Omchain</button>
          <button className="logout_btn">Blog</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
