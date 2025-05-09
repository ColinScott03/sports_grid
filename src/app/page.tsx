import GridButton from "./components/GridButton";
import GridTeam from "./components/GridTeam";

export default function Home() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-4 grid-rows-4 bg-red-300">
        <GridTeam></GridTeam>
        <GridTeam></GridTeam>
        <GridTeam></GridTeam>
        <GridTeam></GridTeam>
        <GridTeam></GridTeam>
        <GridButton></GridButton>
        <GridButton></GridButton>
        <GridButton></GridButton>
        <GridTeam></GridTeam>
        <GridButton></GridButton>
        <GridButton></GridButton>
        <GridButton></GridButton>
        <GridTeam></GridTeam>
        <GridButton></GridButton>
        <GridButton></GridButton>
        <GridButton></GridButton>
      </div>
    </div>
  );
}
