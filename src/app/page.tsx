import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningManagementSystem from "@/components/LearningManagementSystem";
import TrainingPrograms from "@/components/TrainingPrograms";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopmentProgram from "@/components/ManagementDevelopmentProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LearningManagementSystem />
        <TrainingPrograms />
        <CapacityDevelopment />
        <ManagementDevelopmentProgram />
        <TransformationHub />
        <TrainingConsultant />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
