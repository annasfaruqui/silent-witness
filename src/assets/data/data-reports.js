// incidentDate format: yyyy-mm-dd
import { add } from "date-fns";
import { supabaseUrl } from "../../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/reports-images/`;

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const reports_data = [
  {
    id: 1,
    created_at: fromToday(-498, true),
    reportDate: fromToday(-498),
    images: [imageUrl + "sample-img-1.jpg", imageUrl + "sample-img-2.jpg"],
    incidentDetails:
      "Possible drug sale observed in the alley. Three men were involved in a suspicious transaction.\nTwo of the men were behaving suspiciously near the park entrance. Both individuals appear to be in their 30s, one wearing a black hoodie and the other in a blue jacket, and they were wearing bike helmets, so their faces were not clearly visible. And the third man was a little bit older, like in his 40s, wearing yellow t-shirt anda clinical mask to hide his face.\nThe two helmet wearing men were using a Yamaha Fazer bike, and the other man was on foot(he was not using any vehicles).",
    incidentDate: fromToday(-500),
    addressDetails: "Near 456 Oak Avenue Park, Tailwind road, Bengaluru",
    numPersons: 3,
    personDetails:
      "Three men engaging in a suspicious transaction in the alley. One individual appeared to be in his 40s, and the other two individuals appeared to be in their 30s. All of them had their faces covered, one with a clinical mask and the other two with bike helmets. all of them were of pretty tall builds, like more than 6 feet tall.\nAlso the guy in the yellow t-shirt who was wearing a clinical mask had a tattoo of a snake on his left forearm.",
    vehicleDetails:
      "One Yamaha Fazer having registration number KA04M5522 and one of the men was wearing a black helmet with the logo of 'Save Our Planet'.",
    weaponsDetails: "No visible weapons.",
    furtherInformation:
      "Witnessed from a distance. Requesting prompt investigation.",
    status: "solved",
  },

  {
    id: 2,
    created_at: fromToday(-450, true),
    reportDate: fromToday(-450),
    images: [imageUrl + "sample-img-3.jpg", imageUrl + "sample-img-4.jpg"],
    incidentDetails:
      "A concerned citizen reported witnessing suspicious drug-related activity near the local park. Two individuals were observed acting suspiciously near the park entrance. Those men were trying to sell me some green ball-shaped stuff, the size of a playing dice, and that thing resembled some kind of drug. This happened in a local lassi shop near XYZ Monument. they were trying to sell that stuff to me for 150 rupees, but I found it very suspicious and I just left the place without buying anything.",
    incidentDate: fromToday(-453),
    addressDetails:
      "Super Lassi Shop, 123 Main Street, near XYZ Monument, Hyderabad",
    numPersons: 2,
    personDetails:
      "Two individuals behaving suspiciously in the lassi shop near the XYZ Monument. Both individuals appear to be in their 40s, one was wearing a pink shirt and the other one wearing a black shirt. Both of them were about 5'8\" tall, and were of a dark wheatish complexion.",
    vehicleDetails: "No visible vehicle.",
    weaponsDetails: "No visible weapons.",
    furtherInformation:
      "Reported by a concerned citizen. The citizen informed me of drug selling practices taking place in the area. Urgent investigation required. Please monitor the area for any unusual activities.",
    status: "solved",
  },
  {
    id: 3,
    created_at: fromToday(-450, true),
    reportDate: fromToday(-450),
    incidentDetails:
      "Upon diligent observation, our vigilant citizen reported a peculiar scenario involving an abandoned property that arouses suspicions of potential drug storage. The location, void of any visible persons, raises concerns about clandestine activities. The abandoned property emits an unusual odor, hinting at possible illegal operations. The absence of individuals, coupled with the eerie stillness surrounding the location, adds an air of mystery. Our diligent reporter, acting as the eyes and ears of the community, seeks a thorough investigation into this matter to ensure the safety and well-being of our neighborhood. By bringing attention to this situation, they contribute to the collective effort to maintain a secure and drug-free environment for all residents.",
    incidentDate: fromToday(-452),
    addressDetails: "Villagetown Society, 789 Pine Road, Pune",
    numPersons: null,
    personDetails: null,
    vehicleDetails: "No visible vehicles.",
    weaponsDetails: "No visible weapons.",
    furtherInformation: null,
    status: "unrelated",
  },
  {
    id: 4,
    created_at: fromToday(-481, true),
    reportDate: fromToday(-481),
    images: [imageUrl + "sample-img-5.jpg"],
    incidentDetails:
      "At a recent social gathering, I noticed a concerning incident unfolding. Several masked individuals, shrouded in an air of mystery, were observed exchanging peculiar substances. The atmosphere at the party took an uneasy turn as these individuals discreetly laced their drinks with an unidentified and suspicious substance. The clandestine nature of their actions, coupled with the use of masks, raises alarm bells about potentially illicit activities taking place under the guise of a social event. I am deeply troubled by what I witnessed, and seek immediate attention to investigate this unsettling occurrence.",
    incidentDate: fromToday(-482),
    addressDetails:
      "Party Hall 102, Orbit Complex, Near Industrial City Exit-3, Mumbai",
    numPersons: 3,
    personDetails:
      "The notable people I noticed were 3 masked men of average height and build. Although there may be more people invovled, these three men grabbed my attention. I could not see their faces, as all of them were masked, but the skin on their hands and other exposed body parts indicated that they were of a darker complexion, and most probably foreigners of African origin. ",
    vehicleDetails: "None",
    weaponsDetails: "None",
    furtherInformation: null,
    status: "probing",
  },
  {
    id: 5,
    created_at: fromToday(-420, true),
    reportDate: fromToday(-420),
    images: [imageUrl + "sample-img-6.jpg"],
    incidentDetails:
      "A man, accompanied by his loyal canine companion, embarked on a seemingly routine walk. However, the ordinary facade quickly dissolved into suspicion as the man, with furtive intent, discreetly placed a packet containing an unidentified powdery substance into a random house's mailbox. The late-night stroll took an unsettling turn, raising concerns about the nature of the deposited material and the intentions behind this covert action. I keenly observed this mysterious act, and I recognize the potential gravity of the situation and therefore I request immediate investigation into the matter.\n I just out of curiosity checked the mailbox the ext day in the morning only to find that the mailbox was empty. This made me really suspicious about the amn last night and therefore I promptly reported this incident.",
    incidentDate: fromToday(-421),
    addressDetails: "222 Plaza Street, Downtown State, Bengaluru",
    numPersons: 1,
    personDetails:
      "A tall brown haired man who had a dog of the Aspin breed with him. The individual had short curly hairs, and a thin mustache witha clean shaved beard. the dog was yellowish in color and had some dark spots on the left side of his face.",
    vehicleDetails: "The man was on foot, No vehivles were opbserved nearby.",
    weaponsDetails:
      "Although, I am not 100% sure, but it looked like he had a pistol in his jacket.",
    furtherInformation:
      "The house of the mailbox in which he placed the packet is currently unoccupied. The last owners of the house sold the house to some government officer about two months ago, and the house has stayed unoccupied since then. There are no tenants, and there are no sights of the new owner ever entering their newly-purchases house.",
    status: "probing",
  },
  {
    id: 6,
    created_at: fromToday(-420, true),
    reportDate: fromToday(-420),
    images: [imageUrl + "sample-img-7.jpg"],
    incidentDetails:
      "In a recent observation, two girls, likely college students, were seen engaging in suspicious behavior. The scene unfolded as one of them discreetly produced two packets containing an unidentified green substance from her bag, exchanging them with the other in a covert manner. The exchange appeared calculated, as if they were intentionally concealing their actions. To mask their activity, they proceeded to a nearby tea stall, ordering two cups in an attempt to appear inconspicuous. This discreet exchange raises concerns regarding the intentions behind their distribution.",
    incidentDate: fromToday(-421),
    addressDetails: "333 School Avenue, Suburbia Lane, Chennai",
    numPersons: 2,
    personDetails:
      "There were two girls involved in the incident. One of them had a silky dark-brown hair in a bob cut type hairstyle, and she was wearing a blue hoodie, and carrying a reebok bagpack. She was also seen wearing earrings resembling the letter 'Z'. She was a short heigthed girl, looked about 150cm(5'0\") tall.\nThe other girl had long curly black hair tied in a plait, and was wearing a white shirt with brown spots as design on the shirt. She was not wearing any items of jewellery. This girl was rather tall, taller than an average female, about 180cm(5'11\") tall.",
    vehicleDetails:
      "The bob cut haired girl came to the place of incident on a white colored Activa scooter(2014 model). The scooter did neither had the front number plate, nor the rear number plate.",
    weaponsDetails: "No weapons on=bserved",
    furtherInformation: null,
    status: "solved",
  },
  {
    id: 7,
    created_at: fromToday(-45, true),
    reportDate: fromToday(-45),
    incidentDetails:
      "Unusual activity in a known drug hotspot. Group gathering in an area with a history of drug-related incidents.",
    incidentDate: fromToday(-48),
    addressDetails: "444 Alley Lane, Notorious City, State",
    numPersons: 5,
    personDetails:
      "Group of individuals gathering in a known drug hotspot. Some individuals wearing hoodies and acting suspiciously.",
    vehicleDetails: "Multiple bikes and a van present.",
    weaponsDetails: "None visible.",
    furtherInformation: "Known hotspot. Increased police presence requested.",
    status: "probing",
  },
  {
    id: 8,
    created_at: fromToday(-80, true),
    reportDate: fromToday(-80),
    incidentDetails:
      "Underground meeting suspected in a warehouse. Group seen entering a warehouse during odd hours.",
    incidentDate: fromToday(-95),
    addressDetails: "555 Warehouse Street, Industrial District, State",
    numPersons: 8,
    personDetails:
      "Group of individuals entering a warehouse during unusual hours. Some individuals carrying bags.",
    vehicleDetails: "No visible vehicles.",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Warehouse activities seem suspicious. Investigate immediately.",
    status: "false",
  },
  {
    id: 9,
    created_at: fromToday(-20, true),
    reportDate: fromToday(-20),
    incidentDetails:
      "Teenagers suspected of drug use in a local park. Group of teenagers behaving erratically.",
    incidentDate: fromToday(-22),
    addressDetails: "666 Green Park, Suburbia, State",
    numPersons: 6,
    personDetails:
      "Group of teenagers behaving erratically in the park. Some individuals appear to be under the influence.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about drug use among teenagers. Increased patrolling requested.",
    status: "false",
  },
  {
    id: 10,
    created_at: fromToday(-15, true),
    reportDate: fromToday(-15),
    incidentDetails:
      "Unattended backpack suspected in a public transport station. Suspicious backpack left unattended.",
    incidentDate: fromToday(-20),
    addressDetails: "777 Bus Station, Downtown, State",
    numPersons: 0,
    personDetails: "",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Unattended backpack causing suspicion. Immediate inspection needed.",
    status: "unsolved",
  },
  {
    id: 11,
    created_at: fromToday(-289, true),
    reportDate: fromToday(-289),
    incidentDetails:
      "Suspicious individuals seen in an abandoned building. Group engaged in suspicious activities.",
    incidentDate: fromToday(-296),
    addressDetails: "888 Abandoned Street, Outskirts, State",
    numPersons: 4,
    personDetails:
      "Group of individuals engaged in suspicious activities in an abandoned building. Some individuals wearing masks.",
    vehicleDetails: "No visible vehicles.",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Abandoned building activities seem unusual. Immediate intervention required.",
    status: "false",
  },
  {
    id: 12,
    created_at: fromToday(-70, true),
    reportDate: fromToday(-70),
    incidentDetails:
      "Unusual behavior in a local store. Individual acting nervously near the counter.",
    incidentDate: fromToday(-73),
    addressDetails: "999 Market Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "Individual acting nervously near the store counter. Carrying a backpack and avoiding eye contact.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Unusual behavior raises suspicion. Monitor the store for any illicit activities.",
    status: "solved",
  },
  {
    id: 13,
    created_at: fromToday(-140, true),
    reportDate: fromToday(-140),
    incidentDetails:
      "Late-night gathering in a park. Group seen gathering in the park during late hours.",
    incidentDate: fromToday(-142),
    addressDetails: "111 Midnight Park, Urban Center, State",
    numPersons: 7,
    personDetails:
      "Group of individuals gathering in the park during late hours. Some individuals carrying backpacks.",
    vehicleDetails: "No visible vehicles.",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Late-night gathering raises concerns. Increased patrol recommended.",
    status: "probing",
  },
  {
    id: 14,
    created_at: fromToday(-30, true),
    reportDate: fromToday(-30),
    incidentDetails:
      "Suspicious transaction in an alley. Individuals seen exchanging items in a narrow alley.",
    incidentDate: fromToday(-35),
    addressDetails: "222 Alley Lane, Downtown, State",
    numPersons: 2,
    personDetails:
      "Two individuals engaging in a suspicious transaction in a narrow alley. Both individuals appear cautious.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Witnessed a suspicious transaction. Immediate investigation required.",
    status: "solved",
  },
  {
    id: 15,
    created_at: fromToday(-1, true),
    reportDate: fromToday(-1),
    incidentDetails:
      "Large gathering near an abandoned warehouse. Group seen near an abandoned warehouse engaged in unknown activities.",
    incidentDate: fromToday(-7),
    addressDetails: "333 Warehouse Street, Industrial District, State",
    numPersons: 10,
    personDetails:
      "Large group gathering near an abandoned warehouse. Some individuals carrying bags.",
    vehicleDetails: "Multiple cars parked nearby.",
    weaponsDetails: "None visible.",
    furtherInformation:
      "Unknown activities near the warehouse. Immediate investigation recommended.",
    status: "false",
  },
  {
    id: 16,
    created_at: fromToday(-10, true),
    reportDate: fromToday(-10),
    incidentDetails:
      "Suspicious vehicle parked for an extended period. Unattended vehicle raising suspicions.",
    incidentDate: fromToday(-12),
    addressDetails: "444 Parking Lot, City Center, State",
    numPersons: 0,
    personDetails: "",
    vehicleDetails:
      "Black sedan parked for an extended period. No visible occupants.",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Unattended vehicle raising suspicions. Immediate inspection required.",
    status: "unsolved",
  },
  {
    id: 17,
    created_at: fromToday(-6, true),
    reportDate: fromToday(-6),
    incidentDetails:
      "Individuals loitering near a school bus stop. Group seen loitering near a school bus stop.",
    incidentDate: fromToday(-20),
    addressDetails: "555 School Bus Stop, Suburbia, State",
    numPersons: 5,
    personDetails:
      "Group of individuals loitering near a school bus stop. Some individuals appear to be underage.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about loitering individuals. Increased patrolling recommended.",
    status: "unsolved",
  },
  {
    id: 18,
    created_at: fromToday(-200, true),
    reportDate: fromToday(-200),
    incidentDetails:
      "Individual acting suspiciously in a library. Suspicious behavior observed near the library entrance.",
    incidentDate: fromToday(-220),
    addressDetails: "666 Library Street, Downtown, State",
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near the library entrance. Carrying a backpack and constantly looking around.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Suspicious behavior in the library. Immediate investigation needed.",
    status: "solved",
  },
  {
    id: 19,
    created_at: fromToday(-15, true),
    reportDate: fromToday(-15),
    incidentDetails:
      "Noise and disturbance in an apartment. Loud sounds and disturbance reported in a residential building.",
    incidentDate: fromToday(-27),
    addressDetails: "777 Quiet Street, Residential Area, State",
    numPersons: 0,
    personDetails: "",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Reports of loud sounds and disturbance in the apartment building. Investigate promptly.",
    status: "false",
  },
  {
    id: 20,
    created_at: fromToday(-183, true),
    reportDate: fromToday(-183),
    incidentDetails:
      "Unusual gathering in a parking garage. Group seen gathering in a parking garage during odd hours.",
    incidentDate: fromToday(-193),
    addressDetails: "999 Parking Garage, Urban Center, State",
    numPersons: 6,
    personDetails:
      "Group of individuals gathering in a parking garage during odd hours. Some individuals carrying bags.",
    vehicleDetails: "Multiple cars parked nearby.",
    weaponsDetails: "None visible.",
    furtherInformation:
      "Unusual gathering raises suspicions. Immediate intervention recommended.",
    status: "solved",
  },
  {
    id: 21,
    created_at: fromToday(-2, true),
    reportDate: fromToday(-2),
    incidentDetails:
      "Suspicious package found near a public event. Unattended package raises concerns.",
    incidentDate: fromToday(-3),
    addressDetails: "111 Festival Plaza, Downtown, State",
    numPersons: 0,
    personDetails: "",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Discovery of an unattended package near a public event. Immediate inspection required.",
    status: "probing",
  },
  {
    id: 22,
    created_at: fromToday(-100, true),
    reportDate: fromToday(-100),
    incidentDetails:
      "Individuals conducting unusual rituals in a park. Group seen engaging in mysterious activities.",
    incidentDate: fromToday(-103),
    addressDetails: "222 Mystic Park, Suburbia, State",
    numPersons: 5,
    personDetails:
      "Group of individuals conducting unusual rituals in Mystic Park. Some individuals dressed in peculiar attire.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Unusual activities in the park raise suspicions. Investigate promptly.",
    status: "solved",
  },
  {
    id: 23,
    created_at: fromToday(-2, true),
    reportDate: fromToday(-2),
    incidentDetails:
      "Abandoned building suspected for drug storage. Unusual activities reported in an abandoned structure.",
    incidentDate: fromToday(-9),
    addressDetails: "333 Desolate Street, Outskirts, State",
    numPersons: 0,
    personDetails: "",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Abandoned building suspected for illegal activities. Immediate investigation needed.",
    status: "unsolved",
  },
  {
    id: 24,
    created_at: fromToday(0, true),
    reportDate: fromToday(0),
    incidentDetails:
      "Unauthorized access to a restricted area. Individuals seen entering a restricted zone without permission.",
    incidentDate: fromToday(-20),
    addressDetails: "444 Restricted Zone, Industrial District, State",
    numPersons: 3,
    personDetails:
      "Group of individuals accessing a restricted zone without authorization. Some individuals wearing masks.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Unauthorized access to a restricted area raises concerns. Immediate intervention required.",
    status: "solved",
  },
  {
    id: 25,
    created_at: fromToday(-1, true),
    reportDate: fromToday(-1),
    incidentDetails:
      "Suspicious behavior near a school. Individual seen loitering near a school premises during school hours.",
    incidentDate: fromToday(-16),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near a school. Carrying a backpack and observing the school premises.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about suspicious behavior near a school. Increased security recommended.",
    status: "unsolved",
  },

  {
    id: 26,
    created_at: fromToday(-10000, true),
    reportDate: fromToday(-10000),
    incidentDetails:
      "Suspicious behavior near a school. Individual seen loitering near a school premises during school hours.",
    incidentDate: fromToday(-16),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near a school. Carrying a backpack and observing the school premises.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about suspicious behavior near a school. Increased security recommended.",
    status: "unsolved",
  },
  {
    id: 27,
    created_at: fromToday(-99909, true),
    reportDate: fromToday(-99909),
    incidentDetails:
      "Suspicious behavior near a school. Individual seen loitering near a school premises during school hours.",
    incidentDate: fromToday(-16),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near a school. Carrying a backpack and observing the school premises.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about suspicious behavior near a school. Increased security recommended.",
    status: "unsolved",
  },

  {
    id: 28,
    created_at: fromToday(-5000, true),
    reportDate: fromToday(-5000),
    incidentDetails:
      "Suspicious behavior near a school. Individual seen loitering near a school premises during school hours.",
    incidentDate: fromToday(-16),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near a school. Carrying a backpack and observing the school premises.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about suspicious behavior near a school. Increased security recommended.",
    status: "unsolved",
  },

  {
    id: 29,
    created_at: fromToday(-2000, true),
    reportDate: fromToday(-2000),
    incidentDetails:
      "Suspicious behavior near a school. Individual seen loitering near a school premises during school hours.",
    incidentDate: fromToday(-16),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near a school. Carrying a backpack and observing the school premises.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about suspicious behavior near a school. Increased security recommended.",
    status: "unsolved",
  },

  {
    id: 30,
    created_at: fromToday(-900, true),
    reportDate: fromToday(-900),
    incidentDetails:
      "Suspicious behavior near a school. Individual seen loitering near a school premises during school hours.",
    incidentDate: fromToday(-16),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near a school. Carrying a backpack and observing the school premises.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about suspicious behavior near a school. Increased security recommended.",
    status: "unsolved",
  },
];
