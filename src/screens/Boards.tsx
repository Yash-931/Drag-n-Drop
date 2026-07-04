import { useState } from "react";
import { Card } from "../components/Card";
import { CardColumn } from "../components/CardColumn";

export function Boards() {
  const [notStarted, setNotStarted] = useState([
    { id: 1, title: "Market", description: "Go to market" },
    { id: 2, title: "Gym", description: "Go to gym" },
    { id: 3, title: "School", description: "Go to school" },
  ]);

  const [onGoing, setOnGoing] = useState([
    { id: 4, title: "Code", description: "Go to bootcamp" },
    { id: 5, title: "Breakfast", description: "Go to kitchen" },
    { id: 6, title: "Market", description: "Go to market" },
  ]);

  const [completed, setCompleted] = useState([
    { id: 7, title: "Movie", description: "Go to mall" },
    { id: 8, title: "Shopping", description: "Go to shop" },
    { id: 9, title: "Market", description: "Go to market" },
  ]);

  // function handleDrop(item) {

  // }

  return (
    <div style={{ display: "flex" }}>
      <CardColumn
        onDrop={(item) => {
          setOnGoing((prev) => prev.filter((todo) => todo.id !== item.id))
          setCompleted((prev) => prev.filter((todo) => todo.id !== item.id))
          setNotStarted((prev) => prev.filter( (todo) => todo.id !== item.id))
          setNotStarted(prev => [...prev, item]);
        }}
      >
        {notStarted.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </CardColumn>

      <CardColumn
        onDrop={(item) => {
          setOnGoing((prev) => prev.filter((todo) => todo.id !== item.id))
          setCompleted((prev) => prev.filter((todo) => todo.id !== item.id))
          setNotStarted((prev) => prev.filter( (todo) => todo.id !== item.id))
          setOnGoing(prev => [...prev, item]);
        }}
      >
        {onGoing.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </CardColumn>

      <CardColumn
        onDrop={(item) => {
          setOnGoing((prev) => prev.filter((todo) => todo.id !== item.id))
          setCompleted((prev) => prev.filter((todo) => todo.id !== item.id))
          setNotStarted((prev) => prev.filter( (todo) => todo.id !== item.id))
          setCompleted(prev => [...prev, item]);
        }}
      >
        {completed.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </CardColumn>
    </div>
  );
}
