---
title: Paths Alias

tags: ["TS"]
---

# Paths Alias

## Introduction

- Less code, less complication. <br>
- Writing simpler code can help to read code easier.

### e.g.

```jsx
import dummy from '../../constants';
```
<b>To</b>
```jsx
import dummy from '@constants';
```
<br>

## Code
In tsconfig.json,
```jsx
{
  "compilerOptions": {
    ...
  },
  "references": [{ "path": "./tsconfig.node.json" }],
  "extends": "./tsconfig.paths.json"
}
```

In tsconfig.paths.json,
```jsx
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@services/*": ["services/*"],
      "@components/*": ["components/*"]
    }
  }
}
```

In a component
```jsx
import Example from '@components/Example'
```
<br>

## Error case
### 1. TypeScript doesn't execute the new config file.
```
Cannot find module `@config` or its corresponding type declarations.ts(2307)
```
- To solve this problem, you can try two methods.<br>
1. Re-start the project. (In most cases, this will fix the problem.)
2. Add extra line of code without *
```jsx
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@services/*": ["services/*"],
      "@services/": ["services/"],
      "@components/*": ["components/*"]
    }
  }
}
```
### 2. Using words that might have been used in node_modules
<b>e.g.</b>

```jsx
import type User from '@types/User';
```
- In this case, you need to add another @ at the front
```jsx
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@services/*": ["services/*"],
      "@components/*": ["components/*"],
      "@@types/*": ["types/*"]
    }
  }
}
```

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
