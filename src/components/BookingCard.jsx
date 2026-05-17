"use client";
import { LuClock2 } from "react-icons/lu";
import Image from "next/image";
import { BiCalendarAlt, BiMapPin } from "react-icons/bi";
import { Button } from "@heroui/react";
import { RiDeleteBinFill } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { revalidedPath } from "@/lib/action"

const BookingCard = ({ booking }) => {
  const router = useRouter();
  const {
    _id,
    imageUrl,
    destinationName,
    departureDate,
    country,
    status,
    price,
  } = booking;
  const handleBookingCancel = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cancelBooking/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.deletedCount > 0) {
     
    //   revalidatePath using useRouter()
    //   router.push("/my-bookings");
    //   router.refresh();

    // revalidatePath using server action Function
    await revalidedPath("/my-bookings")
     toast.success(`${destinationName} package canceled successfully!`);
    }
  };
  return (
    <div className="grid grid-cols-7 border rounded-2xl shadow-md">
      <div className="image col-span-2 h-60 w-full p-5">
        <Image
          src={imageUrl}
          alt={destinationName}
          height={200}
          width={200}
          className="object-cover w-full h-50"
        />
      </div>
      <div className="text col-span-3 p-5 space-y-1">
        <p className="flex items-center justify-center gap-1 max-w-25 bg-amber-100 text-amber-400 py-1 px-2 rounded-full">
          <LuClock2 size={12} />
          {status}
        </p>
        <h3 className="text-3xl">{destinationName}</h3>
        <p className="flex gap-1 items-center text-gray-600">
          <BiCalendarAlt />
          Departure:{" "}
          {new Date(departureDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="flex items-center gap-1">
          <BiMapPin />
          {country}
        </p>
        <p className="text-3xl text-cyan-500 mt-8">${price}</p>
      </div>
      <div className="button col-span-2 self-end p-10">
        <Button
          onClick={handleBookingCancel}
          variant="outline"
          className="rounded-none text-red-500 border border-red-500"
        >
          <RiDeleteBinFill /> Cancel
        </Button>
        <Button className="rounded-none">
          <BsEye /> View
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
