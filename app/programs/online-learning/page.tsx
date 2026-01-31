import Link from "next/link";
import { Monitor, Clock, Globe, CheckCircle, AlertCircle, Phone, Mail, MapPin, Laptop, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SubNavigation from "@/components/shared/SubNavigation";
import ContentSection from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { programs } from "../../../data/program";

const programsSubNav = [
  { label: "Program Finder", href: "/programs/finder" },
  { label: "Global Education Programs", href: "/programs/global-education" },
  { label: "Online Learning", href: "/programs/online-learning" },
  { label: "Faculty", href: "/programs/faculty" },
];

const OnlineLearning = () => {
  const onlinePrograms = programs.filter((p) => p.onlineLearning === "100% Online");
  const hybridPrograms = programs.filter((p) => p.onlineLearning === "Hybrid");
  const inPersonPrograms = programs.filter((p) => p.onlineLearning === "In-Person");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        breadcrumb="Programs"
        title="Online Learning"
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=600&fit=crop"
      />

      <SubNavigation items={programsSubNav} />

      {/* Standards Banner */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-wide py-6">
          <h2 className="font-serif text-xl md:text-2xl font-bold mb-4">
            Online Learning Standards
          </h2>
          <p className="text-sm md:text-base opacity-90 max-w-4xl">
            At Columbia College, online learning delivers the <strong>same quality of instruction as in-person classes</strong>. All programs and classes offered online follow <strong>federal and state regulations</strong>, with safeguards in place to <strong>verify student identity</strong> through secure logins, proctoring, or other technologies. <strong>Students are responsible for protecting their login information</strong>, while faculty and staff monitor progress and uphold academic integrity.
          </p>
        </div>
      </div>

      {/* 100% Online Programs */}
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Online learning students"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold">100% Online Programs</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Pursue your academic goals from anywhere! The following Associate Degree programs can be completed 100% online*.
            </p>
            <ul className="space-y-3 mb-6">
              {onlinePrograms.map((program) => (
                <li key={program.id}>
                  <Link
                    href={`/program/${program.slug}`}
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {program.name} ({program.studyType === "Associates Degree" ? "AAS" : "Cert"})
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
              <div className="flex gap-2">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-destructive mb-1">Not Eligible:</p>
                  <p className="text-muted-foreground">
                    F-1 Student Visa holders <strong>cannot</strong> pursue any Associate Degree program 100% online. All F-1 Student Visa holders are required to attend in-person classes one or two times per week. There are no online-only programs available for international students.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">*Stipulations apply.</p>
          </div>
        </div>
      </ContentSection>

      {/* Hybrid Programs */}
      <ContentSection variant="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold">Hybrid Programs (Online & In-Person)</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Some programs offer online components but require in-person attendance for practical skills:
            </p>
            <ul className="space-y-3">
              {hybridPrograms.map((program) => (
                <li key={program.id}>
                  <Link
                    href={`/program/${program.slug}`}
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {program.name}
                  </Link>
                </li>
              ))}
              <li className="text-muted-foreground text-sm pl-6">
                2 in-person classes + 2 Canvas-based classes
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
              alt="Hybrid learning"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Certificate Programs (In-Person) */}
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop"
              alt="In-person training"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold">Certificate Programs (In-Person Required)</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              All Certificate Programs require in-person classes and are not fully online:
            </p>
            <ul className="space-y-3">
              {inPersonPrograms.map((program) => (
                <li key={program.id}>
                  <Link
                    href={`/program/${program.slug}`}
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {program.name}
                  </Link>
                </li>
              ))}
              <li className="text-muted-foreground text-sm pl-6">
                Full-time, in-person (20 hours per week)
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Learning Platform */}
      <ContentSection variant="muted" title="Our Learning Platform">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Laptop,
                title: "Canvas LMS",
                description: "Access lessons, submit assignments, and track your progress through our user-friendly learning management system."
              },
              {
                icon: Users,
                title: "Live Zoom Classes",
                description: "Interactive sessions via Zoom for VESL students, giving opportunities to practice, connect, and build confidence."
              },
              {
                icon: Clock,
                title: "24/7 Access",
                description: "Study at your own pace with course materials available around the clock from any device."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-4">Student Support</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                Faculty respond within 24 hours
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                Canvas orientation for all new students
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                Zoom expectations guidance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                In-person troubleshooting available at office
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      {/* Contact Section */}
      <ContentSection title="Contact">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl">
              <Phone className="w-6 h-6 text-primary" />
              <span className="font-medium">Main Office</span>
              <span className="text-sm text-muted-foreground">(703) 206-0508</span>
            </div>
            <a href="mailto:admin@ccdc.edu" className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all">
              <Mail className="w-6 h-6 text-primary" />
              <span className="font-medium">Admissions</span>
              <span className="text-sm text-muted-foreground">admin@ccdc.edu</span>
            </a>
            <div className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="font-medium">Address</span>
              <span className="text-sm text-muted-foreground text-center">8620 Westwood Center Drive, Vienna, VA 22182</span>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p><strong>Office Hours:</strong> Monday – Friday, 8:30 AM – 5:00 PM</p>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default OnlineLearning;
