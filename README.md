# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h)] [Video: #27-Exercise-Removing-Duplicate-Interfaces_mp4_2min_57sec] - chore: Consolidate duplicate Platform interface definition

## chore: Consolidate duplicate Platform interface definition

**Refactor:**

* Removed the duplicate **`Platform` interface** definition from `src/hooks/useGames.ts`.
* Updated all files (`App.tsx`, `GameGrid.tsx`, `PlatformIconList.tsx`, `PlatformSelector.tsx`, and `useGames.ts`) to **import `Platform` exclusively from `src/hooks/usePlatforms.ts`**.
* Exported the `Platform` interface from `usePlatforms.ts` to allow external consumption.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
