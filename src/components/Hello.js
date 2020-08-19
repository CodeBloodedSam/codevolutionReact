import React from "react";

// - Functional Component using JSX
const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello SamTest</h1>
  //     </div>
  //   );

  // - Functional Component without JSX
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello SamTestest")
  );
};

export default Hello;

// PRACTICING JSX - Functional Component using JSX
