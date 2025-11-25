# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #17-Exercise-Building-Expandable-Text_mp4_5min_32sec ] - Feature: Build Reusable Expandable Text Component

## Built a reusable `<ExpandableText />` component to summarize long game descriptions with a "Read More/Show Less" toggle button.

This component encapsulates the logic for summarizing text and managing its expanded state locally.

---

### Key Changes:

1.  ### Created `<ExpandableText />` Component (`src/components/ExpandableText.tsx`)
    * **Local State:** Used `useState` (`expanded`) to manage the expanded/collapsed state of the text.
    * **Logic:**
        * Defined a `limit` of 300 characters.
        * If the text length is within the limit, the full text is displayed.
        * If the text is long, it calculates the `summary` based on the `expanded` state, appending `...` to the summarized version.
    * **Safety Check:** Added a check to return `null` if no `children` (text) is passed, preventing errors on null/undefined access.

2.  ### Toggle Functionality
    * The **`Show Less`** / **`Read More`** button toggles the `expanded` state using `setExpanded(!expanded)`.
    * **Styling:** Applied Chakra UI props (`size="xs"`, `fontWeight="bold"`, `colorScheme="yellow"`) to style the button attractively.

3.  ### Implementation (`src/pages/GameDetailPage.tsx`)
    * The `game.description_raw` text was passed as a child to the new component:
        ```tsx
        <ExpandableText>{game.description_raw}</ExpandableText>
        ```

This provides a clean, self-contained way to handle verbose text throughout the application without cluttering the page components.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
