import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setValue(e.target.value);
    setError("");
  }

  function validate(callback: (value: string) => string | null) {
    const result = callback(value);

    if (result) {
      setError(result);
      return false;
    }

    setError("");
    return true;
  }

  return {
    value,
    onChange,
    error,
    validate
  };
}