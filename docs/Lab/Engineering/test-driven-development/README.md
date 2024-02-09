---
title: Test-driven development
tags: ["Algorithm"]
---

# Test-driven development
Re-posted, the original post is at <a href="https://www.geeksforgeeks.org/window-sliding-technique/">here</a>

## Introduction

**Test-driven development (TDD)** is a 
<VueCustomTooltip label="In software engineering, a software development process or software development life cycle (SDLC) is a process of planning and managing software development. "><span style="color:#316dde">**software development process**</span></VueCustomTooltip> relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

[Reference(Wikipedia) - Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)<br>
[Reference(Wikipedia) - Software development process](https://en.wikipedia.org/wiki/Software_development_process)

## Test-driven development cycle
1. Create a list of tests for the new feature
2. Add one test from the list
3. Run all tests. The new test should fail for expected reasons
4. Write the simplest code that passes the new test
5. All tests should now pass
6. Refactor as needed, using tests after each refactor to ensure that functionality is preserved
7. Add the next test on the list
8. Repeat



## Development style
This has led to the __"test-driven development mantra"__, which is an <span style="background-color:yellow">__"red/green/refactor"__,</span> where red means fail and green means pass. Test-driven development constantly repeats the steps of adding test cases that fail, passing them, and refactoring. Receiving the expected test results at each stage reinforces the developer's mental model of the code, boosts confidence and increases productivity.

### Code visibility
- Test suite code clearly has to be able to access the code it is testing. On the other hand, normal design criteria such as information __hiding__, __encapsulation__ and the __separation of concerns__ <span style="background-color:yellow">__should NOT be compromised__.</span> Therefore, unit test code for TDD is usually written within the same project or module as the code being tested.

### Fakes, mocks and integration tests
- Unit tests are so named because they each test one unit of code. A complex module may have a thousand unit tests and a simple module may have only ten. The unit tests used for TDD should never cross process boundaries in a program, <span style="background-color:yellow">__let alone network connections__.</span> Doing so introduces delays that make tests run slowly and discourage developers from running the whole suite. Introducing dependencies on external modules or data also turns unit tests into integration tests. If one module misbehaves in a chain of interrelated modules, it is not so immediately clear where to look for the cause of the failure.

### Keep the unit small
- For TDD, a unit is most commonly defined as a class, or a group of related functions often called a module. <span style="background-color:yellow">__Keeping units relatively small__</span> is claimed to provide critical benefits, including:
    - Reduced debugging effort – When test failures are detected, having smaller units aids in tracking down errors.
    - Self-documenting tests – Small test cases are easier to read and to understand.

## Best practices

### Test structure
- Effective layout of a test case ensures all required actions are completed, improves the readability of the test case, and smooths the flow of execution. Consistent structure helps in building a self-documenting test case. A commonly applied structure for test cases has <span style="background-color:yellow">__(1) setup, (2) execution, (3) validation, and (4) cleanup.__</span>
<span style="background-color:yellow"></span>

### Individual best practices
- Some best practices that an individual could follow would be to separate common set-up and tear-down logic into test support services utilized by the appropriate test cases, to <span style="background-color:yellow">__keep each test oracle focused on only the results necessary to validate its test,__</span> and to design time-related tests to allow tolerance for execution in non-real time operating systems.

### Practices to avoid, or "anti-patterns"
- Having test cases depend on system state manipulated from previously executed test cases (i.e., you should always start a unit test from a known and pre-configured state).
- Dependencies between test cases. A test suite where test cases are dependent upon each other is brittle and complex. Execution order should not be presumed. Basic refactoring of the initial test cases or structure of the UUT causes a spiral of increasingly pervasive impacts in associated tests.
- Interdependent tests. Interdependent tests can cause cascading false negatives. A failure in an early test case breaks a later test case even if no actual fault exists in the UUT, increasing defect analysis and debug efforts.
- Testing precise execution, behavior, timing or performance.
- Building "all-knowing oracles". An oracle that inspects more than necessary is more expensive and brittle over time. This very common error is dangerous because it causes a subtle but pervasive time sink across the complex project.[16][clarification needed]
- Testing implementation details.
- Slow running tests.

<br>
<br>

```
Let's make the world a better place together :)
```

