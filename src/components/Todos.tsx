import { api } from "~/utils/api";
import Todo from "./Todo";

export default function Todos(){
    const {data: todos, isLoading, isError} = api.todo.all.useQuery()

    if(isLoading) return <div>Loading notes</div>
    if(isError) return <div>Error fetching notes</div>
    
    return (
        <>
            {todos?.length ? todos?.map(todo  => {
                return <Todo key={todo.id} todo={todo} />
            }): 'Create your first Note!'}
        </>
    )
}