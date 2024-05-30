import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView( props: { id: number }) {
    const idAsNumber = Number(props.id);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

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
                <div className="p-2">
                    Uploaded by:
                    <span>{uploaderInfo.fullName}</span>
                </div>
                <div className="p-2">
                    Created On:
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="p-2">
                    <form action={async () => {
                        "use server";

                        await deleteImage(idAsNumber, image.utKey);
                    }}>
                        <Button type="submit" variant={"destructive"}>Delete</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}