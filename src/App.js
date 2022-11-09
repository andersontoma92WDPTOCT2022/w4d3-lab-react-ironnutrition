import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFoods, setFoods] = useState(foods);
  return (
    <div className="App">
      <AddFoodForm allFoods={allFoods} setFoods={setFoods} />
      <h1>
        Food List <hr />
      </h1>

      {allFoods.map((food) => {
        return <FoodBox food={food} allFoods={allFoods} setFoods={setFoods} />;
      })}
    </div>
  );
}

export default App;
