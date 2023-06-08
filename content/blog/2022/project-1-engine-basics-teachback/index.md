---
title: "Project 1: Engine Basics Teachback"
date: 2022-09-25
authors: "Andrew Long"
type: blog
tags: [VRT310, Unity, Game Programming]
summary: "This article is about installing Unity on Linux..."
toc: true
---

# The Basic Setup of Unity VR on Linux
{{< centerimg title="Unity Logo" src="logo-unity-web.webp" width="60%" >}}
{{< indent >}}Getting Unity up and running on Linux is incredibly easy. To start, we'll install Unity Hub & Unity. Next, we'll import libraries and settings for VR. After that, we'll import an art asset into our scene. Lastly, we'll import & activate VR controls which will allow the player to look around our scene. So let's get started!{{< /indent >}}

## Installing Unity on Linux:
{{< indent >}}To start, you'll want to install Unity Hub. It can be installed in a few ways. You can run the Unity Hub from an appimage by going to <a class="underline" href="https://unity3d.com/get-unity/download">Unity3D.com</a>, clicking download Unity Hub, then running: <br><code>./unityhub.appimage</code> in the directory of the appimage.{{< /indent >}}

The other way of installing Unity Hub is through a package manager.

On Ubuntu run this line to add the Unity Hub repository:
```bash
$ sudo sh -c 'echo "deb https://hub.unity3d.com/linux/repos/deb stable main" \ 
    > /etc/apt/sources.list.d/unityhub.list'
```

then, add the public key with:
```bash
$ wget -qO - https://hub.unity3d.com/linux/keys/public | sudo apt-key add -
```

now, update your package cache and install the package:

```bash
$ sudo apt update
$ sudo apt-get install unityhub
```

If you are on any other Linux distro besides Debian based ones, refer to the [Unity3D docs](https://docs.unity3d.com/hub/manual/InstallHub.html#install-hub-linux).

## Creating a new project:
{{< centerimg title="Unity's New projects page." src="./unity-new-project-page.webp" >}}
{{< indent >}}It's super simple to create a new project in Unity. Open the Unity Hub and under the projects tab on the left side, click the blue "New Project" button.{{< /indent >}}
{{< centerimg title="Creating a new project in Unity." src="./unity-create-project-page.webp" >}}
{{< indent >}}Once your in the New project dialog, scroll down to VR and click on it, click "Download template", change the project name, and finally, click the "Create project" button!{{< /indent >}}

## Importing assets into your project:
{{< centerimg title="New unity project in the editor" src="./new-unity-project-editor.webp" >}}

{{< indent >}}Importing assets into your project is also incredibly easy. To start make a folder for your textures named <code>Textures</code>. Then, get the texture you want to import and drag it into the newly created folder.{{< /indent >}}
{{< indent >}}The texture I'll be importing is one that I made a while ago. The texture is one of the tiles in my old dorm room.{{< /indent >}}

{{< centerimg title="Beige_Tile.jpg" width="50%" src="./Beige_Tile.webp" >}}
{{< break >}}
When following the instructions above I get this:

{{< centerimg title="Beige_Tile.jpg successfully imported into Unity!" src="./unity-succsessful-texture-import.webp" >}}

Our texture was successfully imported into Unity!

Now, to use it, drag it onto the "plane" object in either the heirarchy or scene window.

Then you get:
{{< centerimg title="Beige_Tile.jpg Texture succsessfully applied to the plane object!" src="./unity-succsessful-texture-application.webp" >}}

Our imported texture is now applied to the plane! To get modify how it looks on the plane, select the plane object. Then in the inspector window, click on the material drop down.

## Conclusion:
{{< indent >}}After all of that, You should be able to mess around with VR development in Unity. If you have any issues my contact information is in the <a class="underline" href="/about/">about</a> section of this website.{{< /indent >}}
