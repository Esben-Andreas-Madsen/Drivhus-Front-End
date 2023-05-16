import TempBoundaries from "./tempBoundary/TempBoundaries";
import HumBoundaries from "./humBoundary/HumBoundaries";
import CO2Boundaries from "./CO2Boundary/CO2Boundaries";

export default function Boundaries() {
  return (
    <>
      <TempBoundaries />
      <HumBoundaries />
      <CO2Boundaries />
    </>
  );
}