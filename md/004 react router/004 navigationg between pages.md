# Навигация между страницами.

Навигация без перезагрузки страницы. Для этого есть специальный компонент котрый нам предоставляет библиотека **react-router-dom**. Для этого перехожу в компонент **App.js** и посмотрим на наши ссылки.

```js
import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/cars">Cars</a>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact render={() => <h1>Home Page</h1>} />
        <Route path="/about" component={About} />
        <Route path="/cars" component={Cars} />
      </div>
    );
  }
}

export default App;
```

Нам нужно заменить ссылки на специальный компонент. Перехожу в импорт **react-router-dom** и импортирую компонент **NavLink**. Данный компонент представляет собой обычную ссылку которую можно настраивать.

Подставляю данный компонент вместо тега **\<a>\</a>**. Далее вместо параметра **href** нам нужно использовать параметр to который так же является аналогом **href**, но только через **to** мы передаем параметр в **react** компонент.

```jsx
import React, { Component } from 'react';
import './App.scss';
import { Route, NavLink } from 'react-router-dom';
import About from './About/About';
import Cars from './Cars/Cars';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cars">Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact render={() => <h1>Home Page</h1>} />
        <Route path="/about" component={About} />
        <Route path="/cars" component={Cars} />
      </div>
    );
  }
}

export default App;
```

И теперь навигация происходит без перезагрузки страницы.

Если проинспектировать элементы то можно заметить что что **html** структура не поменялась, но поменялось поведение. Компонент **NavLink** останавливает стандартное поведение браузера т.е. он не позволяет перезагружатся странице и дальше делает навигацию автоматически.
