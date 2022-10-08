import "./cards.css";

import AccelerateImg from "../../assets/tile-image__accelerate.png";
import ActivateImg from "../../assets/tile-image__activate.png";
import AdvocateImg from "../../assets/tile-image__advocate.png";
import { SingleCard } from "./SingleCard";

export const Cards = () => {
  return (
    <div className="card-section">
      <div className="tiles-wrapper">
        <SingleCard
          title={"Activate"}
          content={"With pH-balancing cleansers to reboot skin for self-repair"}
          cta={"Shop cleansers"}
          imgUrl={ActivateImg}
        />
        <SingleCard
          title={"Accelerate"}
          content={"With acid treatments that build skin's resilience."}
          cta={"Shop Exfoliants"}
          imgUrl={AccelerateImg}
        />
        <SingleCard
          title={"Advocate"}
          content={"To nourish and protect your skin's healthy and vitality"}
          cta={"Shop Moisturisers"}
          imgUrl={AdvocateImg}
        />
      </div>
    </div>
  );
};
