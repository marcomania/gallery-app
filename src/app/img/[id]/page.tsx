import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoIdAsNumber = parseInt(photoId);
  if (isNaN(photoIdAsNumber)) throw new Error("Invalid photo ID");

  return (
    <FullPageImageView id={photoIdAsNumber}/>
  );
}