import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex-1 max-w-[1400px]  mx-auto px-4 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
