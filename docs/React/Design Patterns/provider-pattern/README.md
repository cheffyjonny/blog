---
title: Provider Patterns

tags: ['React']
---

# Provider Patterns

## Introduction

Its purpose is to share <span style="background-color:yellow">**global data**</span> across various components of the React component tree.<br>
It helps avoid <span style="background-color:yellow">**Prop Drilling**</span>.

```jsx
const DataContext = React.createContext()

function App() {
  const data = { key: 'value' }

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  )
}
```

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
