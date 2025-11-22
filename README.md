# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #23-Exercise-Removing-Props_mp4_12min_03sec ] - Refactor: Eliminate Prop Drilling using Zustand

## Successfully refactored the Game Hub application to eliminate prop drilling by accessing the `GameQuery` state directly from the Zustand store.

The refactoring process involved removing the `useState` management from the top-level `App` component and updating all dependent components to use the `useGameQueryStore` hook and selectors. This resulted in cleaner component interfaces and centralized state logic.

---

### Key Refactoring Changes:

1.  **`App.tsx` Simplification:**
    * Deleted the `useState` hook managing `gameQuery`.
    * **Removed all `gameQuery` props** passed to child components (`<NavBar />`, `<GenreList />`, `<PlatformSelector />`, `<SortSelector />`, `<GameGrid />`, `<GameHeading />`). The component now only manages layout.

2.  **Component State Access (Using Selectors):**
    * **State Consumers (Read Only):** Components like `GameHeading`, `GenreList`, `PlatformSelector`, and `SortSelector` now use selectors to read only the specific parts of the state they need (e.g., `s.gameQuery.genreId`, `s.gameQuery.platformId`, `s.gameQuery.sortOrder`). This prevents unnecessary re-renders when unrelated parts of the store change.
        * *Example in `GameHeading.tsx`*:
          ```typescript
          const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
          ```

3.  **Component Action Access (Using Selectors):**
    * **State Modifiers:** Components that trigger state changes (e.g., `SearchInput`, `GenreList`) now use selectors to access only the relevant setter function (`setSearchText`, `setGenreId`, etc.). This ensures the component only re-renders if the function itself were to change (which it won't in this case), avoiding unnecessary dependency on the entire store object.
        * *Example in `SearchInput.tsx`*:
          ```typescript
          const setSearchText = useGameQueryStore((s) => s.setSearchText);
          // ... call setSearchText(ref.current.value) on submit
          ```

4.  **Backend Integration (`useGames.ts` Hook):**
    * The custom `useGames` hook was refactored to remove the `gameQuery` argument.
    * The hook now fetches the entire **`gameQuery` object directly from the store** using a selector:
        ```typescript
        const gameQuery = useGameQueryStore((s) => s.gameQuery);
        ```
    * By including `gameQuery` in the React Query's `queryKey: ["games", gameQuery]`, any change to the `gameQuery` object automatically triggers a re-fetch of game data, maintaining the application's core functionality.

---

This refactoring successfully **centralized the `GameQuery` logic** and eliminated **prop drilling**, leading to much cleaner and simpler component definitions.

Would you like to continue with the next lesson on building a scalable data fetching architecture?



# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
