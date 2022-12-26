import Header from "../containers/components/header";
import Footer from "../containers/components/footer";
import Newsletter from "./sections/newsletter";

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
