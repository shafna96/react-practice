import React from "react";

function OnBoardScreen() {
  return (
    <div>
      <h1>Login or Sign up</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}

export default OnBoardScreen;
