# Template by SmokeTrees

Standard template used at SmokeTrees for REST APIs written in NodeJS.

[![codecov](https://codecov.io/gh/smoke-trees/nodejs-backend-template/branch/master/graph/badge.svg)](https://codecov.io/gh/smoke-trees/nodejs-backend-template)

## Running the server

```
$ npm start
```

Note: This will run a server in the development environment.
For information on deploying an express application to production and learn best practices, take a look [here](https://expressjs.com/en/advanced/best-practice-performance.html).

## Logging

This directory has 2 files.

- `logger.js` exports a winston object which we use for logging. You should modify logger.js to customize your logging configuration.
- `morgan.js` exports a pre-configured morgan object to write logs using a stream to winston. It is used to intercept http requests and log the request and response details.
  For more details visit the official page for [morgan](https://www.npmjs.com/package/morgan).

## Routes

Directory for defining routes. I don't think this needs more explanation.

## Additional Information

- On Linux, UNIX and Mac, running the following command adds ./node_modules/.bin to the path.

  ```bash
  source ./activate
  ```

  This makes it easier to run locally installed command packages.
  This won't be required in many IDEs like Webstorm, but we thought it's a good idea to include it anyway.

- [standard.js](https://npmjs.com/package/standard) has been added as the default linting and styling tool

  Use :

  ```bash
  npm run lint
  ```

  Formats the entire project, and logs out anything it couldn't fix.

- [mocha](https://npmjs.com/package/mocha) is used for testing and [chai](https://npmjs.com/package/chai) is used for assertion.
  [chai-http](https://npmjs.com/package/chai) is used to test http endpoints.

  Use:

  ```bash
  npm test
  ```

- [nyc](https://npmjs.com/package/nyc) is used as the default coverage tool.
  Use:

  ```bash
  npm run coverage
  ```

* The master branch ships code for a **http** server. Checkout the **https** branch for the https server.
  Replace the self-signed certificates in the certs with your own SSL certificates.

## Dependencies

| Dependency                                           | Usage                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------ |
| [body-parser](https://npm.com/package/body-parser)   | POST body parsing middleware. Adds body object to incoming request |
| [compression](https://npmjs.com/package/compression) | Response compression middleware                                    |
| [express](https://npmjs.com/package/express)         | Express REST API framework                                         |
| [cors](https://npm.com/package/cors)                 | CORS middleware to set CORS policy                                 |
| [morgan](https://npmjs.com/package/morgan)           | HTTP request logger                                                |
| [winston](https://npmjs.com/package/winston)         | General purpose logger for the application                         |
| [nyc](https://npmjs.com/package/nyc)                 | Code Coverage tool                                                 |
| [standard](https://npmjs.com/package/standard)       | Linting and styling tool.                                          |
| [chai](https://npmjs.com/package/chai)               | Assertion Library                                                  |
| [chai-http](https://npmjs.com/package/chai-http)     | Middleware for chai to test http endpoints                         |

## Typescript
[What is TypeScript and why would I use it in place of JavaScript?](https://stackoverflow.com/questions/12694530/what-is-typescript-and-why-would-i-use-it-in-place-of-javascript/35048303#35048303)
- Support for modern JavaScript features
- Advanced type system
- Developer tooling support
- Optionally static typing and type inference
- Enhanced IDE support
- Strict null checks
- JavaScript interoperability

## Eslint
[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. ... ESLint uses an AST to evaluate patterns in code. ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## Jest
[Jest](https://jestjs.io/) is a delightful JavaScript Testing Framework with a focus on simplicity.

Why code testing? Let us start with a few questions:

- How to measure the quality of code
- How to ensure the quality of code
- Are you free to refactor code
- How to guarantee the correctness of refactored code
- Have you confidence to release your untested code
- If you are not sure, you probably need unit testing.

## Prettier
Prettier is an opinionated code formatter with support for:

- JavaScript (including experimental features)
- JSX
- Angular
- Vue
- TypeScript
- CSS, Less, and SCSS
- HTML
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML
Why to use Prettier in your project?
- How to ensure the code style in a team?
- [Why Prettier?](https://prettier.io/docs/en/why-prettier.html)

## Husky
Having a good feedback loop is extremely important for developers. A properly configured project has a CI/CD pipeline that ensures the code will not break anything in the application’s logic or codebase itself by running the necessary checks, such as static code analysis and tests. [Husky](https://typicode.github.io/) can help you do this.

## Commitlint
[commitlint](https://commitlint.js.org/) helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.

Why Use Conventional Commits?
- Automatically generating CHANGELOGs.
- Automatically determining a semantic version bump (based on the types of commits landed).
- Communicating the nature of changes to teammates, the public, and other stakeholders.
- Triggering build and publish processes.
- Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

## Ts-node
[ts-node](https://typestrong.org/ts-node/docs/) is a TypeScript execution engine and REPL for Node.js.

It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js tools and libraries.

- Automatic sourcemaps in stack traces
- Automatic tsconfig.json parsing
- Automatic defaults to match your node version
- Typechecking (optional)
- REPL
- Write standalone scripts
- Native ESM loader
- Use third-party transpilers
- Use custom transformers
- Integrate with test runners, debuggers, and CLI tools
- Compatible with pre-compilation for production

## Vscode
We recommend install extensions
- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Docker
What can I use Docker for?
- Fast, consistent delivery of your applications
- Responsive deployment and scaling
- Running more workloads on the same hardware

## ts-node-dev
[ts-node-dev](https://github.com/wclr/ts-node-dev) Compiles your TS app and restarts when files are modified.



## CD/CI
GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.
