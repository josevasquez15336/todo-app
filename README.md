# React Microfrontend Todo List

## Overview

This project is a standalone Microfrontend (MFE) component designed to encapsulate a fully functional todo list application. The component is built using React and TypeScript, emphasizing maintainability, code quality, and ease of integration into various host applications.

## Objective

The goal of this project was to develop a reusable MFE that handles todo list management with features for creating, toggling, and persisting todo items. It demonstrates the ability to design and structure a clean, maintainable React application while adhering to modern development practices.

## Features

- **Todo Creation**: Users can add new todo tasks to the list through an input field.
- **Todo Status**: Each todo item includes a checkbox to toggle its completion status, with visual distinctions (e.g., strikethrough) for completed tasks.
- **Todo Persistence**: Todos are stored in the browser's localStorage, ensuring persistence across page refreshes and sessions.
- **Filtering Mechanism**: Provides buttons to filter todos by all, active, or completed statuses.

## Technical Considerations

- **TypeScript**: Ensures type safety and enhances maintainability.
- **Testing**: Includes unit tests covering core functionalities.
- **State Management**: Utilizes React’s built-in state management capabilities.
- **Microfrontend Integration**: Designed to be easily integrated as a microfrontend component into larger applications.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/josevasquez15336/todo-app.git
   cd todo-mfe
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

   This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. **Running Tests**
   ```bash
   npm test
   ```
   Launches the test runner in the interactive watch mode.

## Gotchas & Edge Cases

- **Local Storage Accessibility**: The application gracefully handles scenarios where local storage is unavailable or restricted.
- **Input Validation**: Implements checks to ensure that invalid or empty inputs are not submitted.

## Evaluation Criteria

- **Functionality**: Meets all specified requirements for todo management.
- **Code Quality**: Code is clean, well-commented, and adheres to best practices.
- **Testing**: Comprehensive tests provide meaningful coverage.
- **Microfrontend Architecture**: Demonstrates understanding of microfrontend principles, including ease of integration and isolation of the component.

## Design and Architecture

This component was designed with simplicity and reusability in mind. Decisions were made to favor readability and modularity, allowing the component to be easily extended or modified. Integration concerns were addressed by ensuring the component does not depend on external state management libraries or complex configurations.

## Additional Notes

While the focus was not on elaborate styling, basic functional styling has been applied to ensure the component is visually coherent and user-friendly. The design choices and architectural decisions are open for discussion during the interview process.

Feel free to explore the repository and submit any issues or pull requests as you see fit. This project is designed to be open for community feedback and contributions.

```

This version includes all sections in a single continuous Markdown block suitable for a GitHub README file or similar documentation purposes, ensuring easy readability and navigation.
```
