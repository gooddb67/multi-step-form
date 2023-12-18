import Sidenav from "../components/Sidenav";
import PersonalInfo from "../pages/PersonalInfo";

const navSteps = [
  {
    id: 1,
    stepLabel: "STEP 1",
    stepDescription: "YOUR INFO",
  },
  {
    id: 2,
    stepLabel: "STEP 2",
    stepDescription: "SELECT PLAN",
  },
  {
    id: 3,
    stepLabel: "STEP 3",
    stepDescription: "ADD-ONS",
  },
  {
    id: 4,
    stepLabel: "STEP 4",
    stepDescription: "SUMMARY",
  },
];

export default function FormContainer() {
  return (
    <div>
      <Sidenav />
      <PersonalInfo />
    </div>
  );
}
