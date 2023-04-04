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
      <section className="px-4 pt-10 pb-10 bg-white">
        <div className="text-orange-600 container mx-auto">
          <PageTitle heading="Galería">
            <div className="mb-8 text-2xl text-orange-600">
              Pequeña muestra de nuestra galería.
            </div>
          </PageTitle>
          <div className="mt-15 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
              />
            ))}
          </div>
        </div>

      </section>

      <section className="relative bg-blue-gray-50/50 py-10 px-4">
      <PageTitle heading="Nuestras Ubicaciones"></PageTitle>
        <div className="mt-10 flex flex-row justify-center">
          <div className="flex flex-col mr-3">
            <button
              type="button"
              className="mt-3 w-full h-9 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-custom-primary sm:mt-0 sm:w-auto"
            >
              Sede 1
            </button>
            <button
              type="button"
              className="mt-3 w-full h-9 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-custom-primary sm:mt-0 sm:w-auto"
            >
              Sede 2
            </button>
          </div>
          <iframe className="w-[1000px] h-[520px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.3759099296744!2d-73.26948398593512!3d10.47100339252922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab91d21490f7b%3A0xcf64425419f55be1!2sBrunette%20Artesanal%20(Garupal)!5e0!3m2!1sen!2sco!4v1680560835554!5m2!1sen!2sco" allowFullScreen={true} />
        </div>
      </section>
      <div className="bg-custom-primary">
        <Footer />
      </div>
    </>
  );
}

export default Inicio;
