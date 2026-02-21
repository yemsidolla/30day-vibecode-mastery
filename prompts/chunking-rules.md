# Chunking Strategy

Never ask for a full system in one prompt. Always break work into ordered chunks.

## Order of chunks

1. **Architecture** — High-level: layers, main modules, data flow. Output: diagram or bullet list.
2. **Folder structure** — Where files live. Output: tree or list of directories/files.
3. **One module** — One coherent piece (e.g. "auth module", "product list"). Output: files and exports.
4. **One function / one component** — Smallest unit. Output: single implementation.

## Rules

- One prompt = one chunk. Do not ask for "architecture + folder + first module" in one go.
- Review each chunk before asking for the next. Correct direction early.
- If the AI gives you more than you asked for, note it and next time add: "Only [chunk]. Do not implement [other chunks]."

## Example (blog app)

- **Chunk 1:** "Define the architecture for a small blog app: pages (list, post), data source (local/mock), and components. Output a short bullet list and ASCII diagram. No code."
- **Chunk 2:** "Given that architecture, propose a folder structure. Output only the folder/file tree. No code."
- **Chunk 3:** "Implement only the post list module: one component that reads mock data and renders titles. No routing yet."
- **Chunk 4:** "Implement only the single post view component. It receives a post id and displays title and body."
- **Chunk 5:** "Add the minimal routing (or app shell) that ties the list and post view together."

Use this pattern for any multi-part feature or app.
