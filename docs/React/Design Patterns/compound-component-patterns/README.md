---
title: Compound Component Patterns

tags: ['React']
---

# Compound Component Patterns

## Introduction

Compound component in React is a pattern that <span style="background-color:yellow">**encloses the state and behavior**</span> of a group of components while giving the rendering controls of its variables to the external user.

## Practice

<code-group>
<code-block title="Flyout.js">

```jsx
import React from 'react'
import Icon from './Icon'

const FlyOutContext = React.createContext()

export function FlyOut(props) {
  const [open, toggle] = React.useState(false)

  return (
    <div className={`flyout`}>
      <FlyOutContext.Provider value={{ open, toggle }}>
        {props.children}
      </FlyOutContext.Provider>
    </div>
  )
}

function Toggle() {
  const { open, toggle } = React.useContext(FlyOutContext)

  return (
    <div
      className='flyout-btn'
      onClick={() => toggle(!open)}
    >
      <Icon />
    </div>
  )
}

function List({ children }) {
  const { open } = React.useContext(FlyOutContext)
  return open && <ul className='flyout-list'>{children}</ul>
}

function Item({ children }) {
  return <li className='flyout-item'>{children}</li>
}

FlyOut.Toggle = Toggle
FlyOut.List = List
FlyOut.Item = Item
```

</code-block>
<code-block title="FlyoutMenu.js">

```jsx
import React from 'react'
import './styles.css'
import { FlyOut } from './FlyOut'

export default function FlyoutMenu() {
  return (
    <FlyOut>
      <FlyOut.Toggle />
      <FlyOut.List>
        <FlyOut.Item>Edit</FlyOut.Item>
        <FlyOut.Item>Delete</FlyOut.Item>
      </FlyOut.List>
    </FlyOut>
  )
}
```

</code-block>
</code-group>

## Pros

**Compound components** manage their own <span style="background-color:yellow">**internal state**</span>, which they share among the several child components. When implementing a compound component, we don’t have to worry about <span style="background-color:yellow">**managing the state ourselves.**</span>

## Cons

Only direct children of the parent component will have access to the internal state, meaning we <span style="background-color:yellow">**can’t wrap**</span> any of these components in another component.

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
