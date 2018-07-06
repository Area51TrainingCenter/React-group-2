# Reusable Components

## Create a Element
```javascript
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
```
```javascript
{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}
```
```html
<div id='login-btn'>Login</div>
```

También tengo permitdo crear un elemento a partir de un componente
```javascript
const element = React.createElement(
  User,
  {name: 'Tyler McGinnis'},
  null
)
```

Y puedo crear estructura más complejas
```javascript
function Button ({ addFriend }) {
  return React.createElement(
    "button",
    { onClick: addFriend },
    "Add Friend"
  )
}

function User({ name, addFriend }) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      name
    ),
    React.createElement(Button, { addFriend })
  )
}
``` 

## Create a Component
```javascript
const myComponentFromCreateClass = React.createClass(
  render: function() {
    return (
      <div>{this.props.something}</div>
    )
  }
)
```

```javascript
function stateLess(props) {
  return <h1>Hello, {props.something}</h1>;
}
```

```javascript
class MyComponent extends Component {
  render() {
    return (
      <div>{this.props.something}</div>
    )
  }
}
```

## Lifecycle

### componentWillMount
- No se pueden hacer acciones relativas al DOM
- No es recomendable hacer llamadas a algún API si la data esta conectada a algún Componente o bloque de código para su uso inmediato
- No se puede invocar al setState

### componentDidMount
- Puedes hacer llamadas AJAX
- Puedes manipular el DOM, crear Canvas, agregar evento, inicializar extensiones
- Puedes invocar al setState

### componentWillReceiveProps
- Permite manipular props nuevos y compararlos con los props viejos
- Lo usual es cuando un componente padre es actualizado por algún evento y pasa nuevos props a un componente hijo
- Aquí tambien puedes llamar al setState

### shouldComponentUpdate
- Permite validar si es necesario el update del componente
- No se debe llamar al setState

### componentWillUpdate
- La idea es muy similar a _componentWillReceiveProps_ pero sin poder usar los props anteriores
- No se debe usar el setState

### componentDidUpdate
- Actualizar el DOM si hay algún cambio en los props o el state
- Aquí si puedes llamar al setState

### componentWillUnmount
- Remover cualquier evento ligado al componente
- Aquí NO puedes llamar al setState

# Composing

## Communication between components
### Props
```javascript
const Profile = ({ user }) => (
  <div>
    <Picture profileImageUrl={user.profileImageUrl} />
    <UserName name={user.name} screenName={user.screenName} />
  </div>
)

Profile.propTypes = {
  user: React.PropTypes.object,
}
```

### Children
```javascript
const Button = ({ children }) => (
     <button className="btn">{children}</button>
)
   Button.propTypes = {
     children: React.PropTypes.array,
}
```

## Container and Presentational pattern
![Container and Presentational pattern](https://cdn-images-1.medium.com/max/1600/1*tIdBW-TqotpALD3b2xk3SA.gif)

### Container
- Se preocupan por el comportamiento
- Renderizan Presentational components
- Hacen llamadas a un API y manipulan información
- Define eventos
- Están escritos como clases

### Presentational
- Se preocupan por lo visual
- Renderizan HTML u otros components
- Reciben data de los padres en forma de props
- Casi siempre son Stateless functional components


## Links
- [Component definition and Creating an element](https://twitter.com/tylermcginnis/status/771087982858113024)
- [Components, Elements and instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)
- [3 maneras de crear componentes](https://medium.com/@the.benhawy/3-ways-to-create-react-components-8b3620e4ea0)
- [create react app](https://github.com/facebook/create-react-app)
- [Node Package Manager - NPM](https://www.sitepoint.com/beginners-guide-node-package-manager/)
- [NPX](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
- [React Interview Questions](https://tylermcginnis.com/react-interview-questions/)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes)
- [ES6 helpful features](https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb)
- [setState](https://medium.com/@voonminghann/when-to-use-callback-function-of-setstate-in-react-37fff67e5a6c)
