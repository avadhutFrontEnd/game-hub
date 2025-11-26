# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #21-Exercise-Improving-the-Layout_mp4_1min_43sec ] - Style: Improve Game Detail Page Responsive Layout

## Improved the layout of the Game Detail Page by organizing content into a responsive two-column grid.

This enhances readability and visual appeal on medium and large devices while maintaining a clean single-column layout on smaller screens.

---

### Key Changes:

1.  ### Implemented Responsive Grid (`src/pages/GameDetailPage.tsx`)
    * Replaced the top-level `<>` fragment with a **`<SimpleGrid>`** component.
    * Configured the grid to be responsive:
        * **Small Devices (`base`):** `1` column.
        * **Medium/Larger Devices (`md`):** `2` columns.
        ```typescript
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        ```
    * Added `spacing={5}` for visual separation between columns.

2.  ### Grouped Content into Columns
    * **Left Column (`<GridItem>`):** Contains core text content and attributes:
        * Game Name (`<Heading>`), Description (`<ExpandableText>`), and Attributes (`<GameAttributes>`).
    * **Right Column (`<GridItem>`):** Contains multimedia content:
        * Trailer (`<GameTrailer>`) and Screenshots (`<GameScreenshots>`).

This refactoring successfully finalizes the structure of the Game Detail Page for a better user experience across all device sizes.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
