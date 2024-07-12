---
title: "About Me"
type: page
---

# Howdy!
{{< indent >}}
My name is Andrew Long, and I am a game programmer interested in lower-level game engine programming. I haven't worked in the games industry yet, but I have programmed a few games from scratch in Python and Pygame.
{{< /indent >}}

{{< dots >}}

# Skill set

{{< rawhtml >}}

<style>
.skill-container {
    --border-radius: .5em;
    --border-width: .1em;
    --border-style: solid;
    --border-color: var(--text-color-20);
    
    --text-padding: .5em;
    --skill-bkg: var(--bg-color-70);

    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-wrap: wrap;
    flex-shrink: 0;
    margin-bottom: var(--gen-bottom-padding);
}

.skill-subsection {
    min-width: 28%;
    background-color: var(--skill-bkg);
    margin: .5em;
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
}

.skill-subsection > .blog-head-2-wrapper {
    display: flex;
    flex: 1 1;
    width: 100%;
    border-bottom: var(--border-width) var(--border-style) var(--border-color);
}

.skill-subsection > .blog-head-2-wrapper > head2 {
    padding-left: var(--text-padding);
    padding-right: var(--text-padding);
    padding-top: calc(var(--text-padding) / 4);
    padding-bottom: calc(var(--text-padding) / 4);
}

.skill-subsection > ul {
    padding: var(--text-padding);
}
</style>

<div class="skill-container">
    <div class="skill-subsection">
        <div class="blog-head-2-wrapper">
	    <head2 class="blog-head-2">Languages:</head2>
        </div>
        <ul>
            <li>Rust</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>C#</li>
            <li>JavaScript</li>
        </ul>
    </div>
    <div class="skill-subsection">
        <div class="blog-head-2-wrapper">
            <head2 class="blog-head-2">Game Engines:</head2>
        </div>
        <ul>
            <li>Godot</li>
            <li>Unity</li>
            <li>Unreal Engine</li>
        </ul>
    </div>
    <div class="skill-subsection">
        <div class="blog-head-2-wrapper">
            <head2 class="blog-head-2">Operating Systems:</head2>
        </div>
        <ul>
            <li>Linux/POSIX</li>
            <li>Windows</li>
        </ul>
    </div>
</div>
{{< /rawhtml >}}

{{< dots >}}

# About the site
{{< indent >}}
This site was statically generated using [hugo](https://gohugo.io/) and a custom theme. Because the theme is custom and tested with FireFox, some graphical aspects of this website may not render properly in other browsers... Blame Google.
{{< /indent >}}
