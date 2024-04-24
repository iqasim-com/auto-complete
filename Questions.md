```markdown
# Questions

## 1. Difference between Component and PureComponent

### Answer:
Regular Component re-renders whenever its parent component does or when there's a change in its state or props, regardless of whether these changes impact its output. PureComponent utilizes a shallow comparison in shouldComponentUpdate, triggering a re-render only when there are modifications in its state or props.

### Example:
```jsx
import React, { useState, useEffect, memo } from 'react';

const RegularComponent = ({ value }) => {
  console.log('RegularComponent rendered');
  return <div>{value}</div>;
};

const PureFuncComp = memo(({ value }) => {
  console.log('PureFuncComp rendered');
  return <div>{value}</div>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(0);
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

## 2. Context + ShouldComponentUpdate danger

### Answer:
Using Context with shouldComponentUpdate, React.memo, or similar optimizations can cause problems:
- Context changes might not update components.
- Tying components to context details.
- Risk of outdated data.
- Harder maintenance.

### Example:
```jsx
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
  return useMemo(() => <div>{data}</div>, [data]);
};
```

## 3. Pass information from a component to its PARENT

### Answers:
Three ways to pass information from a component to its parent are:
- Using Callback Functions.
- Using Context.
- Using State Management Libraries.

## 4. Use React.memo and Optimizing with useMemo

Two ways to prevent components from re-rendering are:

1. **Using React.memo**: Wrap the component with React.memo to memoize the component, preventing unnecessary re-renders unless its props change.

   Example:
   ```jsx
   const MemoizedComponent = React.memo(MyComponent);
   ```

2. **Optimizing with useMemo**: Use the useMemo hook to memoize expensive calculations or values within the component, ensuring they are only recomputed when dependencies change.

   Example:
   ```jsx
   const memoizedValue = useMemo(() => expensiveCalculation(), [dependency]);
   ```

## 5. Fragment and its necessity

### Answer:
A fragment in React is used to group multiple elements together without adding an extra node to the DOM. It's necessary when you need to return multiple elements from a component's render method, as React components can only return a single element.

### Example:
```jsx
const MyComponent = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

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

## 6. HOC pattern examples

### Examples:
- withRouter (React Router)
- connect (Redux)
- withStyles (Material-UI)

## 7. Exception handling in promises, callbacks, and async/await

### Answer:
- Promises: Use then() for success and catch() for errors.
- Callbacks: Employ error-first callback patterns, checking for errors with conditional statements.
- Async/Await: Use try...catch blocks for synchronous-style error handling.

## 8. setState arguments and its asynchronous nature

### Answer:
- `setState` takes two arguments: partial state object or updater function, and an optional callback function.
- It's asynchronous for performance, batching updates, and ensuring consistency.

## 9. Steps to migrate a Class to Function component

### Steps:
1. Identify the component.
2. Convert to function syntax.
3. Refactor state management.
4. Refactor event handlers.
5. Refactor rendering logic.
6. Test and verify.
7. Refactor tests.
8. Deploy and monitor.

## 10. Ways to use styles with components

### Ways:
1. Inline styles.
2. CSS classes.
3. CSS Modules.
4. CSS-in-JS libraries.

## 11. Rendering HTML string from the server

To render an HTML string safely, use `dangerouslySetInnerHTML` attribute in React:
```jsx
const MyComponent = ({ htmlString }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};
```
```