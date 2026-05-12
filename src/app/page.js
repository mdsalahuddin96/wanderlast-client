import Banner from "@/components/Banner";
import FeaturedDestination from "@/components/FeaturedDestination";
import { getFeturedDes } from "@/lib/service";
import { Button } from "@heroui/react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import headset from "@/assets/Headset.png";
import mapTrifold from "@/assets/MapTrifold.png";
import shieldCheck from "@/assets/ShieldCheck.png";
import person1 from "@/assets/person1.png";
import person2 from "@/assets/person2.png";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
export default async function Home() {
  const featuredDes = await getFeturedDes();
  return (
    <div>
      <Banner />
      {/* featured Destinations */}
      <div className="pt-20 space-y-10  container mx-auto">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-6xl">Featured Destinations</h1>
            <p className="text-lg text-gray-600">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>
          <Link href={"/destinations"}>
            <Button
              variant="outline"
              className="rounded-lg border-blue-500 text-cyan-500"
            >
              All Destinations <FaArrowRight />{" "}
            </Button>
          </Link>
        </div>
        <div>
          <FeaturedDestination featuredDes={featuredDes} />
        </div>
      </div>
      {/* Why choose Wanderlast */}
      <div className="bg-[#edfcff] mt-5 py-20">
        <div className="container mx-auto space-y-2 text-center">
          <h1 className="text-6xl">Why Choose Wanderlust</h1>
          <p className="text-lg text-gray-600">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10 container mx-auto">
          <div className="bg-white p-10 space-y-3">
            <Image
              src={shieldCheck}
              alt="ShieldCheck icon"
              height={50}
              width={50}
            ></Image>
            <h1 className="text-2xl">Safe & Secure</h1>
            <p className="text-gray-600">
              Your safety is our priority with comprehensive travel insurance
              and 24/7 support.
            </p>
          </div>
          <div className="bg-white p-10 space-y-3">
            <Image
              src={mapTrifold}
              alt="Headset icon"
              height={50}
              width={50}
            ></Image>
            <h1 className="text-2xl">Expert Guides</h1>
            <p className="text-gray-600">
              Local experts who bring destinations to life with authentic
              cultural insights.
            </p>
          </div>
          <div className="bg-white p-10 space-y-3">
            <Image
              src={headset}
              alt="Headset icon"
              height={50}
              width={50}
            ></Image>
            <h1 className="text-2xl">24/7 Support</h1>
            <p className="text-gray-600">
              Round-the-clock customer service to assist you wherever your
              journey takes you.
            </p>
          </div>
        </div>
      </div>
      {/* What traveler says */}
      <div className="py-20">
        <div className="container mx-auto space-y-2 flex justify-between items-center">
          <div>
            <h1 className="text-6xl">What Travelers Say</h1>
            <p className="text-lg text-gray-600">
              Real experiences from our happy travelers
            </p>
          </div>
          {/* arrow button */}
          <div className="flex items-center gap-3 ml-8">
            <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#15a1bf] hover:text-white hover:border-none transition">
              <HiOutlineArrowLeft />
            </button>

            <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#15a1bf] hover:text-white hover:border-none transition">
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10 container mx-auto">
          <div className="border border-gray-200 p-10 space-y-3 flex gap-4 items-center ">
            <div>
              <p className="text-gray-600">
                &quot;The Bali trip was absolutely magical! Every detail was
                perfectly planned. The resorts were luxurious and the cultural
                experiences were unforgettable.&quot;
              </p>
              <div className="mt-22">
                <p className="text-cyan-500">— Michael Chen</p>
                <p className="text-gray-600 ml-5">Singapore</p>
              </div>
            </div>
            <Image
              src={person2}
              alt="ShieldCheck icon"
              height={200}
              width={200}
            ></Image>
          </div>
          <div className="border border-gray-200 p-10 space-y-3 flex gap-4 items-center ">
            <div>
              <p className="text-gray-600">
                &quot;Swiss Alps adventure exceeded all expectations. The
                mountain views were breathtaking and our guide was incredibly
                knowledgeable. Highly recommend!&quot;
              </p>
              <div className="mt-22">
                <p className="text-cyan-500">— Sarah Johnson</p>
                <p className="text-gray-600 ml-5">New York, USA</p>
              </div>
            </div>
            <Image
              src={person1}
              alt="ShieldCheck icon"
              height={200}
              width={200}
            ></Image>
          </div>
        </div>
      </div>

      {/* start travel with us */}
      <div className="py-20 bg-[#0c0b0b]">
        <div className="bg-[url(../assets/CTA.png)] w-full h-80">
          <div className="w-full h-full bg-black opacity-70"></div>
        </div>
        <div className="container mx-auto space-y-2 mt-10 flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl">Ready to Start Your Journey?</h1>
          <p className="text-lg ">
            Join thousands of travelers who have discovered the world with us
          </p>
          <button className="uppercase bg-white text-black mt-4 px-5 py-3 cursor-pointer flex items-center gap-4">
            Book Your Trip Today <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
