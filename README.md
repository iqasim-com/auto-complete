# Description
Auto-complete component in React TypeScript.
![image](https://github.com/iqasim-com/auto-complete/assets/23281307/c7154ce3-625d-49a0-95ac-1b5b72aacf1c)


## Folder Structure

The `components` directory follows an atomic design pattern, consisting of `atoms` representing the smallest UI elements and `molecules` combining multiple atoms. `Atoms` contain individual UI components like inputs and lists, while `molecules` assemble these atoms into more complex UI elements like dropdowns. Each atomic component is encapsulated within its own directory, facilitating reusability and maintainability. This modular approach allows developers to easily compose UI elements from smaller building blocks, promoting consistency and scalability across the application. The clear separation of concerns enhances code organization and facilitates collaborative development efforts within the team.

```
📁 src/
│
├── App.test.tsx
│   - Test file for the main App component.
│
├── App.tsx
│   - Main component responsible for rendering the application.
│
├── 📁 components/
│   │
│   ├── 📁 atoms/
│   │   │
│   │   ├── AtomsTypes.ts
│   │   │   - File containing types/interfaces related to atomic components.
│   │   │
│   │   ├── 📁 AutoSuggestion/
│   │   │   └── AutoSuggestion.tsx
│   │   │       - React component for auto-suggestion functionality.
│   │   │
│   │   ├── 📁 Input/
│   │   │   └── Input.tsx
│   │   │       - React component for input fields.
│   │   │
│   │   └── 📁 List/
│   │       └── List.tsx
│   │           - React component for rendering lists.
│   │
│   └── 📁 molecules/
│       │
│       └── 📁 Dropdown/
│           └── Dropdown.tsx
│               - React component for dropdown functionality.
│
├── 📁 config/
│   │
│   ├── constants.ts
│   │   - File containing application constants.
│   │
│   └── SharedTypes.ts
│       - File containing shared types/interfaces.
│
├── 📁 context/
│   │
│   ├── ApiDataContext.tsx
│   │   - React component providing context for API-related data.
│   │
│   └── ContextTypes.ts
│       - File containing types/interfaces related to context.
│
├── 📁 hooks/
│   │
│   ├── types.ts
│   │   - File containing types/interfaces related to custom hooks.
│   │
│   └── useApiContext.tsx
│       - Custom hook for accessing API context.
│
├── index.css
│   - Global CSS file.
│
├── index.tsx
│   - Entry point of the application.
│
├── 📁 provider/
│   │
│   └── apiProvider.tsx
│       - Custom provider for API-related functionality.
│
├── react-app-env.d.ts
│   - TypeScript declaration file for environment-specific types.
│
├── 📁 reducers/
│   │
│   ├── actionTypes.ts
│   │   - File containing action types/constants.
│   │
│   └── reducer.tsx
│       - Redux reducer for managing state.
│
├── reportWebVitals.ts
│   - File for reporting web vitals.
│
└── setupTests.ts
    - File for setting up test environment configurations.

```

## Local environment setup
Clone the repo and run
### `npm start` :
    Above command will `install node modules`, and `start` application.
    After successfully installed,
    Open **http://localhost:3000** to view it in the browser.

### `npm test`
    Launches the test runner in the interactive watch mode.
    See the section about running tests for more information.

### `npm run build`
    Builds the app for production to the build folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.
    Your app is ready to be deployed!

## Screenshots
![image](https://github.com/iqasim-com/auto-complete/assets/23281307/a28c1ac2-e7e6-48dd-aae9-f1f1f3c7ddfb)
![image](https://github.com/iqasim-com/auto-complete/assets/23281307/4cceeeb3-4461-4c26-8c85-b90cc356dcc1)
![image](https://github.com/iqasim-com/auto-complete/assets/23281307/bc259e20-eced-454e-bec3-57733db50cd1)


