# React and the Browser
## Forms
- Nos ayudaran a manejar data a traves de inputs
- Pueden existir Uncontrolled y Controlled components, eso va a depender de si tenemos la posibilidad de inicializar, trackear y guardar cambios de data.
- Para manejar formularios mediano/grandes haremos uso de herramientas que automatizan la creación de handlers y matches entre values y el state, *react-jsonschema-form* nos ayudará a conseguir esto.

```javascript
const Uncontrolled = () => (
  <form>
    <input type="text" />
    <button>Submit</button>
  </form>
)

class Controlled extends React.Component {
  state = {
    firstName: 'Dan',
    lastName: 'Abramov',
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${this.state.firstName} ${this.state.lastName}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange} />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    )
  }
}
```

## Events
- Debe de quedar claro que existen eventos que funcionan de manera distinta para algunos browser.
- Teniendo en cuenta la premisa anterior React crea los *Synthetic events* con la finalidad de poder usar eventos cross-browser y agregarle superpoderes a los eventos.
- Cuando se hace el uso de algun event usando la sintaxis *onSomething*, le decimos a React el comportamiento que queremos lograr, pero React no hace un match entre el DOM node y el evento, si no, hace un attach al root element y dispara el evento cuando es necesario, gracias al _event bubbling_. Este proceso se llama *event delegation* y ayuda al rendimiento de la memoria y mejora la velocidad.

## Refs
- No debería ser muy usado debido a que React tiene un paradigma declarative
- Permite hacer referencia a algún elemento y manipularlo a nuestro antojo
- Si estamos haciendo referencia a un Componente, nos permite acceder a sus métodos también

```javascript
class MyComponent extends Component {
  handleClick = (e) => {
    this.element.focus()
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <input
          type="text"
          ref={element => (this.element = element)} />
        <button onClick={this.handleClick}>Focus</button>
      </form>
    )
  }
}
```

```javascript
class Input extends Component {
  state = {
    value: '',
  }

  reset = () => {
    this.setState({ value: '' })
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value })
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange} /> 
    )
  }
}

class Reset extends Component {
  handleClick = () => {
    this.element.reset()
  }

  render() {
    return (
      <form>
        <Input ref={element => (this.element = element)} />
        <button onClick={this.handleClick}>Reset</button>
      </form>
    ) 
  }
}

```

## Styles Basics
- [How top structure your css](https://github.com/paulrrdiaz/how-to-structure-your-css)
- [ITCSS](https://www.arsys.es/blog/programacion/diseno-web/itcss-mejores-practicas-css/)


## Links
- [React JSON schema form](https://github.com/mozilla-services/react-jsonschema-form)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [SyntheticEvent](https://reactjs.org/docs/events.html)
- [Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)
- [Refs in React](https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81)