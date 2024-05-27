"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import SimpleUploadButton from "./simple-upload-button";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between w-full text-xl font-semibold border-b h-16 p-4 bg-gray-800">
        <div>Gallery</div>
        <div className="flex flex-row gap-4 items-center">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <SimpleUploadButton/>
                <UserButton/>
            </SignedIn>
        </div>
    </div> 
  )
}

export default TopNav