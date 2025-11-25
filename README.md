# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #16-Exercise-Refactoring-Entities_mp4_2min_38sec ] - Refactor: Centralize Entity Interfaces

## Refactored the project structure by moving entity interfaces (Game, Platform, Genre) into a dedicated `entities` folder.

This removes circular dependencies between React Query hooks and centralizes data shape definitions, improving clarity and maintainability.

---

### Key Changes:

1.  ### Created `entities` Folder
    * A new `src/entities` directory was created to store type definitions.

2.  ### Moved Entity Interfaces
    * The `Game`, `Genre`, and `Platform` interfaces were extracted from their respective hook files (`useGames.ts`, `useGenres.ts`, `usePlatforms.ts`).
    * **VS Code Refactoring Trick:** The "Move to new file" refactoring command was used to automatically extract each interface into its own file (e.g., `Game.ts`) and update all necessary import statements across the project, preventing breaking changes.
    * These new files were then moved into the `src/entities` folder.

3.  ### Cleaned Up Hooks
    * Hooks like `useGame.ts` and `useGames.ts` now import the `Game` interface directly from `../entities/Game`, eliminating the cross-hook dependency.

This change adheres to better software architecture principles by separating concerns: hooks handle logic and data fetching, while entities handle data structure definitions.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
