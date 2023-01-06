export const todoDetailQuery = (id: string) => ({
  queryKey: ['todos', id],
  queryFn: async (): Promise<TodoData> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.json();
  }
});
export const loader = (queryClient: any) => async (props: any) => {
  const query = todoDetailQuery(props.params.todoRef);
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export type TodoData = {
  id: string;
  [key: string]: any;
};

export default loader;