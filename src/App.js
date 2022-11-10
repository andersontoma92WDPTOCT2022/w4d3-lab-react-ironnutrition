import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
//import Search from 'antd/lib/transfer/search';
import SearchBar from './components/Search';

function App() {
  const [allFoods, setFoods] = useState(foods);
  const [keyWord, setKeyWord] = useState('');

  return (
    <div className="App">
      <AddFoodForm allFoods={allFoods} setFoods={setFoods} />
      <h1>
        Food List <hr />
      </h1>
      <SearchBar keyWord={keyWord} setKeyWord={setKeyWord} />
      <section className="listagem">
        {allFoods
          .filter((food) =>
            food.name.toUpperCase().includes(keyWord.toLocaleUpperCase())
          )
          .map((food) => {
            return (
              <FoodBox food={food} allFoods={allFoods} setFoods={setFoods} />
            );
          })}
      </section>
    </div>
  );
}

export default App;
