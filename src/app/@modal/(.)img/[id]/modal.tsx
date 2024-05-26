"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog ref={dialogRef} className="m-0 h-screen w-screen bg-black/90" onClose={onDismiss}>
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onDismiss}
        >
          &times;
        </button>
        <div className="h-full flex justify-center items-center">{children}</div>
        {/* <button onClick={onDismiss} className="close-button" /> */}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}