import Link from "next/link";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/20/solid";
import SignIn from "@/components/SignIn";
import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="h-screen w-full relative flex justify-center flex-col items-center text-center">
      <h1 className="p-4 text-white text-8xl font-bold uppercase font-heading">
        Honeydew
      </h1>
      <h2 className="p-4 text-4xl text-white md:outline">
        The smart todo list for the entire family
      </h2>
      {session && (
        <Link
          href="/board"
          aria-label="View Personal Board"
          className="bg-primary rounded-md px-8 py-3 text-base shadow-md mt-4 text-xl"
        >
          View board
        </Link>
      )}
      <Image
        src="https://storage.googleapis.com/public-images-5e6e98b5d6a9b294e961ed8e7b2836de/honeydew_splash.webp"
        alt="splash-image"
        className="-z-10 brightness-50 object-cover"
        aria-hidden
        fill
      />
      <Link
        href="https://unsplash.com/photos/1KCd9nAeog8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        target="_blank"
        className="flex gap-2 items-center absolute bottom-2 right-2 font-mono font-thin text-xs text-gray-500 uppercase"
      >
        <PhotoIcon className="h-4 w-4" />
        Photo credit Greg Rosenke
      </Link>
    </main>
  );
};

export default Home;
