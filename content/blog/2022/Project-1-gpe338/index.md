---
title: "Project 1: Functions"
date: 2022-10-09
authors: "Andrew Long"
type: blog
tags: [GPE338, Unity, Game Programming]
summary: "Project 1 goes over looping concepts in Unity like Coroutines, Delegates, and Multithreading..."
tocEndlevel: 5
toc: true
---

# Project 1 Teachback
In this post, I'll be going over some C# and Unity concepts and expanding on how they are utilized and how I have used them.

I won't be providing the source code to my project, but there will be screenshots of the code and the output of that code when applicable.

## Coroutines:
{{< centerimg title="Coroutines in Unity project" src="./Coroutine.webp" >}}

### What's a coroutine?

A coroutine is a way of spreading tasks across multiple frames. It functions similarly to the `Update()` function provided by MonoBehaviour in that they execute code on individual frames.

They are different, however. You can run code across as many frames as you need with coroutines.

My code above runs like the `Update()`, so it's not very complex.

### Let's walk through the code:

The way I use coroutines is needlessly complex, but it works!

In the `Start()` function, I set my `IEnumerator inputCoroutine` equal to a reference to the `WaitForInput()` function.

Inside the `WaitForInput()` function is an infinite while loop that returns with `yield return null`, which will continue code execution on the next frame.

The rest of the function unsets the input of the previous frame, then scans the held inputs, and then sets the inputs again.

## Delegates:
{{< centerimg title="Demonstration of a delegate in Unity" margin="-1em" src="./Delegate.webp" >}}

### What's a delegate?
A delegate is a type that holds a reference to a function. A delegate can have multiple functions appended to it as well. The function references in a delegate execute from the top down.

### Let's walk through the code:
My usage of delegates is a bit pitiful, but it works as a decent demonstration.

The `onUse` delegate is defined as `delegate void onUse();`, sso the functions we want to cast to the delegate have to return nothing and take no arguments. As you can see, my `Error()` & `LaterUpdate()` functions adhere to the delegate definition, so they can be cast to the `useFlashLight` delegate.

My functions in the delegate are simple. All they do is print to the Unity console. This is why I called my demonstration pitiful, as delegates are much more powerful than what I'm using them for.

The output of the delegate to the Unity console looks like this:
{{< centerimg title="output of the delegate to the Unity console" width="70%" src="./Output-from-the-Delgate.webp" >}}

## Lambdas:
{{< centerimg title="Lambda being used as a compare function" src="./Lambda.webp" >}}

### What are lambdas?
Lambda functions can be super helpful in many different ways. Do you need a comparison function but don't want to write tons of functions you'll never use again? Do you have identical lines of code in multiple switch statement cases?

Well, you should be using lambdas!

Lambda functions are anonymous, meaning the lambda can not be called outside the function the lambda is defined in.

### Let's walk through the code:
In the code above, you can see a list of `IinventoryItems` named `inventorySpace`. The function `SortInvetory()` takes an enum of the sorting method, then a switch statement jumps to the method used. In those switch cases, they call the `Sort` method of the list object. The sort method takes a function as an argument, so this is where we use the lambda function.

My lambda functions take two arguments, `a` & `b`, the variables to be compared.

In the name sorting lambda, I compare the first char of both compared variables.

In the amount sorting lambda, I compare the number of items in the inventory slots passed to the lambda.

## Generics:
{{< centerimg title="Premade Generic in Unity" src="./Generics.webp" >}}

### What's a generic?
A generic is a way to get a compiler to generate code to conform to the passed data type.

Generics in Unity can be incredibly useful. Do you want to add two numbers together? But you don't want to write hundreds of functions that handle each data type you want to add together?

Use generics to make the compiler do that for you!

I personally have no use for generics in my game yet, so I'll be demonstrating the use of premade generics in my code walkthrough.

### Let's walk through the code:
The list of objects with an `IInventoryItem` interface uses generics to store said objects.

 The way it does this is that the compiler makes a new version of the List object that conforms to the `IInventoryItem` interface.

## Multithreading:
{{< centerimg title="Demonstration of multithreading in Unity" src="./Multithreading.webp" >}}

### What's Multithreading?
Multithreading is running code
{{< title "at the same time, dividing the task between threads" "concurrently" >}}
or in
{{< title "simultaniously" "parallel" >}}
on a
{{< title "Central Processing Unit" "CPU." >}}

Multithreading in Unity is a bit tricky. The Unity API is not thread-safe, meaning you can't use `RigidBody`,
`{{< title "The Unity API version of Vec3, anyway" "Vector3" >}}`
, or the
`{{< title "Again, the Unity API version" "Debug" >}}` namespace.

This is a massive detriment and limits the use of threads in Unity. With a cursory look around the internet, I only found a few usages for threads in Unity. Some include AI, pathfinding, and file operations; Out of the three, I could see file operations usage as the most useful.

### Let's walk through the code:
In the `Start()` function, we start by making a new thread that takes `ThreadFunction()` as an argument, then I start the thread.

In the `ThreadFunction()`, I put a lock on the code to ensure the function cannot be run on a separate thread without the thread already executing the code if it has yet to return. The while loop runs forever, checking if `counter` is equal to 1000 and setting `counter` to 0 if `counter` is. Incrementing count then waiting 1 millisecond.

Here is what `counter` looks like in the Unity editor:

{{< centerimg title="Choppy, low-quality gif of count incrementing to 1000 in one second" width="40%" src="./MultiThreadTest.gif" >}}

## Conclusion:
It's my first time writing something of this style, and I think I did, at best, ok.

It was rushed, the stylings hard to read, and the single GIF on this page is poor quality. I can't say much more other than I hope I can do better on project 2 teach back.
