# 2D INTERACTIVE MUSEUM
# TECHNICAL ARCHITECTURE


# PURPOSE

This document describes the technical architecture of the 2D Interactive Museum.
The three main project documents have different responsibilities.
PLAN.md describes what needs to be done.
DECISIONS.md describes what has been approved.
ARCHITECTURE.md describes how the system is technically structured.


# CURRENT STATUS

The museum is currently being rebuilt from a clean baseline.
The definitive technical architecture has not yet been approved.
Current status:
DESIGN IN PROGRESS


# TECHNOLOGY

The museum is expected to use Phaser 3.
The exact Phaser version must be confirmed during GATE 0.
The surrounding portfolio continues to use:

- HTML5.
- Vanilla JavaScript ES6+.
- Modern CSS.


# GAME STRUCTURE

The final Phaser structure has not yet been approved.
Potential conceptual structure:

Game

Boot

Preload

Main Scene

Player

Camera

World

Collision System

Interaction System

Exhibits

UI

Audio

This is only a conceptual proposal.


# ASSET STRUCTURE

The assets for the 2D Interactive Museum are stored inside the `img/museum/` directory of the portfolio to align with the repository structure:

img/museum/
├── characters/   (For player and npc spritesheets)
├── tilesets/     (For Sprout Lands and Cozy 16x16 PNG tilesets)
└── maps/         (For JSON tilemap files)

This structure is approved under DEC-003.


# GRAPHICS

The graphics system is defined by:
- Grid/Tile Size: 16x16 pixels (DEC-002).
- Perspective: Top-down 3/4 perspective (DEC-002).
- Artistic Style: Elegant, cozy, clean classic cabin gallery (DEC-001).

Approved asset types include:
- PNG.
- Spritesheets.
- Texture atlases.
- Tilemaps.

Procedural graphics may be used temporarily for prototypes.

Procedural graphics must not automatically become part of the final visual system.


# PLAYER

The player system contains:
- Position.
- Movement.
- Direction.
- Animation state.
- Collision body: sized and offset to match the 16x24 character sprite.
- Interaction state.

The player sprite sheet is `img/museum/characters/KnightMCAnimationsSHEET.png` (DEC-004), loaded as a 48x48 pixel grid spritesheet.


# PLAYER ANIMATIONS

The player supports 4-directional animations (Down, Up, Left, Right) using 8 frames per animation cycle (DEC-004):
- **Idle**: Mapped to rows 0-3 of the sheet (Down, Up, Left, Right). Uses an 8-frame loop.
- **Walking (Run)**: Mapped to rows 4-7 of the sheet (Down, Up, Left, Right). Uses an 8-frame loop.
- **Death**: Mapped to rows 8-11 of the sheet (Down, Up, Left, Right). Uses an 8-frame loop.

Animations are created in Phaser using the spritesheet keys and set to loop smoothly at 8-10 frames per second.


# WORLD

The museum is built as a tile-based world using a 16x16 grid (DEC-002).

The final map format and layout have not yet been approved.

Possible approaches include:
- Phaser Tilemaps.
- JSON map data.
- Tiled map exports (e.g., Tiled editor).
- Programmatically constructed maps.

No approach should be considered definitive until approved and recorded in DECISIONS.md.


# COLLISION SYSTEM

The collision system is implemented using Phaser Arcade Physics (DEC-007):
- **Player Hitbox**: Resized to 16x12 pixels centered at the feet of the knight (16x24 character sprite) to allow realistic depth layering/overlap behind vertical solid structures.
- **Colliders**:
  - Tilemap wall collision layers (Tiled JSON colliders).
  - Heavy environment assets (bookcases, pedestals, screens, fireplaces, fences).
  - Map boundaries.
- **Passables**: Rugs, paths, small flowers/grass, and floor trims. The collision model is stored separately in the map data layer.


# CAMERA

# CAMERA

The camera configuration is established as follows (DEC-007):
- **Follow Behavior**: Centered on the player sprite.
- **Smoothing (LERP)**: Interpolation set at 0.1 for organic camera acceleration/deceleration.
- **Zoom**: Fixed at 3x scale.
- **Bounds**: Constrained strictly to the map size boundaries (50x40 tiles / 800x640 pixels raw).


# INTERACTION SYSTEM

The interaction system connects player inputs with exhibit displays (DEC-007):
- **Trigger Range**: 1.5 tiles (24-32 pixels) from the target coordinate.
- **Keys**: SPACEBAR, ENTER, or E.
- **Visual Feedback**: Floating speech bubble showing `[SPACE]` or `[E]` fades in above the interactable asset when in range.
- **Effect**: Locks player controls, activates the HTML/CSS modal overlay, and releases controls when closed.


# EXHIBITS

Exhibits are defined programmatically using a data-driven JSON structure loaded by Phaser (DEC-008). 

Each exhibit contains:
- `id`: unique string key (e.g., `"exhibit_soyyo"`).
- `displayName`: display name in English.
- `projectType`: category (Web App, Desktop Utility, etc.).
- `description`: English text highlighting backend architecture, telemetry, or features.
- `techStack`: string array of programming languages and frameworks.
- `actionType`: `"demo"` (opens a local static mockup subpage) or `"details"` (only shows modal text).
- `actionUrl`: relative path to local demo page (e.g. `demos/soyyo_mock.html`) or null.
- `visualAsset`: sprite key associated with the exhibit's representation in the game world.

Concrete Exhibits Data Mapping:
1. `exhibit_soyyo`: Soy yo Digital | techStack: Python, Django, PostgreSQL, React, AWS | actionType: `"demo"` | actionUrl: `demos/soyyo.html`
2. `exhibit_toffi`: Toffi Automation System | techStack: VB.NET, Visual Studio | actionType: `"details"` | actionUrl: null
3. `exhibit_enemies`: Natural Enemies | techStack: Python, Flask, C#, MariaDB, PHP, Linux | actionType: `"demo"` | actionUrl: `demos/enemies.html`


# UI

The user interface of the 2D Interactive Museum utilizes a hybrid HTML/CSS and Phaser canvas approach (DEC-009):
- **Phaser Canvas UI**: Used for in-world floating interaction bubbles (`[SPACE] INTERACT` or `[E] INTERACT`), which bob and follow the player/pedestals dynamically.
- **HTML/CSS Modal Overlay**: Used for project details and demo screens. Appended directly over the Phaser Canvas in the DOM to ensure maximum responsiveness, selectability, and accessibility.
- **Styling Specs**:
  - Fonts: `'Press Start 2P'` for titles, `'Pixelify Sans'` for body copy.
  - Dialog Frame: Dark brown `#2e1f15` background, sharp corners, double border (outer black 3px, inner gold `#d4a373`), and flat black `6px 6px 0px #000` drop shadow.
  - Controls: Red-brick close button, golden mechanical action buttons with hover translate transforms.
- **Modals Interaction**: Triggers disable game inputs (keyboard listener capture is suspended), and closing them releases the Phaser key capture.


# PORTFOLIO INTEGRATION

The museum should act as an interface to the portfolio rather than duplicating entire projects inside the museum.

Possible exhibit destinations include:

- Information modal.
- Embedded demo.
- External project page.
- Interactive experience.
- Project URL.

The final strategy must be approved.


# MOBILE

Mobile support must be considered separately from desktop controls.

Potential systems include:

- Virtual D-pad.
- Touch interaction button.
- Responsive HTML UI.
- Dynamic camera scaling.

The final implementation must be defined during the Mobile phase.


# AUDIO

The final audio architecture has not yet been approved.

Potential audio categories include:

- Music.
- Ambient sound.
- Footsteps.
- Interaction sounds.
- UI sounds.
- Special event sounds.


# PERFORMANCE

The museum should prioritize:

- Efficient asset loading.
- Reasonable texture sizes.
- Minimal unnecessary runtime generation.
- Minimal unnecessary dependencies.
- Efficient camera rendering.
- Mobile performance.

Specific performance decisions must be documented here when approved.


# LEGACY SYSTEMS

The existing project may contain legacy procedural graphics and temporary systems created during previous experiments.

These systems must be audited before deletion.

A possible legacy system is:

assets-generator.js

It must not be deleted blindly.

Before deleting it, determine:

1. What depends on it.
2. What it generates.
3. Whether generated assets are still required.
4. Whether the new asset system replaces it.

After replacement, obsolete systems should be removed completely.


# ARCHITECTURE CHANGE RULE

When an approved decision materially changes the architecture:

1. Record the decision in DECISIONS.md.
2. Update this document.
3. Implement the change.
4. Update PLAN.md.


# DIRECTORY & DEPENDENCY STRICTNESS

1. No new top-level directories or major structural changes can be introduced into the project without a corresponding update to this document and an approved decision in DECISIONS.md.
2. Any new external library, framework, CDN link, or asset pack must be explicitly documented in this architecture file under a dependencies section once approved.


# DEPENDENCIES

Approved external dependencies for the 2D Interactive Museum:
- **Sprout Lands - Asset Pack** (by Cup Nooble): Sourced for base wood walls, floors, and rustic-elegant furniture (DEC-003). License: Free (CC0).
- **Pixel Interior - Cozy 16x16** (by Bitglow): Sourced for refined indoor elements (sofas, fireplaces, carpets, bookshelves) (DEC-003). License: Free (Personal/Commercial).


# CURRENT CONSTRAINTS

The museum is part of a larger portfolio repository.

Independent sub-project folders must remain isolated unless explicitly requested.

All user-facing interface text must be in English.

Important visual decisions require user approval.

Important project decisions must be recorded.

The museum must maintain a coherent visual language.

The final system should avoid unnecessary procedural graphics.

Git should be used as a safety mechanism throughout development.


# CURRENT ARCHITECTURE STATUS

Current phase: GATE 11

Current status: IMPLEMENTED (Core game loop, player animation sheets, collision arrays, camera follow behaviors, HTML modals, and mockup telemetry demos complete; currently evaluating audio/feedback additions under DEC-001 through DEC-009)