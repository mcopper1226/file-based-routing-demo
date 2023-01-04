export type TodoData = {
  id: string;
  [key: string]: any;
};

const loader = async (): Promise<TodoData[] | string> => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10'
    );
    return res.json();
  } catch (e) {
    return 'error';
  }
};

export default loader;
