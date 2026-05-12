import { getDestinationById } from "@/lib/service";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { AlertDialog, Button } from "@heroui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { BiCheck, BiEdit } from "react-icons/bi";
import Link from "next/link";
const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const destination = await getDestinationById(id);

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
          <AlertDialog>
            <Button variant="danger" className="rounded-none">
              Delete
            </Button>
            <AlertDialog.Backdrop>
              <AlertDialog.Container>
                <AlertDialog.Dialog className="sm:max-w-[400px]">
                  <AlertDialog.CloseTrigger />
                  <AlertDialog.Header>
                    <AlertDialog.Icon status="danger" />
                    <AlertDialog.Heading>
                      Delete destination permanently?
                    </AlertDialog.Heading>
                  </AlertDialog.Header>
                  <AlertDialog.Body>
                    <p>
                      This will permanently delete{" "}
                      <strong>{destination.destinationName}</strong> and all of
                      its data. This action cannot be undone.
                    </p>
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary">
                      Cancel
                    </Button>
                    <Button slot="close" variant="danger">
                      Confirm Delete
                    </Button>
                  </AlertDialog.Footer>
                </AlertDialog.Dialog>
              </AlertDialog.Container>
            </AlertDialog.Backdrop>
          </AlertDialog>
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
                  {destination?.duration.split(" ")[0] - 1} Nights
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
            <div className="w-80 border p-4">
              <p className="text-gray-500">Starting from</p>
              <p className="text-2xl text-cyan-500">${destination?.price}</p>
              <p className="text-gray-500">per person</p>
              <p className="mt-10 border py-1 px-2 bg-[#eeeeee]">
                {destination?.departureDate || "N/A"}
              </p>
              <button className="bg-[#15a1bf] px-5 py-2 w-full mt-10 cursor-pointer text-white flex items-center justify-center gap-1">
                Book Now <FiArrowRight />
              </button>
              <div className="mt-4 space-y-1">
                <p className="flex items-center gap-1 text-gray-600">
                  <BiCheck color="green" size={25} /> Free Cancellation up to 7
                  days
                </p>
                <p className="flex items-center gap-1 text-gray-600">
                  <BiCheck color="green" size={25} /> Travel insurance included
                </p>
                <p className="flex items-center gap-1 text-gray-600">
                  <BiCheck color="green" size={25} /> 24/7 customer support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
