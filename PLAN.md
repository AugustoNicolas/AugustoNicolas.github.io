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

Status: NOT STARTED

Objective:

Define the visual language before selecting definitive assets.

Decisions required:

- [ ] Exact top-down perspective.
- [ ] How much of the top of the character is visible.
- [ ] Character body proportions.
- [ ] Wall representation.
- [ ] Floor representation.
- [ ] Furniture representation.
- [ ] Object representation.
- [ ] Base tile size.
- [ ] Character dimensions.
- [ ] Door dimensions.
- [ ] Furniture scale.
- [ ] Interactive object scale.
- [ ] Render scale.
- [ ] Pixel-art detail level.
- [ ] Outline style.
- [ ] Shadow style.
- [ ] Lighting style.
- [ ] Contrast.
- [ ] Saturation.
- [ ] Dithering policy.
- [ ] Floor palette.
- [ ] Wall palette.
- [ ] Wood palette.
- [ ] Stone palette.
- [ ] Metal palette.
- [ ] Plant palette.
- [ ] Lighting palette.
- [ ] Interaction colors.
- [ ] Special-area colors.
- [ ] Architectural style.
- [ ] Overall mood.
- [ ] Materials.
- [ ] Decorative language.
- [ ] Retro influence.
- [ ] Unique museum identity.

Required deliverable:

A written art-direction specification.

All important visual decisions must be recorded in DECISIONS.md.

No definitive visual assets may be integrated before approval.


# GATE 2
# ASSET STRATEGY

Status: NOT STARTED

Objective:

Determine where the definitive visual assets will come from.

Possible strategies:

- Existing asset pack.
- Custom-created assets.
- AI-generated assets.
- Hybrid approach.

Evaluate:

- [ ] Visual consistency.
- [ ] Resolution.
- [ ] Perspective.
- [ ] Scale.
- [ ] Asset coverage.
- [ ] Licensing.
- [ ] Customization requirements.
- [ ] Long-term maintainability.
- [ ] Ability to expand the museum later.

Required deliverable:

A recommendation comparing the available asset strategies.

No definitive asset integration before approval.


# GATE 3
# ENVIRONMENT AND TILESET

Status: NOT STARTED

Objective:

Select and approve the environment system before building the final map.

Tileset requirements:

- [ ] Floor.
- [ ] Floor variations.
- [ ] Walls.
- [ ] Wall corners.
- [ ] Borders.
- [ ] Doors.
- [ ] Transitions.
- [ ] Decorative tiles.

Environment object requirements:

- [ ] Tables.
- [ ] Chairs.
- [ ] Plants.
- [ ] Shelves.
- [ ] Pedestals.
- [ ] Display cases.
- [ ] Paintings.
- [ ] Computers.
- [ ] Screens.
- [ ] Arcade machines.
- [ ] Decorative objects.

The chosen environment assets must be evaluated as a complete visual system.

Do not approve individual assets in isolation.

All important asset decisions must be recorded in DECISIONS.md.


# GATE 4
# PLAYER CHARACTER

Status: NOT STARTED

Objective:

Define and approve the player character before integration.

Decisions required:

- [ ] Sprite dimensions.
- [ ] Character proportions.
- [ ] Head size.
- [ ] Body size.
- [ ] Leg proportions.
- [ ] Feet proportions.
- [ ] Clothing.
- [ ] Colors.
- [ ] Silhouette.
- [ ] Detail level.
- [ ] Perspective.
- [ ] Relation between character scale and environment scale.

Animations required:

- [ ] Idle Down.
- [ ] Walk Down.
- [ ] Idle Left.
- [ ] Walk Left.
- [ ] Idle Right.
- [Walk Right.
- [ ] Idle Up.
- [ ] Walk Up.

The player must visually belong to the same world as the environment.

All important character decisions must be recorded in DECISIONS.md.


# GATE 5
# TECHNICAL ASSET ARCHITECTURE

Status: NOT STARTED

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

- [ ] Asset folder structure.
- [ ] PNG policy.
- [ ] Spritesheet policy.
- [ ] Texture atlas policy.
- [ ] Tilemap format.
- [ ] Map data format.
- [ ] Asset naming convention.
- [ ] Phaser texture naming.
- [ ] Loading strategy.
- [ ] Preload strategy.

Cleanup tasks:

- [ ] Remove procedural generation if obsolete.
- [ ] Remove temporary assets.
- [ ] Remove dead code.
- [ ] Remove assets-generator.js if obsolete.
- [ ] Verify that no existing functionality depends on removed systems.

All architectural decisions must be recorded in DECISIONS.md and ARCHITECTURE.md.


# GATE 6
# MUSEUM LAYOUT

Status: NOT STARTED

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

- [ ] Spawn location.
- [ ] First impression.
- [ ] First point of interest.
- [ ] Exploration order.
- [ ] Optional areas.
- [ ] Locked areas.
- [ ] Unlock conditions.
- [ ] End point.

Scale decisions:

- [ ] Total map dimensions.
- [ ] Room dimensions.
- [ ] Corridor width.
- [ ] Exhibit spacing.
- [ ] Interaction space.
- [ ] Camera boundaries.

Required deliverable:

A conceptual museum layout.

The conceptual layout must be approved before implementation of the final map.


# GATE 7
# GAMEPLAY SYSTEMS

Status: NOT STARTED

Movement decisions:

- [ ] Keyboard controls.
- [ ] Controller support.
- [ ] Touch controls.
- [ ] Movement speed.
- [ ] Animation speed.
- [ ] Direction handling.
- [ ] Idle behavior.

Camera decisions:

- [ ] Follow behavior.
- [ ] Zoom.
- [ ] Camera bounds.
- [ ] Smoothing.
- [ ] Player screen position.
- [ ] Small-room behavior.

Collision decisions:

- [ ] Walls.
- [ ] Furniture.
- [ ] Exhibits.
- [ ] Objects.
- [ ] Map boundaries.
- [ ] Traversable objects.

Interaction decisions:

- [ ] Interaction distance.
- [ ] Interaction input.
- [ ] Visual indicator.
- [ ] Interaction animation.
- [ ] Interaction sound.
- [ ] Feedback behavior.

No implementation before approval.


# GATE 8
# PORTFOLIO CONTENT

Status: NOT STARTED

Objective:

Define exactly what each exhibit represents.

Potential projects:

- Soy Yo Digital.
- SpacedLingo.
- Economy Simulator.
- Portfolio.
- Other projects explicitly approved by the user.

For every exhibit define:

- [ ] Project name.
- [ ] Description.
- [ ] Image.
- [ ] Project type.
- [ ] Interaction.
- [ ] Modal.
- [ ] External URL.
- [ ] Demo.
- [ ] Visual content.
- [ ] Primary action.

The final project list must be explicitly approved.


# GATE 9
# UI DESIGN

Status: NOT STARTED

Objective:

Design the user interface as part of the museum experience.

Decisions required:

- [ ] Modal design.
- [ ] Panel design.
- [ ] Button design.
- [ ] Typography.
- [ ] Icons.
- [ ] Borders.
- [ ] Shadows.
- [ ] Animations.
- [ ] Interaction indicators.
- [ ] Messages.
- [ ] Responsive behavior.

The UI may be inspired by pixel-art game interfaces but must have its own identity.

No final UI implementation before approval.


# GATE 10
# DEFINITIVE IMPLEMENTATION

Status: NOT STARTED

Implementation may begin only after the relevant visual, gameplay, architectural, and content decisions have been approved and documented.

Implementation order:

- [ ] Integrate approved assets.
- [ ] Configure preload.
- [ ] Configure spritesheets or texture atlases.
- [ ] Configure animations.
- [ ] Create tilemap.
- [ ] Create museum map.
- [ ] Create collision system.
- [ ] Create player.
- [ ] Create camera.
- [ ] Create interaction system.
- [ ] Create exhibits.
- [ ] Create UI.
- [ ] Connect portfolio projects.
- [ ] Implement retro zone.
- [ ] Implement special area.
- [ ] Implement secret area.

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


# CURRENT STATE

Current phase: GATE 0

Current status: IN PROGRESS

The AI must begin by auditing the existing project.

The AI must not modify code during GATE 0.

The AI must wait for explicit user approval before moving to GATE 1.