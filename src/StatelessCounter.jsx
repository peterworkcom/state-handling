const StatelessCounter = () => {
  let counter = 0;

  const handleClick = () => {
    counter++;
    console.log("StatelessCounter:", counter);
  };

  return (
    <div>
      <div>StatelessCounter</div>
      <div>{counter}</div>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default StatelessCounter;
