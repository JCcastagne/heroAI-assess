## Decomp ReactJS

### Description
In this section of the assessment, we will provide you with some code snippets and ask you to answer some questions about the code. 

Please keep your answers to a reasonable length. You may answer directly in this markdown file.

### Q1. ReactJS Hooks
Please take a look at this ReactJS code and correct the mistakes that you find. You may edit the code in this markdown file directly.
```javascript
import {React, useState} from 'react';

function Counter(props) {
  const [count, setCounter] = useState(0);
  
  return (
    <p>Current count: {count}</p>
    <button onClick={() => (setCounter(count => count++))}>Increment count</button>
    //Important to use an array function inside the setState function since it relies on a previous value inside the state
  );
}
```

### Q2. Events
Explain the difference between these 4 ways of passing a function to a component. </br>
What will happen when you click each of these buttons and why?

```javascript
class App extends React.Component {
  
  //Bind in Constructor
  constructor() {
    super(); 
    this.name = 'MyComponent';
    
    this.handleClick2 = this.handleClick1.bind(this);
  }
  
  handleClick1() {
    //Did not declare name
    alert(this.name);
  }
  
  handleClick3 = () => alert(this.name);
  //Did not declare name
  
  render() {
    return (
      <div>

        // Wrong: handleClick is called instead of passed as a reference!
        <button onClick={this.handleClick1()}>click 1</button>

        //Did not declare name
        <button onClick={this.handleClick1}>click 2</button>

        //Did not declare name
        <button onClick={this.handleClick2}>click 3</button>

        //Did not declare name
        <button onClick={this.handleClick3}>click 4</button>

        
      </div>
    );
  }
}
```

### Q3. Memoization
Memoized selectors are a common pattern in ReactJS applications to serve cached data derived from a global state. 

In the following code snippets, we have implemented two memoized selectors that will re-evaluate the original function only if the derived output of the input argument is changed. Otherwise, the selector will return a cached result. 

`memoize()` uses a <strong>shallow-compare</strong> function to evaluate equality.

For each assertion test on lines 79 to 86, please indicate whether the test will pass or fail. Provide a brief description if you indicate that an assertion will fail.

```javascript
test('memoized selectors', () => {
  const stateA = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
  const stateB = { data: { a: { x: 2, y: [1, 2] }, b: { x: 3, y: [3, 4] } } };
  const stateC = { data: { a: { x: 1, y: [3, 4] }, b: { x: 3, y: [5, 6] } } };

  const fn1 = memoize((st: typeof stateA) =>
    Object.values(st.data).map(d => d.x)
  );

  const fn2 = memoize((st: typeof stateA) =>
    Object.values(st.data).map(d => d.y)
  );
  
  expect(fn1(stateA) === fn1(stateB)).toBeTruthy(); -> True
  expect(fn1(stateA) === fn1(stateC)).toBeTruthy(); -> False  x:2, x:3 =/= x:1, x:3
  expect(fn1(stateB) !== fn1(stateC)).toBeTruthy(); -> True   x:2, x:3 =/= x:1, x:3
  
  expect(fn2(stateA) === fn2(stateA)).toBeTruthy(); -> True   y:[1,2], y:[3,4] === y:[1,2], y:[3,4]
  expect(fn2(stateA) === fn2(stateB)).toBeTruthy(); -> True   y:[1,2], y:[3,4] === y:[1,2], y:[3,4]
  expect(fn2(stateA) !== fn2(stateC)).toBeTruthy(); -> True   y:[1,2], y:[3,4] =/= y:[3,4], y:[5,6]
  expect(fn2(stateB) !== fn2(stateC)).toBeTruthy(); -> True   y:[1,2], y:[3,4] =/= y:[3,4], y:[5,6]
});
```
