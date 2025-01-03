
type Props = {
   items : { id:string,
    text:string}[]
}
export const TodoList:React.FC<Props> = (props) => {
    
  return (
    <div className="my-5">
        {props.items.map((item) => (
            <div key={item.id}>
                <h3>{item.text}</h3>
            </div>
        ))}
    </div>
  )
}
