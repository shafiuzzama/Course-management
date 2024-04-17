import React from "react";
import Button from '@mui/material/Button';
import "./ButtonSection.css";

const ButtonSection = ({ id, variant, onClick, buttonText ,bgButton}) => {
  return (
    <> 
    let buttonClass = 'custom-button';

 if (variant === 'outlined') {
  buttonClass += ' outlined';
} else if (variant === 'text') {
  buttonClass += ' text'
} else if (variant === 'contained') {
  buttonClass += ' contained';
}

return (
  <Button id={id} variant={variant} onClick={onClick} className={buttonClass}>
    {buttonText}
  </Button>
);
      <button className="btn-background">{bgButton}</button>
    </>
  );
};

export default ButtonSection;
