import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-Codemia-green-dark-2 w-full px-3 py-5">
    <div className="md:w-2/4 flex flex-col md:flex-row items-center justify-center mx-auto">
      <div className="container mx-auto box-border order-last md:order-first">
        <p className="text-center text-zinc-100 text-sm font-sans font-lato px-5 md:pl-0 md:pr-3  pt-5 md:pt-0">
          Este sitio fue diseñado y desarrollado exclusivamente por estudiantes
          de Codemia bajo supervisión técnica.
        </p>
      </div>
      <div className="h-[50px]">
        <img className="aspect-square w-[50px] h-full" src={logo} alt="" />
      </div>
    </div>
  </footer>
);

export default Footer;
