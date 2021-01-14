# sass/scss.

[https://www.npmjs.com/package/node-sass](https://www.npmjs.com/package/node-sass)

```shell
npm install node-sass
```

И далее просто переименовываю файлы и корректирую импорты. У меня вываливались ошибки. Установил последнюю стабильную версию.

```shell
npm install node-sass@4.14.1
```

И смотрю работают ли переменные.

```scss
/* Car.css */
$color_input_element: green;
$color_input_non_element: red;

$input_bold_border: green;
$input_bold_red_border: red;
$input_bold_color: red;

.Car {
  /* border: 1px solid #ccc; */
  margin-bottom: 10px;
  padding: 10px;
  /* box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14); */
  border-radius: 5px;
}

.input {
}

.input:active,
.input:focus {
  outline: none;
}

.input.green {
  border: 1px solid $color_input_element;
}

.input.red {
  border: 1px solid $color_input_non_element;
}

.input.bold {
  border: 2px solid $input_bold_border;
  font-weight: bold;
}
.input.bold_red {
  color: $input_bold_color;
  border: 2px solid $input_bold_red_border;
  font-weight: bold;
}
```

Все работает.
