/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/MQ7PHYJPJpv
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Feed() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="User profile picture" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          {/* User name on the same row with User profile picture */}
          <div>
              <div className="font-semibold">Dami Soyombo</div>
          </div>
        </div>
        <div className="mt-2 mb-4">
          <Input placeholder="Enter text here..." />
        </div>
        
        <div className="flex justify-between">
          <Button className="bg-blue-500 text-white">Post</Button>
        </div>
      </div>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="Dami Soyombo" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Dami Soyombo</div>
            <div className="text-xs text-gray-500">4 days ago</div>
          </div>
        </div>
        <div className="mt-2">
          <p>Congratulations to Hamoye Data Science Internship Stage C Winners!</p>
          <p>
            The collapse of the online-advertising market in 2001 made marketing on the Internet seem even less
            compelling. Website usability, press releases.
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <div className="flex items-center space-x-2">
            <HeartIcon className="text-gray-500" />
            <span>Like 30</span>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="Dami Soyombo" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Dami Soyombo</div>
            <div className="text-xs text-gray-500">1 week ago</div>
          </div>
        </div>
        <div className="mt-2">
          <p>
            New course uploaded collapse of the online-advertising market in 2001 made marketing on the Internet seem
            even less compelling. Website usability, press releases.
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <div className="flex items-center space-x-2">
            <HeartIcon className="text-gray-500" />
            <span>Like 30</span>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="Hamoye Team" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>HT</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">Hamoye Team</div>
            <div className="text-xs text-gray-500">4 days ago</div>
          </div>
        </div>
        <div className="mt-2">
          <p>A new course titled STEM+ CHALLENGE has been added to your course library</p>
        </div>
        <div className="mt-4 flex justify-end">
          <div className="flex items-center space-x-2">
            <HeartIcon className="text-gray-500" />
            <span>Like 30</span>
          </div>
        </div>
      </div>
    </div>
  )
}


function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageSquareIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
