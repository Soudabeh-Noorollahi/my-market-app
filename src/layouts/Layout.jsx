import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" flex flex-1 flex-col w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
