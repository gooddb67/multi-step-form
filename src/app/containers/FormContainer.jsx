import Sidenav from "../components/Sidenav";
import PersonalInfo from "../pages/PersonalInfo";

const navSteps = [
  {
    id: 1,
    label: "STEP 1",
    description: "YOUR INFO",
  },
  {
    id: 2,
    label: "STEP 2",
    description: "SELECT PLAN",
  },
  {
    id: 3,
    label: "STEP 3",
    description: "ADD-ONS",
  },
  {
    id: 4,
    label: "STEP 4",
    description: "SUMMARY",
  },
];

export default function FormContainer() {
  return (
    <div>
      <Sidenav steps={navSteps} />
      <PersonalInfo />
    </div>
  );
}
