import { PhysicalHero } from "./PhysicalHero";
import { PhysicalHowItWorks } from "./PhysicalHowItWorks";
import { StrictnessLadder } from "./StrictnessLadder";
import { ComparisonTable } from "./ComparisonTable";
import { GetTheDisc } from "./GetTheDisc";

/** The full physical-unlock chapter (sections 10a–10f of the handoff). */
export function PhysicalChapter() {
  return (
    <div id="physical">
      <PhysicalHero />
      <StrictnessLadder />
      <PhysicalHowItWorks />
      <ComparisonTable />
      <GetTheDisc />
    </div>
  );
}
