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
      <section className="relative block h-[250vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/local_todos.JPG')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center">
          <div className="text-white text-8xl font-roulette">Sobre Nosotros...</div>
          <div className="text-white text-4xl font-roulette">#Brunettelovers</div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-1/2 text-white">
              <img src="/img/team1.jpg" width="50%"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ut turpis imperdiet tristique. Curabitur commodo urna in sapien consequat commodo non vitae arcu. Pellentesque ac lacus leo. Sed volutpat hendrerit nisl sit amet fringilla. Nam sed tellus non massa commodo euismod eu vitae eros. Phasellus iaculis eget elit at cursus. Proin suscipit at quam sit amet ultrices. Aliquam non arcu bibendum, auctor velit gravida, tincidunt nulla. Aenean eu sapien id metus congue tempus non id ipsum. Ut ornare, quam a lacinia volutpat, diam nunc maximus purus, ac ultricies eros nulla a diam. Cras efficitur orci in leo consequat ultricies. Nullam ornare ex enim, eu dictum massa pellentesque vel. Aenean ut dui dolor. In at tincidunt urna. Pellentesque suscipit id risus eget sollicitudin. Nullam et nulla quis est interdum aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ut turpis imperdiet tristique. Curabitur commodo urna in sapien consequat commodo non vitae arcu. Pellentesque ac lacus leo. Sed volutpat hendrerit nisl sit amet fringilla. Nam sed tellus non massa commodo euismod eu vitae eros. Phasellus iaculis eget elit at cursus. Proin suscipit at quam sit amet ultrices. Aliquam non arcu bibendum, auctor velit gravida, tincidunt nulla. Aenean eu sapien id metus congue tempus non id ipsum. Ut ornare, quam a lacinia volutpat, diam nunc maximus purus, ac ultricies eros nulla a diam. Cras efficitur orci in leo consequat ultricies. Nullam ornare ex enim, eu dictum massa pellentesque vel. Aenean ut dui dolor. In at tincidunt urna. Pellentesque suscipit id risus eget sollicitudin. Nullam et nulla quis est interdum aliquet.</p>
            </div>
            <div className="w-1/2 text-white" >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ut turpis imperdiet tristique. Curabitur commodo urna in sapien consequat commodo non vitae arcu. Pellentesque ac lacus leo. Sed volutpat hendrerit nisl sit amet fringilla. Nam sed tellus non massa commodo euismod eu vitae eros. Phasellus iaculis eget elit at cursus. Proin suscipit at quam sit amet ultrices. Aliquam non arcu bibendum, auctor velit gravida, tincidunt nulla. Aenean eu sapien id metus congue tempus non id ipsum. Ut ornare, quam a lacinia volutpat, diam nunc maximus purus, ac ultricies eros nulla a diam. Cras efficitur orci in leo consequat ultricies. Nullam ornare ex enim, eu dictum massa pellentesque vel. Aenean ut dui dolor. In at tincidunt urna. Pellentesque suscipit id risus eget sollicitudin. Nullam et nulla quis est interdum aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar ut turpis imperdiet tristique. Curabitur commodo urna in sapien consequat commodo non vitae arcu. Pellentesque ac lacus leo. Sed volutpat hendrerit nisl sit amet fringilla. Nam sed tellus non massa commodo euismod eu vitae eros. Phasellus iaculis eget elit at cursus. Proin suscipit at quam sit amet ultrices. Aliquam non arcu bibendum, auctor velit gravida, tincidunt nulla. Aenean eu sapien id metus congue tempus non id ipsum. Ut ornare, quam a lacinia volutpat, diam nunc maximus purus, ac ultricies eros nulla a diam. Cras efficitur orci in leo consequat ultricies. Nullam ornare ex enim, eu dictum massa pellentesque vel. Aenean ut dui dolor. In at tincidunt urna. Pellentesque suscipit id risus eget sollicitudin. Nullam et nulla quis est interdum aliquet.</p>
              <img src="/img/tatuaje.jpg" width="50%"/>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-custom-primary">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
