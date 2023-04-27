import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import PhotoCarousel from "@/widgets/layout/carousel";
import React, { useState, useEffect } from 'react';

export function Inicio() {
  const [sedes, setSedes] = useState([]);
  const [selectedSede, setSelectedSede] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/sedes');
      const data = await response.json();
      setSedes(data);
    }
    fetchData();
  }, []);
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
            {sedes.map((sede) => (
              <button
                key={sede.id}
                type="button"
                className={`mt-3 w-full h-9 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 ${selectedSede && selectedSede.id === sede.id ? 'bg-custom-primary text-white' : 'text-gray-900 hover:bg-custom-primary'
                  } sm:mt-0 sm:w-auto`}
                onClick={() => setSelectedSede(sede)}
              >
                {sede.id}
              </button>
            ))}
          </div>
          <iframe className="w-[1000px] h-[520px]" src={selectedSede ? selectedSede.url : ''} allowFullScreen={true} />
        </div>
      </section>
      <div className="bg-custom-primary">
        <Footer />
      </div>
    </>
  );
}

export default Inicio;
