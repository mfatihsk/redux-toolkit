//type definitions
export interface ITODO{
   userId : string
   id : number
   title: string
   completed: boolean
}

export const fetchTodo = async () : Promise< Array<ITODO> > => {
   const data = await fetch('https://jsonplaceholder.typicode.com/todos');
   return await data.json()  as unknown as Array<ITODO>;
}