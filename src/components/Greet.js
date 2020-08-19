import React from "react";

// function Greet() {
//   return <h1>Hello BigSam!</h1>;
// }

// export default Greet;

//always export to load in the app
// This is a FUNCTIONAL COMPONENT

//re-write in ES6 arrow function

const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        {" "}
        Hello {name} a.k.a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
