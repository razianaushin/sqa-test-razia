# ReactJS Developer Coding Challenge

## Prerequisites

### Frontend

You do not need to run front-end in this case.

### Backend

Before you start working on the backend part of the coding challenge, please make sure you have the following installed on your system:

- Node.js (version 14 or later)
- npm (version 6 or later)
- Git
- Redis (should be running when you start the project)
- Selenium for e2e testing.
- Install Jest to write down the test cases.

You will also need a code editor of your choice, such as Visual Studio Code or Sublime Text.

NOTE: write all of your http and websocket testcases in `/__test__` folder

## Task 1: Write test-cases http request

### Challenge Description
Create all the possible test case scenarios in jest.

### Requirements
- The backend project has one endpoint `http://localhost:3001/v1/currencies` which will return the data that will be used.

## Task 2: Write test-cases for websocket

### Challenge Description

Create all the possible test case scenarios using any library that is most feasible in this case.

### Requirements

- You will connect to `ws://localhost:3333/currency` which will return you the updated prices of cryptocurrencies every 5 seconds

## Task 3: E2E test of market page of www.bxlend.com

### Challenge Description

This task will test your knowledge of selenium or playwright.

### Requirements

- Start with https://www.bxlend.com. 
- Select Market page from navbar which will take you to the market page.
- Check the listed assets on market page https://www.bxlend.com/market. 
- In the search bar on market page, enter names of assets and test response. 

## Task 3: Bonus task

### Challenge Description

Do a stress testing on bxlend.com


## Submission

When you have completed the coding challenge, please push your changes to your forked repository and send us the link to your repository. We will review your submission and get back to you as soon as possible.
