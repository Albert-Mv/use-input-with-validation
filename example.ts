import React from "react";
import useInput from "./useInput";
import useInputValidation from "./useValidation";

const Example = () => {
  const email = useInput("");
  const emailError = useInputValidation(email.value, [
    { isEmpty: {} },
    { isEmail: "E-mail is not valid" },
  ]);

  const fields = {
    email,
  };

  const errors: string[] = [...emailError];

  const areRequiredFilled = () => {
    return !Object.entries(fields).find(
      ([key, item]) => item.isRequired && !item.value
    );
  };

  const isAllValid = () => {
    return Boolean(errors.length === 0 && areRequiredFilled());
  };

  return (
    <>
      <span>{isAllValid() ? "Success" : "Error"}</span>
      <input
        placeholder={"E-mail"}
        type={"email"}
        value={email.value as string}
        onChange={(e) => {
          email.onChange(e);
        }}
        onBlur={(e) => {
          email.onBlur(e);
        }}
      />
    </>
  );
};

export default Example;
