---
title: "Pytris"
titleImageOverride: "Logo.webp"
titleImageStyle: "width: 40%; height: auto; margin: auto;"
date: 2024-07-14
type: page
summary: "A Tetris clone written in a custom performant Python engine made with Pygame"
roles: ["Creator", "Programmer"]
genre: "Puzzle"
pannelImage: "pytris-comp.webp"
bannerImage: "bkg.webp"
---

# Tetris Clone
_Pytris_ is a clone of the classic tetromino puzzle game Tetris. I built this game because my [previous attempt](/games/not-tetris/) at making a Tetris clone was incomplete. For this attempt, I've written an engine to be as performant as Python will allow, barring the usage of any JIT compilation techniques.

I've achieved this by utilizing Pygame's built-in sprite type, `DirtySprite`, and the `LayeredDirty` sprite group. The "Dirty" part of these types denotes when or if the sprite should get redrawn, stopping the renderer from wasting time constantly redrawing some sprites, like backgrounds and other static objects.

# Video Demo (Unfinished)

{{< rawhtml >}}
<video class="gen-padding" style="display:block; margin:0 auto;" src=Pytris.webm type=”video/webm” controls >
</video >
{{< /rawhtml >}}

{{< dots >}}

# Code Showcase

## Signal.py (Obeserver Pattern Object)
The observer pattern is an important design pattern in game programming; it allows code to call other code without knowing what owns the code it's calling, allowing for maximally uncoupled code. The uncoupled nature of the observer design pattern lowers the total number of dependencies a single object has; this is important in Python as the language cannot handle circular dependencies and will error out when they occur.

I designed this Signal class with the vision that an object could have multiple signals; if it were a base class, it would limit the number of signals an object could have. So, instead, I implemented the class to be instantiated as an object and then stored by an object, allowing it to have any number of signals.

```python
from typing import Callable, TypeVar, Generic, List, Any, Optional
from dataclasses import dataclass, field
from weakref import WeakMethod

from game_globals import WeakList

A = TypeVar("A", bound=Callable[..., None])

@dataclass
class Signal(Generic[A]):
    funcs: WeakList[WeakMethod[A]] = field(default_factory=WeakList)

    def emit(self, *args):
        for func_ref in self.funcs:
            func: Optional[Callable] = func_ref()
            if func is not None:
                func(*args)

    __call__ = emit

    @property
    def has_connections(self) -> bool:
        return len(self.funcs) != 0

    def connect(self, func: A | List[A]):
        try:
            if isinstance(func, list):
                for i in func:
                    # Continue attempting to add to list if a list element
                    # can't be wrapped in a WeakMethod
                    try:
                        self.funcs.append(WeakMethod[A](i))
                    except:
                        continue
            else:
                self.funcs.append(WeakMethod[A](func))
        except:
            pass

    def disconnect(self, func: A):
        if func in self.funcs:
            self.funcs.remove(func)

```

While implementing my signal class, I discovered an issue where a signal object stopped other objects from being deleted; this behavior occurs because the signal object is referencing methods of an object, and deleting the object would leave a dangling reference. Solving this lifetime issue was pretty easy, as Python offers a [`WeakMethod`](https://docs.python.org/3/library/weakref.html#weakref.WeakMethod) object that deletes itself when the data it's referencing dies.

The `WeakList` class is a redundancy measure, implemented by a simple one-liner: `class WeakList(List): ...` as Python doesn't have a WeakList class built-in. In all likelihood, this measure is probably unnecessary, but it's good to have some fallback.

The signal class has no init function because it utilizes the `dataclass` property, which auto-generates the init function. Creating the init function this way cleans up the code because it allows for the default initialization of fields without having to handle it yourself.

My signal class also has a bunch of type hints to make it easier for anyone using a Python language server to observe what parameters should get passed to the signal. 

## Typical Pytris Object Init Function
The typical Pytris object initialization function looks simple, and this is because the main game object handles a lot of the object necessities.
```python
def __init__(self, **kwargs):
    GameObject.__init__(self, **kwargs)

    self.bkg = GameObject(
        name="TetrominoBox Background",
        layer=game_globals.Layer.Middle,
        parent=self,
        image=pygame.image.load("assets/Box_test.png"),
    )

    self.sup_bkg = GameObject(
        name="Tetrominobox SuperBackground",
        layer=game_globals.Layer.Middle,
        parent=self.bkg,
        image=pygame.image.load("assets/Box_test_super.png")
    )

    self.sup_bkg.set_position((
        self.bkg.rect.centerx - (self.sup_bkg.rect.width / 2),
        0
    ))

    self.tetromino = GameObject(
        name="TetrominoBox Tetromino",
        layer=game_globals.Layer.Foreground,
        image=pygame.Surface((0, 0)),
        parent=self
    )
```

# Status
Currently the game is not available as I haven't had time to finish it. I'll update this page when I do.
