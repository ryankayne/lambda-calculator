import React from "react";

const OperatorButton = (props) => {

  const buttonStyle = {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    outline: 'none',
    backgroundColor: 'lightblue',
  }

  return (
    <button className="operator_button" style={buttonStyle}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button.value}
    </button>
  );
};

export default OperatorButton;