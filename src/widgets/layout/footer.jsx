import fb from '/img/icon_facebook_.png';
import wpp from '/img/icon _whatsapp_.png';
import ig from '/img/icon _instagram_.png';
import tiktok from '/img/icon _tiktok_.png';

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative">
      <div className="container h-10 md:h-1"></div>
      <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="flex flex-row">
      <div className="hidden mx-16 sm:flex -translate-y-[10%]">
        <img src="/img/simbolo.png" alt="LogoCompañia" className="object-contain"/>
      </div>
      <div className="flex-col mx-16 text-white justify-start">
        <h4 className="font-bunya-bold">Sedes</h4>
        <p className="font-bunya mb-4">Carrera <span className='font-sans'>23 #12-53 </span> Local <span className='font-sans'>1</span> Parque Garupal Valledupar, Cesar, Colombia</p>
        <h4 className="font-bunya-bold">Horario</h4>
        <p className="font-bunya">Lunes - Sábado: <span className='font-sans'>8:00</span> am - <span className='font-sans'>9:30</span> pm Domingo: <span className='font-sans'>3:00</span> pm - <span className='font-sans'>9:30</span> pm</p>
      
        <h4 className="font-bunya-bold">Email</h4>
        <p className="font-bunya mb-4">brunetteartesanal@outlook.com</p>
      </div>
      <div className="hidden sm:flex flex-col mx-16 text-white ">
        <a href="https://www.instagram.com/brunetteartesanal/"><img className='mb-4' src={ig} alt="Instagram"/></a>
        <a href="" target='_blank'><img className='mb-4' src={wpp} alt="Whatsapp "/></a>
        <a href=""><img className='mb-4' src={fb} alt="facebook"/></a>
        <a href=""><img className='mb-4' src={tiktok} alt="tiktok"/></a>
      </div>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
