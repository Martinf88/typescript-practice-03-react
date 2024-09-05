import { Animal } from "../models/Animal";

interface AnimalItemProps {
  animal: Animal;
  onMoveUp: () => void;
  onMoveDown: () => void;
  index: number;
}

const AnimalItem = ({
  animal,
  onMoveUp,
  index,
  onMoveDown,
}: AnimalItemProps) => {
  return (
    <li>
      <strong>Name:</strong> {animal.name} <br />
      <strong>Species:</strong> {animal.species}
      {/* Visa knappen endast om index inte är 0 */}
      {index > 0 && <button onClick={onMoveUp}>Move up</button>}
      {/* Visa knappen endast om index inte är 3 */}
      {index < 3 && <button onClick={onMoveDown}>Move Down</button>}
    </li>
  );
};

export default AnimalItem;
