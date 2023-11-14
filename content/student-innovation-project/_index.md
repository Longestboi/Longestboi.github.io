---
title: "Engine Agnostic CVD Shader"
type: page
bannerImage: ""
---

# Project Description

The Engine-agnostic Color Vision Deficiency Accessibility Shader is a collection of shader scripts that interface between game engine shader APIs and the core color vision deficiency accessibility algorithms and associated functions or data. The shader collection uses the High-Level Shader Language – HLSL – to leverage its ability to call in code from other shader files,  allowing for the definition of a standard interface. The agnostic shader is valuable to the developers who did not have colorblindness in mind when designing their games and want accessibility features quickly.

{{< dots >}}

# Innovation Claim

My shader is innovative because it allows developers to quickly implement accessibility for those with color vision deficiency regardless of the game engine/software.

{{< dots >}}

# Visualization

The chart below is how the shader will work. By writing engine specific scripts that interface with a common algorithm, you can make the implementation of CVD accesibility shaders easier as you don't have to write your own shader code. Since the core part of the script is the same, the color shifting is consistent across all engines.

{{< centerimg src="CVD-Shader-Diagram.svg" >}}

{{< dots >}}

# Pre-SIP Demo
{{< youtube 1_xaPLQxerc >}}

