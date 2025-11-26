# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #23-Exercise-Refactoring-Entities_mp4_2min_29sec ] - Refactor: Convert Entity Interfaces to Default Exports

## Refactored all entity interfaces (`Game`, `Genre`, `Platform`, `Publisher`, `Screenshot`, `Trailer`) to use default exports instead of named exports.

This simplifies import statements across the project, following a common convention when a file has a single primary export.

---

### Key Changes:

1.  ### Entity Files Conversion
    * All entity interfaces in the `src/entities` folder were changed from `export interface EntityName` to **`export default interface EntityName`**.

2.  ### Import Statement Updates
    * All files referencing these entities (e.g., hooks, components, API client) were updated to use the simpler default import syntax:
        * **Before (Named Export):** `import { Game } from "../entities/Game";`
        * **After (Default Export):** `import Game from "../entities/Game";`

3.  ### Process
    * The impact of the change was first assessed using "Find All References" in VS Code to ensure all usages were updated correctly across the codebase.
    * All relevant import statements (in 15 files) were modified to reflect the default export pattern.

This refactoring enhances code readability and maintains consistency in how types are imported and used throughout the application.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
