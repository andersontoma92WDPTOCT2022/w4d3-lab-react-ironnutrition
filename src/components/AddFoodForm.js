import { Divider, Input, Button } from 'antd';
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

  function handleShowForm() {
    if (mostraForm) {
      setMostra(false);
    } else {
      setMostra(true);
    }
  }
  const [mostraForm, setMostra] = useState(true);
  if (mostraForm) {
    return (
      <div>
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

          <button onClick={handleSubmit} className="botoes">
            Create
          </button>
        </form>
        <Button type="primary" onClick={handleShowForm} className="botoes">
          {' '}
          hide form{' '}
        </Button>
      </div>
    );
  } else {
    return (
      <Button type="primary" onClick={handleShowForm} className="botoes">
        {' '}
        show form{' '}
      </Button>
    );
  }
}

export default AddFoodForm;
