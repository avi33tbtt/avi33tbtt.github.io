/*
  PROMPTS — shared prompt library for the Ward Chart Prompt Builder and the Prompts page.

  Add your prompts below as objects in the PROMPTS array. Each prompt looks like:

  {
    id: "socratic-case-01",        // unique, no spaces
    title: "Socratic Case Builder", // shown in the picker
    category: "Reasoning",          // shown as a small tag; group related prompts under the same category
    text: `Paste the full prompt text here.
You can use multiple lines.
Leave a placeholder like {{TOPIC}} if you want the Prompt Builder to
splice in the selected subject / chapter / topic automatically — otherwise
the tool will just append the selected topics after your prompt text.`
  },

  The Prompt Builder page (index.html) and the Prompts page (prompts/index.html)
  both read from this same PROMPTS array, so anything you add here shows up in both places.
  This file currently ships empty — add entries whenever you're ready.
*/

const PROMPTS = [
  // Example (commented out) — copy this shape for your own prompts:
  // {
  //   id: "example-prompt",
  //   title: "Example Prompt",
  //   category: "Example",
  //   text: "This is where your prompt text goes. Use {{TOPIC}} as a placeholder if you want."
  // },
];
