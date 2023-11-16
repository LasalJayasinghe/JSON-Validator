# Dynamic Form with create-mf-app, Bootstrap, JavaScript, and CSS

## Overview

This project is a dynamic form implementation using create-mf-app for micro-frontends, Bootstrap for styling, JavaScript for dynamic behavior, and CSS for additional styling.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/LasalJayasinghe/JSON-Validator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd dynamicForm
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

This will launch the application in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view the dynamic form.

## Features

- **Dynamic Form Generation:** The form is dynamically generated based on a JSON configuration file.

- **Bootstrap Styling:** Utilizes Bootstrap for a responsive and visually appealing design.


## Project Structure

This project follows a structured organization for better clarity and maintainability.

### Directory Overview:

- **`src/`**: The heart of the application, where the source code resides.

    - **`App.jsx`**: The primary application component where the form is rendered and managed.

    - **`components/`**: Houses reusable React components.

        - **`elements/`**: Specific form element components like Input, Email, Number, Range, etc.

            - **`Input.jsx`**
            - **`Email.jsx`**
            - **`Number.jsx`**
            - **`Range.jsx`**
            - ... (other form element components)

        - **`Element.js`**: A utility module that filters form elements based on type.

- **`App.jsx`**: The primary application component responsible for rendering and managing the form.

- **`src/components/elements/`**: This directory contains specific form element components. Each element is separated into its own file for modularity and easier maintenance.

    - **`Input.jsx`**: Component for rendering input fields.
    - **`Email.jsx`**: Component for rendering email input fields.
    - **`Number.jsx`**: Component for rendering number input fields.
    - **`Range.jsx`**: Component for rendering range input fields.
    - ... (other form element components)

- **`src/components/Element.js`**: A utility module that filters form elements based on type. This helps in dynamically rendering the appropriate form element.

- **`src/index.js`**: The entry point for the React application, where it all begins.


## Customization

- **Form Configuration:** Edit the JSON configuration files in the `config/` directory to customize the form structure and behavior.

- **Styling:** Modify the CSS files in the `styles/` directory to customize the appearance of the form.

- **Functionality:** Extend or modify the JavaScript logic in the components to add or change dynamic behavior.



Happy coding! 🚀