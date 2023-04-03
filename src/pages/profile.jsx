import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[200vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/local_todos.JPG')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h1 className="text-white text-4xl font-roulette">Sobre Nosotros...</h1>
        </div>
      </section>
      
      <div className="bg-custom-primary">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
