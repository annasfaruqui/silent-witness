import registration from "../../assets/images/operations-section/registering-a-case.jpg";
import investigation from "../../assets/images/operations-section/investigating-case.jpg";
import raid from "../../assets/images/operations-section/police-raid.jpg";

export const operations_data = [
  {
    id: 1,
    stepNumber: "01",
    name: "Registration of the report in a police station",
    description:
      "The anonymous report is evaluated and a case is registered in the nearest police station of the area where the drug trafficking is allegedly reported.",
    image: registration,
  },
  {
    id: 2,
    stepNumber: "02",
    name: "The matter of the report is investigated",
    description:
      "The anonymous report is investigated by using any existing criminal data and any previous records of criminal activity in the reported areas, and also by investigating any suspects and evidences that arise from the registered report.",
    image: investigation,
  },
  {
    id: 3,
    stepNumber: "03",
    name: "Commencement of Anti-Drug Trafficking Operation",
    description:
      "After all evaluations and investigations, A police raid operation will be conducted at the reported area of the drug trafficking case",
    image: raid,
  },
];
