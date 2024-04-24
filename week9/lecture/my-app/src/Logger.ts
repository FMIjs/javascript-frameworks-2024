import { useEffect } from "react";

export const Logger = ({data}: { data: any }) => {
  useEffect(() => console.log('l1',data), [data]);
  return null;
}
