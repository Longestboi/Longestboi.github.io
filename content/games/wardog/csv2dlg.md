---
title: "CSV2DLG"
date: 2023-03-13
type: page
summary: "testing"
pannelImage: "../wardogss.webp"
bannerImage: "../wardogss.webp"
---
# CSV2DLG
CSV2DLG is a Python script that takes a formatted CSV file and parses it into a Ren'Py script file.
I wrote this script to make the lives of the designers slightly easier, or at least make it to where they didn't have to touch the code.
{{< dots >}}
# Formatting the Dialog File
Before using the CSV2DLG script, we need to make the dialog file. The dialog file is a `.XLSX` file for ease of modification, this dialog `.XLSX` file needs to be formatted in a special way for it to be understood by the parser.

Each of the rows below describe how differing lines are handled.

Guide:
: - The first line of the CSV gets ignored, so put the guide there so it doesn't get parsed as a variable.

Dialog:
: - This line starts with the variable name in the first column and the dialog string in the second one. The dialog string has no quotes around it.

Comment:
: - Denoted with a '**#**' in the first column and text in the second column, the comment is parse to a Ren'Py comment.

Space:
: - This blank line gets parsed as a newline in the Ren'py script.

{{< break >}}
```plaintext
┌─────────────────┬──────────────────────────────────┐
│  Variable Name  │         Dialog String            │◄ Guide
├─────────────────┼──────────────────────────────────┤
│ main_intro_1    │ ... <- dialog in variable        │◄ Dialog
├─────────────────┼──────────────────────────────────┤
│ #	          │ <- Hash denotes a comment        │◄ Comment
├─────────────────┼──────────────────────────────────┤
│                 │ Empty lines are parsed as Spaces │◄ Space
└─────────────────┴──────────────────────────────────┘
```
{{< dots >}}
# Using the CSV2DLG
Using CSV2DLG without any arguments results in an error, so to learn how to use it, pass `--help` or `-h` to the script.
```plaintext
usage: csv2dlg.py [-h] --csv CSV_FILE [--output output] [-y]

Parse dialog CSV to monolithic dialog script.

options:
  -h, --help            show this help message and exit
  --csv CSV_FILE, -i CSV_FILE
                        The CSV file to be converted
  --output output, -o output
                        The path where the script file should be output to
  -y                    Automatically confirm all actions
```
The script requires a CSV file to run, however an output file doesn't need to be. If an output file is not specified, the script will print the resulting dialog file to the terminal.

{{< dots >}}

# How the Script Works
