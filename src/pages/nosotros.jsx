import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Nosotros() {
  return (
    <>
      <section className="relative block h-[230vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/local_todos.JPG')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center">
          <div className="text-white mt-10 text-8xl font-roulette">Sobre Nosotros...</div>
          <div className="text-white text-4xl font-roulette">#Brunettelovers</div>
        </div>
        
        <div className=" sm:py-48">
          <div className=" mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mx-auto mt-16">
            <hr className="my-20" />
              <div className="grid  grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 ">
                <div className="relative flex flex-col justify-center items-center">
                  <img src="/img/atendiendo.jpg"  />
                </div>
                
                <div className="relative flex flex-col justify-center text-left items-center">
                  <div className="mt-2 font-lemon leading-7 text-gray-300">Desde 2018, dejando el corazón en cada producto. Nuestra misión es entregarlo todo, ofrecer lo mejor, porque cada detalle merece ser pensado, cada sueño merece ser cumplido, por eso perseveramos. Poco a poco vamos construyendo nuestra historia. Gracias por acompañarnos en el camino. 
                  <br /><br /> Participamos activamente en las mejores ferias, de valledupar,destacándonos por nuestra forma dinámica de servirlea nuestros clientes,lo que nos ha permitido crecerde manera exponencial en nuestras plataformas digitales.Hoy contamos con una comunidad  de más de 16.000 seguidores.</div>
                  <div className="mt-2 font-lemon leading-7 text-gray-300"></div>
                </div>

                <hr className="my-10" /><hr className="my-10" />

                <div className="relative flex flex-col text-right justify-center">
                  <div className="mt-2 font-roulette text-4xl leading-7 text-gray-300">¿QUE HACEMOS?</div>
                  <div className="mt-2 font-lemon leading-7 text-gray-300"> Brunette Artesanal, es reconocido por elaborar un yogurt gourmet, que tiene como características especiales su sabor, consistencia, textura suave al paladar y su versatilidad para ser combinado con diferentes toppings, siendo pioneros en esta manera diferente de consumir yogurt. <br /><br /></div>
                  <div className="mt-2 font-roulette text-4xl leading-7 text-gray-300">¡NUESTROS PRODUCTOS!</div>
                  <div className="mt-2 font-lemon leading-7 text-gray-300">Nuestra estrella, el yogur natural brunette... el que con todo combina, de el se desprenden los diferentes productos que ofrecemos a nuestro público! teniendo opciones como “ARMA TU BRUNETTE” que amplia las posibilidades a nuevas experiencias.</div>
                </div>                

                <div className="relative flex flex-col justify-center items-center">
                  <img src="/img/producto-tentacion.jpg" width="70%" />
                </div>                            
              </div>
            </div>            
          </div>
        </div>
        <div className="relative -top-20 left-0  flex flex-col justify-start items-center">
          <div className="text-white text-8xl font-roulette">Hacemos lo que amamos!</div>
        </div>
      </section>

      <div className="bg-custom-primary">
        <Footer />
      </div>
    </>
  );
}

export default Nosotros;
