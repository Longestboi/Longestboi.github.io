--- 
title: "Project 4: Game Programming Essentials"
date: 2022-12-07
authors: "Andrew Long"
type: blog
tags: [GPE338, Unity, Game Programming]
summary: "Project 4 goes over Unity concepts like Editor Scripting, Attributes and more..."
toc: true
---

# Project 4
{{< indent >}}
Project 4 is one of the easiest yet, that doesn't mean I didn't have any issues however. When I first tried to do something akin to property drawers, I immediately disregarded property drawers and went straight to editor scripting and it was the worst mistake I could have made. I did this well before Project 4 was even talked about, so maybe that's why I find the concepts here easy.
{{< /indent >}}

## Editor Scripting:

{{< centerimg title="Editor script for depreciation warning." src="./EditorScripting.webp" margin="-3em" >}}

{{< indent >}}Editor scripting can be easy, only if you make it easy. Editor scripting is also incredibly powerful, but if you would like to keep the rest of the editor intact while modifying on property, use a property drawer instead. {{< /indent >}}
{{< indent >}}In my own example, I keep the code super simple. I draw a warning, then I draw the regular editor inspector.{{< /indent >}}
{{< rawhtml >}}<div style="margin-top: -1em;"></div>{{< /rawhtml >}}
{{< centerimg title="Depreciation warning shown in inspector." src="./EditorScriptingDone.webp" margin="-5em" >}}

## Attributes:

{{< centerimg title="Multiple attributes." src="./Attributes.webp" margin="-3em" >}}
{{< indent >}}From hiding variables in the editor or using custom property drawers, there are many reasons to use attributes in Unity. In the code above I use an attribute and a custom property drawer to hide a property depending on an enum variables value.{{< /indent >}}
The inspector when the attributes are applied:
{{< rawhtml >}}<div style="margin-top: -2.5em;"></div>{{< /rawhtml >}}
{{< centerimg title="Custom property drawer in inspector" src="./Custom_Property_Drawer.webp" margin="-2em" >}}

## Property Drawer:
{{< centerimg title="Complex looking property drawer code." src="./EnumDraw.webp" margin="-1em" >}}
{{< indent >}}Property drawers in Unity are really useful if you need to change how one property is drawn. The code above looks absolutely insane, but all it does is get the value of an enum variable and disables the gui of the property if its value is passed to the attribute.{{< /indent >}}
This is the product of the code:
{{< rawhtml >}}<div style="margin-top: -2em;"></div>{{< /rawhtml >}}
{{< centerimg title="Custom property drawer in inspector" src="./Custom_Property_Drawer.webp" margin="-2em" >}}

## Bitmasking:
{{< centerimg title="Bitmasking code" src="./bitmask.webp" margin="-1em">}}
{{< indent >}}This certainly isn't the method of bitmasking you'd be expecting in Unity, but this is bit masking. This function finds the position of duplicate characters in a string. More documentation on the methodologies behind this function can be found [here](https://docs.google.com/document/d/1ZJhWrIwxs3e2ctn2m7Fqu29j7LCXNXrfgtt4Jq5dn6Q/edit?usp=sharing), written in Python3.{{< /indent >}}


With the code:
```C#
FindDuplicateChars.PrintList(
    FindDuplicateChars.FindDuplicateCharInString("tmpt")
);
```

prints out this:
{{< rawhtml >}}<div style="margin-top: -1em;"></div>{{< /rawhtml >}}
{{< centerimg title="Duplicates printed to the console" src="./duplicateFound.webp" margin="-3em">}}
{{< indent >}}The reason the duplicate is found at 3 and not 4, is because strings are zero indexed.{{< /indent >}}

## Scriptable Objects:

{{< centerimg title="Scriptable Object code" src="./ScriptableObjectCode.webp" margin="-3em" >}}
{{< indent >}}To create a scriptable object you need to add a `CreateAssetMenu` attribute above the `ScriptableObject` deriving class.{{< /indent >}}
{{< centerimg title="Scriptable Object code" src="./ScriptableObjectProperty.webp" margin="-1.5em">}}
{{< indent >}}The GameManager above has a references to the scriptable object and prints to the console if the debug setting in the scriptable object is true.{{< /indent >}}
{{< indent >}}To complete the reference, drag the scriptable object onto the pointer property in the inspector.{{< /indent >}}

{{< centerimg title="Scriptable Object code" src="./UnityScriptableObjectScreenshot.webp" margin="1em" >}}
{{< indent >}}Scriptable objects are not typically edited because they are used as psuedo templates, but in my case it is being edited because the scriptable object holds setting data.{{< /indent >}}
