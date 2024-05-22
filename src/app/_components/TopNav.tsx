"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing"

const TopNav = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between w-full text-xl font-semibold border-b h-16 p-4 bg-gray-800">
        <div>Gallery</div>
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UploadButton 
                  endpoint="imageUploader" 
                  onClientUploadComplete={ () => {
                    router.refresh();
                  }}
                />
                <UserButton/>
            </SignedIn>
        </div>
    </div> 
  )
}

export default TopNav