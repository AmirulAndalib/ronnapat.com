import Container from "src/components/layout/container";
import Navbar from "../navbar";
import Footer from "../footer/footer";
export default function ({ children }) {
  return (
    <>
        {/* <div className="bg-gray-200 dark:bg-slate-800 py-3">
          <div className="text-center">
            I'm support{" "}
            <a
              href="https://ukraine.ua/"
              target="_blank"
              className="text-[#0057B7] dark:text-[#0057B7] bg-[#FFDD00] font-bold px-[2px]"
            >
              UKRAINE
            </a>
            🇺🇦 Слава Україні | {" "}
            <a href="https://u24.gov.ua/" target="_blank">
              Donate now {"->"}
            </a>
          </div>
        </div> */}
        <div className="bg-black py-3">
          <div className="text-center text-xl">
            <a href="https://www.royal.uk/announcement-death-queen" target="_blank">
              Majesty Queen Elizabeth II 1926-2022 🇬🇧 RIP
            </a>
          </div>
        </div>
      <Navbar />
      <div className="bg-white dark:bg-slate-700 text-black dark:text-white min-h-screen">
        <Container>
          {children}
          <Footer />
        </Container>
      </div>
    </>
  );
}
