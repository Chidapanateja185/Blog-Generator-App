import "../css/Home.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter/Newsletter";
import Hero from "../components/Hero/Hero";
import BlogGrid from "../components/Blog/BlogGrid";


export default function Home() {
  return (
    <>
      <Header />
      <Hero 
        title="Blog Generation Using AI"
        description="Discover AI-powered blog posts tailored to your interests, delivered daily."
        variant="home"
      />
      <BlogGrid />
      <Newsletter />
      <Footer />
    </>
  );
}