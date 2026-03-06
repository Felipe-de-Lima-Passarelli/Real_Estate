//Components
import About from "./About";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Form from "./Form";

const Main = () => {
  return (
    <main className="flex flex-col flex-1">
      <About />
      <MainSection />
      <Projects />
      <Testimonials />
      <Form />
    </main>
  );
};

export default Main;
