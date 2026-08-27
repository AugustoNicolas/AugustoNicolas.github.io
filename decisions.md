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

No decisions have been approved yet.


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