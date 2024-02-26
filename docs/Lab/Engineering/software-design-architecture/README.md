---
title: Software Design Architecture
tags: ['Architecture']
---

# Software Design Architecture

## Introduction

An architectural pattern is a general, reusable resolution.<br>
By following architectural pattern, you would be able to improve system's scalability, performance, and maintainability.

## MVC (Model - View - Controller)

- Model - This component stores the <span style="background-color:yellow">**application data.**</span> It has no knowledge about the interface. The model is responsible for handling the <span style="background-color:yellow">**domain logic(real-world business rules)**</span> and communication with the <span style="background-color:yellow">**database and network layers**</span>.

- View - It is the <span style="background-color:yellow">**UI(User Interface)**</span> layer that holds components that are visible on the screen. Moreover, it provides the visualization of the data stored in the Model and offers interaction to the user.

- Controller - This component establishes the relationship between the View and the Model. It contains the <span style="background-color:yellow">**core application logic**</span> and gets informed of the <span style="background-color:yellow">**user’s response**</span> and updates the Model as per the need.

![An image](./mvc.png) <br>

## MVP (Model - View - Presenter)

- Model - Layer for <span style="background-color:yellow">**storing data.**</span> It is responsible for handling the <span style="background-color:yellow">**domain logic(real-world business rules)**</span> and communication with the <span style="background-color:yellow">**database and network layers.**</span>

- View - <span style="background-color:yellow">**UI(User Interface)**</span> layer. It provides the visualization of the data and keep a <span style="background-color:yellow">**track of the user’s action**</span> in order to notify the Presenter. <br>

  By Isolating UI Logic, MVP enables the View to focus strictly drawing visuals for cleaner code, testing

- Presenter - <span style="background-color:yellow">**Fetch the data**</span> from the model and <span style="background-color:yellow">**applies the UI logic**</span> to decide what to display. It <span style="background-color:yellow">**manages the state of the View**</span> and takes actions according to the user’s input notification from the View. <br>

![An image](./mvp.png) <br>

## MVVM (Model — View — ViewModel)

- Model - Layer for <span style="background-color:yellow">**storing data.**</span> It is responsible for handling the <span style="background-color:yellow">**domain logic(real-world business rules)**</span> and communication with the <span style="background-color:yellow">**database and network layers.**</span>

- View - The purpose of this layer is to <span style="background-color:yellow">**inform the ViewModel about the user’s action.**</span> This layer observes the ViewModel and does not contain any kind of application logic.

- ViewModel - It acts as an <span style="background-color:yellow">**intermediary between the Model and the View.**</span> It encapsulates the presentation logic, exposing data and <span style="background-color:yellow">**commands the View can directly bind to.**</span>

![An image](./mvvm.png)

## Difference

| MVC                                                                                                                                                                                                                              | MVP                                                                                                                                                                                                                | MVVM                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One of the <span style="background-color:yellow">oldest software architecture </span>                                                                                                                                            | Developed as <span style="background-color:yellow">the second iteration</span> of software architecture which is advance from MVC.                                                                                 | <span style="background-color:yellow">Industry-recognized architecture</span> pattern for applications.                                                                                                                                                                            |
| UI(View) and data-access mechanism(Model) are <span style="background-color:yellow">tightly coupled. </span>                                                                                                                     | It <span style="background-color:yellow">resolves</span> the problem of having a dependent View by using Presenter as a communication channel <span style="background-color:yellow">between Model and View.</span> | This architecture pattern is more <span style="background-color:yellow">event-driven</span> as it uses <span style="background-color:yellow">data binding</span> and thus makes easy <span style="background-color:yellow">separation</span> of core business logic from the View. |
| <span style="background-color:yellow">Controller and View</span> exist with the <span style="background-color:yellow">one-to-many</span> relationship. One Controller can select a different View based upon required operation. | The <span style="background-color:yellow">one-to-one</span> relationship exists between <span style="background-color:yellow">Presenter and View</span> as one Presenter class manages one View at a time.         | Multiple View can be mapped with a single ViewModel and thus, the <span style="background-color:yellow">one-to-many</span> relationship exists between <span style="background-color:yellow">View and ViewModel. </span>                                                           |
| The View has no knowledge about the Controller.                                                                                                                                                                                  | The View has references to the Presenter                                                                                                                                                                           | The View has references to the ViewModel                                                                                                                                                                                                                                           |
| <span style="background-color:yellow"> Difficult to make changes</span> and modify the app features as the code layers are <span style="background-color:yellow">tightly coupled. </span>                                        | Code layers are <span style="background-color:yellow">loosely coupled</span> and thus it is <span style="background-color:yellow">easy to carry out modifications/changes</span> in the application code.          | <span style="background-color:yellow">Easy to make changes</span> in the application. However, if data binding logic is too complex, it will be a <span style="background-color:yellow">little harder to debug</span> the application.                                             |
| <span style="background-color:yellow">User Inputs are handled by the Controller. </span>                                                                                                                                         | <span style="background-color:yellow">The View is the entry point to the Application </span>                                                                                                                       | <span style="background-color:yellow">The View takes the input from the user and acts as the entry point of the application. </span>                                                                                                                                               |
| Ideal for small scale projects only.                                                                                                                                                                                             | Ideal for simple and complex applications.                                                                                                                                                                         | Not ideal for small scale projects.                                                                                                                                                                                                                                                |
| Limited support to Unit testing.                                                                                                                                                                                                 | Easy to carry out Unit testing but a tight bond of View and Presenter can make it slightly difficult.                                                                                                              | Unit testability is highest in this architecture.                                                                                                                                                                                                                                  |

## Comparing the Trio: Strengths and Weaknesses

<span style="background-color:yellow"></span>

- **MVC's Balance**: MVC strikes a harmonious chord in software architecture, adeptly dividing responsibilities for evolving user interfaces and intricate data manipulation. <span style="background-color:yellow">This balance safeguards code organization while enabling UI updates without disrupting core logic.</span> However, interdependencies can arise, <span style="background-color:yellow">complicating maintenance and testing.</span> The equilibrium that empowers web developers must prevent unintended entanglements.

- **MVVM's Elegance**: MVVM exudes elegance, tailor-made for intricate user interfaces and fluid interactions. <span style="background-color:yellow">Its separation of concerns empowers designers and developers to collaborate while maintaining code integrity.</span> <span style="background-color:yellow">Ideal for UI-intensive projects,</span> MVVM introduces the ViewModel layer as a bridge between Model and View, enabling dynamic updates and interactions. Yet, <span style="background-color:yellow">newcomers may encounter a learning curve due to the abstraction, and simple applications might find this elegance overly elaborate.</span>

- **MVP's Control**: MVP offers <span style="background-color:yellow">precise control over interactions,</span>
  excelling in scenarios demanding dynamic user input or validation processes. <span style="background-color:yellow">It champions the separation of concerns and test-driven development,</span> yielding resilient applications. MVP's Presenter mediates user interactions, enhancing code maintainability. However, <span style="background-color:yellow">this separation introduces complexity, potentially increasing code volume</span>
  . The granular control of MVP necessitates a balance between benefits and intricacies.

Generally, <span style="background-color:yellow">MVC is suitable for web applications</span> that need to support <span style="background-color:yellow">multiple platforms, browsers,</span> or devices, separating the logic and presentation layers. <span style="background-color:yellow">MVP is ideal for desktop or mobile applications with a rich and interactive user interface</span> that requires easy <span style="background-color:yellow">testing and maintenance.</span> Additionally, <span style="background-color:yellow">MVVM is best for XAML-based applications</span> that need a dynamic and <span style="background-color:yellow">data-driven user interface</span>, leveraging data binding and event-driven features.

## Reference

<a href="https://www.youtube.com/watch?v=I5c7fBgvkNY&ab_channel=ByteByteGo">Video</a><br>
<a href="https://www.linkedin.com/advice/3/how-do-you-compare-contrast-mvc-mvp-mvvm">Article 1</a> <br>
<a href="https://www.masaischool.com/blog/comparing-software-architecture-patterns/#:~:text=MVC%2C%20MVVM%2C%20and%20MVP%20are,a%20Presenter%20to%20mediate%20interactions.">Article 2</a><br>
<a href="https://www.geeksforgeeks.org/difference-between-mvc-mvp-and-mvvm-architecture-pattern-in-android/?ref=header_search">Article 3</a>

<br>
<br>

```
Let's make the world a better place together :)
```
