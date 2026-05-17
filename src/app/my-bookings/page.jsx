import BookingCard from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { getBookingsByUserId } from "@/lib/service";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const {token}=await auth.api.getToken({
    headers:await headers()
  })
  const userId = user?.id;
  const bookings = await getBookingsByUserId(userId,token);
  return (
    <div className="container mx-auto">
      <div className="my-10 space-y-3">
        <h1 className="text-6xl">My Bookings</h1>
        <p className="text-lg text-gray-600">
          Manage and view your upcoming travel plans
        </p>
      </div>
      {bookings.length < 1 ? (
        <div className="h-100 flex flex-col gap-2 justify-center items-center border shadow-md mb-10 rounded-2xl">
            <Image
            src={'/file.svg'}
            alt="file"
            height={100}
            width={100}
            />
            <p className="text-2xl text-gray-500">No package is booked yet!</p>
        </div>
      ) : (
        <div className="mb-10 space-y-5">
          {bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
