import { CoinsProvider } from "context/CoinsProvider";
import CardContent from "./CardContent";
import Footer from "./Footer";

export const App = () => {
  return (
    <CoinsProvider>
      <div className="bg-Codemia-bg min-w-screen min-h-dvh bg-no-repeat bg-fixed bg-cover grid grid-rows-[1fr,auto]">
        <main className="flex justify-center my-10">
          <section className="bg-Codemia-green2/[.7] mx-1 md:mx-0 min-w-8/12 max-h-[800px] sm:w-2/4 md:w-2/4 min-h-[600px] flex-col rounded-3xl p-2 md:p-4 backdrop-blur-sm shadow-Codemia-dark-ultra shadow-xl">
            <CardContent />
          </section>
        </main>
        <Footer />
      </div>
    </CoinsProvider>
  );
};
