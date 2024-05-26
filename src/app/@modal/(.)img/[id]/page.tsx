import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoIdAsNumber = parseInt(photoId);
  if (isNaN(photoIdAsNumber)) throw new Error("Invalid photo ID");

  return (
    <Modal>
      <FullPageImageView id={photoIdAsNumber}/>
    </Modal>
  );
}