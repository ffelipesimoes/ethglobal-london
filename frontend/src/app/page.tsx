import CommunityCard from "@/components/CommunityCard";
import Menu from "@/components/Menu";
import SearchSection from "@/components/Search";
import { fanTokens } from "@/lib/mocks/cards";

export default function Home() {
  return (
    <div>

    <Menu />
    <SearchSection />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {fanTokens.map(token => (
        <CommunityCard key={token.id} {...token} />
      ))}
    </div>

    </div>
  );
}
