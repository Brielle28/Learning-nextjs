import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>
        this is a no found customized page. Thats is, this page doesn't really
        exist in this next app, if you want to navigate back to the home page,
        press the home button
      </h1>
      <button onClicbackk={() => window.history.back()}> Home</button>
    </div>
  );
};

export default NotFound;
