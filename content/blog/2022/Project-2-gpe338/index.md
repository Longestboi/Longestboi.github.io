---
title: "Project 2: Game Programming Essentials"
date: 2022-10-30
authors: "Andrew Long"
type: blog
tags: [GPE338, Unity, Game Programming]
summary: "Project 2 goes over some generic class and file loading concepts..."
toc: true
---

<!-- Header -->
# Project 2
{{< indent >}}This project, the first without a given title, was surprisingly easy. It did make me stretch a bit as I haven't embedded videos in HTML before. Did you know you have to have a video muted just for it to play? It doesn't even play if the video has no audio!{{< /indent >}}

<!-- Loading From JSON -->
## Loading From JSON:
{{< centerimg title="Json Loader class in my loader namespace" src="./JsonLoad.webp" margin="-1.2em" >}}
{{< indent >}}For whatever reason, I couldn't get regular JSON loading through Unity's resource loader. So, I used bog standard C# functions.

To get JSON data from a file, call the `jsonLoad.GetJsonFromPaths()` function.

I've implemented this class like this in my playerSave class:{{< /indent >}}
{{< rawhtml >}}<div style="margin-top: -2em; overflow: hidden;"></div>{{< /rawhtml >}}
{{< centerimg title="Demo code for Json Loader" src="./LoadingFromJson.webp" >}}
Here is what the code looks like when running in the game:
{{< rawhtml >}}<div style="margin: 1em 0 1em 0"></div>{{< /rawhtml >}}
{{< centervid title="Demo of demo code above" src="./JSONSave.webm" width="90%" >}}
{{< break >}}


<!-- Loading From Resources -->
## Loading From Resource Folder:
{{< centerimg title="Resource Loader class in my loader namespace" src="./TextureLoad.webp" margin="-1.2em" >}}
{{< indent >}}Loading assets from the resource folder is relatively easy. All you have to do is pass the path of the asset to the `Resources.Load` function.{{< /indent >}}
{{< indent >}}Just remember that the path of the resources folder is relative to `Assets/Resources` in your Unity project. Also, don't pass the file extension with the file path.{{< /indent >}}
My implementation uses the function above like so:
{{< centerimg title="Demo code for Resource folder loading" src="./LoadFromResources.webp" margin="-1.2em">}}
Here is what the code looks like when running in the game:
{{< rawhtml >}}<div style="margin: 1em 0 1em 0"></div>{{< /rawhtml >}}
{{< centervid title="Demo of demo code above" src="./TextureLoad.webm" width="90%" >}}

<!-- Using Interfaces -->
## Using Interfaces:
{{< centerimg title="Inventory item interface" src="./Interface.webp" margin="-1.2em" >}}
{{< indent >}}Interfaces are like classes in that they can be inherited. They are different in a few ways, though. Interfaces don't contain function definitions. Instead, they contain function declarations. The functions inherited have to be defined inside the inheriter.{{< /indent >}}

<!-- Using Namespaces -->
## Using Namespaces:
{{< centerimg title="Namespace example in my Unity project" src="./namespace.webp" margin="-1.2em" >}}
{{< indent >}}Namespaces allow you to import all of the classes inside the namespace into another C# script.{{< /indent >}}
{{< indent >}}I've implemented namespaces to separate my loading functions and ordering them under specific classes.{{< /indent >}}

<!-- Getters & Setters -->
## Getters and Setters:
{{< centerimg title="Getters and Setters in my playerSave struct" src="./GetterAndSetter.webp" margin="-1.2em" >}}
{{< indent >}}Getters and Setters are functions that *get* and *set* private variables.{{< /indent >}}
{{< indent >}}I've used getters and setters to interact with a private variable when the programmer sets or gets a public variable.{{< /indent >}}
{{< break >}}

<!-- Four principles -->
# Four Principals of Object Oriented Programming
{{< indent >}}I've seperated out two of the principles because because of the way I've implemented them.{{< /indent >}}

<!-- E & A -->
## Encapsulation and Abstraction:
{{< centerimg title="An image representing 2/4 principals of OOP" src="./OOPAbstraction.webp" margin="-1.2em" >}}
{{< break >}}

<!-- OOP Encapsulation -->
### Encapsulation:
{{< indent >}}Encapsulation is making variables public, private, or protected.{{< /indent >}}
{{< indent >}}The way it's implemented here is pretty simplistic. I've made the text of the JSON file private, so anything outside the function can't modify it.{{< /indent >}}

<!-- OOP Abstraction -->
### Abstraction:
{{< indent >}}Abstraction is the process of making private variables accessible through public functions.{{< /indent >}}
{{< indent >}}The way I've implemented abstraction is a bit different than most examples. I've used a public variable and its getters and setters to interact with the private variables.{{< /indent >}}

<!-- I & P -->
## Inheritence and Polymorphism:
{{< centerimg title="An image representing 2/4 principals of OOP" src="./OOP.webp" margin="-1.2em" >}}
{{< break >}}

<!-- OOP Inheritance -->
### Inheritence:
{{< html-indent >}}Inheritance is when you make a class derive from another class. It <em>inherits</em> <span class="underline-nh" title="variables">properties</span> and <span class="underline-nh" title="functions">methods</span> from the parent class.{{< /html-indent >}}
{{< indent >}}My `FlashLight` class above inherits from my `item` class. The `item` class provides variables like `itemName`, which stores the item name.{{< /indent >}}

<!-- OOP Polymorphism -->
### Polymorphism
{{< html-indent >}}Polymorphism in <span class="underline-nh" title="Object-oriented Programming">OOP</span> is both overloading and overiding functions.{{< /html-indent >}}
{{< indent >}}Overloading a function is when you make a function with the same name but give it different parameters. This is to give a single function multiple uses under the same function.{{< /indent >}}
{{< indent >}}Overriding is used when a virtual function is defined in a parent class, and you need to change the function to conform to what the current class needs.{{< /indent >}}

