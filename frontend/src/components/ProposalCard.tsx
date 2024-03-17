import React from 'react';
import { Carousel, CarouselItem } from './ui/carousel'; // Ajuste os caminhos conforme necessário
import { Card, CardContent, CardFooter } from './ui/card'; // Ajuste os caminhos conforme necessário
import { Button } from './ui/button'; // Ajuste os caminhos conforme necessário

// Definindo a interface para uma proposta individual
interface Proposal {
  question: string;
}

// Definindo as props para o componente ProposalCard
interface ProposalCardProps {
  proposals: Proposal[];
}

// Modificando o componente para aceitar e usar a prop `proposals`
const ProposalCard: React.FC<ProposalCardProps> = ({ proposals }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center overflow-hidden">
        <h2 className="text-2xl mb-4">Proposals</h2>
      </div>
      <div className="w-full flex justify-center items-center overflow-hidden">
        <div className="flex flex-no-wrap scroll-smooth scrollbar-hide">
          <Carousel>
            {proposals.map((proposal, index) => (
              <CarouselItem className="basis-2/3 flex-shrink-0 w-full md:w-1/3" key={index}>
                <div className="p-4">
                  <Card>
                    <CardContent className="p-4">
                      <p className="text-sm font-medium leading-none">Proposal</p>
                      <p className="text-lg font-bold leading-none">{proposal.question}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex justify-between w-full">
                        <Button className="mr-2 bg-green-500" variant="outline">
                          Yes
                        </Button>
                        <Button className="ml-2 bg-red-500" variant="outline">
                          No
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProposalCard;
