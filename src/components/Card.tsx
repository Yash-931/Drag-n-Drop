import { useDrag } from "react-dnd";

interface CardProp {
  id: number;
  title: string;
  description: string;
}

export function Card(props: CardProp) {
  const [{ opacity }, drag] = useDrag(() => ({
    type: "card",
    item: {
      id: props.id,
      title: props.title,
      description: props.description,
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity,
        padding: 2,
        margin: 8,
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        cursor: "pointer",
      }}
    >
      <div>{props.id}</div>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
}
