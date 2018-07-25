# New best friends
## Redux
### Principios
- *Única fuente de la verdad*, el estado de toda tu aplicación esta almacenado en un árbol guardado en un único store.
- *El estado es de solo lectura*, la única forma de modificar el estado es emitiendo una acción, un objeto describiendo que ocurrió.
- *Los cambios se realizan con funciones puras*, para especificar como el árbol de estado es transformado por las acciones, se utilizan reducers puros.

### Conceptos básicos
- *Actions*, son objetos planos, que tienen a la propiedad _type_ como requerida y un _payload_ para data extra
```javascript
{
  type: 'ADD_TODO',
  payload: {
    text: 'Aprender Redux',
  },
}
```
*Nota* Las acciones especifican el suceso de algo (evento)

- Lo lógico es tener creadores de Actions
```javascript
function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      text,
    },
  };
}
```

- *Reducers*, un reducer es una función que recibe el estado actual y una acción, y devuelve un nuevo estado
```javascript
(prevState, action) => nextState
```

## Links
- [Examen - To Do List app](https://whimsical.co/VkR7sPF54WNJu9BFetMCrY)
- [Cuando usar Redux](https://medium.com/@fastphrase/when-to-use-redux-f0aa70b5b1e2)