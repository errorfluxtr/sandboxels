elements.DEUT = {
    color: "#4681A6",
    behavior: behaviors.GAS,
    density: 0.00017,
    reactions: {
        "O2": { elem1: null, elem2: "HEAVYW", chance: 0.1 },
    },
    tempHigh: 5000,
    stateHigh: "FUSION",
    category: "special",
    name: "deuterium",
    desc: "Heavy hydrogen (D). Can form heavy water.",
};

elements.HEAVYW = {
    color: "#2C637C",
    behavior: behaviors.LIQUID,
    density: 1.1,
    reactions: {
        "DEUT": { elem1: null, elem2: "FUSION", temp2: 5000 },
    },
    tempHigh: 373,
    stateHigh: "DEUT",
    category: "liquids",
    name: "heavy_water",
    desc: "Deuterium oxide (D2O). Can be made from deuterium and oxygen.",
};

elements.FUSION = {
    color: "#FFD700",
    behavior: behaviors.ENERGY,
    density: 0.00001,
    reactions: {
        "DEUT": { elem1: null, elem2: "HELIUM3", chance: 0.5, temp2: 10000 },
        "PROTON": { elem1: null, elem2: "HELIUM3", temp2: 10000 },
    },
    temp: 10000,
    stateHigh: "PLASMA",
    category: "energy",
    name: "fusion_plasma",
    desc: "Extremely hot plasma from deuterium fusion.",
};

elements.HELIUM3 = {
    color: "#ADD8E6",
    behavior: behaviors.GAS,
    density: 0.00005,
    category: "gases",
    name: "helium-3",
    desc: "A product of deuterium fusion.",
};
