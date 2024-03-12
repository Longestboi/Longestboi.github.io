---
title: "Shader Template Exporter"
titleImageOverride: "./Stex-rs_light.svg"
titleImageStyle: "width: 55%; height: auto; margin: auto;"
type: page
bannerImage: ""
bannerColor: "#0c0112"
---

## Project Description
The Shader Template Exporter is a collection of shader script snippets to be inserted into templates dynamically and exported to any given output directory. The exporter offers a Color Vision Deficiency Accessibility Shader as an example generic core and template.  

The shader template exporter is designed to make it easier to use basic shaders in most game engines.

{{< dots >}}

## Implementation of the Shader Exporting
Shader exporting is similar to how static website generators work, take a template and operate on it depending on the context. By having a tag in the template file – something like `// <% core_here %>` – the exporter can place the core into the template where the user specifies.

The shader exporter will have a singular 

Interface example:
```hlsl
/* template/Unity.hlsl */

// <% core_here %>

void main() {
	/* Shader code here! */
}
```

Core example:
```hlsl
/* cvd/core.hlsl */

float3 RGB_to_LMS(float3 rgb) ...
float3 LMS_to_RGB(float3 lms) ...

float3 Daltonize(float3 lms, int type) ...
```

Result from the generation :
```hlsl
/* gen/Unity_gen.hlsl */

float3 RGB_to_LMS(float3 rgb) ...
float3 LMS_to_RGB(float3 lms) ...

float3 Daltonize(float3 lms, int type) ...

void main() {
	/* Shader code here! */
}
```

