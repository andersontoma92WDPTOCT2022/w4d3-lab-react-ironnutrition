import { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [allFoods, setFoods] = useState(foods);
  return (
    <div className="App">
      <h1>
        Food List <hr />
      </h1>
      {allFoods.map((food) => {
        return (
          <div key={food.image}>
            <p> {food.name} </p>
            <img src={food.image} width={100} alt="figuras" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
