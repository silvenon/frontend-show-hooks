# Frontend Show: React Hooks

This small app contains an exercise for learning [React Hooks](https://reactjs.org/docs/hooks-intro.html). It has a test suite which checks whether everything is working properly, but has one crucial failing test: it expects that component to be a function.

Your task is to get that test to pass without breaking the other tests!

## Development

Install dependencies:

```
yarn
```

Run the development server:

```
yarn dev
```

Run the test suite:

```
yarn test
```

or:

```
yarn test --watch
```

if you want your tests to run on every file change. Pro tip: use [`test.only`](https://jestjs.io/docs/en/api#testonlyname-fn-timeout) if you want to focus on a single test, especially useful in watch mode!

## Resources

- [my slides](https://speakerdeck.com/silvenon/react-hooks)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [useHooks](https://usehooks.com/)
