import React, { useState } from "react";
// import useInputValidation from "./useInputValidation";

const useInput = (initialValue?: string | boolean, isRequired?: boolean) => {
  const [value, setValue] = useState<string | boolean>(
    initialValue !== undefined ? initialValue : ""
  );
  const [isDirty, setIsDirty] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | string) => {
      if (typeof(initialValue) === 'boolean') {
        setValue(!value);
        !isDirty && setIsDirty(true);
      } else {
        setValue(typeof e === 'string' ? e : e.target.value);
      }
  };

  const onBlur = (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsDirty(true);
  };

  const reset = () => {
    setValue('');
    setIsDirty(false);
  }

  // TODO
  // make errors validating easier 
  // const errors = useInputValidation(value, [{isEmpty: {}}])

  return { value, isDirty, onChange, onBlur, isRequired, reset}; //  add errors
};

export default useInput;
