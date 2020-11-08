import React from "react";

//import styling
import "./TimerButton.css";

interface TimerButtonProps {
  buttonAction: any;
  buttonValue: any;
  className: any;
}

const TimerButton: React.FC<TimerButtonProps> = ({
  buttonAction,
  buttonValue,
  className,
}) => {
  return (
    <div
      className={`button-container ${className}`}
      onClick={() => buttonAction()}
    >
      <p className="button-value">{buttonValue}</p>
    </div>
  );
};

export default TimerButton;
