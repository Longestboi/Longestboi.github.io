---
title: "Book-Like"
date: 2023-03-13
type: page
summary: "testing"
pannelImage: "../wardogss.webp"
bannerImage: "../wardogss.webp"
---
# Book-Like
The Book-Like class came about when the codebase had two identically written book interfaces. Writing this class to be stable was a nightmare in the beginning. Stability issues arising from a lack of familiarity with Ren’Py were the bain of this class for a little while.
{{< dots >}}

# Using the Book-Like Class
A book needs to be constructed with an interactor screen and non-interactable pages. The interactor screen contains the interactable elements necessary for closing and changing pages.

The classes init function takes the interactor screens name, the name of the layer the book will be displayed on, and finally, the names of the screen pages in a list.

Example code:
```python
purchase_binder_book = BookLike(
    "purchase_binder_interact",
    "purchase_binder_layer",
    [
        "purchase_binder_page_1",
        ...
    ]
)
```
The book-like class requires three buttons in the interactor screen; the close, next, and previous buttons. For the buttons to be recognized, they return a string corresponding to the button type.

The page turn buttons themselves need to have thier id set to the corresponding button so they get hidden on the right pages.
```rpy
screen purchase_binder_interact():

    layer "purchase_binder_layer"
    zorder 100

    frame id "next_butt":
        xalign .99
        yalign .92
        xanchor "right"
        yanchor "center"
        textbutton "Next->":
            clicked renpy.ui.returns("next")
            activate_sound "audio/sfx/sfx_button_press_low.ogg"

    frame id "prev_butt":
        xalign 0.01
        yalign .92
        xanchor "left"
        yanchor "center"
        textbutton "<-Previous":
            clicked renpy.ui.returns("prev")
            activate_sound "audio/sfx/sfx_button_press_low.ogg"

    frame:
        xalign .99
        yalign 0.01
        xanchor "right"
        yanchor "top"
        textbutton "Close Purchase Binder":
            clicked renpy.ui.returns("close")
            activate_sound "audio/sfx/sfx_button_press_low.ogg"
```
The pages can be made of any screen, they can even have interactable widgets too.
{{< dots >}}

# Demonstration
## Purchase binder
{{< centerimg title="Purchase binder demo" width="100%" src="../Purchase_Binder.webp" >}}
The purchase binder has a custom button at the top of the screen. 

## Stock binder
{{< centerimg title="Stock binder demo" width="100%" src="../Stock_Binder.webp" >}}

{{< dots >}}

# Difficulties Implementing the Class

Ren'Py screen language is a difficult thing to master. The documentation for the screen language is also not that great, so instead of trying to decipher the documentation, I decided to read the source code in an attempt to hide the buttons that change the page.
{{< dots >}}
