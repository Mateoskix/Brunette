import React from "react";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import PhotoCarousel from "@/widgets/layout/carousel";

export function Inicio() {
  return (
    <>
    <div className="mb-10">
   <PhotoCarousel />
    </div>
      <section className="px-4 pt-10 pb-48 bg-white">
        <div className="text-orange-600 container mx-auto">
          <PageTitle heading="Galeria">
            <div className="mb-8 text-2xl text-orange-600">
            Pequeña muestra de nuestra galeria.
            </div>
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        
      </section>
      <div className="bg-custom-primary">
        <Footer />
      </div>
    </>
  );
}

export default Inicio;
