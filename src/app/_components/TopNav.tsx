import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const TopNav = () => {
  return (
    <div className="flex items-center justify-between w-full text-xl font-semibold border-b h-16 p-4 bg-gray-800">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </div> 
  )
}

export default TopNav