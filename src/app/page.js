import Banner from "@/components/Banner";
import FeaturedDestination from "@/components/FeaturedDestination";
import { getFeturedDes } from "@/lib/service";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";

export default async function Home() {
  const featuredDes = await getFeturedDes();

  const {
    destinationName,
    country,
    price,
    duration,
    rating,
    imageUrl,
    description,
  } = featuredDes[0];
  return (
    <div>
      <Banner />
      <div className="py-30 space-y-10  max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-6xl">Featured Destinations</h1>
            <p className="text-lg">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>
          <Button
            variant="outline"
            className="rounded-lg border-blue-500 text-cyan-500"
          >
            All Destinations <FaArrowRight />{" "}
          </Button>
        </div>
        <div>
          <FeaturedDestination featuredDes={featuredDes} />
        </div>
      </div>
    </div>
  );
}
