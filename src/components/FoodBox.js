import { Card, Col, Button } from 'antd';
import { useState } from 'react';

function FoodBox({ food, allFoods, setFoods }) {
  //console.log(food, 'food');
  function handleDelete(chave) {
    let filteredFoods = allFoods.filter((cadaFood) => {
      return cadaFood !== chave;
    });
    /* só o que vai ENTRAR pra array filtrada é TUDO OQUE FOR DIFERENTE DO BOTÃO QUE EU CLIQUEI */

    setFoods(filteredFoods);
  }

  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button onClick={() => handleDelete(food)}> DElete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
