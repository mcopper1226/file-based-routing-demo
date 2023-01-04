import React from 'react';

const Test = () => {
  React.useEffect(() => {
    console.log('Do something!');
  }, []);
  return <div>Yo</div>;
};

export default Test;
