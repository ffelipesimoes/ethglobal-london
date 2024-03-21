"use client";
import CommunityCard from "@/components/CommunityCard";
import FileUploadToIPFS from "@/components/Ipfs";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { fanTokens } from "@/lib/mocks/cards";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTokens, setFilteredTokens] = useState(fanTokens);

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = fanTokens.filter((token) => {
      return token.name.toLowerCase().includes(lowercasedFilter);
    });
    setFilteredTokens(filteredData);
  }, [searchTerm]);

  const handleTeamClick = (teamName: string) => {
    if (filteredTokens.length === fanTokens.filter((token) => token.name === teamName).length) {
      setFilteredTokens(fanTokens);
      setSearchTerm("");
    } else {
      const filteredData = fanTokens.filter((token) => token.name === teamName);
      setFilteredTokens(filteredData);
      setSearchTerm("");
    }
  };

  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center my-8">
        <h2 className="text-2xl mb-4">Discover decentralised communities for fans</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Or create your own</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create your community</DialogTitle>
              <DialogDescription>Create a new community with IPFS</DialogDescription>
            </DialogHeader>

            <FileUploadToIPFS />

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="flex w-full max-w-md mb-4">
          <Input
            placeholder="Search"
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4 m-4">
          <Button onClick={() => handleTeamClick("Barcelona FC")}>Barcelona</Button>
          <Button onClick={() => handleTeamClick("Juventus FC")}>Juventus</Button>
          <Button onClick={() => handleTeamClick("Manchester United")}>Manchester United</Button>
          <Button onClick={() => handleTeamClick("Paris Saint-Germain")}>Paris Saint-Germain</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTokens.map((token) => (
            <CommunityCard key={token.id} {...token} id={token.id.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
}
