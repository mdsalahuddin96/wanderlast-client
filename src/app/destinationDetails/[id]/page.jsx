import { getDestinationById } from "@/lib/service";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import Link from "next/link";
import DeleteDestinationBtn from "@/components/DeleteDestinationBtn";
import { Button } from "@heroui/react";
import BookNowCard from "@/components/BookNowCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({ headers: await headers() });
  const destination = await getDestinationById(id, token);
  let night = 0;
  if (destination?.duration) {
    night = parseInt(destination.duration.split(" ")[0] - 1);
  }
  return (
    <div className="container mx-auto">
      <div className="mt-10 flex justify-between items-center">
        <Link href={"/destinations"}>
          <Button variant="outline" className="border-0">
            <FiArrowLeft /> Back to destination
          </Button>
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href={`/destinationDetails/${id}/editDestination`}>
            <Button variant="outline" className="rounded-none">
              <BiEdit /> Edit
            </Button>
          </Link>
          <DeleteDestinationBtn destination={destination} />
        </div>
      </div>
      <div className="my-8">
        <div>
          <Image
            src={destination?.imageUrl}
            alt={destination?.destinationName}
            height={800}
            width={800}
            className="w-full h-100 mb-10"
          />
        </div>
        <div className="grid grid-cols-3">
          <div className="left col-span-2 ">
            <div className="space-y-4">
              <p className="flex items-center gap-1.5 text-gray-600">
                <PiMapPinAreaBold /> {destination?.country}
              </p>
              <h1 className="text-4xl">{destination?.destinationName}</h1>
              <div className="flex gap-4">
                <p className="flex items-center gap-1 font-semibold">
                  <FaStar color="green" />
                  {destination?.rating || 0}
                </p>
                <p className="flex items-center gap-1 font-semibold">
                  <FaCalendarDays /> {destination?.duration || "Null"}/{" "}
                  {night} Nights
                </p>
              </div>
              <div className="">
                <h2 className="text-2xl">Overview</h2>
                <p className="text-gray-600 text-sm">
                  {destination?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="right flex justify-end">
            <BookNowCard destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
