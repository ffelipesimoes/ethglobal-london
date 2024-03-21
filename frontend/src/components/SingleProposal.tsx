import { Button } from "@/components/ui/button";

export function ProposalSingle() {
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">Proposal</h2>
      <p className="text-xl font-bold mb-4">Is the Earth flat?</p>
      <div className="flex justify-between mb-4">
        <Button className="bg-green-500 text-white py-2 px-4 rounded">Yes</Button>
        <Button className="bg-red-500 text-white py-2 px-4 rounded">No</Button>
      </div>
      <Button className="w-full bg-blue-500 text-white py-2 px-4 rounded">Vote</Button>
    </div>
  );
}
