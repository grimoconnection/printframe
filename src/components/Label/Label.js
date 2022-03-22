import React from "react";
import classes from "./Label.module.css";
import { useSelector } from "react-redux";

export const Label = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.container}>
      <div className={classes.label}>THIS IS A TEST PRINT</div>
    </div>
  );
});
