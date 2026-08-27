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

The final asset structure has not yet been approved.

A possible structure is:

assets/

characters/

tilesets/

maps/

environment/

furniture/

exhibits/

ui/

audio/

effects/

The final structure must be determined during the appropriate planning phase.


# GRAPHICS

The definitive graphics system has not yet been approved.

Possible asset types include:

- PNG.
- Spritesheets.
- Texture atlases.
- Tilemaps.

Procedural graphics may be used temporarily for prototypes.

Procedural graphics must not automatically become part of the final visual system.


# PLAYER

The player system is expected to contain:

- Position.
- Movement.
- Direction.
- Animation state.
- Collision body.
- Interaction state.

The exact implementation has not yet been approved.


# PLAYER ANIMATIONS

The player is expected to support four directions:

- Down.
- Left.
- Right.
- Up.

Possible animation states:

- Idle.
- Walking.

The exact number of frames and animation speeds must be determined through approved decisions.


# WORLD

The museum is expected to use a tile-based world.

The final map system has not yet been approved.

Possible approaches include:

- Phaser Tilemaps.
- JSON map data.
- Tiled map exports.
- Programmatically constructed maps.

No approach should be considered definitive until approved and recorded in DECISIONS.md.


# COLLISION SYSTEM

The final collision implementation has not yet been approved.

Potential collision sources include:

- Tilemap collision layers.
- Static world objects.
- Furniture.
- Exhibits.
- Map boundaries.

The collision model should remain logically separated from visual decoration whenever practical.


# CAMERA

The museum requires a camera capable of following the player.

The following decisions are currently undefined:

- Follow behavior.
- Zoom.
- Camera bounds.
- Smoothing.
- Player screen position.
- Small-room behavior.

These must be approved before final implementation.


# INTERACTION SYSTEM

The museum requires an interaction system for exhibits and special objects.

A conceptual interaction flow is:

Player approaches object.

Object becomes interactable.

Visual indicator appears.

Player activates interaction.

Interaction handler executes.

Modal, demo, navigation, or special event occurs.

The exact implementation has not yet been approved.


# EXHIBITS

Exhibits should be data-driven where practical.

A conceptual exhibit may contain:

- id.
- displayName.
- description.
- visualAsset.
- interactionType.
- destination.
- metadata.

This is a conceptual model and is not yet an approved implementation.


# UI

The portfolio currently contains HTML and CSS UI components.

The final relationship between Phaser UI and HTML/CSS UI has not yet been approved.

Possible UI responsibilities include:

- Modals.
- Project information.
- Buttons.
- External navigation.
- Embedded demos.
- Interaction feedback.

Do not automatically move existing HTML UI into Phaser.

Do not automatically move Phaser UI into HTML.

The appropriate architecture must be evaluated first.


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

Current phase: GATE 0

Current status: NOT YET IMPLEMENTED

No definitive architecture should be assumed until the corresponding decisions are approved and recorded in DECISIONS.md.