---
title: "Project Wardog"
date: 2023-03-13
layout: wardog
type: list
summary: "A Ren'py game where you sell to both sides of a war so you can line your pockets with cash."
roles: "Programmer"
genre: "Visual Novel"
pannelImage: "wardogss.webp"
bannerImage: "wardogss.webp"
replace: {"%%csv2dlg%%": "CSV2DLG", "%%book-like%%": "Book-Like", "%%simple%%": "Simple-Dialog"}
---

# Project Wardog
Project Wardog is a game where you sell to both sides of a war between two factions. You had to carefully balance the number of weapons you sell to each war so the ongoing war doesn’t stop and you can keep lining your wallet. Before the game was sunset, Wardog would release on Steam, and the profits would have gone to Ukraine to help with the war. Unfortunately, we did not complete the game on time; This was attributed to multiple factors, but the one I heard the most was the lack of artists and their output.

I came on to this project in its 7th milestone. However, the class this game was made in tracked only the milestones I partook in, so I’ll give the class milestone first, then the actual milestones after.
{{< dots >}}
{{< break >}}

# Test Footage

{{< rawhtml >}}<div align=center>{{< /rawhtml >}}
### Milestone 2 (8)
{{< rawhtml >}}</div>{{< /rawhtml >}}

In milestone 2, most of the game states have been implemented; however, the credits and the bargain phase are not entirely complete. The game also doesn’t have a proper state machine to control where the player is in the game.

{{< youtube RcejHyOvabE >}}
{{< break >}}

# My Programming Work
This page is only for a simple overview of the game. If you want to learn more about the systems I’ve made for this game, click the headers.

{{< rawhtml >}}
<div style="display: flex; flex-direction: column; align-items: start;">
%%csv2dlg%%
<hr class="short-intro-line" style="width: 25%;">
</div>
{{< /rawhtml >}}

I wrote the CSV2DLG Python script to make the lives of the designers just a bit easier by putting all the dialog into a formatted CSV file so designers didn't have to touch the codebase to change the dialog.

{{< rawhtml >}}
<div style="display: flex; flex-direction: column; align-items: start;">
%%simple%%
<hr class="short-intro-line" style="width: 25%;">
</div>
{{< /rawhtml >}}

I had written the Simple-Dialog class was an effort to simplify the bargain phase's code and make it reusable for all characters.

{{< rawhtml >}}
<div style="display: flex; flex-direction: column; align-items: start;">
%%book-like%%
<hr class="short-intro-line" style="width: 25%;">
</div>
{{< /rawhtml >}}

I wrote the Book-Like class to simplify the making and upkeep of the binders in the game.

