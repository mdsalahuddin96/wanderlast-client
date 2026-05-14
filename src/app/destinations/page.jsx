import DestinationCard from "@/components/DestinationCard";
import { getAllDestination } from "@/lib/service";
import React from "react";

const DestinationPage = async () => {
  const allDestination = await getAllDestination();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10">
      {allDestination.map((destination) => (
        <DestinationCard
          key={destination._id}
          destination={destination}
        ></DestinationCard>
      ))}
    </div>
  );
};

export default DestinationPage;
