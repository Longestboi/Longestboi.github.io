// @ts-nocheck
gdscript.displayName = 'gdscript'
gdscript.aliases = []

/** @type {import('../core.js').Syntax} */
export default function gdscript(Prism) {
  Prism.languages.gdscript = {
    comment: /#.*/,
    string: {
      pattern:
        /@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,
      greedy: true
    },
    'class-name': {
      // class_name Foo, extends Bar, class InnerClass
      // export(int) var baz, export(int, 0) var i
      // as Node
      // const FOO: int = 9, var bar: bool = true
      // func add(reference: Item, amount: int) -> Item:
      pattern:
        /(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m,
      lookbehind: true
    },
    nodepath: /\$\w+/,
    annotation:
      /(?:@tool|@icon|@static_unload|@onready|@export|@export_enum|@export_file|@export_dir|@export_global_file|@export_global_dir|@export_multiline|@export_placeholder|@export_range|@export_exp_easing|@export_color_no_alpha|@export_node_path|@export_flags|@export_flags_2d_render|@export_flags_2d_physics|@export_flags_2d_navigation|@export_flags_3d_render|@export_flags_3d_physics|@export_flags_3d_navigation|@export_flags_avoidance|@export_storage|@export_custom|@export_category|@export_group|@export_subgroup|@warning_ignore|@rpc)\b/,
    controlflow:
      /\b(?:continue|elif|else|for|if|match|return|while)\b/,
    keyword:
      /\b(?:and|as|assert|break|breakpoint|class|class_name|const|enum|extends|func|in|is|master|mastersync|not|null|or|pass|preload|puppet|puppetsync|remote|remotesync|self|setget|signal|static|super|tool|var|while|yield)\b/,
    function: /\b[a-z_]\w*(?=[ \t]*\()/i,
   // variable: /\$\w+/,
    number: [
      /\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/,
      /\b(?:INF|NAN|PI|TAU)\b/
    ],
    constant: /\b[A-Z][A-Z_\d]*\b/,
    boolean: /\b(?:false|true)\b/,
    operator: /->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,
    punctuation: /[.:,;()[\]{}]/
  }
}
