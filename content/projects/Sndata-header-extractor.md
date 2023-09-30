---
title: "Sndata Converter"
date:  Sep 18, 2020
authors: "Andrew Long"
type: page
summary: "This script is designed to extract the debug header section of PS2 game built with the SN Systems toolchain."
tags: "Reverse Engineering"
---

{{< articleheader "Sndata Header section." >}}
{{< indent >}}
The SN Systems PRODG PS2 SDK will leave a section header labeled ".sndata" this header section contains debug symbols.
The section header is, unfortunately, proprietary. However, based on the work of [Kiwidoggie](https://twitter.com/diwidog/status/1188831332635267072), I've written a Python script to go to the section header and find the memory address location of the functions and function names. Then, take those functions and function names and put them into a ".txt" for Ghidra or a Python script for IDA (untested).
{{< /indent >}}

A link to my script is here: [Sndata-converter.py](https://github.com/Longestboi/sndata-converter)

{{< articleheader "List games with .sndata header sections" >}}
Click on the game title to view debug symbols in Ghidra format

<!-- SNDATA to Ghidra Script -->
<!-- Start of retail games list -->
{{< articlesubheader "rtgame" "Retail games" >}}

{{< rawhtml >}}
<div>
  <link rel="stylesheet" href="/css/pastebin.css">

  <style>
    summary > div.sum-name-sect {
      display: inline-flex;
    }

    .sum-name {
      padding-right: .3em;
    }

    .sernum {
      font-size: .7em !important;
      display: flex;
      align-items: center;
      color: var(--text-color-80);
    }
  </style>

  <!-- MLB 2005 -->
  <details>
    <summary>
      <div class="sum-name-sect">
        <div class="sum-name">MLB 2005</div>
        <span class="sernum">SCUS-97326</span>
      </div>
    </summary>
    {{< pastebin "w1QFmZRg" >}}
  </details>

  <!-- MLB 2006 -->
  <details>
    <summary>
      <div class="sum-name-sect">
        <div class="sum-name">MLB 2006</div>
        <span class="sernum">SCUS-97347</span>
      </div>
    </summary>
    {{< pastebin "zMA4HdPy" >}}
  </details>

  <!-- My Street -->
  <details>
    <summary>
      <div class="sum-name-sect">
        <div class="sum-name">My Street</div>
        <span class="sernum">SCUS-97212</span>
      </div>
    </summary>
    {{< pastebin "FwcNDKpi" >}}
  </details>

  <!-- Neopets: the Darkest Faerie -->
  <details>
    <summary>
      <div class="sum-name-sect">
        <div class="sum-name">Neopets: the Darkest Faerie</div>
        <span class="sernum">SCUS-97367</span>
      </div>
    </summary>
    {{< pastebin "qWTc572a" >}}
  </details>

  <!-- Resident Evil 4 -->
  <details>
    <summary>
      <div class="sum-name-sect">
        <div class="sum-name">Resident Evil 4</div>
        <span class="sernum">SLUS-21134</span>
      </div>
    </summary>
    {{< pastebin "m27NN2Bu" >}}
  </details>

  <!-- Start of demo games list -->
  {{< break >}}
  {{< articlesubheader "demos" "Demos" >}}

  <!-- AFL Premiership 2006 -->
  <details>
    <summary>
      <div class="sum-name-sect">
        <div class="sum-name">AFL Premiership 2006</div>
        <span class="sernum">SCES-54068</span>
      </div>
    </summary>
    {{< pastebin "Mg44RWCU" >}}
  </details>

  <!-- MLB 2006 -->
  <details>
    <summary>
      <div class="sum-name-sect">
        <div class="sum-name">MLB 2006</div>
        <span class="sernum">SCUS-97460</span>
      </div>
    </summary>
    {{< pastebin "QFxTd3pT" >}}
  </details>

  <!-- Neopets: the Darkest Faerie -->
  <details>
    <summary>
      <div class="sum-name-sect">
        <div class="sum-name">Neopets: the Darkest Faerie</div>
        <span class="sernum">SCUS-97469</span>
      </div>
    </summary>
    {{< pastebin "v7WakwLg" >}}
  </details>
</div>

{{< /rawhtml >}}
