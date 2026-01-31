"use client";
import { ArrowRight, Globe, Monitor, Users, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SubNavigation from "@/components/shared/SubNavigation";
import ContentSection from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProgramCard from "@/components/programs/ProgramCard";
import { programs } from "../../data/program";
import programsHero from "../../assets/programs-hero.jpg";
import exchangeStudent from "../../assets/gep-1.jpg";
import auPair from "../../assets/gep-2.jpg";
import oneOneOne from "../../assets/gep-3.jpg";
import interactiveCalendar from "../../assets/calendar-phone.png";

import Link from "next/link";
import Image from "next/image";

const programsSubNav = [
  { label: "Program Finder", href: "/programs/finder" },
  { label: "Global Education Programs", href: "/programs/global-education" },
  { label: "Online Learning", href: "/programs/online-learning" },
  { label: "Faculty", href: "/programs/faculty" },
];

const Programs = () => {
  const featuredPrograms = programs.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        breadcrumb="Academics"
        title="Programs"
        backgroundImage={programsHero.src}
      />

      <SubNavigation items={programsSubNav} />

      {/* Intro Section */}
      <ContentSection>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Discover your future at Columbia College DC!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We offer programs designed to build essential skills for career success. Columbia College provides associate degree and certificate programs, available both on campus and online.
          </p>
          <Link href="/programs/finder">
            <Button size="lg" className="rounded-full">
              <Search className="w-4 h-4 mr-2" />
              Find Programs
            </Button>
          </Link>
        </div>
      </ContentSection>

      {/* Featured Programs Grid */}
      <ContentSection variant="muted" title="Featured Programs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/programs/finder">
            <Button variant="outline" size="lg" className="rounded-full">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </ContentSection>

      {/* Global Education Preview */}
      <ContentSection>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Global Education Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Columbia College offers programs tailored for students from overseas. Whether you are looking for an exchange program, working in the U.S. as an Au Pair, or pursuing your academic and career goals, Columbia College always has a suitable course and program available for you!
          </p>
        </div>
{/* Images are left aligned */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: exchangeStudent,
              title: "J-1 Exchange Student Programs",
              description: "Study abroad opportunities for international students"
            },
            {
              icon: auPair,
              title: "J-1 Au Pair",
              description: "Cultural exchange and childcare experience program"
            },
            {
              icon: oneOneOne,
              title: "1+1+1 Program",
              description: "Pathway to advanced education and career opportunities"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300">
              <Image src={item.icon.src} alt={item.title} width={150} height={150} className="mx-auto mb-4" />
              <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/programs/global-education">
            <Button variant="outline" size="lg" className="rounded-full">
              <Globe className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          </Link>
        </div>
      </ContentSection>

      {/* Online Learning Preview */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop"
                alt="Online Learning"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <Monitor className="w-8 h-8 mb-2" />
                <p className="font-bold">100% Online</p>
                <p className="text-sm opacity-90">Available Anytime</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Take Our Courses Online
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Columbia College, you can pursue your education from anywhere with our flexible online learning options. All online courses are delivered through Canvas, where you'll access lessons, submit assignments, and track your progress.
              </p>
              <p className="text-muted-foreground mb-8">
                Our Online Vocational English program also offers engaging interactive classes via Zoom, giving you opportunities to practice, connect, and build confidence.
              </p>
              <Link href="/programs/online-learning">
                <Button size="lg" className="rounded-full">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calendar CTA */}
      <ContentSection variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
              New Interactive Calendar
            </h2>
            <p className="text-white/80 mb-6">
              Designed to keep you connected, informed, and organized at every step of your academic journey. All the important dates and events you need, right at your fingertips.
            </p>
            <ul className="space-y-3 text-white/80 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Filter by what matters to you: Easily view key academic dates, program-specific schedules, and upcoming classes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                View your way: Switch between weekly, monthly, or yearly views
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Sync into class schedules: See start/stop times, class times, locations, and details
              </li>
            </ul>
            <Button variant="outline" size="lg" className="rounded-full border-white text-foreground hover:bg-white hover:text-primary">
              View Calendar
            </Button>
          </div>
          <div>
                <Image
              src={interactiveCalendar.src}
              alt="Interactive Calendar"
              className="rounded-2xl shadow-xl"
              width={800}
              height={600}
            />
          </div>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default Programs;
