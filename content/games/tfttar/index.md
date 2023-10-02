---
title: "Tales From Teren: The Approaching Rot"
date: 2023-08-20
isgame: true
type: page
summary: "A visual novel built on ChoiceScript and uses Javascript extensively."
roles: ["Programmer"]
genre: "Visual Novel"
pannelImage: "TFTTAR.webp"
bannerImage: "TFTTAR.webp"
---

# Visual Novel

_The Approaching Rot_ is a visual novel set in the universe of Teren. As you play you play, you meet new characters, unlock passages in the codex, and gain stats. The game also has a fighting mechanic, although it's not fully implemented in this build.
{{< rawhtml >}}<hr class="dots">{{< /rawhtml >}}

# My Work

I was the lead programmer for TFTTAR, and as such, I implemented many of the systems used in the game.
As well, I had to find solutions to many of the things that we wanted to implement.
{{< rawhtml >}}<hr class="dots">{{< /rawhtml >}}

## Function Hooking

The ChoiceScript suite can be rather limiting if you want to add new features. So, I had to code a system that allows for the replacement of existing functions.

```javascript
function hookFunctions() {
    let hookedFuncs = [
        ["replaceBbCode", "replacementReplaceBbCode", "originalReplaceBbCode"],
        ["setButtonTitles", "replacementSetButtonTitles", "originalSetButtonTitles"],
        ["changeFontSize", "replacementChangeFontSize", "originalChangeFontSize"]
    ];

    // Is this particularly safe, probably not.
    // Do I care? ... :) 
    for(i in hookedFuncs) {
        eval('${hookedFuncs[i][2]} = ${String(window[hookedFuncs[i][0]])}');
        eval('${hookedFuncs[i][0]} = ${hookedFuncs[i][1]}');
    }
}
```

The first string in the `hookedFuncs` array is the name of the function, the second is the name of the function that adds on to the original function, and the last string is the name of the function that the original function gets moved to.

{{< rawhtml >}}<hr class="dots">{{< /rawhtml >}}

## ChoiceScript Scripting

{{< break >}}

### Chapter importing

The writers could not directly into the ChoiceScript format, so they had to write the chapters into a Google Doc and I would then import the chapter manually.

### Coding in ChoiceScript

Coding in ChoiceScript is a slog due in part to ChoiceScript's need to be intuitive to non-coders. However, since ChoiceScript has global variables and you can jump to functions regardless of where the function is, you can essentially simulate a machine code-like environment.

With this, I was able to implement skill checks, helper functions, and attribute updater functions.

{{< rawhtml >}}<hr class="dots">{{< /rawhtml >}}

# Last Build I worked on

{{< rawhtml >}}<iframe style="border: solid; border-width: .1em; border-color: var(--text-color); margin: 1em auto; margin-top: 0; display: block; height: calc(25em + .01px);" src="game/index.html" width="90%"></iframe>{{< /rawhtml >}}