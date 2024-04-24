
import { useContext, useMemo } from 'react';
import { ThemeContext } from '../../App';
import { ITodo } from '../../interfaces';
import { Text } from '../Text/Text';

interface TodoProps {
  todo: ITodo,
  onChange: (todo: ITodo) => void,
  onRemove: (id: number) => void,
}
export const Todo = ({ todo, onChange, onRemove }: TodoProps) => {
  const theme = useContext(ThemeContext);
  const isRed = useMemo(() => theme === 'red', [theme]);

  const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked: done } = event.target;
    onChange({ ...todo, done });
  };

  return (
    <div>
      <input type="checkbox"
        checked={todo.done}
        onChange={checkHandler}
      />
      <Text isRed={isRed}>{todo.name}</Text>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
}