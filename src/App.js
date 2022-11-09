import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [allFoods, setFoods] = useState(foods);
  return (
    <div className="App">
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
      <h1>
        Food List <hr />
      </h1>
      {/* {allFoods.map((food) => {
        return (
          <div key={food.image}>
            <p> {food.name} </p>
            <img src={food.image} width={100} alt="figuras" />
          </div>
        );
      })} */}

      {allFoods.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}

export default App;
