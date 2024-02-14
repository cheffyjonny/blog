---
title: Render Props Pattern

tags: ['React']
---

# Render Props Pattern

## Introduction

A render prop is a <span style="background-color:yellow">**prop on a component**</span>, which value is a function that returns a JSX element. The component itself <span style="background-color:yellow">**does not render anything besides the render prop.**</span> Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

## Practice

- **stage 1** : It has an issue that `Kelvin` and `Fahrenheit` doesn't have access to the `value`
- **stage 2** : We could lift the state up to the first common ancestor component. Although this is a valid solution, it can be tricky to lift state in larger applications with components that handle many children.
- **stage 3** : Instead, we can use **render props**! Let’s change the Input component in a way that it can receive render props.
- **stage 4** & **stage 5** : Besides regular JSX components, we can pass functions as children to React components. This function is available to us through the `children` prop, which is technically also a render prop. Let’s change the `Input` component. Instead of explicitly passing the `render` prop, we’ll just pass a function as a child for the `Input` component.
- **stage 6** : Final result !!

<code-group>
<code-block title="Stage 1">

```jsx
import React, { useState } from 'react'
import './styles.css'

function Input() {
  const [value, setValue] = useState('')

  return (
    <input
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder='Temp in °C'
    />
  )
}

export default function App() {
  return (
    <div className='App'>
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input />
      <Kelvin />
      <Fahrenheit />
    </div>
  )
}

function Kelvin({ value = 0 }) {
  return <div className='temp'>{value + 273.15}K</div>
}

function Fahrenheit({ value = 0 }) {
  return <div className='temp'>{(value * 9) / 5 + 32}°F</div>
}
```

</code-block>

<code-block title="Stage 2">

```jsx
function Input({ value, handleChange }) {
  return (
    <input
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  )
}

export default function App() {
  const [value, setValue] = useState('')

  return (
    <div className='App'>
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        value={value}
        handleChange={setValue}
      />
      <Kelvin value={value} />
      <Fahrenheit value={value} />
    </div>
  )
}
```

</code-block>

<code-block title="Stage 3">

```jsx
import React, { useState } from 'react'
import './styles.css'

function Input(props) {
  const [value, setValue] = useState('')

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Temp in °C'
      />
      {props.render(value)}
    </>
  )
}

export default function App() {
  return (
    <div className='App'>
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  )
}

function Kelvin({ value }) {
  return <div className='temp'>{parseInt(value || 0) + 273.15}K</div>
}

function Fahrenheit({ value }) {
  return <div className='temp'>{(parseInt(value || 0) * 9) / 5 + 32}°F</div>
}
```

</code-block>
<code-block title="Stage 4">

```jsx
export default function App() {
  return (
    <div className='App'>
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </div>
  )
}
```

</code-block>

<code-block title="Stage 5">

```jsx
function Input(props) {
  const [value, setValue] = useState('')

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Temp in °C'
      />
      {props.children(value)}
    </>
  )
}
```

</code-block>

<code-block title="Stage 6">

```jsx
import React, { useState } from 'react'
import './styles.css'

function Input(props) {
  const [value, setValue] = useState(0)

  return (
    <>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Temp in °C'
      />
      {props.children(value)}
    </>
  )
}

export default function App() {
  return (
    <div className='App'>
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </div>
  )
}

function Kelvin({ value }) {
  return <div className='temp'>{parseInt(value || 0) + 273.15}K</div>
}

function Fahrenheit({ value }) {
  return <div className='temp'>{(parseInt(value || 0) * 9) / 5 + 32}°F</div>
}
```

</code-block>

</code-group>

## Pros

- The issue of <span style="background-color:yellow"> **naming collisions**</span> that we can run into by using the **HOC pattern** <span style="background-color:yellow"> **no longer applies**</span> by using the render props pattern, since we don’t automatically merge props. We explicitly pass the props down to the child components, with the value provided by the parent component.

## Cons

- The issues that we tried to solve with render props, have largely been <span style="background-color:yellow"> **replaced by React Hooks.**</span> As Hooks changed the way we can add reusability and data sharing to components, they can replace the render props pattern in many cases.

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
