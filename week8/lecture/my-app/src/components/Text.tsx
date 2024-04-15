import { PropsWithChildren } from "react";

interface TextProps {
  isRed?: boolean;
}
export const Text = ({children, isRed}: PropsWithChildren<TextProps>) => {
  return (
    <span style={isRed ? { color: 'red' } : {}}>{children}</span>
  )
}