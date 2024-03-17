"use client"
import CommunityCard from "@/components/CommunityCard";
import Menu from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fanTokens } from "@/lib/mocks/cards";
import { useEffect, useState } from "react";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTokens, setFilteredTokens] = useState(fanTokens);

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = fanTokens.filter((token) => {
      return token.name.toLowerCase().includes(lowercasedFilter);
    });
    setFilteredTokens(filteredData);
  }, [searchTerm]);

  const handleTeamClick = (teamName: string) => {
    // Verifica se o filtro atual já está aplicado ao time clicado
    if (filteredTokens.length === fanTokens.filter((token) => token.name === teamName).length) {
      // Se sim, remove o filtro (mostrando todos os tokens)
      setFilteredTokens(fanTokens);
      setSearchTerm(''); // Opcional: Limpa a barra de pesquisa
    } else {
      // Se não, aplica o filtro ao time clicado
      const filteredData = fanTokens.filter((token) => token.name === teamName);
      setFilteredTokens(filteredData);
      setSearchTerm(''); // Opcional: Limpa a barra de pesquisa
    }
  };
  
  return (
    <div>

    <Menu />
    <div className="flex flex-col items-center my-8">
      <h2 className="text-2xl mb-4">Discover decentralised communities for fans</h2>
      <Button variant="outline" className="mb-4">
        Or create your own
      </Button>
      <div className="flex w-full max-w-md mb-4">
        <Input placeholder="Search" className="w-full" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <div className="flex gap-4 m-4">
        <Button onClick={() => handleTeamClick('Barcelona FC')}>Barcelona</Button>
        <Button onClick={() => handleTeamClick('Juventus FC')}>Juventus</Button>
        <Button onClick={() => handleTeamClick('Manchester United')}>Manchester United</Button>
        <Button onClick={() => handleTeamClick('Paris Saint-Germain')}>Paris Saint-Germain</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTokens.map(token => (
          <CommunityCard key={token.id} {...token} />
        ))}
      </div>
    </div>

    </div>
  );
}
