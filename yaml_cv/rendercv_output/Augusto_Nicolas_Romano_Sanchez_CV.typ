// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Augusto Nicolas Romano Sanchez",
  footer: context { [#emph[Augusto Nicolas Romano Sanchez -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Dec 2025] ],
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
    year: 2025,
    month: 12,
    day: 23,
  ),
)


= Augusto Nicolas Romano Sanchez

#connections(
  [Bucuresti, Romania],
  [#link("mailto:nicolasromanosanchez@gmail.com", icon: false, if-underline: false, if-color: false)[nicolasromanosanchez\@gmail.com]],
  [#link("tel:+40-736-895-443", icon: false, if-underline: false, if-color: false)[0736 895 443]],
  [#link("https://linkedin.com/in/nicolas-romano-sanchez", icon: false, if-underline: false, if-color: false)[linkedin.com\/in\/nicolas-romano-sanchez]],
)


== Summary

Full-Stack Developer with experience in building scalable applications, automating processes, and managing databases. Proven track record in transforming complex business requirements into technical solutions using Python, JavaScript, and C\#. Experienced in AWS, Linux server administration, and Agile methodologies.

== Experience

#regular-entry(
  [
    #strong[Full-Stack Developer], Ria Ventures -- Remote \/ Latin America
    
  ],
  [
    Feb 2023 – Dec 2024
    
  ],
  main-column-second-row: [
    - Led the backend team on \"Soy Yo Digital\", a flagship project for the company.
    
    - Implemented a payment gateway and integrated accounting systems, automating transaction calculations and financial reporting.
    
    - Transformed complex business requirements into scalable technical solutions, including database modeling and system architecture.
    
    - Developed RESTful APIs for seamless data exchange between front-end and back-end components.
    
    - Engineered responsive front-end interfaces using JavaScript and React.js, and mobile applications using React Native.
    
    - Automated recurring tasks such as report generation and data manipulation using Python scripts and Pandas.
    
    - Configured and managed Linux servers, implementing monitoring and security solutions.
    
    - Maintained and administered AWS services (EC2, S3) ensuring optimal server performance and reliability.
    
  ],
)

#regular-entry(
  [
    #strong[Full Stack Developer (Freelance)], CIAT (Tropical Agricultural Research Center) -- Bolivia
    
  ],
  [
    May 2020 – Dec 2022
    
  ],
  main-column-second-row: [
    - Developed a full-stack web application for livestock data management with role-based access control.
    
    - Designed and developed a native Windows application for agricultural data management using C\# and a lightweight SQL database.
    
    - Built back-end architecture using Python Flask, ensuring scalability and performance.
    
    - Designed and managed relational databases (SQLite and MariaDB), optimizing queries for data integrity.
    
    - Deployed and maintained services on Ubuntu servers, ensuring security and uptime.
    
    - Conducted data transformation and analysis using Pandas to improve data processing workflows.
    
  ],
)

== Education

#education-entry(
  [
    #strong[University of Bucharest], Bachelor's Degree in Cybernetics, Statistics and Economic Informatics -- Bucuresti, Romania
    
  ],
  [
    Jan 2023 – Jan 2027
    
  ],
  main-column-second-row: [
    - Studying through a scholarship.
    
  ],
)

#education-entry(
  [
    #strong[University of Innovation], Bachelor (120 credits completed) in Systems Engineering -- Bolivia
    
  ],
  [
    Jan 2020 – Jan 2022
    
  ],
  main-column-second-row: [
  ],
)

== Certificates

#regular-entry(
  [
    #strong[Certificate in IoT Fundamentals - Big Data & Analytics with Python]
    
  ],
  [
    Jan 2022
    
  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[Certificate in Data Analytics with Python (Cisco)]
    
  ],
  [
    Jan 2021
    
  ],
  main-column-second-row: [
  ],
)

#regular-entry(
  [
    #strong[CCNAv7 Certificate (Cisco)]
    
  ],
  [
    Jan 2021
    
  ],
  main-column-second-row: [
  ],
)

== Skills

#strong[Languages:] Python, JavaScript, C\#, Java, SQL.

#strong[Frameworks & Libs:] React.js, React Native, Node.js, Django, Flask, Pandas, ASP.NET MVC.

#strong[Databases:] PostgreSQL, SQL Server, MongoDB, SQLite, MariaDB.

#strong[Infrastructure:] AWS (EC2, S3), Linux Terminal, Server Administration, Github.
