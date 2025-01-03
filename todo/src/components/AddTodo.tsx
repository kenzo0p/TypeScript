import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
type AddTodo = {
    onAddTodo:(todoText  :string) => void
}
const AddTodo : React.FC<AddTodo> = ({onAddTodo}  ) => {
    const [input , setInput] = useState<string>("")
    const submithandler = (e: React.FormEvent) => {
        e.preventDefault()
        onAddTodo(input)

    }
  return (
    <>
      <form onSubmit={submithandler} action="" className="flex items-center gap-2">
        <Input value={input} onChange={(e:ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} placeholder="Write a new todo" className="w-fit" />
        <Button  type="submit">Add Todo</Button>
      </form>
    </>
  );
};

export default AddTodo;
