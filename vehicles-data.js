// Base de données des véhicules - Version simplifiée
const vehiclesData = [
    {
        id: "airpod",
        title: "Air Pod 2.0",
        subtitle: "An air-compressed car: the Air Pod",
        company: "MDI - Moteur Development International",
        description: "The Air Pod is an innovative vehicle running on compressed air. Zero emissions, zero pollution, it's the ideal solution for sustainable urban mobility.",
        image: "media/airpod.png",
        website: "https://fr.mdi.lu/airpod-2-0",
        equipment: {
            title: "Equipment and Software Required for Presentation",
            items: [
                "A computer",
                "A video-projector",
                "Powerpoint",
                "Word",
                "Paint"
            ]
        },
        workSchedule: {
            title: "Work Schedule",
            items: [
                { task: "Documentary searches on the Internet", duration: "2 hours" },
                { task: "Creation of the slide show", duration: "2 hours" },
                { task: "Oral presentation", duration: "5 minutes" }
            ]
        },
        rolePlay: {
            title: "Role Play Scenario",
            description: "You are technical salesmen working for MDI. This company is marketing the Air-Pod (an air-compressed car). Present this vehicle to two English clients supporting sustainable development. (Your teachers will play the roles of your clients)"
        },
        taskRequirements: [
            "Oral presentation of a Powerpoint slide show",
            "The slide show will give information about:",
            "  • Your company (MDI)",
            "  • The vehicle (choose one or several pictures to name its components – battery, engine...)",
            "  • How the vehicle works",
            "  • The technical characteristics of the vehicle – power (These will appear in a tabular form)",
            "Include a short video (3 minutes at most)",
            "Explain why this vehicle can be said to be sustainable",
            "Give your clients a document (A4 paper) including a detailed preliminary estimate and the total price of the vehicle",
            "Be as convincing as possible!"
        ]
    },
   {
    id: "e-solex",
    title: "e-Solex",
    subtitle: "The classic motorized bike reimagined by Pininfarina",
    company: "Leftfield Bikes",
    description: "Designed by Pininfarina, the e-Solex is the classic motorized bike that has risen from the ashes in a contemporary mood! It oozes personality thanks to its unique look 'n feel. Easy to handle, the e-Solex can reach speeds up to 25 km/h. The electric engine is located in the rear wheel hub and provides an autonomy up to 40 km. The Original VéloSoleX, as ridden by Brigitte Bardot and Steve McQueen.",
    image: "https://www.leftfieldbikes.com/wp-content/uploads/solex_2012_e-solex.jpg",
    website: "https://www.leftfieldbikes.com/shop/transport/e-solex/",
    equipment: {
        title: "Equipment and Software Required for Presentation",
        items: [
            "A computer",
            "A video-projector",
            "Powerpoint",
            "Word",
            "Paint"
        ]
    },
    workSchedule: {
        title: "Work Schedule",
        items: [
            { task: "Documentary searches on the Internet", duration: "2 hours" },
            { task: "Creation of the slide show", duration: "2 hours" },
            { task: "Oral presentation", duration: "5 minutes" }
        ]
    },
    rolePlay: {
        title: "Role Play Scenario",
        description: "You are technical salesmen working for Leftfield Bikes, a company marketing the e-Solex (an electric motorized bicycle). Present this vehicle to two English clients supporting sustainable development. (Your teachers will play the roles of your clients)"
    },
    taskRequirements: [
        "Oral presentation of a Powerpoint slide show",
        "The slide show will give information about:",
        "  • Your company (Leftfield Bikes)",
        "  • The vehicle (choose one or several pictures to name its components – battery, engine, motor hub...)",
        "  • How the vehicle works",
        "  • The technical characteristics of the vehicle – speed, range, battery (These will appear in a tabular form)",
        "Include a short video (3 minutes at most)",
        "Explain why this vehicle can be said to be sustainable",
        "Give your clients a document (A4 paper) including a detailed preliminary estimate and the total price of the vehicle",
        "Be as convincing as possible!"
    ]
},    /*{
        id: "eclectic-2.0",
        title: "Eclectic 2.0",
        subtitle: "The first autonomous urban electric vehicle",
        company: "Venturi",
        description: "In 2006, Venturi unveiled the first autonomous urban vehicle in automotive history. Much more than just a city car, Eclectic is a truly renewable energy production and storage plant, for both solar and wind power. With its on-board charger, Eclectic can be recharged from any point on the power network.",
        image: "https://www.venturi.com/wp-content/uploads/2020/02/eclectic.png",
        website: "https://www.venturi.com/en/concept-car/eclectic/",
        equipment: {
            title: "Equipment and Software Required for Presentation",
            items: ["A computer", "A video-projector", "Powerpoint", "Word", "Paint"]
        },
        workSchedule: {
            title: "Work Schedule",
            items: [
                { task: "Documentary searches on the Internet", duration: "2 hours" },
                { task: "Creation of the slide show", duration: "2 hours" },
                { task: "Oral presentation", duration: "5 minutes" }
            ]
        },
        rolePlay: {
            title: "Role Play Scenario",
            description: "You are technical salesmen working for Venturi, a company marketing the Eclectic 2.0 (a solar and wind-powered urban electric vehicle). Present this vehicle to two English clients supporting sustainable development. (Your teachers will play the roles of your clients)"
        },
        taskRequirements: [
            "Oral presentation of a Powerpoint slide show",
            "The slide show will give information about:",
            "  • Your company (Venturi)",
            "  • The vehicle (choose one or several pictures to name its components – solar panels, wind turbine, battery, electric motor...)",
            "  • How the vehicle works",
            "  • The technical characteristics of the vehicle – speed, range, battery (These will appear in a tabular form)",
            "Include a short video (3 minutes at most)",
            "Explain why this vehicle can be said to be sustainable",
            "Give your clients a document (A4 paper) including a detailed preliminary estimate and the total price of the vehicle",
            "Be as convincing as possible!"
        ]
    },
    /*{
        id: "elektorwheelie",
        title: "ElektorWheelie",
        subtitle: "The self-balancing electric unicycle",
        company: "Elektor",
        description: "The ElektorWheelie is a self-balancing electric unicycle powered by two 24V DC motors. It uses an accelerometer and gyroscope to maintain balance, with an ATmega32 microcontroller processing measurements 100 times per second. The vehicle can reach speeds of 12 km/h and runs for 1-1.5 hours on lead-gel batteries.",
        image: "https://www.lycee-ferry-versailles.fr/si-new/dossier_technique/images/elektorwheelie.jpg",
        website: "https://www.lycee-ferry-versailles.fr/si-new/dossier_technique/elektorwheelie_1.pdf",
        equipment: {
            title: "Equipment and Software Required for Presentation",
            items: ["A computer", "A video-projector", "Powerpoint", "Word", "Paint"]
        },
        workSchedule: {
            title: "Work Schedule",
            items: [
                { task: "Documentary searches on the Internet", duration: "2 hours" },
                { task: "Creation of the slide show", duration: "2 hours" },
                { task: "Oral presentation", duration: "5 minutes" }
            ]
        },
        rolePlay: {
            title: "Role Play Scenario",
            description: "You are technical salesmen working for Elektor, a company marketing the ElektorWheelie (a self-balancing electric vehicle). Present this vehicle to two English clients supporting sustainable development. (Your teachers will play the roles of your clients)"
        },
        taskRequirements: [
            "Oral presentation of a Powerpoint slide show",
            "The slide show will give information about:",
            "  • Your company (Elektor)",
            "  • The vehicle (choose one or several pictures to name its components – motors, batteries, accelerometer, gyroscope, microcontroller...)",
            "  • How the vehicle works",
            "  • The technical characteristics of the vehicle – speed, range, battery (These will appear in a tabular form)",
            "Include a short video (3 minutes at most)",
            "Explain why this vehicle can be said to be sustainable",
            "Give your clients a document (A4 paper) including a detailed preliminary estimate and the total price of the vehicle",
            "Be as convincing as possible!"
        ]
    },*/
    {
        id: "enicycle",
        title: "Enicycle",
        subtitle: "The self-balancing electric unicycle",
        company: "Focus Designs",
        description: "The Enicycle (Self-Balancing Unicycle - SBU) is a compact electric vehicle that uses gyroscopic technology to maintain balance. It offers a unique riding experience combining portability with electric mobility.",
        image: "https://focusdesigns.com/wp-content/uploads/2013/08/SBU-NewLogo.jpg",
        website: "https://focusdesigns.com/",
        equipment: {
            title: "Equipment and Software Required for Presentation",
            items: ["A computer", "A video-projector", "Powerpoint", "Word", "Paint"]
        },
        workSchedule: {
            title: "Work Schedule",
            items: [
                { task: "Documentary searches on the Internet", duration: "2 hours" },
                { task: "Creation of the slide show", duration: "2 hours" },
                { task: "Oral presentation", duration: "5 minutes" }
            ]
        },
        rolePlay: {
            title: "Role Play Scenario",
            description: "You are technical salesmen working for Focus Designs, a company marketing the Enicycle (a self-balancing electric unicycle). Present this vehicle to two English clients supporting sustainable development. (Your teachers will play the roles of your clients)"
        },
        taskRequirements: [
            "Oral presentation of a Powerpoint slide show",
            "The slide show will give information about:",
            "  • Your company (Focus Designs)",
            "  • The vehicle (choose one or several pictures to name its components – gyroscope, electric motor, battery, controller...)",
            "  • How the vehicle works",
            "  • The technical characteristics of the vehicle – speed, range, weight (These will appear in a tabular form)",
            "Include a short video (3 minutes at most)",
            "Explain why this vehicle can be said to be sustainable",
            "Give your clients a document (A4 paper) including a detailed preliminary estimate and the total price of the vehicle",
            "Be as convincing as possible!"
        ]
    },
    {
        id: "fcx-clarity",
        title: "FCX Clarity",
        subtitle: "The hydrogen fuel cell vehicle",
        company: "Honda",
        description: "The Honda CR-V e:FCEV is America's first plug-in hydrogen fuel cell electric vehicle. It combines a state-of-the-art fuel cell module with battery plug-in charging, enabling emission-free city driving and the flexibility of rapid hydrogen refueling. The only emission is water vapor.",
        image: "media/honda.png",
        website: "https://automobiles.honda.com/cr-v-fcev",
        equipment: {
            title: "Equipment and Software Required for Presentation",
            items: ["A computer", "A video-projector", "Powerpoint", "Word", "Paint"]
        },
        workSchedule: {
            title: "Work Schedule",
            items: [
                { task: "Documentary searches on the Internet", duration: "2 hours" },
                { task: "Creation of the slide show", duration: "2 hours" },
                { task: "Oral presentation", duration: "5 minutes" }
            ]
        },
        rolePlay: {
            title: "Role Play Scenario",
            description: "You are technical salesmen working for Honda, a company marketing the CR-V e:FCEV (a hydrogen fuel cell electric vehicle). Present this vehicle to two English clients supporting sustainable development. (Your teachers will play the roles of your clients)"
        },
        taskRequirements: [
            "Oral presentation of a Powerpoint slide show",
            "The slide show will give information about:",
            "  • Your company (Honda)",
            "  • The vehicle (choose one or several pictures to name its components – fuel cell stack, hydrogen tanks, battery, electric motor...)",
            "  • How the vehicle works",
            "  • The technical characteristics of the vehicle – power, range, refueling time (These will appear in a tabular form)",
            "Include a short video (3 minutes at most)",
            "Explain why this vehicle can be said to be sustainable",
            "Give your clients a document (A4 paper) including a detailed preliminary estimate and the total price of the vehicle",
            "Be as convincing as possible!"
        ]
    },
    {
        id: "eovolt",
        title: "Eovolt Morning Origins",
        subtitle: "The folding electric bike",
        company: "Eovolt / SH Cycles",
        description: "The Eovolt Morning Origins is a lightweight (16.5 kg) folding electric bike with 16-inch wheels. It features a 250W brushless rear hub motor with torque sensor, a 231Wh battery integrated into the seat post, and up to 50 km range. Designed and assembled in France for urban mobility.",
        image: "media/eovolt.jpg",
        website: "https://www.shcycles.fr/product/velo-pliant-electrique-eovolt-morning-origins/",
        equipment: {
            title: "Equipment and Software Required for Presentation",
            items: ["A computer", "A video-projector", "Powerpoint", "Word", "Paint"]
        },
        workSchedule: {
            title: "Work Schedule",
            items: [
                { task: "Documentary searches on the Internet", duration: "2 hours" },
                { task: "Creation of the slide show", duration: "2 hours" },
                { task: "Oral presentation", duration: "5 minutes" }
            ]
        },
        rolePlay: {
            title: "Role Play Scenario",
            description: "You are technical salesmen working for Eovolt, a company marketing the Morning Origins (a folding electric bike). Present this vehicle to two English clients supporting sustainable development. (Your teachers will play the roles of your clients)"
        },
        taskRequirements: [
            "Oral presentation of a Powerpoint slide show",
            "The slide show will give information about:",
            "  • Your company (Eovolt)",
            "  • The vehicle (choose one or several pictures to name its components – motor, battery, folding mechanism, torque sensor...)",
            "  • How the vehicle works",
            "  • The technical characteristics of the vehicle – power, range, weight (These will appear in a tabular form)",
            "Include a short video (3 minutes at most)",
            "Explain why this vehicle can be said to be sustainable",
            "Give your clients a document (A4 paper) including a detailed preliminary estimate and the total price of the vehicle",
            "Be as convincing as possible!"
        ]
    },
    {
        id: "yikebike",
        title: "YikeBike Model V",
        subtitle: "The compact folding electric bike",
        company: "YikeBike",
        description: "The YikeBike Model V is a compact folding electric bike with a unique design. It features a 20-inch front wheel and 8-inch rear wheel, reaching speeds of 23 km/h with a range of 20 km. The 313Wh battery charges in 90 minutes, and the bike folds in under 20 seconds.",
        image: "https://www.yikebike.com/wp-content/uploads/2016/06/Model-V-Update.jpg",
        website: "https://www.yikebike.com/model-v/",
        equipment: {
            title: "Equipment and Software Required for Presentation",
            items: ["A computer", "A video-projector", "Powerpoint", "Word", "Paint"]
        },
        workSchedule: {
            title: "Work Schedule",
            items: [
                { task: "Documentary searches on the Internet", duration: "2 hours" },
                { task: "Creation of the slide show", duration: "2 hours" },
                { task: "Oral presentation", duration: "5 minutes" }
            ]
        },
        rolePlay: {
            title: "Role Play Scenario",
            description: "You are technical salesmen working for YikeBike, a company marketing the Model V (a compact folding electric bike). Present this vehicle to two English clients supporting sustainable development. (Your teachers will play the roles of your clients)"
        },
        taskRequirements: [
            "Oral presentation of a Powerpoint slide show",
            "The slide show will give information about:",
            "  • Your company (YikeBike)",
            "  • The vehicle (choose one or several pictures to name its components – electric motor, battery, folding mechanism, wheels...)",
            "  • How the vehicle works",
            "  • The technical characteristics of the vehicle – speed, range, weight (These will appear in a tabular form)",
            "Include a short video (3 minutes at most)",
            "Explain why this vehicle can be said to be sustainable",
            "Give your clients a document (A4 paper) including a detailed preliminary estimate and the total price of the vehicle",
            "Be as convincing as possible!"
        ]
    }
   
];

// Fonction pour ajouter un nouveau véhicule
function addVehicle(vehicle) {
    vehiclesData.push(vehicle);
    console.log(`Vehicle ${vehicle.title} added successfully!`);
}

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { vehiclesData, addVehicle };
}


