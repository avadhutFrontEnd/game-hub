# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #30-Exercise-Implementing-Infinite-Scroll_mp4_5min_38sec ] - Feature: Implement Infinite Scroll

## Transitioned from "Load More" button to automatic infinite scrolling.

Replaced the manual pagination button with the **`react-infinite-scroll-component`** library for a smoother user experience, automatically fetching the next page of games as the user scrolls to the bottom of the list.

### Key Changes:
* **Installed `react-infinite-scroll-component` (v6.1).**
* **Refactor `GameGrid.tsx`:**
    * The `SimpleGrid` is now wrapped in the **`<InfiniteScroll>`** component.
    * Computed **`fetchedGamesCount`** using `data.pages.reduce()` to set the required `dataLength` prop.
    * Set `hasMore={!!hasNextPage}` to control when fetching should stop.
    * Set the `next` prop to `fetchNextPage()`, triggering the next API call automatically.
    * Set the `loader` prop to a Chakra UI **`<Spinner />`** for visual feedback while loading.
    * Removed the no-longer-needed "Load More" button and the wrapping `<Box>` component.
    * Moved padding from the removed `<Box>` to the `<SimpleGrid>`.
* **Update `useGames.ts` Hook:**
    * Added a **`staleTime`** of 24 hours (`24 * 60 * 60 * 1000`) to the `useInfiniteQuery` options to cache the game data for a longer duration.

# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
