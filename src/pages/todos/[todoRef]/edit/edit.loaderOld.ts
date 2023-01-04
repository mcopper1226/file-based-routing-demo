const loader = (props: any) => {
  return { status: 200, data: `data for ${props.params.todoRef}` };
};

export default loader;
