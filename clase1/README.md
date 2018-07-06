# React Basics

## Declarative Programming
Javascript example:
```javascript
// Imperative
const toLowerCase = input => {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].toLowerCase())
  }
  return output;
}

// Declarative
const toLowerCase = input => input.map(value => value.toLowerCase());
```

React example:
```javascript
const myLatLng = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

// Imperative
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  center: myLatLng,
});

const marker = new google.maps.Marker({
  position: myLatLng,
  title: 'Hello World!!!',
});

marker.setMap(map);

// Declarative
<Gmaps lat={myLatLng.lat} lng={myLatLng.lng} zoom={12}>
  <Marker lat={myLatLng.lat} lng={myLatLng.lng} title='Hello World!!!'></Marker>
</Gmaps>
```

What do you want to achieve?

## React Elements

```javascript
{
  type: 'div',
  props: {
    color: 'red',
    children: 'Hello world!!!'
  }
}
```

# Common Sense

## Common Patterns

**Multi-Line**

```javascript
// Good
<div>
  <Header />
  <div>
    <Main content={...props} />
  <div>
</div>

// Bad
<div><Header /><div><Main content={...props} /><div></div>

// Good
return <div />;

// Good
return(
  <div />
);
```


**Multi-Properties**

```javascript
// Good
<myAwesomeComponent
  fizz="buzz"
  veryLongProperty="bar"
  onSomething={this.handleSomething}
/>
```


**Conditionals**

```javascript
// Bad
let button;
if (isLoggedIn) {
  button = <LogOutButton />;
}
return <div>{button}</div>;

// Good
<div>
  {isLoggedIn && <LogOutButton />}
</div>


// Bad
let button;
if (isLoggedIn) {
  button = <LogOutButton />;
} else {
  button = <LogInButton />;
}
return <div>{button}</div>;

// Good
<div>
  {isLoggedIn ? <LogOutButton /> : <LogInButton />}
</div>




// Example
<button>
  {isFetching ? 'Loading...' : 'Load More'}
</button>

// Bad
<div>
  {dataIsReady && (isAdmin || userHasPermissions) && <topSecretComponent />}
</div>

// Good
canShowSecretComponent() {
  const {dataIsReady, isAdmin, userHasPermissions} = this.props;
  return dataIsReady && (isAdmin || userHasPermissions);
}

<div>
  {this.canShowSecretComponent() && <topSecretComponent />}
</div>


// Better
get canShowSecretComponent() {
  const {dataIsReady, isAdmin, userHasPermissions} = this.props;
  return dataIsReady && (isAdmin || userHasPermissions);
}

<div>
  {this.canShowSecretComponent && <topSecretComponent />}
</div>


// Much Better
// https://github.com/ajwhite/render-if
class MyComponent extends Component {
  render() {
    const ifTheUniverseIsWorking = renderIf(1 + 2 === 3);
    return ifTheUniverseIsWorking(<span>The universe is still working</span>);
  }
}
```


**Loops**

```javascript
<ul>
  {items.map(item => <li>{item.title}</li>)}
</ul>
```

```javascript
class MyComponent extends Component {
  renderAdminTools() {
    // code for Admins
  }

  renderUserTools() {
    // code for Users
  }

  render() {
    return(
      <div>
        <h1>Title</h1>
        {this.userExists && this.renderUserTools()}
        {this.userIsAdmin && this.renderAdminTools()}
      </div>
    )
  }
}
```

## FP

```javascript
// Pure
const sum = (a, b) => a + b;

// No Pure
let x;
const sum = y => (x = x + y);

// Immutability

// Bad
const push3 = arr => arr.push(3);
const myArr = [1, 2];
push3(myArr) // [1, 2, 3]
push3(myArr) // [1, 2, 3, 3]

// Good
const concat3 = arr => arr.concat(3);
const myArr = [1, 2];
const result1 = push3(myArr) // [1, 2, 3]
const result2 = push3(myArr) // [1, 2, 3]

// Currying
const add = x => y => x + y;
const add1 = add(1);
add1(2) // 3
add1(3) // 4

// in ES5
var add = function(x) {
  return function(y) {
    return x + y;
  }
}

// Composition
const add = (x, y) => x + y;
const square = x => x * x;

const addAndSquare = (x, y) => square(add(x, y));
```

## Container and Presentational pattern

### Containers

- Manipulan data y hacen llamados a algún API
- Pendientes del comportamiento
- Renderizan a los Presentationals
- Define los event handlers
- Están definidos como clases


### Presentationals

- Renderizan el HTML u otros componentes
- Pendientes de lo visual
- Reciben data de sus componentes padres en forma de props
- Normalmente están definidos como stateless functional components

```javascript
const GeolocationPresentational = ({ latitude, longitude }) => (
  <div>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
)

GeolocationPresentational.propTypes = {
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
}

class GeolocationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    };
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess);
    }
  }

  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  }

  render() {
    return (
      <GeolocationPresentational {...this.state} />
    );
  }
}
```

## Links

### Javascript
- [This](https://medium.com/entendiendo-javascript/entendiendo-this-javascript-cba60c8cec8c)
- [Spread operator](https://davidwalsh.name/spread-operator)
- [Constructor](https://stackoverflow.com/a/40440322)

### React
- [Documentación oficial](https://reactjs.org/docs/hello-world.html)
- [Tutorial básico](https://frontendlabs.io/3158--react-js-espanol-tutorial-basico-primeros-pasos-ejemplos)
- [Reconciliation process](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)
- [https://github.com/ajwhite/render-if](https://github.com/ajwhite/render-if)
- [https://www.npmjs.com/package/jsx-control-statements](https://www.npmjs.com/package/jsx-control-statements) 
- [http://jamesknelson.com/react-cheatsheet.pdf](http://jamesknelson.com/react-cheatsheet.pdf)