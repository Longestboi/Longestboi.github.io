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

# Video (?)
*Video of it here???*

# Game
*Link or embedded game here...*
