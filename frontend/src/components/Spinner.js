import React from "react";
import { Spinner as Loader } from "react-bootstrap";

const spinnerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
};

const Spinner = () => (
  <Loader style={spinnerStyle} anumation="border" variant="primary" />
);

export default Spinner;
