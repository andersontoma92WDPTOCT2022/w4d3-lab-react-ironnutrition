import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ allFoods, setFoods }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  function handleChange(e) {
    console.log(e.target.name, 'e.target.name');
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');

    setFoods([...allFoods, form]);

    setForm({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input
        name="image"
        value={form.image}
        type="text"
        onChange={handleChange}
      />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        name="calories"
        value={form.calories}
        type="number"
        onChange={handleChange}
      />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        name="servings"
        value={form.servings}
        type="number"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Create</button>
    </form>
  );
}

export default AddFoodForm;
