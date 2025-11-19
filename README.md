# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #33-Exercise-Simplifying-Time-Calculations_mp4_3min_31sec ] - Refactor: Simplify Time Calculations

## Use the 'ms' library to simplify stale time configuration

Replaced manual calculation of milliseconds for `staleTime` with the **`ms`** library to make time values more readable and less error-prone.

### Key Changes:
* **Installation:** Installed the `ms` library and its development types (`npm i ms @types/ms -D`).
* **Update Hooks (`useGames.ts`, `useGenres.ts`, `usePlatforms.ts`):**
    * Imported `ms` from `"ms"`.
    * Updated the `staleTime` property in all `useQuery` and `useInfiniteQuery` calls to use `ms("24h")` instead of the manual calculation (`24 * 60 * 60 * 1000`), greatly improving code clarity.
* **Cleanup:** Removed unused imports (e.g., `useQuery` in `useGames.ts`).

# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
