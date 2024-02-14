---
title: Conditional Rendering Pattern

tags: ['React']
---

# Conditional Rendering Pattern

## Introduction

Rendering elements based on certain <span style="background-color:yellow">**conditions.**</span>

## Practice

```jsx
import React from 'react'

const variations = {
  variation1: <p>This is variation 1.</p>,
  variation2: <p>This is variation 2.</p>,
  default: <p>This is the default variation.</p>,
}

const MyComponent = ({ variation }) => {
  // Use the variation prop to dynamically select the content
  const content = variations[variation] ?? variations['default']

  return (
    <div>
      <h2>Conditional Rendering Example</h2>
      {content}
    </div>
  )
}

// Example usage
const App = () => {
  return (
    <>
      <MyComponent variation='variation1' />
      <MyComponent variation='variation2' />
      <MyComponent variation='unknownVariation' />
    </>
  )
}

export default App
```

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
