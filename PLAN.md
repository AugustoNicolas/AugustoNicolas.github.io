# 2D INTERACTIVE MUSEUM
# DEVELOPMENT PLAN


# PROJECT GOAL

Create a polished 2D interactive museum that represents the portfolio as a small top-down exploration game.

The visitor should be able to:

- Explore the museum.
- Discover exhibits.
- Interact with projects.
- View project information.
- Access demos or external projects.
- Discover optional areas and secrets.

The experience should feel intentionally designed rather than procedurally assembled.


# DEVELOPMENT RULE

The project is developed through sequential phases.

Every phase ends with a GATE.

The AI may analyze, research, compare alternatives, propose solutions, and prepare documentation.

The AI must NOT implement the next phase without explicit user approval.

If an important decision is undefined:

STOP AND ASK.


# GATE 0
# PROJECT AUDIT

Status: IN PROGRESS

Objective:

Understand the existing project before modifying anything.

Tasks:

- [ ] Identify the Phaser version.
- [ ] Identify the game entry point.
- [ ] Identify Phaser initialization.
- [ ] Identify current Phaser scenes.
- [ ] Identify asset loading.
- [ ] Identify image assets.
- [ ] Identify spritesheets.
- [ ] Identify texture atlases.
- [ ] Identify tilemaps.
- [ ] Identify procedural graphics.
- [ ] Identify assets-generator.js.
- [ ] Identify player movement.
- [ ] Identify player animations.
- [ ] Identify collisions.
- [ ] Identify camera behavior.
- [ ] Identify interaction systems.
- [ ] Identify modal systems.
- [ ] Identify temporary code.
- [ ] Identify reusable code.
- [ ] Identify obsolete code.
- [ ] Identify dependencies between systems.

Required deliverable:

The AI must provide an audit explaining:

- Current architecture.
- Current graphics system.
- Current gameplay systems.
- Current UI system.
- Reusable components.
- Obsolete components.
- Risks.
- Recommended cleanup strategy.

The AI must not modify code during this gate.

GATE 0 approval is required before continuing.


# GATE 1
# ART DIRECTION

Status: COMPLETED

Objective:

Define the visual language before selecting definitive assets.

Decisions required:

- [x] Exact top-down perspective.
- [x] How much of the top of the character is visible.
- [x] Character body proportions.
- [x] Wall representation.
- [x] Floor representation.
- [x] Furniture representation.
- [x] Object representation.
- [x] Base tile size.
- [x] Character dimensions.
- [x] Door dimensions.
- [x] Furniture scale.
- [x] Interactive object scale.
- [x] Render scale.
- [x] Pixel-art detail level.
- [x] Outline style.
- [x] Shadow style.
- [x] Lighting style.
- [x] Contrast.
- [x] Saturation.
- [x] Dithering policy.
- [x] Floor palette.
- [x] Wall palette.
- [x] Wood palette.
- [x] Stone palette.
- [x] Metal palette.
- [x] Plant palette.
- [x] Lighting palette.
- [x] Interaction colors.
- [x] Special-area colors.
- [x] Architectural style.
- [x] Overall mood.
- [x] Materials.
- [x] Decorative language.
- [x] Retro influence.
- [x] Unique museum identity.

Required deliverable:

A written art-direction specification.

All important visual decisions must be recorded in DECISIONS.md.

No definitive visual assets may be integrated before approval.


# GATE 2
# ASSET STRATEGY

Status: COMPLETED

Objective:

Determine where the definitive visual assets will come from.

Possible strategies:

- Existing asset pack.
- Custom-created assets.
- AI-generated assets.
- Hybrid approach.

Evaluate:

- [x] Visual consistency.
- [x] Resolution.
- [x] Perspective.
- [x] Scale.
- [x] Asset coverage.
- [x] Licensing.
- [x] Customization requirements.
- [x] Long-term maintainability.
- [x] Ability to expand the museum later.

Required deliverable:

A recommendation comparing the available asset strategies.

No definitive asset integration before approval.


# GATE 3
# ENVIRONMENT AND TILESET

Status: COMPLETED

Objective:

Select and approve the environment system before building the final map.

Tileset requirements:

- [x] Floor.
- [x] Floor variations.
- [x] Walls.
- [x] Wall corners.
- [x] Borders.
- [x] Doors.
- [x] Transitions.
- [x] Decorative tiles.

Environment object requirements:

- [x] Tables.
- [x] Chairs.
- [x] Plants.
- [x] Shelves.
- [x] Pedestals (to be represented by placeholder crates, tracked with TODO).
- [x] Display cases (to be represented by placeholder desks/crates, tracked with TODO).
- [x] Paintings (to be represented by placeholder wall decorations, tracked with TODO).
- [x] Computers (to be represented by placeholder desks/books, tracked with TODO).
- [x] Screens (to be represented by placeholder desks, tracked with TODO).
- [x] Arcade machines (to be represented by placeholder cabinets, tracked with TODO).
- [x] Decorative objects.

The chosen environment assets must be evaluated as a complete visual system.

Do not approve individual assets in isolation.

All important asset decisions must be recorded in DECISIONS.md.


# GATE 4
# PLAYER CHARACTER

Status: COMPLETED

Objective:

Define and approve the player character before integration.

Decisions required:

- [x] Sprite dimensions.
- [x] Character proportions.
- [x] Head size.
- [x] Body size.
- [x] Leg proportions.
- [x] Feet proportions.
- [x] Clothing.
- [x] Colors.
- [x] Silhouette.
- [x] Detail level.
- [x] Perspective.
- [x] Relation between character scale and environment scale.

Animations required:

- [x] Idle Down.
- [x] Walk Down.
- [x] Idle Left.
- [x] Walk Left.
- [x] Idle Right.
- [x] Walk Right.
- [x] Idle Up.
- [x] Walk Up.

The player must visually belong to the same world as the environment.

All important character decisions must be recorded in DECISIONS.md.


# GATE 5
# TECHNICAL ASSET ARCHITECTURE

Status: COMPLETED

Objective:

Define how definitive assets are stored, named, loaded, and used.

Potential folder structure:

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

This structure is a proposal and must be adapted to the final architecture.

Decisions required:

- [x] Asset folder structure.
- [x] PNG policy.
- [x] Spritesheet policy.
- [x] Texture atlas policy (none for now, load directly).
- [x] Tilemap format.
- [x] Map data format.
- [x] Asset naming convention.
- [x] Phaser texture naming.
- [x] Loading strategy.
- [x] Preload strategy.

Cleanup tasks:

- [x] Remove procedural generation if obsolete (none found).
- [x] Remove temporary assets (none found).
- [x] Remove dead code (none found).
- [x] Remove assets-generator.js if obsolete (none found).
- [x] Verify that no existing functionality depends on removed systems.

All architectural decisions must be recorded in DECISIONS.md and ARCHITECTURE.md.


# GATE 6
# MUSEUM LAYOUT

Status: COMPLETED

Objective:

Design the museum layout before implementing the final map.

Potential spaces:

- Entrance.
- Reception.
- Main exhibition hall.
- Project area.
- Retro zone.
- Special area.
- Secret area.
- Corridors.
- Exits.

Player flow decisions:

- [x] Spawn location.
- [x] First impression.
- [x] First point of interest.
- [x] Exploration order.
- [x] Optional areas.
- [x] Locked areas.
- [x] Unlock conditions.
- [x] End point.

Scale decisions:

- [x] Total map dimensions.
- [x] Room dimensions.
- [x] Corridor width.
- [x] Exhibit spacing.
- [x] Interaction space.
- [x] Camera boundaries.

Required deliverable:

A conceptual museum layout.

The conceptual layout must be approved before implementation of the final map.


# GATE 7
# GAMEPLAY SYSTEMS

Status: COMPLETED

Movement decisions:

- [x] Keyboard controls.
- [x] Controller support (not active for now).
- [x] Touch controls (deferred to GATE 12).
- [x] Movement speed.
- [x] Animation speed.
- [x] Direction handling.
- [x] Idle behavior.

Camera decisions:

- [x] Follow behavior.
- [x] Zoom.
- [x] Camera bounds.
- [x] Smoothing.
- [x] Player screen position.
- [x] Small-room behavior.

Collision decisions:

- [x] Walls.
- [x] Furniture.
- [x] Exhibits.
- [x] Objects.
- [x] Map boundaries.
- [x] Traversable objects.

Interaction decisions:

- [x] Interaction distance.
- [x] Interaction input.
- [x] Visual indicator.
- [x] Interaction animation.
- [x] Interaction sound (deferred to GATE 11).
- [x] Feedback behavior.


# GATE 8
# PORTFOLIO CONTENT

Status: COMPLETED

Objective:

Define exactly what each exhibit represents.

Potential projects:

- Soy Yo Digital.
- Toffi Automation System (replacing SpacedLingo).
- Natural Enemies.

For every exhibit define:

- [x] Project name.
- [x] Description.
- [x] Image.
- [x] Project type.
- [x] Interaction.
- [x] Modal.
- [x] External URL (none, repositories are private).
- [x] Demo (local frontend mocks for Soy Yo and Natural Enemies).
- [x] Visual content.
- [x] Primary action (demo launcher or text detail only).

The final project list must be explicitly approved.


# GATE 9
# UI DESIGN

Status: COMPLETED

Objective:

Design the user interface as part of the museum experience.

Decisions required:

- [x] Modal design.
- [x] Panel design.
- [x] Button design.
- [x] Typography.
- [x] Icons.
- [x] Borders.
- [x] Shadows.
- [x] Animations.
- [x] Interaction indicators.
- [x] Messages.
- [x] Responsive behavior.

The UI may be inspired by pixel-art game interfaces but must have its own identity.

No final UI implementation before approval.


# GATE 10
# DEFINITIVE IMPLEMENTATION

Status: COMPLETED

Implementation may begin only after the relevant visual, gameplay, architectural, and content decisions have been approved and documented.

Implementation order:

- [x] Integrate approved assets.
- [x] Configure preload.
- [x] Configure spritesheets or texture atlases.
- [x] Configure animations.
- [x] Create tilemap.
- [x] Create museum map.
- [x] Create collision system.
- [x] Create player.
- [x] Create camera.
- [x] Create interaction system.
- [x] Create exhibits.
- [x] Create UI.
- [x] Connect portfolio projects.
- [x] Implement retro zone.
- [x] Implement special area (Main hall displays).
- [x] Implement secret area (Bookcase sliding mechanism).

If a new important decision appears during implementation:

STOP.

Do not guess.

Propose the decision.

Wait for approval.

Record the decision.

Then implement it.


# GATE 11
# AUDIO AND FEEDBACK

Status: NOT STARTED

Potential audio:

- [ ] Footsteps.
- [ ] Interaction sounds.
- [ ] UI sounds.
- [ ] Door sounds.
- [ ] Special interaction sounds.
- [ ] Ambient sounds.
- [ ] Music.

Potential feedback:

- [ ] Interaction indicator.
- [ ] Animations.
- [ ] Transitions.
- [ ] Visual responses.
- [ ] Audio responses.

Audio and feedback must support the experience rather than add unnecessary noise.


# GATE 12
# MOBILE

Status: NOT STARTED

Controls:

- [ ] Virtual D-pad.
- [ ] Interaction button.
- [ ] Touch input.
- [ ] Responsive scaling.
- [ ] Camera behavior.
- [ ] Zoom.

UI:

- [ ] Modals.
- [ ] Buttons.
- [ ] Text.
- [ ] Orientation.
- [ ] Responsive layout.

Performance:

- [ ] Asset loading.
- [ ] Frame rate.
- [ ] Memory.
- [ ] Asset sizes.


# GATE 13
# POLISH

Status: NOT STARTED

Visual review:

- [ ] Asset consistency.
- [ ] Scale.
- [ ] Perspective.
- [ ] Lighting.
- [ ] Shadows.
- [ ] Grid alignment.
- [ ] Animations.
- [ ] UI.

UX review:

- [ ] Movement is obvious.
- [ ] Interactions are obvious.
- [ ] Player understands what can be inspected.
- [ ] Navigation feels natural.
- [ ] Modals are clear.
- [ ] Links work.
- [ ] No confusing areas.

Technical review:

- [ ] No console errors.
- [ ] No unnecessary assets.
- [ ] No obsolete procedural code.
- [ ] No mocks.
- [ ] No unnecessary dependencies.
- [ ] Assets load correctly.
- [ ] Performance is acceptable.


# GATE 14
# FINAL REVIEW

Testing:

- [ ] Desktop tested.
- [ ] Mobile tested.
- [ ] Movement tested.
- [ ] Collision tested.
- [ ] Camera tested.
- [ ] Interaction tested.
- [ ] Projects tested.
- [ ] Links tested.
- [ ] Modals tested.
- [ ] Assets reviewed.
- [ ] Audio reviewed.
- [ ] Console reviewed.
- [ ] Temporary code removed.
- [ ] Complete experience tested from beginning to end.


# DEFINITION OF DONE

The museum is complete only when:

- The visual language is consistent.
- The perspective is coherent.
- The map has intentional flow.
- The player understands interactions.
- Portfolio projects are correctly represented.
- The UI belongs to the experience.
- Desktop works correctly.
- Mobile works correctly.
- Temporary systems have been removed.
- Known important issues have been resolved.
- The experience feels like a finished product.


# ESTADO ACTUAL

**Current Phase:** GATE 11 — Audio and Feedback (Audio y Feedback)

**Status:** IN PROGRESS

El objetivo de esta fase es evaluar e integrar recursos de audio y efectos de sonido para enriquecer la experiencia inmersiva del museo (como sonidos de pasos, clics en botones de la interfaz, deslizamiento de la estantería secreta y música de fondo acogedora), de forma opcional y respetando las decisiones del usuario.