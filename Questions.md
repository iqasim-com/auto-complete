# Questions

## 1 # Questions

- What is the difference between Component and PureComponent?
Give an example where it might break my app.
## Answer:
    If you compare a Regular Component with a PureComponent, you'll find that the Regular  Component re-renders whenever its parent component does, or when there's a change in its state or props, regardless of whether these changes impact its output. Meanwhile, a PureComponent utilizes a shallow comparison in shouldComponentUpdate, triggering a re-render only when there are modifications in its state or props.

## Example:
```
import React, { useState, useEffect, memo } from 'react';

// Regular Component
const RegularComponent = ({ value }) => {
  console.log('RegularComponent rendered');
  return <div>{value}</div>;
};

// Pure Functional Component
const PureFuncComp = memo(({ value }) => {
  console.log('PureFuncComp rendered');
  return <div>{value}</div>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(0); // No change in state, but still re-renders RegularComponent
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  console.log('ParentComponent rendered');
  return (
    <div>
      <RegularComponent value={count} />
      <PureFuncComp value={count} />
    </div>
  );
};

export default ParentComponent;

```

## Question 2: Context + ShouldComponentUpdate might be dangerous. Why is that?

    Using Context with shouldComponentUpdate, React.memo, or similar optimizations can cause problems.

**Context Changes Might Not Update Components:** If you use shouldComponentUpdate or similar techniques to decide when a component should update, changes in the context might not trigger updates in those components. This means even if the context value changes, components relying on it might not refresh properly.

**Tying Components to Context Details:** Optimizing with shouldComponentUpdate or similar methods makes components dependent on how the context provider works internally. If the context provider changes how it updates values, your components might break.

**Risk of Outdated Data:** Components using context might keep using old data if they decide not to update based on shouldComponentUpdate or similar checks. This can lead to bugs and inconsistencies in your app.

**Harder Maintenance:** When many components use context and have custom update logic, keeping track of how changes affect your app becomes tough. Predicting behavior and debugging issues can be challenging.

For example, instead of relying on context, you could pass data down as props like this:

```
// Context creation
const MyContext = React.createContext();

// Parent component
const ParentComponent = () => {
  return (
    <MyContext.Provider value={{ data: 'some data' }}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Child component
const ChildComponent = () => {
  const { data } = useContext(MyContext);

  // Custom memoization for update optimization
  return useMemo(() => <div>{data}</div>, [data]);
};
```

## Question #3: Describe 3 ways to pass information from a component to its PARENT.

Three ways to pass information from a component to it's patent are following:

- Using Callback Functions:
```
const ParentComponent = () => {
  const handleChildData = (data) => {
    console.log('Received data from child:', data);
  };

  return <ChildComponent sendDataToParent={handleChildData} />;
};

// Child Component
const ChildComponent = ({ sendDataToParent }) => {
  const handleClick = () => {
    sendDataToParent('Hello from child!');
  };

  return <button onClick={handleClick}>Send Data to Parent</button>;
};
```
- Using Context:
```
// Create context
const MyContext = React.createContext();

// Parent Component
const ParentComponent = () => {
  return (
    <MyContext.Provider value={{ sendData: (data) => console.log('Received data from child:', data) }}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Child Component
const ChildComponent = () => {
  const { sendData } = useContext(MyContext);

  const handleClick = () => {
    sendData('Hello from child!');
  };

  return <button onClick={handleClick}>Send Data to Parent</button>;
};
```
- Using State Management Libraries:
```
const ParentComponent = () => {
  const handleChildData = (data) => {
    console.log('Received data from child:', data);
  };

  return <ChildComponent sendDataToParent={handleChildData} />;
};

// Child Component
const ChildComponent = ({ sendDataToParent }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sendDataAction('Hello from child!'));
  };

  return <button onClick={handleClick}>Send Data to Parent</button>;
};
```

## Question #4

- Use React.memo:
- Optimizing with useMemo:

## Question #5: What is a fragment and why do we need it? Give an example where it
might break my app.

A fragment in React is a lightweight syntax that allows you to group multiple elements together without adding an extra node to the DOM. Fragments are especially useful when you need to return multiple elements from a component's render method, as React components can only return a single element.

```
const MyComponent = ({ children }) => {
  // Apply styling or logic expecting only one child element
  return <div className="wrapper">{children}</div>;
};

// Usage of MyComponent with a fragment
const App = () => {
  return (
    <MyComponent>
      <>
        <ChildComponent1 />
        <ChildComponent2 />
      </>
    </MyComponent>
  );
};
```

## Question #6: Give 3 examples of the HOC pattern.

The Higher-Order Component (HOC) pattern in React is a technique used to enhance or extend the functionality of components. Here are three examples of how the HOC pattern can be applied:

1. **withRouter**: This HOC is provided by React Router library. It wraps a component and provides access to the router's `history`, `location`, and `match` props. It's commonly used to access routing information in components that are not direct descendants of a `<Route>`.

   Example:

    ```jsx
    import { withRouter } from 'react-router-dom';

    const MyComponent = ({ history, location, match }) => {
      // Access routing information using props
      return <div>Current Path: {location.pathname}</div>;
    };

    export default withRouter(MyComponent);
    ```

2. **connect** (Redux): This HOC is provided by the React Redux library. It connects a React component to a Redux store, enabling the component to access state and dispatch actions. It maps Redux state and action creators to props.

   Example:

    ```jsx
    import { connect } from 'react-redux';
    import { incrementCounter } from './actions';

    const CounterComponent = ({ counter, increment }) => {
      return (
        <div>
          <p>Counter: {counter}</p>
          <button onClick={increment}>Increment</button>
        </div>
      );
    };

    const mapStateToProps = (state) => {
      return {
        counter: state.counter
      };
    };

    const mapDispatchToProps = {
      increment: incrementCounter
    };

    export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
    ```

3. **withStyles** (Material-UI): This HOC is provided by the Material-UI library. It enables styling components with CSS-in-JS using Material-UI's styling solution. It injects the styles defined with `makeStyles` or `withStyles` into the component as props.

   Example:

    ```jsx
    import { withStyles } from '@material-ui/core/styles';

    const styles = {
      root: {
        background: 'lightblue',
        padding: '20px',
      },
    };

    const MyComponent = ({ classes }) => {
      return <div className={classes.root}>Styled Component</div>;
    };

    export default withStyles(styles)(MyComponent);
    ```

These examples demonstrate how HOCs can be used to extend the functionality of components by providing additional props, accessing context, or enhancing styling. HOCs are a powerful pattern in React for creating reusable and composable components.

## Question #7: What's the difference in handling exceptions in promises,
callbacks and async...await?
In short:

- **Promises**: Use `then()` for success and `catch()` for errors. Errors propagate down the chain until caught.
- **Callbacks**: Employ error-first callback patterns, checking for errors with conditional statements.
- **Async/Await**: Use `try...catch` blocks for synchronous-style error handling, making asynchronous code look more synchronous and easier to read.

## Question #8: How many arguments does setState take and why is it async.

In React, the `setState` function takes two arguments: 

1. **Partial State Object or Updater Function**: The first argument can be either a partial state object or an updater function. The partial state object represents the new state values to be merged with the current state, while the updater function receives the previous state and props as arguments and returns the new state based on these values.

2. **Callback Function (Optional)**: The second argument is an optional callback function that is executed once `setState` has been successfully completed and the component has been re-rendered.

Example usage:

```jsx
// Using a partial state object
this.setState({ count: this.state.count + 1 });

// Using an updater function
this.setState((prevState, props) => {
  return { count: prevState.count + props.increment };
}, () => {
  console.log('State updated!');
});
```

Regarding why `setState` is asynchronous:

1. **Performance and Batch Updates**: React batches multiple `setState` calls into a single update for performance reasons. This batching mechanism helps reduce the number of re-renders and optimizes the rendering process, especially when multiple state updates occur in quick succession.

2. **Event Loop and Rendering Pipeline**: React schedules state updates asynchronously, deferring the actual update to a future point in time within the event loop. This allows React to prioritize other tasks, such as event handling and rendering, before processing state updates.

3. **Consistency and Predictability**: By making `setState` asynchronous, React ensures a consistent and predictable behavior across different environments and scenarios. It prevents race conditions and ensures that updates occur in a controlled manner, maintaining the integrity of the component's state and rendering.

It's important to note that while `setState` is asynchronous, React guarantees that the component will be re-rendered with the updated state before any callback functions passed to `setState` are invoked. This ensures that the component's UI reflects the most recent state changes when the callback is executed.

## Question #9: List the steps needed to migrate a Class to Function component

Certainly! Here's a shorter version:

1. **Identify Component**: Choose the class component to migrate.

2. **Convert to Function Syntax**:
   - Replace `class` with `const` or `function`.
   - Remove `extends Component`.
   - Move state to `useState` hooks.
   - Replace lifecycle methods with hooks like `useEffect`.

3. **Refactor State Management**:
   - Replace `this.state` with `useState`.
   - Handle state updates with hooks.

4. **Refactor Event Handlers**:
   - Convert class methods to functions.

5. **Refactor Rendering Logic**:
   - Update props access.
   - Migrate conditional rendering.

6. **Test and Verify**: Ensure the function component behaves as expected.

7. **Refactor Tests**: Update unit tests if needed.

8. **Deploy and Monitor**: Deploy, monitor for issues, and gather feedback.

## Question #10: List a few ways styles can be used with components.

Certainly! Here are a few ways styles can be used with components in React:

1. **Inline Styles**:
   - Apply styles directly to JSX elements using the `style` attribute. Inline styles are defined as JavaScript objects where keys represent CSS properties and values represent corresponding values.
   - Example:

    ```jsx
    const MyComponent = () => {
      const divStyle = {
        color: 'red',
        fontSize: '20px'
      };

      return <div style={divStyle}>Styled Component</div>;
    };
    ```

2. **CSS Classes**:
   - Apply styles using CSS classes defined in separate CSS files or CSS-in-JS libraries like styled-components or emotion.
   - Use the `className` attribute to assign CSS classes to JSX elements.
   - Example:

    ```jsx
    import './MyComponent.css'; // Import CSS file

    const MyComponent = () => {
      return <div className="styled-component">Styled Component</div>;
    };
    ```

3. **CSS Modules**:
   - Use CSS Modules to locally scope CSS styles to specific components.
   - CSS Modules allow you to import CSS files in JavaScript and access class names as properties of an imported object.
   - Example:

    ```jsx
    import styles from './MyComponent.module.css'; // Import CSS module

    const MyComponent = () => {
      return <div className={styles.styledComponent}>Styled Component</div>;
    };
    ```

4. **CSS-in-JS Libraries**:
   - Use CSS-in-JS libraries like styled-components, emotion, or JSS to define styles directly within your JavaScript code.
   - These libraries allow you to write CSS styles using JavaScript template literals, providing scoped styles and dynamic styling capabilities.
   - Example with styled-components:

    ```jsx
    import styled from 'styled-components';

    const StyledDiv = styled.div`
      color: red;
      font-size: 20px;
    `;

    const MyComponent = () => {
      return <StyledDiv>Styled Component</StyledDiv>;
    };
    ```

## Question #11: How to render an HTML string coming from the server.

To render an HTML string coming from the server in a React component, you can use the `dangerouslySetInnerHTML` attribute. However, you should be cautious when using this approach, as it can expose your application to cross-site scripting (XSS) attacks if the HTML string contains user-generated content.

Here's how you can render an HTML string using `dangerouslySetInnerHTML`:

```jsx
const MyComponent = ({ htmlString }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};
```