# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 3. Global State Management (2h) ] [ Video: #22-Exercise-Setting-Up-a-Zustand-Store_mp4_6min_44sec ] - Setup: Zustand Store for GameQuery

## Set up a Zustand store (`useGameQueryStore`) to manage the application's global `GameQuery` object.

The first step in refactoring the Game Hub application to use Zustand has been completed by creating a dedicated store to hold and update the game query parameters. This moves the state out of the top-level `App` component.

---

### Key Steps:

1.  **Installation:** Installed the `zustand` library.
2.  **State Definition (`src/store.ts`):**
    * **Moved `GameQuery` Interface:** The `GameQuery` interface, which defines the shape of the query object (including optional `genreId`, `platformId`, `sortOrder`, and `searchText`), was moved from `App.tsx` to `store.ts`.
    * **Defined `GameQueryStore` Interface:** This interface defines the store's public API:
        * The state: `gameQuery: GameQuery`.
        * The actions: `setSearchText`, `setGenreId`, `setPlatformId`, `setSortOrder`.
3.  **Store Implementation:**
    * Used `create<GameQueryStore>` to initialize the store and exported the resulting hook as **`useGameQueryStore`**.
    * **Initial State:** Set `gameQuery` to an empty object `{}`.
4.  **Action Logic:**
    * **`setSearchText` Logic:** When the search text is updated, **all other filters are cleared** to ensure a focused search. This is achieved by returning a new `gameQuery` object with *only* `searchText` set:
        ```typescript
        setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
        ```
    * **Filter/Sort Logic:** For updating `genreId`, `platformId`, and `sortOrder`, the current state is preserved using the spread operator before applying the new value:
        ```typescript
        setGenreId: (genreId) => 
          set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
        ```

### Current Status:

The `src/App.tsx` component is currently in a broken state because the `GameQuery` interface and the local `useState` hook managing the game query were removed/modified but not yet replaced with the Zustand logic. This will be addressed in the next lesson.

---

The next lesson will involve consuming this new Zustand store in the application components to replace the old prop drilling and local state management.

Would you like to move on to the next lesson, which addresses integrating the `useGameQueryStore` into the application?



# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
