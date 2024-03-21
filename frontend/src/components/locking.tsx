import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Locking() {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-center text-lg font-bold mb-4">Show your loyalty to the team</p>
        <div className="flex items-center justify-center space-x-2">
          <Input className="block w-40" placeholder="Enter token amount" />
          <Button>Lock Tokens</Button>
        </div>
      </div>
    </div>
  );
}
