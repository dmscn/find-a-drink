# 🍻 Find a Drink!

### What was used in this project

* React
* styled-components
* jest + react-testing-library
* Eslint + Prettier
* Webpack
* Redux & Sagas


### Architecture

* **Theme** 💅 

*In my theme I exposed some pre-defined properties I would need for basic styling in my App. They also helps to maintaining consistency and to boilerplate some styling like shadows and elevations*

* **Linting, Formatting and git hooks :sparkles:**

*I like to use this structure of formatting and linting in most of my projects*

*I did create lint and format scripts using eslint and prettier respectively and associated them to my git hooks. This way they could automatically run and formats my code on every commit or start the tests on every push to the upstream*

*This helps to maintain code styling between multiple developers contributing into the code base. Also guarantee that no test were broke before pushing to the upstream*

* **Custom Hooks as a Store interface**

*This was totally experimental (just like most of this project 😄)*

*I wanted to experiment the possibility to abstract the logic of consuming and dispatching to the store. Nothing better than using Custom Hooks to take the job. 👊*

*Those hooks have the main objective to remove the responsibility from knowing the store and how to handle it from the view. No more need to `useSelector`, `useDispatch`, invoking actions creators, dispatching actions, and so on. It becomes easy like calling a method and passing the correct params 👍*

*Their API exposes the `values` from the store, the `methods` to dispatch actions and then the UI `states` for `loading` and `error`.*

* **Redux & Sagas (using ducks pattern 🦆)**

*The global state management was build using `redux` and `redux-saga`.*

*I do use `Context API` + `useReducer` most of the time but I chose to use `redux` because i wanted to experiment `redux-saga`. I'm recently exploring it as a solution for async side-effects.*

*I used the famous Duck Pattern to organize my redux modules. And that's it... 🤷‍♂️*

> As an improvement to be done I would reduce the modules to a single file given their short sizes and considering most of it are boilerplate code. Their current state were a solution for scalability problems.

### Disclaimers 

> Missing tests

*This was also an opportunity for me to test the `react-testing-library`. Not being familiar with the lib slowed me down. I've done the tests giving the right priorities following the main principle of `react-testing-library`. Testing the output just like the user would interact. I've opted to test the `containers` or my `page` and focusing on the main interactions and actions that needed to be tested. (anyway E2E will rule the world some day... wait for it 😎 )*

> Graphql

*Also never experimented Graphql before. I was willing to experiment Apollo but opted for a raw version and creating a `graphqlFetcher` manually 👨‍💻*
