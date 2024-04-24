import { Ref, forwardRef, useCallback } from "react";

interface InputProps {
  placeholder: string;
  onChange?: (text: string) => void;
}
const Input = ({ placeholder, onChange }: InputProps, ref: Ref<HTMLInputElement>) => {

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(e.target.value);
  }, [onChange]);

  return <input
    placeholder={placeholder}
    onChange={handleChange}
    ref={ref} />;
}

export default forwardRef(Input);