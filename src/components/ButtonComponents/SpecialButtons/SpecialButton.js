import React from "react";

const SpecialButton = props => {

  const buttonStyle = {
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    outline: 'none',
    backgroundColor: 'blue',
  }

  return (
    <button className="special_button" style={buttonStyle}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
    </button>
  );
};

export default SpecialButton;