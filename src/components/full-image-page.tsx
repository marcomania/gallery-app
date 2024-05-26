import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView( props: { id: number }) {
    const image = await getImage(props.id);
    const uploaderInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className="flex h-full w-full min-w-0 justify-center">
            <div className="flex flex-shrink justify-center items-center"> 
                <Image src={image.url} alt={image.name}
                    //layout="intrinsic"
                    width={800}  // Ajusta el tamaño según tu imagen
                    height={600} // Ajusta el tamaño según tu imagen
                    className="flex-shrink object-contain"
                />
            </div>
            <div className="flex w-48 flex-shrink-0 flex-col border-l gap-2">
                <div className="border-b p-2 text-center text-lg">
                    {image.name}
                </div>
                <div className="flex flex-col p-2">
                    Uploaded by:
                    <span>{uploaderInfo.fullName}</span>
                </div>
                <div className="flex flex-col p-2">
                    Created On:
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}