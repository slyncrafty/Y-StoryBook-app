# Y-StoryBook-App

This is a full application build of the Y-StoryBook app. User can login, view, save story posts and make them private or public as desired. Users can add new stories, edit them, and delete.

![App demo](https://github.com/slyncrafty/slyncrafty.github.io/blob/main/images/demo2.gif?raw=true)

## How It's Made:

**Tech used:** Node.js, Express, MongoDB, Passport with a Google OAuth strategy, Handlebars and more.

This application was built using a modern web development stack. Node.js with Express provides a robust server framework for handling model, view, routes, middleware, and authentication. MongoDB stores uer profiles and the story data with mongoose to define schemas. Handlebars is used as view engine for dynamic, server-rendered HTML templates, supporting layouts and partials.
The UI utilizes Materialize for modern and responsive styling leveraging prebuilt components and a clean and organized look.

## How to use:

Add your MongoDB URI and Google OAuth ID and Secret to /config/config.env file -- `DB_STRING`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`

```
# Install npm dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

## Lessons Learned:

- Google OAuth integration: learned how to securely handle third-party authentication, manage user sessions, and persist user data.
- Private/public access control: learned building private/public story access to restrict visibility and editing of the content to the authorized user.
- RESTful design: learned routing for CRUD operations following REST principles improved clarity and maintainability fo the server-side code.
- Template Engines: learned using Handlebars rendering, partials, and dynamic data binding in views(HTML).
- Middlewares: learned how middleware can modularize logic for authentication, data formatting, and parsing requests.

## Examples:

Take a look at these couple examples that I have in my portfolio:

**Pomodoro Timer:** https://github.com/slyncrafty/pomodoro-timer

**Portfolio:** https://slyncrafty.github.io/

**DND World Building ToolBox** https://github.com/slyncrafty/api-dnd_World_building_toolbox?tab=readme-ov-file
