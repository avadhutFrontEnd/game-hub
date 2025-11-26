# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #18-Exercise-Building-Game-Attributes_mp4_9min_53sec ] - Feature: Build Reusable Game Attributes Display

## Built a reusable structure for displaying game attributes (platforms, genres, metascore, publishers) using a semantic definition list pattern.

This feature encapsulates the UI pattern into two components: a reusable `DefinitionItem` and the main `GameAttributes` wrapper.

---

### Key Components:

1.  ### `<DefinitionItem />` (`src/components/DefinitionItem.tsx`)
    * **Purpose:** Provides a consistent layout for a single attribute pair (Term and Description).
    * **Semantic HTML:** Renders using a Chakra `<Box>` which contains a `<Heading as="dt">` (Definition Term) and a `<dd>` tag (Definition Description).
    * **Styling:** Applies `marginY={5}`, `fontSize="md"`, and `color="gray.600"` to the term for a subdued heading style.

2.  ### `<GameAttributes />` (`src/components/GameAttributes.tsx`)
    * **Purpose:** Renders all game attributes using the `DefinitionItem` in a two-column grid.
    * **Structure:** Uses a `<SimpleGrid columns={2} as="dl">` (Definition List) to contain the list of definition items.
    * **Content:** Renders Platforms, Metascore (using the existing `<CriticScore />`), Genres, and Publishers.
    * **Data Mapping:** Iterates over arrays (`genres`, `parent_platforms`, `publishers`) to display multiple items per attribute, using optional chaining (`?.`) where necessary.

### Data Model Updates:

* **`src/entities/Game.ts`:** Added the `genres: Genre[]` and `publishers: Publisher[]` properties.
* **`src/entities/Publisher.ts`:** Created a new entity interface defining `id` (number) and `name` (string).

### Integration (`src/pages/GameDetailPage.tsx`):

* The detail page was updated to render the game attributes below the expandable description:
    ```tsx
    <GameAttributes game={game}></GameAttributes>
    ```
This implementation ensures a highly organized, semantic, and reusable display of metadata.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
