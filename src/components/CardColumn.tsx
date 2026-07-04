import { useDrop } from "react-dnd"

// interface DragItem {
//     title: string,
//     id: number, 
//     description: string
// }

// interface CardColProps {
//     onDrop: (item: DragItem) => void
//     children: React.ReactNode
// }

export function CardColumn(props) {
    const [{isOver, canDrop} , drop] = useDrop(() => ({
        accept: ["card"],
        drop: props.onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))

    return <div ref={drop} style={{height: "100vh", borderRight: "2px dotted black", flex:1}}>
        {props.children}
    </div>
}