# Day 3 – Exercise

## Reference

Use the chunking rules: [../../prompts/chunking-rules.md](../../prompts/chunking-rules.md).

## Chunks (do one prompt per chunk)

**Chunk 1 – Architecture**

Prompt: "Define the architecture for a small blog app: pages (e.g. list of posts, single post), data source (local/mock JSON), and main components. Output a short bullet list and optional ASCII diagram. No code."

Review the output before continuing.

**Chunk 2 – Folder structure**

Prompt: "Given that architecture, propose a folder structure for the blog app. Output only the folder/file tree. No code."

Review and adjust if needed.

**Chunk 3 – Post list module**

Prompt: "Implement only the post list: one component that reads mock data (e.g. array of posts with id, title, body) and renders the list of titles. No routing yet. Use the folder structure we defined."

**Chunk 4 – Single post view**

Prompt: "Implement only the single post view component. It receives a post (or post id) and displays title and body. No routing yet."

**Chunk 5 – App shell / routing**

Prompt: "Add the minimal app shell or routing that ties the post list and single post view together (e.g. list on index, click opens post view). Use the existing components; do not rewrite them."

## Save

Put the full blog app in [../../apps/blog](../../apps/blog).
