import Image from "next/image";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/c903ef6f-f25a-45d6-ac9c-82bd5a661eb1-62q1hi.png",
  "https://utfs.io/f/c7be26dd-fbba-4ba0-92ec-da99b70048bd-b7wcyj.png",
  "https://utfs.io/f/42f40f13-e921-432e-8435-dccbf5b44f57-se850a.png",
]

const mockImages = mockUrls.map((url, index) => ({ 
  id: index+1,
  url 
}));


export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <div className="">
      {posts.map((post) => ( <div key={post.id}>{post.name}</div> )) }
      <div className="flex flex-wrap gap-4">
        
        { [...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
}