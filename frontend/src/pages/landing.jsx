import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
export default function LandingPage() {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader" style={{ fontSize: "25px" }}>
          <h2>
            Baat Cheet <span style={{ fontSize: "27px" }}>💬</span>
          </h2>
        </div>

        <div className="navlist">
          <p
            onClick={() => {
              router("/aljk23");
            }}
            style={{
              display: "inline-block",
              padding: "12px 28px",
              background: "linear-gradient(135deg,#FF9839, #FF9839)",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "30px",
              cursor: "pointer",

              transition: "all 0.3s ease",
              userSelect: "none",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Join as Guest
          </p>

          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              background: "linear-gradient(135deg,#FF9839, #FF9839)",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "30px",
              cursor: "pointer",

              transition: "all 0.3s ease",
              userSelect: "none",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Talk Face to Face </p>
          <br></br>
          <div className="mt-6">
            <Link
              to="/auth"
              role="button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 32px",
                background: "linear-gradient(135deg,#FF9839,#FF9839)",
                color: "#ffffff",

                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "30px",
                textDecoration: "none",

                cursor: "pointer",
                transition: "all 0.3s ease",
                userSelect: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              Get Started →
            </Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
