import React from "react";

const NumberButton = props => {
  console.log(props);
  console.log();

  const buttonStyle = {
    width: '4rem',
    height: '4rem',
    borderRadius: '35px',
    outline: 'none',
    backgroundColor: 'darkblue',
  }

  return (
    <button className="number_button" style={buttonStyle}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
    </button>
  );
};

export default NumberButton;