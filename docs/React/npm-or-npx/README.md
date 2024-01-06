---
title: NPM vs NPX

tags: ["React"]
---

# NPM vs NPX

## Introduction

### Global Module
If you install a module globally, you wouldn't need to install the module every single time and you could use for all projects.
<br>

``` node
npm install [module_name] -g
```

However, this is not ideal for the three main reasons.

<br>

1. You wouldn't be able to know the version
- Unless if you re-install the module globally, you won't be able to know the version.

<br>

2. You might face an issue if you update the module.
- Your projects might use different version of the module.

<br>

3. Extremely harmful for the boilerplate.
- Boilerplate, such as create-react-app, doesn't require updates often. Global updates might cause issues with the boilerplate.

## Solution

### NPX
Since NPM 5.2 version, it provides npx without even installing.
<br>
<br>
NPX is a package executer, and it is used to execute javascript packages directly, without installing them. 
<br>
<br>
NPX does not install packages, so package pollution on the machine is not a concern.

#### Best example
- The most common application of NPX is the create-react-app command. Since we only need to use it once, i.e., while initializing the project, we do not install it. 



<br>
<br>
<TagLinks />

```
Let's make the world a better place together :)
```

<!-- <Comment />  -->
