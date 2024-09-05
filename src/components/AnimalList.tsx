import { useState } from "react";
import { Animal } from "../models/Animal";
import AnimalItem from "./AnimalItem";

const AnimalList = () => {
  const [animals, setAnimals] = useState<Animal[]>([
    { name: "Albert", species: "Lion" },
    { name: "Robert", species: "Elk" },
    { name: "Steven", species: "Ant" },
    { name: "Maggie", species: "Elefant" },
  ]);

  const moveAnimalUp = (index: number) => {
    if (index > 0) {
      //Objektet är inte överst, vi kan fortsätta
      const newAnimals = [...animals];
      const tempSave = newAnimals[index];
      newAnimals[index] = newAnimals[index - 1];
      newAnimals[index - 1] = tempSave;
      setAnimals(newAnimals);
    }
  };

  const MoveAnimalDown = (index: number) => {
    if (index < animals.length - 1) {
      //objektet är inte sist i listan, vi kan fortsätta
      const newAnimals = [...animals];
      const tempSave = newAnimals[index];
      newAnimals[index] = newAnimals[index + 1];
      newAnimals[index + 1] = tempSave;
      setAnimals(newAnimals);
    }
  };

  return (
    <div>
      <h2>Animal List</h2>
      {animals.map((animal, index) => (
        <AnimalItem
          key={index}
          animal={animal}
          index={index}
          onMoveUp={() => moveAnimalUp(index)}
          onMoveDown={() => MoveAnimalDown(index)}
        />
      ))}
    </div>
  );
};

export default AnimalList;
