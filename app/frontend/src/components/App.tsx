import Footer from "./Footer";

export const App = () => {
  return (
    <>
      <div className="bg-slate-900 min-w-screen min-h-screen">
        <main className="flex justify-center items-center h-screen">
          <section className="bg-slate-300 min-w-8/12 sm:w-2/4 md:w-2/4 h-3/4 flex-col mb-20 rounded-lg p-4"></section>
        </main>
        <Footer/>
      </div>
    </>
  );
};
