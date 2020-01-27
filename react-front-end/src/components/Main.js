import React from "react";
import Employer from "./Employer";
import JobSeeker from "./JobSeeker";
import Welcome from "./Welcome";

export default function Main(props) {
  return (
    <div>
      {props.email && props.customer && <Employer />}
      {props.email && !props.customer && <JobSeeker />}
      {!props.email && <Welcome />}
    </div>
  );
}
