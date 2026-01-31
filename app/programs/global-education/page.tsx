import { Globe, Users, Briefcase, GraduationCap, CheckCircle, Building, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SubNavigation from "@/components/shared/SubNavigation";
import ContentSection from "@/components/shared/ContentSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const programsSubNav = [
  { label: "Program Finder", href: "/programs/finder" },
  { label: "Global Education Programs", href: "/programs/global-education" },
  { label: "Online Learning", href: "/programs/online-learning" },
  { label: "Faculty", href: "/programs/faculty" },
];

const partnerLogos = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=150&h=60&fit=crop",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=150&h=60&fit=crop",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=150&h=60&fit=crop",
];

const GlobalEducation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        breadcrumb="Programs"
        title="Global Education Programs"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=600&fit=crop"
      />

      <SubNavigation items={programsSubNav} />

      {/* Intro Section */}
      <ContentSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">International Students Welcome</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Study Abroad in the U.S. with Columbia College
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Columbia College offers programs tailored for students from overseas. Whether you are looking for an exchange program, working in the U.S. as an Au Pair, or pursuing your academic and career goals, Columbia College always has a suitable course and program available for you!
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>SEVP Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>I-20 Eligible</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>CPT/OPT Available</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
              alt="International students"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Program Types */}
      <ContentSection variant="muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "J-1 Exchange Student Programs",
              description: "Experience American education and culture through our comprehensive exchange programs designed for international students."
            },
            {
              icon: Users,
              title: "J-1 Au Pair Program",
              description: "Combine cultural exchange with childcare experience while improving your English skills and earning money."
            },
            {
              icon: Briefcase,
              title: "1+1+1 Program",
              description: "A unique pathway combining online study, on-campus learning, and OPT work experience for career advancement."
            }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* J-1 Exchange Visitor Programs */}
      <ContentSection title="J-1 Exchange Visitor Programs">
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          <AccordionItem value="professor">
            <AccordionTrigger className="text-lg font-semibold">
              J-1 Exchange Visitor (Professor)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The J-1 Professor program is designed for foreign nationals who wish to enter the U.S. as visiting professors to lecture, observe, or consult at post-secondary institutions.
                </p>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Benefits</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Exchange teaching methodologies and research</li>
                    <li>Access to U.S. academic resources</li>
                    <li>Cultural immersion experience</li>
                    <li>Networking opportunities</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="research">
            <AccordionTrigger className="text-lg font-semibold">
              J-1 Exchange Visitor (Research Scholar)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Research Scholars come to the U.S. primarily to conduct research, observe, or consult with colleagues in their field.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Eligibility</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Relevant academic credentials</li>
                      <li>Research proposal approval</li>
                      <li>English proficiency</li>
                    </ul>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Duration</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Up to 5 years maximum</li>
                      <li>Extension possibilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="short-term">
            <AccordionTrigger className="text-lg font-semibold">
              J-1 Exchange Visitor (Short-term Scholar)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Short-term Scholars are professors or researchers coming to the U.S. for a temporary period to lecture, observe, consult, or participate in academic activities.
                </p>
                <p>
                  <strong>Duration:</strong> Up to 6 months
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="student-associate">
            <AccordionTrigger className="text-lg font-semibold">
              J-1 Exchange Visitor (Student Associate)
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Student Associates participate in educational and cultural programs while gaining practical experience related to their field of study.
                </p>
                <div className="bg-secondary rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Program Features</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Academic coursework</li>
                    <li>Cultural activities</li>
                    <li>Community engagement</li>
                    <li>Professional development</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ContentSection>

      {/* Professional Training Program */}
      <ContentSection variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">
            Professional Training Program
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            The Professional Training Program offers international participants the opportunity to receive practical training in various professional fields during their time in the United States.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Benefits
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hands-on training in your professional field</li>
                <li>• Exposure to U.S. business practices</li>
                <li>• Cultural exchange opportunities</li>
                <li>• Professional networking</li>
                <li>• Certificate upon completion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Training Industries
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hospitality & Tourism</li>
                <li>• Information Technology</li>
                <li>• Healthcare</li>
                <li>• Business Administration</li>
                <li>• Culinary Arts</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* 1+1+1 Program */}
      <ContentSection title="1+1+1 Program: Online + On-Campus + OPT">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-12">
            The 1+1+1 Program offers a unique pathway combining online study, on-campus learning, and Optional Practical Training (OPT) for career advancement in the United States.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                year: "Year 1",
                title: "Online Learning",
                description: "Complete foundational coursework from your home country through our flexible online platform."
              },
              {
                year: "Year 2",
                title: "On-Campus Study",
                description: "Transfer to our Virginia campus for hands-on learning, labs, and cultural immersion."
              },
              {
                year: "Year 3",
                title: "OPT Work Experience",
                description: "Apply your skills in the U.S. workforce with Optional Practical Training."
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <Badge className="mb-3">{phase.year}</Badge>
                  <h3 className="font-serif text-lg font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-primary">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Eligibility</h4>
                <ul className="space-y-1">
                  <li>• High school diploma or equivalent</li>
                  <li>• Valid passport</li>
                  <li>• English proficiency (TOEFL/IELTS)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Application Materials</h4>
                <ul className="space-y-1">
                  <li>• Completed application form</li>
                  <li>• Official transcripts</li>
                  <li>• Bank statement (proof of funds)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Application Process */}
      <ContentSection variant="muted" title="General Application Process">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              { step: 1, title: "Application", description: "Fill out the Columbia College application form online or request a paper copy." },
              { step: 2, title: "Documents Submission", description: "Submit required documents including transcripts, passport, and financial statements." },
              { step: 3, title: "Interview", description: "Complete an admissions interview (in-person or virtual) with our international team." },
              { step: 4, title: "Acceptance & I-20", description: "Upon acceptance, receive your I-20 form to apply for your student visa." }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Contact Section */}
      <ContentSection title="Contact">
        <div className="max-w-2xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a href="mailto:international@ccdc.edu" className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all">
              <Mail className="w-6 h-6 text-primary" />
              <span className="text-sm">international@ccdc.edu</span>
            </a>
            <a href="tel:7032060508" className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-sm">(703) 206-0508</span>
            </a>
            <div className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-xl">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-sm">8620 Westwood Center Dr, Vienna, VA</span>
            </div>
          </div>
          <Button size="lg" className="rounded-full">
            Start Your Application
          </Button>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default GlobalEducation;
