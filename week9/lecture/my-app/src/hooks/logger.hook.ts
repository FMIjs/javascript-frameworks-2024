import { useEffect } from "react"

export const useLogger = (data: any) => {
  useEffect(() => console.log('l2', data), [data]);
}