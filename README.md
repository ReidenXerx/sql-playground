## Scripts overview

npm run +
```javascript
"dev": "vite",
"build": "tsc && vite build",
"test": "jest",
"lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
```
## How to guide
Sure, here is a brief guide on how to interact with the project using the available npm scripts:

1. **Running the project locally**
   
   To run the project on your local machine, you need to use the `dev` script. Open your terminal, navigate to the project folder, and type:
   
   ```shell
   npm run dev
   ```
   This will start the Vite development server and you can access the project at `(http://localhost:5173/sql-playground/)` or another port if `5173` is already in use.

2. **Building the project**
   
   When you're ready to build the project for production, use the `build` script. In your terminal, type:
   
   ```shell
   npm run build
   ```
   This will run TypeScript to check for any type errors and then use Vite to build your project for production. The built assets will be in a newly created `dist` folder in your project directory.

3. **Testing the project**
   
   If you want to test the project, use the `test` script. This will run Jest, a JavaScript testing framework. In your terminal, type:
   
   ```shell
   npm run test
   ```
   Jest will run tests found in files ending with `.test.js`, `.test.ts`, `.spec.js`, or `.spec.ts`.

4. **Linting the project**

   Linting helps maintain code consistency and catch some types of errors. To lint the project, use the `lint` script. In your terminal, type:

   ```shell
   npm run lint
   ```
   This will run ESLint, a tool for identifying and reporting on patterns in JavaScript. It's configured to check TypeScript files and report unused directives.

5. **Previewing the built project**
   
   If you want to preview the built project, you can use the `preview` script. This is typically done after building the project. In your terminal, type:

   ```shell
   npm run preview
   ```
   This will start a local server serving your built application. You can view it in your browser as you would when running the development server.

Please note that for all these commands to work, you need to have Node.js and npm installed on your machine. If any command fails, you may want to try running `npm install` in the project directory first to ensure all dependencies are correctly installed. If you continue experiencing issues, please don't hesitate to reach out for further assistance.



also hold in mind that you should use the next queries for get result because there is mocked requests
```sql
select * from users
```
query for getting result fast 

```sql
select * from usersLong
```
query for getting result slow 

## Enhancements

1. **Design Improvements**. I have introduced a comprehensive redesign. A prominent feature is the adoption of a split-screen layout, which is common in similar projects and enhances usability. The color scheme and overall visual style have been modified to adopt a "homebrew" aesthetic, adding a charming touch to the interface.

2. **Code Editor Integration**. A fully functional code editor has been integrated into the left pane of the split-screen interface. This feature allows users to develop SQL code conveniently, enhanced by syntax highlighting for improved readability.

3. **Robust Error Handling**. Given the potential for inconsistencies in the data source, I have developed a resilient error handling mechanism. This approach enhances the system's fault tolerance in dealing with inconsistent data.

4. **Virtualization**. Considering that the data output could be significantly large, I have integrated virtualization into the right pane of the split-screen output window to optimize performance.

5. **Input Validation**. Recognizing that some characters can be problematic in SQL development, I implemented a real-time validation system in the code editor. This feature ensures that the user's input is appropriately sanitized and prevents the introduction of unwanted characters.

6. **Notification System**. To enhance user interaction and comprehension, I have integrated a notification system. This feature makes the product experience more interactive and intuitive.

7. **Dynamic Loader System**. To improve the user experience during potentially long API responses, I implemented a dynamic loader system. Instead of a static screen, users will see an animated loader indicating the ongoing process.

8. **Enhanced User Interaction**. To optimize user experience and ensure smooth UI interactions, I've implemented an advanced approach using AbortController. This method cancels an initial request if a user makes multiple actions before the first action is completed. For instance, if a user clicks the 'Play' button and the data retrieval is slow, then clicks 'Play' again without waiting for the first action to complete, the AbortController helps cancel the first request without blocking the UI. This technique offers a significant advantage over conventional practices where UI elements, like the 'Play' button, would typically be disabled until the initial request is completed.

## Technology Overview

This project uses a variety of modern tools and libraries to build a powerful and responsive user interface. The list below outlines the major technologies used:

1. **React (v18.2.0)**: The core of the application is built with React, a popular JavaScript library for building user interfaces.

2. **TypeScript (v5.0.2)**: TypeScript, a statically typed superset of JavaScript, is used to ensure type safety and make the codebase more robust and easier to maintain.

3. **Vite (v4.3.9)**: This project uses Vite as a build tool for a faster and leaner development experience. Vite provides features like hot-module replacement and fast production builds.

4. **Material UI (v5.13.4)**: Material UI is a widely-used React UI framework with a set of pre-built components that follow Material Design guidelines. It provides a consistent and attractive look and feel for the application.

5. **Emotion (v11.11.1)**: Emotion is a library designed for writing CSS styles with JavaScript. It is used for component styling throughout the project.

6. **React Window (v1.8.9)**: This library is used to efficiently render large lists and tabular data. It improves performance by only rendering items that are currently visible.

7. **React Simple Code Editor (v0.13.1) and Prismjs (v1.29.0)**: These are used to provide a code editing interface with syntax highlighting. It offers a great user experience for writing and editing SQL code.

8. **React Toastify (v9.1.3)**: React Toastify allows the application to show notifications to the user in an elegant way.

9. **ESLint (v8.38.0)**: ESLint is used for enforcing code style and maintaining consistency across the codebase.

10. **Prettier (v2.8.8)**: Prettier is an opinionated code formatter that ensures the codebase follows a consistent style.

In conclusion, the tech stack used for this project allows for the creation of a modern, efficient, and user-friendly interface, while also ensuring that the code remains clean, maintainable, and efficient.
