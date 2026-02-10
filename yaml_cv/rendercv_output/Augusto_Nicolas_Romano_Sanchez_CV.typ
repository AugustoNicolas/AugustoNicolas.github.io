// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Augusto Nicolas Romano Sanchez",
  footer: context { [#emph[Augusto Nicolas Romano Sanchez -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Jan 2026] ],
  locale-catalog-language: "en",
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: false,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 0, 0),
  colors-headline: rgb(0, 0, 0),
  colors-connections: rgb(0, 0, 0),
  colors-section-titles: rgb(0, 0, 0),
  colors-links: rgb(0, 0, 0),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "XCharter",
  typography-font-family-name: "XCharter",
  typography-font-family-headline: "XCharter",
  typography-font-family-connections: "XCharter",
  typography-font-family-section-titles: "XCharter",
  typography-font-size-body: 10pt,
  typography-font-size-name: 25pt,
  typography-font-size-headline: 10pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.2em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: false,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: true,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: false,
  header-connections-display-urls-instead-of-usernames: true,
  header-connections-separator: "|",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_full_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.5cm,
  section-titles-space-below: 0.3cm,
  sections-allow-page-break: true,
  sections-space-between-text-based-entries: 0.15cm,
  sections-space-between-regular-entries: 0.42cm,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: false,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0.08cm,
  entries-highlights-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-nested-bullet:  text(13pt, [•], baseline: -0.6pt) ,
  entries-highlights-space-left: 0cm,
  entries-highlights-space-above: 0.08cm,
  entries-highlights-space-between-items: 0.08cm,
  entries-highlights-space-between-bullet-and-text: 0.3em,
  date: datetime(
    year: 2026,
    month: 1,
    day: 15,
  ),
)


= Augusto Nicolas Romano Sanchez

#connections(
  [Bucarest, Rumanía],
  [#link("mailto:nicolasromanosanchez@gmail.com", icon: false, if-underline: false, if-color: false)[nicolasromanosanchez\@gmail.com]],
  [#link("tel:+40-736-895-443", icon: false, if-underline: false, if-color: false)[0736 895 443]],
  [#link("https://linkedin.com/in/nicolas-romano-sanchez", icon: false, if-underline: false, if-color: false)[linkedin.com\/in\/nicolas-romano-sanchez]],
)


== Summary

Proactive professional with solid experience in customer service, technical support, and digital environments. Known for strong multilingual communication, fast problem-solving under pressure, and delivering memorable customer experiences. Background in both tech and service industries, with proven adaptability in fast-paced, multicultural environments.

== Experience

#regular-entry(
  [
    #strong[Crew Member & Cashier], McDonald's -- Bucarest, Rumanía
    
  ],
  [
    Jan 2025 – Present
    
  ],
  main-column-second-row: [
    - Provided service in English, Spanish, and Romanian in a high-traffic environment, ensuring quality and speed.
    
    - Handled complaints with empathy and effective problem-solving strategies to maintain customer satisfaction.
    
    - Collaborated with diverse teams to maintain smooth and positive service operations.
    
  ],
)

#regular-entry(
  [
    #strong[Technical Support & Digital Client Services], Ria Ventures -- Remote
    
  ],
  [
    Feb 2023 – Dec 2024
    
  ],
  main-column-second-row: [
    - Automated repetitive tasks to improve support team efficiency and response times.
    
    - Created help documents and FAQ materials to enhance customer self-service capabilities.
    
    - Ensured smooth communication between technical and non-technical teams to resolve user issues effectively.
    
  ],
)

#regular-entry(
  [
    #strong[Application Support & User Training], CIAT Laboratory -- Bolivia
    
  ],
  [
    May 2021 – Nov 2022
    
  ],
  main-column-second-row: [
    - Trained users on livestock management software via remote sessions, ensuring proper system adoption.
    
    - Provided application support and contributed to user experience improvements based on feedback.
    
    - Optimized service times and ensured smooth daily operations for end-users.
    
  ],
)

== Education

#education-entry(
  [
    #strong[University of Bucharest], Bachelor's Degree (Full Scholarship) in Cybernetics, Statistics and Economic Informatics -- Bucarest, Rumanía
    
  ],
  [
    2025 – 2027
    
  ],
  main-column-second-row: [
  ],
)

#education-entry(
  [
    #strong[University of Innovation], Bachelor (120 credits completed) in Systems Engineering -- Bolivia
    
  ],
  [
    2021 – 2023
    
  ],
  main-column-second-row: [
  ],
)

== Certificates

#regular-entry(
  [
    #strong[Data Analytics with Python (Cisco Networking Academy)]
    
  ],
  [
    Jan 2021
    
  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[IoT & Big Data (TecNet)]
    
  ],
  [
    Jan 2022
    
  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[CCNAv7 Networking (Cisco Networking Academy)]
    
  ],
  [
    Jan 2021
    
  ],
  main-column-second-row: [
  ],
)

== Skills

#strong[Languages:] Spanish (Native), English (B2), Romanian (B2).

#strong[Soft Skills:] Conflict Resolution, Time Management, Multilingual Communication, Cultural Adaptability, Customer-Centric Mindset.

#strong[Digital Tools:] CRM Systems, Microsoft Office Suite, Technical Support Ticketing, Python (Data Analytics).
