import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='w-full flex flex-col '>
      <h1 className='text-lg text-red-700 text-center font-semibold'>
        {count}
      </h1>

      <Button
        onClick={() => setCount(count + 1)}
        className='w-1/2 mx-auto mt-4'
        variant='outline'
        size='lg'
      >
        Contar
      </Button>
    </div>
  );
}

export default App;
