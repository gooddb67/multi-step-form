import SidenavItem from "./SidenavItem";

export default function SidenavList({ steps }) {
  const navSteps = steps.map((step) => (
    <SidenavItem
      key={step.id}
      id={step.id}
      label={step.label}
      description={step.description}
    />
  ));
  return navSteps;
}
