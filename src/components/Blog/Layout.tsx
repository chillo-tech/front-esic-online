import Footer from "components/Blog/Footer";
import Navbar from "components/Blog/Navbar";
import { BlogContextWrapper } from "context/BlogContext";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlogContextWrapper >
      <Navbar />
      {children}
      <Footer />
    </BlogContextWrapper>
  );
}
