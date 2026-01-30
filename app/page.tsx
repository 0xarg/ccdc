"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import NewsEvents from "@/components/NewsEvents";
import WhyColumbia from "@/components/WhyColumbia";
import LearningExperience from "@/components/LearningExperience";
import PopularPrograms from "@/components/PopularPrograms";
import Testimonial from "@/components/Testimonial";
import StudentServices from "@/components/StudentServices";
import CareerServices from "@/components/CareerServices";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <QuickInfo /> 
        <NewsEvents />
        <WhyColumbia />
        <LearningExperience />
        <PopularPrograms />
        <Testimonial />
        <StudentServices />
        <CareerServices />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
