"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { DateField, Input, Label } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { toast } from "react-toastify";

const BookNowCard = ({ destination }) => {
  const [departureDate, setDepartureDate] = useState(null);
  const [dateError, setDateError] = useState(false);
  const { _id, country, destinationName, imageUrl, price } = destination;
  const { data } = useSession();
  const user = data?.user;
  const bookingData = {
    userId: user?.id,
    userName: user?.name,
    userEmail: user?.email,
    userImage: user?.image,
    destinationId: _id,
    destinationName,
    imageUrl,
    price,
    country,
    departureDate: new Date(departureDate),
    status: "pending",
  };

  const handleBooking = async () => {
    const {data:tokenData}=await authClient.token()
    console.log(tokenData)
    if (departureDate !== null) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authorization":`Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      if (data.insertedId) {
        toast.success(`${destinationName} package is booked!`);
        redirect("/my-bookings");
      } else {
        toast.error("Something went wrong");
      }

      setDateError(false);
    } else {
      setDateError(true);
    }
  };
  return (
    <div className="w-80 shadow-md border p-4">
      <p className="text-gray-500">Starting from</p>
      <p className="text-2xl text-cyan-500">${destination?.price}</p>
      <p className="text-gray-500 mb-6">per person</p>

      <DateField
        isRequired
        className="w-[256px]"
        name="date"
        onChange={setDepartureDate}
      >
        <Label>Departure Date:</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
        {dateError && (
          <p className="text-red-500 text-sm">Departure Date Required!</p>
        )}
      </DateField>

      <button
        onClick={handleBooking}
        className="bg-[#15a1bf] px-5 py-2 w-full mt-10 cursor-pointer text-white flex items-center justify-center gap-1"
      >
        Book Now <FiArrowRight />
      </button>
      <div className="mt-4 space-y-1">
        <p className="flex items-center gap-1 text-gray-600">
          <BiCheck color="green" size={25} /> Free Cancellation up to 7 days
        </p>
        <p className="flex items-center gap-1 text-gray-600">
          <BiCheck color="green" size={25} /> Travel insurance included
        </p>
        <p className="flex items-center gap-1 text-gray-600">
          <BiCheck color="green" size={25} /> 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default BookNowCard;
