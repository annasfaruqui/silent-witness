import accessForm from "../../assets/images/how-to-report-section/access-form.jpg";
import provideDetails from "../../assets/images/how-to-report-section/providing-details.jpg";
import anoymousReporting from "../../assets/images/how-to-report-section/anonymous-reporting.jpg";
import supportingEvidence from "../../assets/images/how-to-report-section/supporting-evidence.jpg";
import secureTransmission from "../../assets/images/how-to-report-section/secure-transmission.jpg";
import communityImpact from "../../assets/images/how-to-report-section/community-impact.jpg";

export const howToReport_data = [
  {
    id: 1,
    stepNumber: 1,
    stepHeading: "Access reporting form",
    stepDescripton: `The first step to reporting a drug trafficking activity. Navigate to the "Report" section on our website to access the anonymous reporting form.`,
    image: accessForm,
  },
  {
    id: 2,
    stepNumber: 2,
    stepHeading: "Provide details",
    stepDescripton:
      "Utilize our intuitive reporting form to provide essential details about the incident. Input the location, time, and any additional information that may assist in addressing the reported activity.",
    image: provideDetails,
  },
  {
    id: 3,
    stepNumber: 3,
    stepHeading: "Report Anonymously",
    stepDescripton:
      "Report illegal drug trafficking activities with complete anonymity. Choose to submit information without revealing personal details, ensuring your safety and privacy throughout the process.",
    image: anoymousReporting,
  },
  {
    id: 4,
    stepNumber: 4,
    stepHeading: "Supporting evidence",
    stepDescripton:
      "Enhance the impact of your report by attaching optional supporting evidence, such as images or relevant documentation, to provide a comprehensive overview for authorities.",
    image: supportingEvidence,
  },
  {
    id: 5,
    stepNumber: 5,
    stepHeading: "Secure transmission",
    stepDescripton:
      "Your information is transmitted securely using encryption protocols, safeguarding your data from unauthorized access. Feel confident that your contribution to community safety is handled with the utmost care.",
    image: secureTransmission,
  },
  {
    id: 6,
    stepNumber: 6,
    stepHeading: "Community impact",
    stepDescripton:
      "Be a part of the larger effort to combat illegal drug trafficking. Your anonymous reports contribute to building a safer community, creating a ripple effect that strengthens the collective fight against illicit activities.",
    image: communityImpact,
  },
];
