import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { BackgroundBeams } from "@/components/ui/beams";
import { Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Waitlist() {
  return (
    <>
      <Header/>
      <main className="flex flex-col py-20 px-5 md:px-10 lg:px-20 min-h-svh justify-center items-center -z-20 box-border">
        <div className="max-w-7xl w-full relative z-30 gap-10 grid lg:grid-flow-col px-4">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-5 max-sm:text-center">
              <Badge
                variant={"secondary"}
                className="text-muted-foreground flex space-x-1 items-center max-w-fit max-sm:mx-auto"
              >
                <p>Join the beat</p> <Headphones width={14} height={14} />
              </Badge>
              <h1 className="text-7xl max-sm:text-5xl font-semibold">
                Discover your <span className="text-primary">music tribe</span>
              </h1>
              <p className="text-muted-foreground lg:max-w-2xl">
                Find new friends who share your Spotify vibe. Connect, explore,
                and bond over your favorite tunes. Join Sonder now and let your
                music find your people.
              </p>

              <Link className="max-sm:mx-auto bg-primary rounded-md font-semibold text-black px-4 py-2 w-fit" href="https://forms.gle/XT1wqP7cNzgRDcSb6">
                Sign up for early access
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={"./Sonder.svg"}
              alt={"Sonder"}
              loading="lazy"
              width={250}
              height={200}
              className="relative"
            />
          </div>
        </div>
        <BackgroundBeams />
      </main>
    </>
  );
}
