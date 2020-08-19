import React from "react";
import Person from "./Person";

// function NameList() {
//   //   const names = ["Bruce", "Clark", "Diana", "Bolu"];
//   //   const nameDisplay = names.map((name) => <h2>{name}</h2>);
//   const persons = [
//     {
//       id: 1,
//       name: "Daniel",
//       age: 29,
//       skill: "Angular",
//     },
//     {
//       id: 2,
//       name: "Albert",
//       age: 32,
//       skill: "Vue",
//     },
//     {
//       id: 3,
//       name: "Samuel",
//       age: 19,
//       skill: "React",
//     },
//   ];

//   let personList = persons.map((person) => (
//     <Person person={person} key={person.name}></Person>
//   ));

//   return (
//     <div>
//       {/* {nameDisplay} */}
//       {personList}
//     </div>
//   );
// }

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bolu", "Bruce"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  //   const nameDisplay = names.map((name) => <h2>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
