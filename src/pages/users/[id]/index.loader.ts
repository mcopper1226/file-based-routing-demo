export const userDetailQuery = (id: string) => ({
  queryKey: ['user', id],
  queryFn: async (): Promise<UserData> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  }
});
export const loader = (queryClient: any) => async (props: any) => {
  const query = userDetailQuery(props.params.id);
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
