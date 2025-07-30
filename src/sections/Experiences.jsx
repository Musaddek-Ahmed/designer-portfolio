import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className=" sm:mx-24 mx-0">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
