// Registry of projects and exhibits metadata (DEC-008)

export const exhibitsData = [
    {
        id: "exhibit_soyyo",
        displayName: "Soy yo Digital",
        projectType: "Web Application / NFC Integration",
        description: "A personal presentation platform synchronized with unique NFC-enabled cards. It allows users to coordinate custom reservation tools for small businesses, handle interactive contact forms, and manage secure digital credentials. Since the original server is private, you can launch a mockup segment below to see how the card-reading flow operates.",
        techStack: ["Python", "Django", "PostgreSQL", "React JS", "AWS", "NFC WebAPI"],
        actionType: "demo",
        actionUrl: "demos/soyyo.html",
        visualAsset: "soyyo_logo", // Key in preloader
        previewImage: "img/soyyo/plan-virtual2.jpg"
    },
    {
        id: "exhibit_toffi",
        displayName: "Toffi Automation",
        projectType: "Desktop Utility / File System Operations",
        description: "A highly efficient desktop utility designed to process, filter, and rename massive volumes of files programmatically. Built to streamline file organization pipelines and enforce consistent bulk naming conventions. This software is proprietary and is kept private under non-disclosure agreements; no external code or downloads are linked.",
        techStack: ["VB.NET", "Visual Studio", ".NET Framework", "Windows Forms"],
        actionType: "details",
        actionUrl: null,
        visualAsset: "toffi_screen", // Key in preloader
        previewImage: "img/Captura de pantalla 2025-06-24 005858.png" // Fallback screenshot
    },
    {
        id: "exhibit_enemies",
        displayName: "Natural Enemies",
        projectType: "Telemetry & Agricultural Management Software",
        description: "A custom centralized solution built for livestock and agricultural groups. It gathers real-time telemetry data (climate logs, soil humidity, wind speed) and records crop metrics, while tracking pest outbreaks to help farmers deploy biological control through natural enemies. Use the button below to view a mock dashboard simulating the telemetry metrics.",
        techStack: ["Python", "Flask", "C#", "MariaDB", "PHP", "Linux", "Telemetry API"],
        actionType: "demo",
        actionUrl: "demos/enemies.html",
        visualAsset: "enemies_icon", // Key in preloader
        previewImage: "img/Captura de pantalla 2025-06-24 005858.png"
    }
];
