import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiMap, BiStar, BiCalendarEvent } from "react-icons/bi";
import { HiArrowUpRight } from "react-icons/hi2";

const DestinationCard = ({ destination }) => {
  let night = 0;
  if (destination?.duration) {
    night = parseInt(destination.duration.split(" ")[0] - 1);
  }
  return (
    <div className="max-w-120 relative flex flex-col">
      <div className="flex items-center justify-center w-15 text-xs font-medium px-2 py-1 absolute right-5 top-5 rounded glass">
        {destination?.rating || "0"}
        <BiStar />
      </div>
      <Image
        src={destination?.imageUrl || destination.image}
        alt={destination.destinationName}
        height={600}
        width={600}
        className="w-full object-cover grow"
      />
      <div className="flex items-center gap-1.5 mt-3 text-gray-600">
        <BiMap />
        <span>{destination?.country || "Null"}</span>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-black font-medium">
          {destination?.destinationName || "Null"}
        </h1>
        <p className="text-2xl font-medium">
          ${destination?.price || "Null"}
          <span className="text-sm  text-gray-500">/person</span>
        </p>
      </div>
      <div className="text-gray-600 flex items-center gap-2">
        <BiCalendarEvent />
        <p>
          {destination?.duration || "NULL"}/{night} Nights
        </p>
      </div>
      <Link href={`/destinationDetails/${destination._id}`}>
        <Button
          variant="outline"
          className="mt-5 border-[#15a1bf] rounded-lg text-[#15a1bf]"
        >
          View Details <HiArrowUpRight />{" "}
        </Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
