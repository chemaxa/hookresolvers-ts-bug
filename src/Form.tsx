import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
});

export function Form() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <div className="App">
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit((d) => alert(d))}>
        <input name="name" ref={register} />
        <input name="age" type="number" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
}
