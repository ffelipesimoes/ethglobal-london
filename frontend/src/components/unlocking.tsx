import { Button } from "@/components/ui/button";

export function Unlocking() {
  return (
    <div className="max-w-xs mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium">Locked for: 30 days</span>
        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Unlock Tokens</Button>
      </div>
    </div>
  );
}
