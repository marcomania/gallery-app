import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 p-2">
      {images.map((image) => (
        <div key={image.id} className="flex flex-col" style={{ height: "320px" }}>
          <Link href={`/img/${image.id}`} >
            <Image
              src={image.url}
              alt={image.name}
              width={480}
              height={480}
              />
          </Link>
          <div className="text-center">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}