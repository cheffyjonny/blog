---
title: Utility Types

tags: ['TS']
---

# Utility Types

## `Partial<Type>`

It does the opposite of `Required`. It sets all properties in a type to optional.

### e.g.

```ts
type User = {
  firstName: string
  lastName: string
}

let firstUser: User = {
  firstName: 'John',
}
```

```
Property `lastName` is missing in type `{ firstName: string; }` but required in type `User`.
```

<br>

WITH `Partial` type <br>

```ts
type User = {
  firstName: string
  lastName: string
}

let firstUser: Partial<User> = {
  firstName: 'John',
}
```

This is ultimately the same as redefining the User type to:

```ts
type User = {
  firstName?: string
  lastName?: string
}
```

<br>
<br>
<br>

## `Record<Keys, Type>`

Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

### e.g.

```ts
interface CatInfo {
  age: number
  breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
}
```

<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
