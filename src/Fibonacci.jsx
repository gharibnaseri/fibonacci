import { useState } from 'react';

const Fibonacci = () => {
  const [sequence, setSequence] = useState([]);
  const [count, setCount] = useState(0);

  const generateFibonacci = (n) => {
    console.log(n);
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n + 1);
  };

  const handleButtonClick = () => {
    if (count >= 0) {
      const result = generateFibonacci(count);
      setSequence(result);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setCount(value);
  };

  return (
    <div>
      <h2>Fibonacci Sequence Generator</h2>
      <form>
        <label>
          Enter the number of terms:
          <input type="number" value={count} onChange={handleInputChange} />
        </label>
      </form>
      <button onClick={handleButtonClick}>Generate Sequence</button>
      <div>
        {sequence.length > 0 && (
          <p>
            Fibonacci Sequence for {count} terms:{' '}
            {sequence.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
};

export default Fibonacci;
