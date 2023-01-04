export type TodoData = {
  id: string;
  [key: string]: any;
};

const loader = async (props: any): Promise<TodoData | string> => {
  console.log(props.params.todoRef);
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${props.params.todoRef}`
    );
    return res.json();
  } catch (e) {
    return 'error';
  }
};

export default loader;
