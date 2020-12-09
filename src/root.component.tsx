import React from "react";
import { Form } from "./Form";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Form />
    </section>
  );
}
