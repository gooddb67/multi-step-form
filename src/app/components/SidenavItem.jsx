export default function SidenavItem({ id, label, description }) {
  return (
    <div>
      <div>{id}</div>
      <div>{label}</div>
      <div>{description}</div>
    </div>
  );
}
