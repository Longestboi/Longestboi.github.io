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
_Pytris_ is a clone of the classic tetromino puzzle game Tetris. I built this game because my [previous attempt](/games/not-tetris/) at making a Tetris clone was incomplete. For this attempt, I've written an engine to be as performant as Python will allow me to, barring the usage of any JIT compilation techniques.

I've achieved this by utilizing Pygame's built-in sprite type, `DirtySprite`, and the `LayeredDirty` sprite group. The "Dirty" part of these types denotes when or if the sprite should get redrawn, stopping the renderer from wasting time constantly redrawing some sprites, like backgrounds and other static objects.

# Code Showcase

## Signal.py (Obeserver Pattern Object)
My signal object, inspired by Godot's object of the same name, is implemented in just a few lines because Python's Dynamic typing allows implementing it with relative ease.
```python
from typing import Callable
import inspect

class Signal():
    def __init__(self, function_definition: Callable):
        self.function_definition = function_definition
        self.funcs = []

    def emit(self, *args):
        for func in self.funcs:
            func(*args)

    def connect(self, func: Callable):
        self.funcs.append(func)
```

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
