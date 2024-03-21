import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Proposals() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Create a proposal</h1>
      <form>
        <div className="flex flex-col space-y-4 mb-6">
          <Input placeholder="Proposal" />
          <Input placeholder="Option 1" />
          <Input placeholder="Option 2" />
        </div>
        <Button className="w-full bg-blue-600 text-white">Create</Button>
      </form>
    </div>
  );
}
