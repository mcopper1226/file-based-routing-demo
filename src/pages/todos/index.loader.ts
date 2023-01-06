export const todoListQuery = () => ({
  queryKey: ['todos'],
  queryFn: async (): Promise<TodoData[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10');
    return res.json();
  }
});
export const loader = (queryClient: any) => async () => {
  const query = todoListQuery();
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




