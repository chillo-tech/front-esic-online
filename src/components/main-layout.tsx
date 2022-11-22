import Header from "../components/header";
import Footer from "../components/footer";
import Newsletter from "../components/sections/newsletter";

type LayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <main>
      <Header />

      {children}

      <Newsletter />

      <Footer />
    </main>
  );
}
