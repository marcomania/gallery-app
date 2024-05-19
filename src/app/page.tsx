import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <div className="">
      <div className="flex flex-wrap gap-4">
        { [...images, ...images, ...images].map((image, index) => (
          <div key={index} className="flex flex-col w-48">
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              width={250}
              height={250}
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}