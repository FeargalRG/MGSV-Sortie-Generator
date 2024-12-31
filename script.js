// Mission, Locations, Challenges, and Loadouts
const missions = [
    "Base Infiltration",
    "Bounty Hunter",
    "No Survivors",
    "Extraction"
  ];
  
  const regions = [
    "Northern Kabul, Afghanistan",
    "Angola-Zaire border region, Central Africa"
  ];

  const locations = {
    "Northern Kabul, Afghanistan": [
        "Aabe Shifap Ruins",
        "Afghanistan Central Base Camp",
        "Lamar Khaate Palace",
        "Da Ghwandai Khar",
        "Da Shago Kallai",
        "Da Smasei Laman",
        "Da Wiallo Kallai",
        "Eastern Communications Post",
        "Mountain Relay Base",
        "OKB Zero",
        "Qarya Sakhra Ee",
        "Serak Power Plant",
        "Spugmay Keep",
        "Wakh Sind Barracks",
        "Yakho Oboo Supply Outpost"
    ],
    "Angola-Zaire border region, Central Africa": [
        "Bwala ya Masa",
        "Mfinda Oilfield",
        "Ditadi Abandoned Village",
        "Nova Braga Airport",
        "Kiziba Camp",
        "Bampeve Plantation",
        "Kungenga Mine",
        "Lufwa Valley",
        "Ngumba Industrial Zone",
        "Munoko Ya Nioka Station"
    ]
  };
  
  const challenges = [
    "No Alerts",
    "No Traces", 
    "Perfect Silence"
  ];
  
  const primaryWeaponHipCategories = [
    "Assault Rifle", 
    "Shotgun",
    "Grenade Launcher"
  ];

  const primaryWeaponBackCategories = [
    "Sniper Rifle",
    "Machine Gun",
    "Rocket Launcher",
    "Shield"
  ];

  const secondaryWeaponCategories = [
    "Handgun",
    "Submachine Gun"
  ];

  const primaryWeaponsHip = {
    "Assault Rifle": ["SVG-76", "SVG-76U", "PG-76", "AM MRS-4", "UN-ARC", "UN-ARC-NL", "G44"],
    "Shotgun": ["RASP TB-SG", "RASP TB-SG LB", "RASP TB-SG SB", "S1000", "S1000 AIR-S", "S1000 EXT.", "S1000 SHORTY", "KABARGA-83", "BULLHORN SG", "RASP SB-SG GOLD"],
    "Grenade Launcher": ["FAKEL-46", "FAKEL G-33", "DGL103-SA", "DGL103-LB", "ISANDO RGL-220", "HAIL MGR-4", "MIRAZH-71"]
  };
  
  const primaryWeaponsBack = {
    "Sniper Rifle": ["RENOV-ICKX SR", "RENOV-ICKX TP", "M2000-D", "M2000-NL", "BAMBETOV SV", "AM-MRS-71 RIFLE", "AM-MRS-73 NL", "BRENNAN LRS-46", "SERVAL AMR-7", "MOLOTOK-68"],
    "Machine Gun": ["ALM 48", "UN-AAM", "LPG-61"],
    "Rocket Launcher": ["GROM-11", "FB MR R-Launcher", "KILLER BEE", "CGM 25", "FB MR R-L FLTN"],
    "Shield": ["PB SHIELD", "PB SHIELD (SIL)", "PB SHIELD (OD)", "PB SHIELD (WHT)", "PB SHIELD (GLD)"] 
  };

  const secondaryWeapons = {
    "Handgun": ["WU S.PISTOL", "AM D114", "BURKOV", "GEIST P3", "WU S333", "URAGAN-5", "ZORN-KP", "WATER PISTOL", "AM A114 RP", "TORNADO-6", "ADAM-SKA SP."],
    "Submachine Gun": ["Sz.-336 SMG", "ZE'EV", "MACHT 37", "RIOT SMG", "MACHT-P5 WEISS"]
  };

  const prostheses = [
    "BIONIC ARM",
    "STUN ARM",
    "HAND OF JEHUTY",
    "ROCKET ARM"
  ];

  const supportWeaponCategories = [
    "Throwable",
    "Placeable"
  ];

  const supportWeapons = {
    "Throwable": ["MAGAZINE", "DECOY", "BAIT BOTTLE", "FLARE GRENADE", "HAND GRENADE", "SMOKE GRENADE", "STUN GRENADE", "SLEEP GRENADE", "PETROL BOMB", "FOM DECOY"],
    "Placeable": ["C-4", "CAPTURE CAGE", "M21 D-MINE", "LLG-MINE", "ATB-MINE", "EMN-MINE", "E-RB WH GEN."]
  };

  const buddies = ["D-Horse", "D-Dog", "Quiet", "D-Walker"];
  const outfits = ["STANDAR COMBAT FATIGUES", "BATTLE DRESS", "PARASITE SUIT", "SNEAKING SUIT", "SV-SNEAKING SUIT", "SNEAKING SUIT (NS)"];

  const items = ["C.BOX", "NVG", "STEALTH CAMO.PP", "PHANTOM CIGAR", "PENTAZEMIN", "NOCTOCYANIN", "ACCELERAMIN", "PARASITE(MIST)", ]
  
  // Generate Random Item
  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // Generate Mission Sortie
  function generateMission() {
    const missionType = randomItem(missions);
    const region = randomItem(regions);
    const location = randomItem(locations[region]);
    const challenge = randomItem(challenges);

    // Fix category selection
    const hipCategory = randomItem(primaryWeaponHipCategories);
    const primaryWeaponHip = randomItem(primaryWeaponsHip[hipCategory]);

    const backCategory = randomItem(primaryWeaponBackCategories);
    const primaryWeaponBack = randomItem(primaryWeaponsBack[backCategory]);

    const secondaryCategory = randomItem(secondaryWeaponCategories);
    const secondaryWeapon = randomItem(secondaryWeapons[secondaryCategory]);

    const supportCategory = randomItem(supportWeaponCategories);
    const supportWeapon = randomItem(supportWeapons[supportCategory]);

    const prosthesis = randomItem(prostheses);
    const item = randomItem(items);
    const buddy = randomItem(buddies);
    const outfit = randomItem(outfits);

    return `===== SORTIE DETAILS =====
      MISSION TYPE: ${missionType}
      Region: ${region}
      Location: ${location}
      Objective: Complete the ${missionType.toLowerCase()} objective.
      Bonus Challenge: ${challenge}
      
      Outfit: ${outfit}
      Buddy: ${buddy}
      === LOADOUT ===
      Primary Weapon (Hip): ${primaryWeaponHip}
      Primary Weapon (Back): ${primaryWeaponBack}
      Secondary Weapon: ${secondaryWeapon}
      Prosthesis: ${prosthesis}
      Support Weapon: ${supportWeapon}
      Item: ${item}
      ============================`
      ;
}

  // Add Event Listener for the Button
document.getElementById("generate-btn").addEventListener("click", function () {
    const sortie = generateMission();
    document.getElementById("sortie-output").innerText = sortie;
  });  
  
  // Display the Generated Mission
  console.log(generateMission());
