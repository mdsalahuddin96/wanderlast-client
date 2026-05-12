import DestinationCard from "@/components/DestinationCard";
import { getAllDestination } from "@/lib/service";
import Link from "next/link";
import React from "react";

const DestinationPage = async () => {
  const allDestination = await getAllDestination();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-10">
      {allDestination.map((destination) => (
        <Link key={destination._id} href={`/destinationDetails/${destination._id}`}>
          <DestinationCard destination={destination}></DestinationCard>
        </Link>
      ))}
    </div>
  );
};

export default DestinationPage;
