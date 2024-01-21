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
    created_at: fromToday(-420, true),
    reportDate: fromToday(-420),
    incidentDetails:
      "Unusual activity in a known drug hotspot. Group gathering in an area with a history of drug-related incidents.",
    incidentDate: fromToday(-450),
    addressDetails: null,
    numPersons: 5,
    personDetails:
      "Group of individuals gathering in a known drug hotspot. Some individuals wearing hoodies and acting suspiciously.",
    vehicleDetails: "Multiple bikes and a van present.",
    weaponsDetails: "None visible.",
    furtherInformation: "Known hotspot. Increased police presence requested.",
    status: "false",
  },
  {
    created_at: fromToday(-418, true),
    reportDate: fromToday(-418),
    incidentDetails:
      "This is not really a report, I just wanted to let ther team behind this platform know that, This platform has given me the confidence to report suspicious activities in my neighborhood, knowing that I'm contributing to community safety. And I am very thankful for this.",
    incidentDate: fromToday(-418),
    addressDetails: null,
    numPersons: null,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unrelated",
  },
  {
    created_at: fromToday(-415, true),
    reportDate: fromToday(-415),
    images: [imageUrl + "sample-img-8.jpg"],
    incidentDetails:
      "So, I'm in the local park, right? And there are these two teenagers acting all kinds of strange. Their behavior is seriously erratic, and it's got me thinking: Could be some drug use or smuggling going on. They're making moves that just don't add up. I'm a bit concerned about what's happening, so I think it's crucial to dig deeper and figure out exactly what's going on with these teenagers and their questionable activities in the park.",
    incidentDate: fromToday(-418),
    addressDetails: "666 Green Park, Suburbia, Dharwad",
    numPersons: 2,
    personDetails:
      "Two teenagers were observed in the park exchanging some stuff, which I suspect are drugs of some sort. One of them was of a dark complexion, and the other was of a wheatish complexion. both of them were of average height, about 5'7\" tall. Both of them had short hairs. No tattoos or any other distinguishing features were observed.",
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation:
      "Concerns about drug use among teenagers. Increased patrolling requested.",
    status: "solved",
  },
  {
    created_at: fromToday(-355, true),
    reportDate: fromToday(-355),
    images: [imageUrl + "sample-img-9.jpg"],
    incidentDetails:
      "A while back, I was at the district's railway station, and I observed two individuals whose gender wasn't clear, engaging in a discreet bag exchange near the station's backyard. The exchange appeared intentional, sparking suspicions about the contents being transferred. Given the clandestine nature of the event and its proximity to a public space, I believed it was crucial to investigate the incident to ensure the safety and security of the surrounding area.",
    incidentDate: fromToday(-358),
    addressDetails: "777 Railway Station, Naruto district, Hubli",
    numPersons: 2,
    personDetails:
      "I noticed the incident from a far distance and was not able to identify who the individuals were, or any of their distinguishing features.",
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unsolved",
  },
  {
    created_at: fromToday(-333, true),
    reportDate: fromToday(-333),
    images: [imageUrl + "sample-img-10.jpg"],
    incidentDetails:
      "Recently, I observed a man entering an abandoned building without any belongings and exiting with a packet. What caught my attention was his peculiar and suspicious behavior, almost as if he was trying to conceal his actions. After obtaining the packet, he proceeded to his car, where he exhibited continued uneasy behavior, and swiftly drove away. The entire sequence raised concerns, prompting the need for an investigation into the circumstances surrounding this individual's activities at the abandoned building.",
    incidentDate: fromToday(-339),
    addressDetails: "Near 888 Madara Street, Prefecture Station, Saitama",
    numPersons: 1,
    personDetails:
      "It was only one pretty tall man, he was easily over 6 and a half feet tall. He was in his exercise clothes. One thing that was very noticeable and a distinguishing feature on him was he had a tattoo of a snake on his left shin.",
    vehicleDetails:
      "the man came to the building in a grey color Toyota Corolla bearing the registartion number ST 45 AB 3567.",
    weaponsDetails: "I did not observe any weapons with the man.",
    furtherInformation:
      "Abandoned building activities seem unusual. Immediate intervention required.",
    status: "unsolved",
  },
  {
    created_at: fromToday(-300, true),
    reportDate: fromToday(-300),
    incidentDetails:
      "As an anonymous user, I've seen my reports make a difference. Knowing that actions are taken to address the crimes I've reported gives me confidence in the effectiveness of this platform.",
    incidentDate: fromToday(-300),
    addressDetails: null,
    numPersons: null,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unrelated",
  },
  {
    created_at: fromToday(-289, true),
    reportDate: fromToday(-289),
    images: [imageUrl + "sample-img-11.jpg"],
    incidentDetails:
      "I witnessed an unsettling event at a local petrol pump. Three men on separate motorcycles, hastily departed the pump premises immediately after leaving behind several packages at the pump's office. Their swift exit and the nature of the packages left behind raised significant concerns regarding this suspicious activity at the petrol pump.",
    incidentDate: fromToday(-300),
    addressDetails: "111 Ashok Petroleum, Urban Center, Draken",
    numPersons: 3,
    personDetails: "Group of 3 men. All of them probably in their late 20s.",
    vehicleDetails:
      "The men were using two vehicles. One was an old 2006 model Activa(black color), and the other one was an old model Hero Honda Splendor(black and purple color). I could not see the registration numbers of the two vehicles as they were at a distance from me.",
    weaponsDetails: "None observed.",
    furtherInformation: null,
    status: "probing",
  },
  {
    created_at: fromToday(-270, true),
    reportDate: fromToday(-270),
    images: [imageUrl + "sample-img-12.jpg"],
    incidentDetails:
      "Suspicious transaction in a stairway by individuals wearing PPE kit. Individuals seen exchanging items the narrow stairway. They were probably dressed in PPE kits to mimic medical workers and remove any unnecessary attention or suspicion from themselves.",
    incidentDate: fromToday(-275),
    addressDetails: "222 Alley Lane, Hashirama Road, Indra District",
    numPersons: 2,
    personDetails:
      "Two individuals engaging in a suspicious transaction in a narrow stairway. Both individuals appear cautious. I have attached an image below of these individuals. Please take immediate action against tjose individuals.",
    vehicleDetails: "None observed",
    weaponsDetails: "None observed.",
    furtherInformation:
      "If individuals are carrying out such disgraveful illegal drug trafficking activities in public, and that too in medical PPe kits, then this is a very concerning matter. How can we accept the actions of these people, who would not even consider the dignity of medical equipment and people invovled in the field of medicine, and use these equipments and the respected image of medical staff to their own selfish benefit.",
    status: "probing",
  },
  {
    created_at: fromToday(-280, true),
    reportDate: fromToday(-280),
    images: [imageUrl + "sample-img-13.jpg"],
    incidentDetails:
      "Some time ago, there was a concerning situation near an abandoned warehouse. A sizable gathering, predominantly consisting of homeless individuals, was observed engaging in the consumption of narcotic substances. This alarming scenario near the deserted warehouse arises the need for an investigation to ensure the safety of the community and address the potential risks associated with the presence of such a group in the area.",
    incidentDate: fromToday(-290),
    addressDetails: "333 Warehouse Street, Industrail Area, Jaipur",
    numPersons: 15,
    personDetails:
      "Large group gathering near an abandoned warehouse. The group amy have well over 20 individuals, but I observed about 15 of them. Some individuals carrying bags, and all of them appeared to be homeless poor people.",
    vehicleDetails: "No vehicleds around.",
    weaponsDetails:
      "Some individuals carrying knifes, machetes, and even cheap unregistered revolvers.",
    furtherInformation:
      "The presence of such individual poses a threat to the whole community, and therefore, I on behalf of the whole community demand immediate investigation in the matter and to take action as soon as possible against this case.",
    status: "probing",
  },
  {
    created_at: fromToday(-240, true),
    reportDate: fromToday(-240),
    images: [imageUrl + "sample-img-14.jpg"],
    incidentDetails:
      "I observed a distressing incident in a deserted area where a group of individuals was intimidating two teenage boys. The individuals were demanding money and packages from the boys and exhibited a heightened sense of caution, constantly surveilling the surroundings for any passerby or approaching individuals. The threatening behavior and clandestine activities raised immediate concerns, necessitating an investigation into the safety of the teenage boys and the potential criminal activity unfolding in the area.",
    incidentDate: fromToday(-245),
    addressDetails: "Near the outskirts of the abandoned old Industrial area",
    numPersons: null,
    personDetails:
      "There were several individuals involved in the incident.I was not able to make out exactly how many of them were there. But one thing of significance was that most of the men were black and appeared to be from Africa. Some men even had their faces covered with masks.",
    vehicleDetails: "A few motor bikes were present at the scene",
    weaponsDetails: "The individuals carried knifes and guns.",
    furtherInformation: null,
    status: "unrelated",
  },
  {
    created_at: fromToday(-200, true),
    reportDate: fromToday(-200),
    images: [imageUrl + "sample-img-15.jpg", imageUrl + "sample-img-16.jpg"],
    incidentDetails:
      "In a recent observation, I can confirm an individual engaging in the consumption of narcotic drugs obtained through illicit means. The person's behavior is notably altered under the influence of these drugs, indicating a clear misuse and potential involvement in drug trafficking. I reported this alarming situation to ensure swift intervention, addressing the drug misuse and preventing potential harm.",
    incidentDate: fromToday(-230),
    addressDetails: "555 Mob Society, Garou Road Exit-7, City-6.",
    numPersons: 1,
    personDetails:
      "The individual is a 54-year old man named Parry Hotter, who works as a truck driver. His residence is in the society mentioned in the address details field.",
    vehicleDetails:
      "He drives a white color honda Aviator bearing the registration number C6 78 EG 9090.",
    weaponsDetails:
      "The individual I am reporting always carries a povket knife with him. As far as my knowledge on him, he does not carry any firearms.",
    furtherInformation:
      "This individual's behavior and involvement in drug trafficking and misuse is causing a sense of panic among the other society members. So, an immediate and strict action against this individual and the other people invovled with him is highly appreciated.",
    status: "solved",
  },
  {
    created_at: fromToday(-180, true),
    reportDate: fromToday(-180),
    images: [
      imageUrl + "sample-img-17.jpg",
      imageUrl + "sample-img-18.jpg",
      imageUrl + "sample-img-19.jpg",
    ],
    incidentDetails:
      "Two masked individuals, shrouded in mystery, arrived discreetly at a seemingly abandoned building, the eerie silence broken only by the hum of their black Tata Nexon. Their movements were swift and purposeful as they retrieved three bags from the car's trunk, carrying an air of urgency. With a synchronized entrance, they disappeared into the building, leaving onlookers to wonder about the nature of their clandestine activities.\nInside, the building's shadows concealed their actions, but after a significant passage of time, the mysterious pair emerged, transformed. Gone were the masks and the previous attire, replaced by new clothing and an added detail—an inconspicuous blue bag clutched in one of the individual's hands. The significance of this new addition remained a puzzle, as it wasn't visible during their initial entry.\nTheir departure was no less intriguing, with the two figures exiting at different intervals, creating a sense of calculated timing. After a brief five-minute interlude, they reappeared one after the other, slipping back into the world beyond the building's shadows. What followed was a high-speed departure, as the black sedan accelerated away, leaving behind unanswered questions and a lingering sense of unease.\nThis sequence of unusual events, marked by secrecy and rapid movements, underscores the need for a comprehensive report to bring attention to the potentially suspicious activities witnessed at the deserted building.",
    incidentDate: fromToday(-185),
    addressDetails: "Surrounding area near the old Railway underbridge",
    numPersons: 2,
    personDetails:
      "Individual 1:\nPhysical Appearance: A tall figure, standing around 6 feet, with a lean build and a distinctive gait, suggesting a certain level of athleticism.\nClothing: Initially adorned in dark, nondescript clothing and a black mask concealing facial features.\nAdditional Details: Notable for an air of confidence and purpose, moving with precision during the covert operation.\n\nIndividual 2:\nPhysical Appearance: Of average height, approximately 5 feet 8 inches, with a more stocky build.\nClothing: Similar to the companion, dressed in dark clothing and wearing a mask that obscured facial identity.\nAdditional Details: Displayed a level of caution and awareness, suggesting a keen understanding of the need for discretion. The small blue bag held during the exit raises questions about its contents and its role in the entire scenario.\n\nI have attached their images which I was somehow able to take from my mobile from a distance.",
    vehicleDetails:
      "They came and drove off in the same vehicle, which was a black Tata Nexon. It did not have a registration number plate(probably beacuse it seemeed new). One notable thing I noticed regarding their car was that their was a long scratch on the car from the front door to the back door on the left side of the car.",
    weaponsDetails: "None observed.",
    furtherInformation:
      "The building they entered was an abandoned building. Even the whole area was an abandoned area with only a few buildings in sight. There has not been any person or anyone using that building since a very long time. And, this is a very uninhabited area, even a single person passing by is a rare occurence.",
    status: "probing",
  },
  {
    created_at: fromToday(-180, true),
    reportDate: fromToday(-180),
    incidentDetails:
      "Silent Witness provides a secure space for reporting. I've noticed the impact of my reports in addressing illegal drug activities, underscoring the effectiveness of anonymous community involvement.",
    incidentDate: fromToday(-182),
    addressDetails: null,
    numPersons: 0,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unrelated",
  },
  {
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
    status: "false",
  },
  {
    created_at: fromToday(-150, true),
    reportDate: fromToday(-150),
    images: [imageUrl + "sample-img-20.jpg"],
    incidentDetails:
      "Two teenagers casually strolled into the cozy cafe, their demeanor seemingly ordinary. As they approached the counter, they ordered their drinks with an air of nonchalance. However, upon receiving their beverages, their actions took a surreptitious turn. From the confines of their pockets emerged small, discreet packages containing a mysterious powdery substance.\nCarefully unwrapping the paper, they added the enigmatic powder to their drinks, exhibiting a level of secrecy that raised concerns. After consuming their modified beverages, the duo departed from the cafe, their departure marked by an unsteady gait and erratic behavior. The incident left an unsettling atmosphere in their wake, prompting the need for further investigation.",
    incidentDate: fromToday(-151),
    addressDetails: "Supreme Cafe, 111 Festival Plaza, State",
    numPersons: 2,
    personDetails:
      "Both the teenagers seemed to be Caucasian. Both were probably in their early 20s. Both of average height. One of them had blonde hairs, and the other one had dark brown hairs.",
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unsolved",
  },
  {
    created_at: fromToday(-100, true),
    reportDate: fromToday(-100),
    incidentDetails:
      "Individuals conducting unusual rituals in a park. Group seen engaging in mysterious activities.",
    incidentDate: fromToday(-103),
    addressDetails: "222 Mystic Park, Suburbia, State",
    numPersons: 5,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "false",
  },
  {
    created_at: fromToday(-150, true),
    reportDate: fromToday(-150),
    incidentDetails:
      "I appreciate the commitment to anonymity on Silent Witness. It's gratifying to see my reports lead to positive changes in the community, reinforcing the value of this platform.",
    incidentDate: fromToday(-155),
    addressDetails: null,
    numPersons: null,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unrelated",
  },
  {
    created_at: fromToday(-149, true),
    reportDate: fromToday(-149),
    images: [
      imageUrl + "sample-img-21.jpg",
      imageUrl + "sample-img-22.jpg",
      imageUrl + "sample-img-23.jpg",
    ],
    incidentDetails:
      "In a desolate area, a man and a woman coincidentally cross paths. As they continue walking away from each other in their respective directions, an unexpected twist occurs. Swiftly and discreetly, the man seizes the opportunity to snatch the woman's handbag and hastily makes his escape, disappearing into the urban landscape. The sudden act of theft leaves the woman stunned, prompting an urgent need to report the incident for immediate intervention.",
    incidentDate: fromToday(-150),
    addressDetails: "444 Alley Street, Industrial District, State",
    numPersons: 2,
    personDetails:
      "I have attacheed the photos of the incident, please deduce the people from the photos.",
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unrelated",
  },
  {
    created_at: fromToday(-120, true),
    reportDate: fromToday(-120),
    incidentDetails:
      "Suspicious behavior near a school. Individual seen loitering near a school premises during school hours.",
    incidentDate: fromToday(-130),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near a school. Carrying a backpack and observing the school premises.",
    vehicleDetails: "None",
    weaponsDetails: "None observed.",
    furtherInformation:
      "Concerns about suspicious behavior near a school. Increased security recommended.",
    status: "false",
  },

  {
    created_at: fromToday(-120, true),
    reportDate: fromToday(-120),
    incidentDetails:
      "In a bustling marketplace, a vendor is observed engaging in suspicious activities. The individual, operating a small stall, appears to be selling ordinary goods but occasionally slips small packets to customers in a secretive manner. These packets seem to contain substances not typically associated with legal trade. The vendor's discreet behavior raises concerns about the possible involvement in illicit activities, necessitating immediate attention to ensure the safety of the community.",
    incidentDate: fromToday(-122),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: 1,
    personDetails:
      "The Vendor is a middle-aged man aroud 50 years of age. He is of a short stature, fair complexion, and a bald head, with a thick mustache.",
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "solved",
  },
  {
    created_at: fromToday(-100, true),
    reportDate: fromToday(-100),
    incidentDetails:
      "In a local park, a group of individuals is suspected of organizing covert meetings involving the exchange of small parcels. The group congregates in a secluded area, making exchanges and dispersing quickly, displaying behavior that raises suspicions of potential illicit transactions. This recurring pattern suggests an ongoing operation that warrants investigation to uncover any illegal activities and maintain public safety.",
    incidentDate: fromToday(-105),
    addressDetails: "Public Park, 555 School Street, Suburbia, State",
    numPersons: 4,
    personDetails:
      "All the individuals are men probably in their early 30s. All of them always have their faces covered with clinical face masks.",
    vehicleDetails: "None observed",
    weaponsDetails: "One of the men carries a small pocketb knife.",
    furtherInformation:
      "Concerns about suspicious behavior in the lcoal park. Increased security and immediate action requested.",
    status: "solved",
  },
  {
    created_at: fromToday(-80, true),
    reportDate: fromToday(-80),
    incidentDetails:
      "Two individuals, possibly involved in illicit activities, are observed meeting in a dimly lit alley. As they exchange small packages, their body language suggests an attempt to conceal their actions. The clandestine nature of the exchange, coupled with the secluded location, raises suspicions about the nature of their dealings, prompting the need for a thorough investigation to ascertain any potential criminal activities.",
    incidentDate: fromToday(-82),
    addressDetails: "400 Residential Area, SubUrb District, Ankleshwar",
    numPersons: 2,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "solved",
  },
  {
    created_at: fromToday(-45, true),
    reportDate: fromToday(-45),
    incidentDetails:
      "A peculiar incident unfolded in a quiet residential neighborhood. Late at night, residents reported witnessing unusual behavior near an abandoned house. A group of individuals was spotted carrying what seemed to be containers of unknown substances into the building. The entire operation appeared clandestine, with the individuals carefully avoiding any attention. The sudden activity raised concerns among the locals, prompting the need for a thorough investigation to ensure the safety of the community.",
    incidentDate: fromToday(-50),
    addressDetails: "Hinata Society, Ostanian Street, State",
    numPersons: null,
    personDetails:
      "Individual acting suspiciously in the residentail neighbourhood. All the individuals were tall looking men with their faces covered with face masks.",
    vehicleDetails: "A black Mahindra Scorpio having the number PY 01 ES0111.",
    weaponsDetails: "One of the men was carrying an assault rifle.",
    furtherInformation:
      "Concerns about the safety of the residents in the area lead to the submission of this report by a resident of the area.",
    status: "probing",
  },
  {
    created_at: fromToday(-30, true),
    reportDate: fromToday(-30),
    incidentDetails:
      "A strange occurrence unfolded in a bustling shopping district. Witnesses reported an individual displaying suspicious behavior near the entrance of a popular shopping mall. The person, carrying a backpack, seemed to be loitering and observing the mall premises.",
    incidentDate: fromToday(-32),
    addressDetails: null,
    numPersons: 1,
    personDetails:
      "Individual acting suspiciously near a school. Carrying a backpack and observing the mall premises.",
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation:
      "Concerns about suspicious behavior near the mall. Increased security recommended.",
    status: "false",
  },

  {
    created_at: fromToday(-22, true),
    reportDate: fromToday(-22),
    incidentDetails:
      "In a clandestine transaction behind the local society temple, a group of individuals engaged in a brief yet suspicious exchange. Several individuals received packets of drugs from a man, promptly compensating him with cash. Following the completion of their transaction, the group dispersed, each heading in a different direction, swiftly vanishing from sight. This discreet incident raises concerns about possible illicit activities near the community temple, warranting attention and investigation to maintain the safety of the area.",
    incidentDate: fromToday(-25),
    addressDetails: "Behind Society Temple, Brindhavan Society, Ankleshwar",
    numPersons: 7,
    personDetails:
      "There were a total of 7 individuals. 6 of them(4 boys and 2 girls) who were receiving drugs and providing cash to the man were youngsters, probably college students. And there was a man who was handling them out packets of drugs. All the students had their faces covered with face masks, whereas the other tall man who was handing out the drugs had his face covered with a handkerchief. One thing that I particularly noticed about this man was that he had one of his eyes covered with a bandage.",
    vehicleDetails:
      "The youngsters arriived at the scene on different vehicles. Although, I did not see all the vehicles they used, I know of two of the vehicles. One of them was a red and black Bajaj Pulsar 150 with registration number JH 05 RT 9022, and the other one was a Matte Blue Suzuki Burgman Street 125 with registration number JH 04 EY 2099.",
    weaponsDetails:
      "The tall man handing out the drugs had a pistol with him, which I noticed while he used it to threatened one of the youngster for more cash.",
    furtherInformation:
      "This incident is a very concerning matter. People like these can cause a lot of trouble to the innocent people who visit the temple. So, i would like to request immmedaite probe into the matter.",
    status: "solved",
  },
  {
    created_at: fromToday(-15, true),
    reportDate: fromToday(-15),
    incidentDetails:
      "In a distressing incident unfolding during the evening at around 5 PM, a homeless child became the victim of an abduction by two men on a bike, following a heated argument. Several hours later, the perpetrators returned to the same location and released the child. Upon closer inspection, it became apparent that the child had sustained bruises across his body, indicating potential harm. Additionally, troubling signs of intoxication were evident, and our community social worker observed concerning syringe punctures on the child's arms. This alarming occurrence demands immediate attention and investigation to ensure the well-being of the vulnerable child and address any potential criminal activities.",
    incidentDate: fromToday(-18),
    addressDetails: "Near the entrance of Lovely society, MG Road, Mumbai.",
    numPersons: 2,
    personDetails:
      'The 2 individuals on the bike were wearing helmets, so their facial features could not be noticed. One thing that I was able to notice was that one of the bikers had a tattoo with the word "MOM ❤" on his left forearm.',
    vehicleDetails:
      "They used differnet bikes to abduct and to drop the child. The bike they used to abduct the child was a 2009 model Blue Honda Shine, whose registration number I could not note down due to the fast pace at which the incident took place. The bike they used to drop off the child was a black Bajaj Pulsar 220F bike bearing the registration number KA 29 H 3000.",
    weaponsDetails: "None observed.",
    furtherInformation: null,
    status: "unsolved",
  },
  {
    created_at: fromToday(-6, true),
    reportDate: fromToday(-6),
    images: [imageUrl + "robert-lewandowski.jpg"],
    incidentDetails:
      "My name is Robert Lewandowski. I am a Social Worker and I do not mind my name being recorded. I would actually like you to use my name and photo to give the people courage to report such illegal drug trafficking activities that they notice.\nI just want to say that, I've witnessed the positive impact of community engagement on Silent Witness. It goes beyond reporting; it's about creating awareness and advocating for a drug-free society. And therefore I would like to thank the whole team behind this platform for taking such an exemplary initiative.",
    incidentDate: fromToday(-7),
    addressDetails: null,
    numPersons: null,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unrelated",
  },
  {
    created_at: fromToday(0, true),
    reportDate: fromToday(0),
    incidentDetails:
      "An unsettling discovery unfolded as the belongings of a recently deceased neighbor were examined. Mysterious circumstances surrounded the individual's demise, given their seemingly robust health. Upon inspecting the cupboards, an unusual find emerged — containers filled with a powdery substance of unknown origin. The peculiar nature of this finding raises questions about the circumstances of the neighbor's death and calls for a thorough investigation to uncover any potential foul play or health-related concerns.",
    incidentDate: fromToday(-5),
    addressDetails: "555 School Street, Suburbia, State",
    numPersons: null,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation:
      "One thing that the locals were noticing was that the deceased who worked a 9-5 job and who always used to come back home by 7, started coming back home very late in the night, like at 1am or 2am.",
    status: "unsolved",
  },
  {
    created_at: fromToday(-2, true),
    reportDate: fromToday(-2),
    incidentDetails:
      "In the heart of the city, an unexpected incident transpired during a bustling evening. Witnesses reported a peculiar gathering in an alley behind a local market. A group of individuals, adorned in mysterious attire, engaged in cryptic rituals, exchanging peculiar artifacts. The air was filled with an eerie energy, and passersby couldn't help but feel uneasy. As the group dispersed, leaving behind an enigmatic symbol drawn on the ground, concerns arose about the nature of their activities. The community, disturbed by this unusual occurrence, called for an investigation to unravel the secrets hidden within the city's shadows.      ",
    incidentDate: fromToday(-3),
    addressDetails: null,
    numPersons: null,
    personDetails: null,
    vehicleDetails: null,
    weaponsDetails: null,
    furtherInformation: null,
    status: "unsolved",
  },
];
