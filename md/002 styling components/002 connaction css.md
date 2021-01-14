# подключение css

В папке компонента обычно создают файл стиле и называют его точно так же как компонент.

```js
//src/components.Car.js
import React from 'react';
import './Car.css';

export default (props) => (
  <div className="Car">
    <h3>Сar name: {props.name}</h3>
    <p>
      Year: <strong>{props.year}</strong>
    </p>
    <input type="text" onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
);
```

```css
.Car {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
  border-radius: 5px;
}
```
