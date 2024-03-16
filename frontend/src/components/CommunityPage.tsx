/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4aIBpGIiesL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Community() {
  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      {/* change colour of h1 to green */}
      <h1 className="text-2xl font-bold mb-6" style={{ color: "green" }}>Community main page (NOT LOGGED IN)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img
            alt="Team Banner"
            className="w-full h-auto bg-gray-200 rounded-md"
            height="300"
            src="/placeholder.png"
            style={{
              aspectRatio: "768/300",
              objectFit: "cover",
            }}
            width="768"
          />
          <div className="mt-4 p-6 border rounded-md">
            <h2 className="text-xl font-semibold">DESCRIPTION</h2>
            <p className="mt-2 text-gray-600">
              Discover the vibrant community of FC Barcelona fans and join the movement towards innovative funding
              solutions for your favorite team. Engage with fellow supporters, participate in discussions, and stay
              updated with the latest initiatives powered by web3 technology.
            </p>
          </div>
        </div>
        <div className="border rounded-md p-4">
          <div className="flex flex-col items-center mb-4">
            <Avatar>
              <AvatarImage alt="FC Barcelona" src="/placeholder.png" />
              <AvatarFallback>FCB</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold mt-2">FC Barcelona</h3>
            <p className="text-sm text-gray-500">Members: 19100</p>
          </div>
          <div className="flex flex-col space-y-4">
            <Button className="w-full">Connect Wallet</Button>
            <p className="text-sm text-gray-500 text-center">
              You must hold FC Barcelona tokens
              <br />
              If you dont have them — buy them
              <Link href="/path-to-buy-tokens">
               here
              </Link>

              .{"\n                  "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

