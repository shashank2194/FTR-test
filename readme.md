
## Solution 1 refer [this](./src/index.ts) 

## How to run solution 1
 #### Install the project dependencies using npm:

`npm install`

#### Once you have installed the dependencies, you can run the project using the following command:

`npm run start`



## For solution 2

#### Asume that we are implementing new UI for our application then we follow this following steps:-

1. Create a new React application: Set up a new React application using a tool like Create React App (CRA). This will provide the basic project structure and configuration needed to build a web app with React.

2. Refactor the existing code: Extract the core logic of the frequency tracking and user input handling from the console application into separate modules or classes. These modules should be framework-agnostic and contain the business logic without any UI-related code.

3. Create React components: Design and create React components that will handle the user interface of the web app. These components should interact with the logic modules from step 2 to update the state, handle user input, and display the necessary information.

4. Integrate the logic modules: Import the logic modules from step 2 into your React components and use them to handle user input and maintain the frequency tracking functionality. You can make use of React's state management and lifecycle methods to handle the timers and updating the UI.

5. Implement user input handling: Set up event listeners or form controls in your React components to capture user input. When the user enters a number or a command, pass that input to the appropriate logic module to update the frequency tracking and handle commands like 'halt', 'resume', or 'quit'.

6. Render the UI: Use React's rendering capabilities to display the frequency information and any additional UI elements you need. You can update the UI based on the state of the logic modules and trigger re-renders as necessary.

7. Style the UI: Apply CSS styles or use a styling library like Bootstrap or Material-UI to enhance the visual appearance of your web app.

8. Test and refine: Test your web app, both for functionality and responsiveness, and refine the implementation as needed. Make sure to consider various edge cases and validate the input to ensure a robust and user-friendly experience.

#### For make my production ready and deploy I would do following steps:-

1. Refactor and optimize: Review the codebase and refactor it if necessary to improve readability, maintainability, and performance. Look for any potential bottlenecks or areas that can be optimized.

2. Testing: Implement thorough testing to ensure the application functions as expected and to catch any bugs or issues. Write unit tests to cover different scenarios and edge cases. Consider using testing frameworks like Jest or Mocha.

3. Logging and error handling: Implement a logging mechanism to track application events and errors. Use a logging library like Winston or Bunyan to log relevant information. Implement proper error handling to catch and handle exceptions gracefully, providing meaningful error messages to users.


#### The coding test that provided is a good starting point and covers the required functionality. However, there are a few areas where I can make improvements to enhance the code structure and user experience:

1. Modularization: Consider breaking down the code into smaller, reusable functions or classes. This helps improve code organization and makes it easier to understand and maintain.

2. Error handling: Implement more robust error handling to handle potential errors and edge cases. For example, you can handle invalid user inputs, handle exceptions, and provide informative error messages to guide the user.

3. Input validation: Validate user inputs to ensure they are of the expected type and within the acceptable range. This helps prevent unexpected behavior or crashes due to invalid inputs.