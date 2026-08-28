# 2D INTERACTIVE MUSEUM
# DECISION LOG


# PURPOSE

This file is the permanent record of important decisions made during the development of the 2D Interactive Museum.
The purpose of this file is to prevent important decisions from being lost in chat history.
Chat history is not considered the source of truth.
This document is the source of truth for approved project decisions.


# DECISION RULES

Only decisions explicitly approved by the user may be recorded as APPROVED.
Do not record proposals as approved decisions.
Do not record temporary ideas as approved decisions.
Do not silently create decisions.
Every important approved decision must be recorded before implementation.


# WHAT COUNTS AS AN IMPORTANT DECISION

Important decisions include:

- Visual direction.
- Pixel-art style.
- Perspective.
- Tile size.
- Character dimensions.
- Character proportions.
- Palette.
- Lighting.
- Asset strategy.
- Tilesets.
- Spritesheets.
- Map structure.
- Room layout.
- Camera behavior.
- Movement.
- Collision.
- Interaction systems.
- UI.
- Modal design.
- Portfolio integration.
- Technical architecture.
- Dependencies.
- Performance strategy.
- Project scope.


# DECISION FORMAT

Every decision must use this structure:

## DEC-001 - Decision Title

Status: APPROVED

Date: YYYY-MM-DD

Phase: GATE X

Decision:

Describe exactly what was approved.

Reason:

Explain why the decision was made.

Impact:

Explain which parts of the project are affected.

Notes:

Optional additional information.


# STATUS VALUES

Allowed statuses:

APPROVED

SUPERSEDED

REJECTED


# IMPORTANT RULE

Approved decisions must not be silently deleted.

If a later decision replaces an earlier decision, mark the previous decision as SUPERSEDED and explicitly reference the new decision (e.g., `SUPERSEDED by DEC-002`).


# TRACEABILITY RULE

When writing code that implements an important approved decision, the AI should include a brief comment in the code referencing the Decision ID (e.g., `// Implements DEC-001: 16x16 Tile Size`). This ensures developers can trace why a technical approach was chosen.


# APPROVED DECISIONS

## DEC-001 - Visual Identity and Artistic Direction

Status: APPROVED

Date: 2026-08-27

Phase: GATE 1

Decision:
The museum will feature a Cozy Cabin, Elegant and Classic style. It should avoid a run-down, old, or decayed aesthetic. It combines a warm, elegant developer's workshop with a polished gallery of classic design (clean wood, elegant structures, and warm decor).
Artistic Direction Phrase: "An elegant, classic cozy cabin gallery blending warm pixel-art aesthetics with a software developer's polished workshop."

Reason:
To create a welcoming, professional, and visually memorable experience that feels premium and matches the user's aesthetic preferences while staying clean and elegant rather than medieval/rustic decayed.

Impact:
This dictates the choice of tilesets, furniture, color palettes, and decorations. All assets must conform to clean, warm wood/stone/fabric aesthetics without visible decay or dust.

Notes:
Inspired by Stardew Valley shed/house interiors but with an elegant, classic developer spin.


## DEC-002 - Perspective, Resolution, and Grid Size

Status: APPROVED

Date: 2026-08-27

Phase: GATE 1

Decision:
1. Grid / Tile Size: 16x16 pixels.
2. Perspective: Top-down 3/4 perspective (standard for classic pixel-art games where front walls and top sides of furniture are visible).
3. Scale: Rendered pixel-perfect to ensure crisp assets on modern displays.

Reason:
It is the standard for cozy 2D pixel-art games (like Stardew Valley). Technically, 16x16 tiles have the highest availability of high-quality, compatible, and elegant asset packs (CC0/MIT licensable).

Impact:
Affects the Phaser camera settings, the tilemap configuration, coordinates of characters, hitboxes, collision layers, and design layout of the rooms.

Notes:
All sourced asset packs must strictly be 16x16 pixel-art under top-down 3/4 perspective.


## DEC-003 - Sourced Asset Packs Strategy

Status: APPROVED

Date: 2026-08-27

Phase: GATE 2

Decision:
1. Sourced Packs: Settle on a hybrid free-to-use (CC0/MIT) approach:
   - Base walls, floors, and rustic-elegant wooden furniture from "Sprout Lands" (by Cup Nooble).
   - Additional classic living room and kitchen items (sofas, rugs, bookshelves, fireplaces) from "Pixel Interior - Cozy 16x16" (by Bitglow).
2. Placeholder/TODO Policy: If a specific desired asset is missing during map/scene design, we will not block progress. Instead, we will label it with a `TODO:` comment in the code and use placeholder tiles/objects to be replaced with custom-designed pixel art or other free compatible assets later.

Reason:
Using proven free tilesets ensures immediate, risk-free legal compliance and visual consistency while providing high-quality cozy interiors. The placeholder policy prevents development roadblocks.

Impact:
Determines the directory naming and files to be added to `assets/tilesets/` and `assets/environment/`. Defines the look and feel of exhibits and furniture objects.

Notes:
Both packs are 16x16 and top-down 3/4 perspective, perfectly fitting DEC-001 and DEC-002.


## DEC-004 - Player Character Choice and Specifications

Status: APPROVED

Date: 2026-08-27

Phase: GATE 4

Decision:
1. Selected Sprite Sheet: `img/museum/characters/KnightMCAnimationsSHEET.png` (Knight character by jfranciPX).
2. Proportions: Realistic 16x24 pixel character (less cartoonish/chibi) matching Stardew Valley styles.
3. Grid Specifications:
   - Frame Size: 48x48 pixels (centered player body).
   - Columns: 8 columns (8 frames of animation).
   - Rows: 12 rows (representing 3 animations of 4 directions each).
   - Row 0-3: Idle (Down, Up, Left, Right)
   - Row 4-7: Run/Walk (Down, Up, Left, Right)
   - Row 8-11: Death (Down, Up, Left, Right)
4. Animation mapping: Walk will map to the Run cycle (Rows 4-7), and Idle will map to the Idle cycle (Rows 0-3).

Reason:
To fit the user's preference for a less cute, more realistic/classic dark fantasy RPG look that contrasts well with the museum gallery, while keeping a high frame count (8 frames) for smooth movement animations.

Impact:
Affects player physics body size (which will be set to match the 16x24 character proportions, e.g. 16 width, 12-16 height offset), camera focus offset, and scene sprite sheet configurations in Phaser loader.

Notes:
The Aseprite source file (`DFKnightPlayerAnimations.ase`) is also available in the character folder for reference or future edits.


## DEC-005 - Technical Asset Architecture

Status: APPROVED

Date: 2026-08-27

Phase: GATE 5

Decision:
1. Folder Structure: All game assets live inside `img/museum/` for repository insulation:
   - `img/museum/tilesets/` for floor/wall/furniture textures.
   - `img/museum/characters/` for player spritesheets.
   - `img/museum/maps/` for map data.
2. File Formats:
   - Images: 32-bit RGBA PNG files.
   - Tilemaps: Tiled-compatible orthogonal JSON format (`tilemapTiledJSON`).
3. Conventions:
   - File naming: Lowercase with underscores (e.g., `knight_player_sheet.png`, `wooden_house.png`).
   - Phaser texture keys: Directly match the filename without the file extension (e.g., `"knight_player_sheet"`, `"wooden_house"`).
4. Loading Policy: Centralized `PreloadScene` displaying a styled loading bar on the Canvas to guarantee assets are fully ready before starting the museum scene.

Reason:
To establish clean, predictable technical naming and folder paths that ensure consistent loading behaviors in Phaser 3, preventing directory pollution.

Impact:
Affects file names on disk, asset keys in code, and loader instructions inside the Phaser initialization scene.

Notes:
No residual generator scripts or temporary files were found, meaning no cleanup actions were necessary in this gate.


## DEC-006 - Museum Conceptual Layout and Project Distribution

Status: APPROVED

Date: 2026-08-28

Phase: GATE 6

Decision:
1. Room Distribution:
   - **Lobby/Entrance**: Spawn area with instructions sign.
   - **Main Hall**: Features two primary project displays:
     - Left: **Soy yo Digital** (Smartphone pedestal).
     - Right: **Toffi Automation System** (Classic vintage computer desk display, replacing Spaced Lingo).
   - **Right Wing**:
     - **Natural Enemies** (Laboratory desk/agriculture exhibit).
     - **Retro Arcade Area** (Cabinets/screens).
   - **Secret Room**: Cozy fireplace and sofa area hidden behind a sliding bookcase in the Right Wing. Includes an interactive picture linking to `/ask/index.html`.
2. Sizing Constraints:
   - Map size: ~50x40 tiles (camera bounds matching).
   - Passages and doors: At least 3 tiles wide to ensure easy collision navigation.

Reason:
Focuses the main gallery on the portfolio's highest priority web/desktop projects, organizes them logically into distinct rooms, and adds a fun easter egg while maintaining comfortable player navigation.

Impact:
Determines the design of the JSON map layers, placement of exhibit colliders, and interactive event triggers.

Notes:
Spaced Lingo has been removed from the map for now.


## DEC-007 - Gameplay and Interaction Systems

Status: APPROVED

Date: 2026-08-28

Phase: GATE 7

Decision:
1. Controls & Physics:
   - Input keys: WASD and Arrow Keys.
   - Movement: Arcade Physics, walking speed set at 130 pixels/sec with normalized diagonal movement.
2. Camera Configuration:
   - Camera follow: Centered on player with LERP follow smoothing of 0.1.
   - Zoom level: Fixed at 3x scale.
   - Bounds: Locked to the 50x40 map edges.
3. Collision Rules:
   - Player hitbox: Adjusted to 16x12 pixels centered at the player's feet (allowing depth layering).
   - Solid colliders: Walls, outer boundaries, pedestals, arcade machines, heavy tables, and wardrobes.
   - Impassable/passable assets: Rugs, flower pots (small), floor paths are passable.
4. Interaction Flow:
   - Distance: 1.5 tiles (24-32 pixels) trigger.
   - Activation keys: SPACEBAR, ENTER, or E.
   - Interface: Floating speech bubble with `[SPACE]` or `[E]` key prompts fades in above the interactable asset.
   - Action: Locks player control, overlays HTML/CSS-based description modal, and unlocks movement when closed.

Reason:
Provides a fluid, standard web-game control scheme with polished camera interpolation, proper visual sorting (2.5D depth), and accessible project detail viewing.

Impact:
Affects the physics configuration of the player sprite, camera initialization logic, input listener bindings, and DOM overlay rendering functions.

Notes:
None.


## DEC-008 - Portfolio Content, Privacy, and Demo Strategy

Status: APPROVED

Date: 2026-08-28

Phase: GATE 8

Decision:
1. Sourced Projects & Privacy Constraints:
   - All three projects (Soy yo Digital, Toffi Automation System, Natural Enemies) are closed-source/commercial private software. 
   - No direct links to private source code repositories will be provided in the portfolio.
2. Demo and Action Strategy:
   - **Soy yo Digital** & **Natural Enemies**: The "Primary Action" will be "Open Mini-Demo". This will launch a tiny, local, self-contained frontend segment/mockup page hosted on this static website (no live backend required, demonstrating layout/UI capabilities and highlighting backend features through design).
   - **Toffi Automation System**: The "Primary Action" will be "View Architecture" (modal information only). No live demo or external links will be included.
3. Tech Stack Corrections:
   - **Toffi Automation System**: Settle on "VB.NET / Visual Studio" as the correct stack.
   - **Soy yo Digital**: Python, Django, PostgreSQL, React JS, AWS.
   - **Natural Enemies**: Python, Flask, C#, MariaDB, PHP, Linux.
4. Language Requirement:
   - All modal text, descriptions, and user-facing UI will be written strictly in English.

Reason:
To protect intellectual property and respect non-disclosure agreements with clients/employers, while still providing prospective employers with a high-fidelity visual understanding of the user's past backend and frontend integration achievements.

Impact:
Determines the content structure of the game's interactive modals and prompts the future creation of simple, mock-up HTML demo sub-pages.

Notes:
None.


## DEC-009 - User Interface Design

Status: APPROVED

Date: 2026-08-28

Phase: GATE 9

Decision:
1. Typography:
   - UI Headers and Labels: `'Press Start 2P', monospace`.
   - Body/Project Descriptions: `'Pixelify Sans', sans-serif` (for maximum readability).
2. Modal Frame (HTML/CSS Overlay):
   - Background: Semitransparent black background sheet overlaying the game canvas.
   - Dialog Box Background: Warm dark-brown `#2e1f15`.
   - Borders: 3px double style (black outer, warm gold `#d4a373` inner line).
   - Corners: Crisp 90-degree sharp corners.
   - Drop Shadow: Solid flat black offset shadow (`box-shadow: 6px 6px 0px #000`).
3. Buttons:
   - Close Button: Square red-brick `#c1121f` button in top-right position.
   - Action Buttons: Gold background, dark text, with a mechanical press hover state (shifts down/right by 2px with corresponding shadow adjustment).
4. World Indicator (Bobbing speech bubble):
   - Prompts player when near a solid exhibit pedestal.
   - Design: Cream `#fefae0` box, dark green border, displaying `[SPACE] INTERACT` or `[E] INTERACT`.
   - Animation: Floats up and down gently.
5. Iteration Policy: All UI components are subject to adjustments based on visual testing in staging/production, allowing fast tweaks if a component does not fit the game feeling.

Reason:
Creates a high-fidelity retro console/RPG visual theme, ensures text readability, and maintains a flexible development workflow to adjust elements during integration.

Impact:
Determines the styling rules inside the site's stylesheet (`css/`) and the DOM elements appended by the game's interaction triggers.

Notes:
None.


# DECISION HISTORY

New decisions must be added chronologically.

When a new decision is approved:

1. Assign the next available DEC number.
2. Record the decision.
3. Update ARCHITECTURE.md if the decision affects technical architecture.
4. Continue implementation only after the decision is documented.


# SOURCE OF TRUTH

If a decision is not recorded in this file, the AI must not assume that it has been permanently approved.

The AI must ask the user if there is uncertainty.

Do not reconstruct important decisions solely from memory or old conversations.