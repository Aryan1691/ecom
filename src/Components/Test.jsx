import React from "react";

const Test = () => {
  const arr = [
    {
      name: "aryan",
      RollNo: 1,
    },
    {
      name: "rithik",
      RollNo: 2,
    },
    {
      name: "Madhav",
      RollNo: 3,
    },
    {
      name: "Gopal",
      RollNo: 4,
    },
  ];
  return (
    <div>
      {arr.map((val, index) => {
        return (
          <>
            <ul key={index}>
              <li>{val.name}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
};

export default Test;
