import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-slate-700 flex items-center fixed bottom-0 left-0 w-full">
    <div className="container mx-auto flex-row relative w-3/12">
      <p className="text-center text-zinc-100 text-sm font-sans pt-6 pb-6">
        Este sitio fue diseñado y desarrollado exclusivamente por estudiantes de
        Codemia bajo supervisión técnica.
      </p>
    </div>
    <div className="h-24 w-24 absolute right-1 bottom-0">
      <img className="h-full w-full p-4" src={logo} alt="" />
    </div>
  </footer>
);

export default Footer;
