import Link from "next/link";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <main className="h-screen w-full relative flex justify-center flex-col items-center text-center">
      <h1 className="p-4 text-white text-8xl font-bold uppercase font-heading">
        Honeydew
      </h1>
      <h2 className="p-4 text-4xl text-white md:outline">
        The smart todo list for the entire family
      </h2>
      <Image
        src="https://storage.googleapis.com/d42ba1b4ddfb8a90580a58367da83a83/honeydew_splash.webp"
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
}
