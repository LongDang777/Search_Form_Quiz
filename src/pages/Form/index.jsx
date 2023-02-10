/* eslint-disable no-cond-assign */
import React, { useState } from "react";
import PanelContainer from "./PanelContainer";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./style.css";

export default function Form() {
  document.title = "Registration";
  const [mode, setMode] = useState(true);

  const addClassMode = () => setMode(!mode);

  return (
    <div className={`container ${mode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn addClassMode={addClassMode} />
          <SignUp addClassMode={addClassMode} />
        </div>
      </div>
      <PanelContainer addClassMode={addClassMode} />
    </div>
  );
}
