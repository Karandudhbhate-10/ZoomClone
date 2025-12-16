import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h1>
            {" "}
            Baat Cheet <ChatBubbleOutlineIcon />{" "}
          </h1>
        </div>
        <div className="navlist">
          <button
            style={{
              padding: "12px 28px",
              backgroundColor: "#FF9839",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <p
              onClick={() => {
                router("/aljk23");
              }}
            >
              Join as Guest
            </p>
          </button>

          <button
            style={{
              padding: "12px 28px",
              backgroundColor: "#FF9839",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <div
              onClick={() => {
                router("/auth");
              }}
              role="button"
            >
              <p>Login</p>
            </div>
          </button>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Cover a distance by Baat Cheet</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
