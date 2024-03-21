"use client";

import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { communityData } from "@/lib/mocks/community";
import Menu from "@/components/Menu";
import Locking from "@/components/Locking";
import Feed from "@/components/Feed";

import ProposalTogether from "@/components/ProposalTogether";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const Page = ({ params }: { params: { token: number } }) => {
  const tokenData = communityData.find((community) => community.id === Number(params.token));

  const { primaryWallet: walletAddress } = useDynamicContext();

  if (!tokenData) {
    return <div>Community not found</div>;
  }
  return (
    <>
      <Menu />
      <div className="max-w-4xl mx-auto my-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="relative w-full h-60 bg-gray-200 rounded-md overflow-hidden">
              <Image alt="Team Banner" className="object-cover" layout="fill" src={tokenData!.imageBanner} />
            </div>
            <div className="mt-4 p-6 border rounded-md">
              <h2 className="text-xl font-semibold">DESCRIPTION</h2>
              <p className="mt-2 text-gray-600">{tokenData!.description}</p>
            </div>
          </div>
          <div className="border rounded-md p-4">
            <div className="flex flex-col items-center mb-4">
              <Avatar>
                <AvatarImage alt={tokenData!.name} src={tokenData!.imageAvatar} />
                <AvatarFallback>FCB</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold mt-2">{tokenData!.name}</h3>
              <p className="text-sm text-gray-500">Members: {tokenData!.membersCount.toLocaleString()}</p>
            </div>
            {walletAddress && <Locking />}

            {!walletAddress && (
              <div className="flex flex-col space-y-4">
                <Button className="w-full">Connect Wallet</Button>
                <p className="text-sm text-gray-500 text-center">
                  {tokenData!.tokenRequirement}
                  <br />
                  If you dont have them — buy them
                  <Link href={tokenData!.buyTokenLink} className="text-blue-500 hover:text-blue-600">
                    {" "}
                    here
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
        {/* <Unlocking /> */}
      </div>
      <ProposalTogether />
      <Feed />
    </>
  );
};

export default Page;
