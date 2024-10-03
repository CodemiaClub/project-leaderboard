import { CoinsProvider } from "context/CoinsProvider";
import CardContent from "./CardContent";
import Footer from "./Footer";

export const App = () => {
  return (
    <CoinsProvider>
      <div className="bg-Codemia-bg min-w-screen min-h-screen bg-no-repeat bg-fixed bg-cover">
        <main className="flex justify-center items-center h-screen">
          <section className="bg-Codemia-green2/[.7]  min-w-8/12 sm:w-2/4 md:w-2/4 h-3/4 flex-col mb-20 rounded-3xl p-4 backdrop-blur-sm shadow-Codemia-dark-ultra shadow-xl">
            <CardContent />
          </section>
        </main>
        <Footer />
      </div>
    </CoinsProvider>
  );
};
