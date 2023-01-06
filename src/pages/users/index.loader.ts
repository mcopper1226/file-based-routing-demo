export const userListQuery = () => ({
  queryKey: ['users'],
  queryFn: async (): Promise<UserData[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  }
});
export const loader = (queryClient: any) => async () => {
  const query = userListQuery();
  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export type UserData = {
  id: string;
  [key: string]: any;
};

export default loader;
