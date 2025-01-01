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

  const items = ["C.BOX", "NVG", "STEALTH CAMO.PP", "PHANTOM CIGAR", "PENTAZEMIN", "NOCTOCYANIN", "ACCELERAMIN", "PARASITE(MIST)", ];

// Random item selection helper function
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate Mission Sortie
function generateMission() {
  const missionType = randomItem(missions);
  const region = randomItem(regions);
  const location = randomItem(locations[region]);
  const challenge = randomItem(challenges);

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

  return {
      missionType,
      region,
      location,
      challenge,
      buddy,
      outfit,
      primaryWeaponHip,
      primaryWeaponBack,
      secondaryWeapon,
      prosthesis,
      supportWeapon,
      item
  };
}

// Add Event Listener for the Button
document.getElementById("generate-btn").addEventListener("click", function () {
  const sortie = generateMission();

  // Correctly update the table with the random values
  document.getElementById("character-name").innerText = "Snake"; // Character Name
  document.getElementById("buddy-name").innerText = sortie.buddy; // Buddy Name
  document.getElementById("outfit-name").innerText = sortie.outfit; // Outfit Name
  document.getElementById("primary-weapon-hip").innerText = sortie.primaryWeaponHip; // Hip Weapon Name
  document.getElementById("primary-weapon-back").innerText = sortie.primaryWeaponBack; // Back Weapon Name
  document.getElementById("secondary-weapon").innerText = sortie.secondaryWeapon; // Secondary Weapon Name
  document.getElementById("prosthesis").innerText = sortie.prosthesis; // Prosthesis Name
  document.getElementById("support-weapon").innerText = sortie.supportWeapon; // Support Weapon Name
  document.getElementById("item").innerText = sortie.item; // Item Name

  // Update the mission details below the button
  document.getElementById("mission-type").innerText = "" + sortie.missionType;
  document.getElementById("mission-location").innerText = "" + sortie.location;
  document.getElementById("mission-challenge").innerText = "" + sortie.challenge;
  document.getElementById("mission-region").innerText = "   - " + sortie.region;

  changeBackground(sortie.region);

// Function to change the background based on the region
function changeBackground(region) {
  let body = document.body;

  if (region === 'Northern Kabul, Afghanistan') {
      body.style.backgroundImage = "url('images/NK.jpg')"; // Afghan background
  } else if (region === 'Angola-Zaire border region, Central Africa') {
      body.style.backgroundImage = "url('images/AZ.jpg')"; // Africa background
  }
}

});
