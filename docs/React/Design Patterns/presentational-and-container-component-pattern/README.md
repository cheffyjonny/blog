---
title: Presentational and Container Component Pattern

tags: ['React']
---

# Presentational and Container Component Pattern

## Introduction

- **Presentational Components**: Components that care about <span style="background-color:yellow">**how**</span> data is shown to the user. <br>
  e.g. Rendering components
- **Container Components**: Components that care about <span style="background-color:yellow">**what**</span> data is shown to the user. <br>
  e.g. Fetching data

<span style="background-color:yellow">**Presentational**</span> components <span style="background-color:yellow">**receive**</span> their data from <span style="background-color:yellow">**container**</span> components.

## Practice

<code-group>
<code-block title="Presentational">

```jsx
import React from 'react'

export default function DogImages({ dogs }) {
  return dogs.map((dog, i) => (
    <img
      src={dog}
      key={i}
      alt='Dog'
    />
  ))
}
```

</code-block>
<code-block title="Container">

```jsx
import React from 'react'
import DogImages from './DogImages'

export default class DogImagesContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      dogs: [],
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breed/labrador/images/random/6')
      .then((res) => res.json())
      .then(({ message }) => this.setState({ dogs: message }))
  }

  render() {
    return <DogImages dogs={this.state.dogs} />
  }
}
```

</code-block>
</code-group>

## Pros

There are many benefits to using the Container/Presentational pattern.

- The **Container/Presentational pattern** encourages the <span style="background-color:yellow">**separation of concerns.**</span> Presentational components can be pure functions which are responsible for the UI, whereas container components are responsible for the state and data of the application. This makes it easy to enforce the separation of concerns.

- <span style="background-color:yellow">**Testing presentational components is easy**</span>, as they are usually pure functions. We know what the components will render based on which data we pass, without having to mock a data store.

## Cons

- The **Container/Presentational pattern** makes it easy to separate application logic from rendering logic. However, Hooks make it possible to achieve the same result without having to use the Container/Presentational pattern, and without having to rewrite a stateless functional component into a class component.Note that today, <span style="background-color:yellow">**we don’t need to create class components to use state anymore.**</span>

- Although we can still use the Container/Presentational pattern, even with React Hooks, this pattern can easily be an <span style="background-color:yellow">**overkill in smaller sized application.**</span>

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
