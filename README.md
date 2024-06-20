# Cypress API Testing Project

This project contains automated API tests using Cypress.

## Prerequisites

1. **Visual Studio Code**: Ensure you have Visual Studio Code installed. You can download it from [here](https://code.visualstudio.com/).
2. **Node.js**: Make sure Node.js is installed on your system. Download it from [here](https://nodejs.org/).

## Steps to Run Cypress Tests

### Step 1: Open Visual Studio Code

Launch Visual Studio Code on your system.

### Step 2: Clone the Repository

Clone the repository from GitHub. Open a new terminal in Visual Studio Code and run the following command:

```bash
git clone https://github.com/restivespace/E2EAutomation
```

### Step 3: Navigate to the Project Directory

After cloning the repository, navigate into the project directory:

```bash
cd <project-directory>
```

Replace `<project-directory>` with the name of the directory where the repository was cloned.

### Step 4: Install Dependencies

Make sure all project dependencies are installed. Run the following command in the terminal:

```bash
npm install
```

### Step 5: Open a Terminal

Open a new terminal in Visual Studio Code if you haven't already.

### Step 6: Run Cypress Tests

Execute the Cypress tests using the following command:

```bash
npx cypress run
```

This will run all the Cypress tests defined in the project.

## Additional Information

- **Cypress Configuration**: Cypress configuration options can be found and modified in the `cypress.config.js` file.
- **Test Files**: Test files are located in the `cypress/integration/` directory.
- **Custom Commands**: Custom Cypress commands are located in the `cypress/support/commands.js` file.

## Troubleshooting

- Ensure Node.js and npm are correctly installed by running `node -v` and `npm -v` in the terminal.
- If you encounter issues with Cypress, refer to the [Cypress documentation](https://docs.cypress.io/).
