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
      <div className="mx-auto flex flex-row">
      <div className="hidden mx-16 md:block">
        <img src="/img/simbolo.png" alt="LogoCompañia" className="object-contain"/>
      </div>
      <div className="flex-column mx-16 text-white justify-start">
        <h4 className="font-bunya-bold">Sedes</h4>
        <p className="font-bunya mb-4">Carrera 23 #12-53 Local 1 Parque Garupal Valledupar, Cesar, Colombia</p>
        <h4 className="font-bunya-bold">Horario</h4>
        <p className="font-bunya">Lunes - Sábado: 8:00 am - 9:30 pm Domingo: 3:00 pm - 9:30 pm</p>
      </div>
      <div className="flex-column mx-16 text-white justify-start">
        <h4 className="font-bunya-bold">Email</h4>
        <p className="font-bunya mb-4">brunetteartesanal@outlook.com</p>
      </div>
      <div className="flex-column mx-16 text-white ">
        <a href="https://www.instagram.com/brunetteartesanal/"><img className='mb-4' src={ig} alt="Instagram"/></a>
        <a href=""><img className='mb-4' src={wpp} alt="Whatsapp "/></a>
        <a href=""><img className='mb-4' src={fb} alt="facebook"/></a>
        <a href=""><img className='mb-4' src={tiktok} alt="tiktok"/></a>
      </div>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
