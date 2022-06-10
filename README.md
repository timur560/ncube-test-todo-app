This is a test project for Gold Win (NCube) React Developer position.

## Running project

To start project locally, please run the following commands inside repository root:

```bash
$> npm install
$> npm run dev
```

Then open the following url: [http://127.0.0.1:3000](http://127.0.0.1:3000)

Have fun!

## Features

- Fetch tasks from remote API
- Persist tasks in local storage
- Refetch if needed
- Filter by user id
- Creating a new tasks (for current user)
- Mark (or unmark) tasks as finished
- Remove tasks
## Tools used

- React
- Next.js
- Redux
- styled-componens
- axios

---
### The task itself

We have a test for you that we hope you might like. The objective is to create a TODO webapp using Next.js

This app needs to acquire from a backend a TODOs' list specific to a user and save them in a global state using Redux. The task list can be fetched from: https://jsonplaceholder.typicode.com/todos

In your application’s URL a “userId” query param will be present with which the task list will be filtered by.

Example: localhost:3000/?userId=2 will only display tasks for userId = 2

Everything will be incorporated in a single page where a field text input with which new tasks can be added in the TODO list. Every task needs to have two buttons associated: "DONE" and "REMOVE".

DONE: applies an effect that changes the background color or any other styling change that you deem fit for a completed task;

REMOVE: removes the task from the list;

BONUS:

The task list can be persistent (can be saved in local storage)

The backend can be a separate app written in Javascript or Golang

IMPORTANT POINTS:

For styling it’s advised styled-components, while design is not important.

The two actions ,DONE and REMOVE will be generated by a custom hook:

const { finishTask, removeTask } = useTaskActions();

finishTask(taskId);
removeTask(taskId);

The application needs to be uploaded to Github in a repository with README that explains the necessary steps to run the project
