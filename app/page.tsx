import { Badge } from "@/components/ui/badge";
import { BackgroundBeams } from "@/components/ui/beams";
import { WailtlistForm } from "@/components/wailtlist";
import { Headphones } from "lucide-react";
import Image from "next/image";

export default function Waitlist() {
  return (
    <main className="flex pt-20 px-5 md:px-10 relative lg:px-20 min-h-dvh justify-center items-center">
      <div className="max-w-7xl w-full relative z-30 gap-10 grid lg:grid-flow-col ">
        <div className="flex flex-col justify-center">
          <div className="space-y-5">
            <Badge
              variant={"secondary"}
              className="text-muted-foreground flex space-x-1 items-center max-w-fit"
            >
              <p>Join the beat</p> <Headphones width={14} height={14} />
            </Badge>
            <h1 className="text-7xl font-semibold">
              Discover your <span className="text-primary">music tribe</span>
            </h1>
            <p className="text-muted-foreground lg:max-w-2xl">
              Find new friends who share your Spotify vibe. Connect, explore,
              and bond over your favorite tunes. Join Sonder now and let your
              music find your people.
            </p>
            <WailtlistForm />
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
  );
}
