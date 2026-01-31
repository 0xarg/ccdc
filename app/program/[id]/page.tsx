"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, DollarSign, GraduationCap, MapPin, Monitor, Phone, Mail, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,  
} from "@/components/ui/accordion";
import { programs, faculty } from "../../../data/program";

// This is page has a struc like /program/[id]/page.tsx. 

const ProgramDetails = () => {
  //fix slugs
  const { id } = useParams();
  const slug = id as string;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Program Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The program you're looking for doesn't exist.
          </p>
          <Link href="/programs/finder">
            <Button>Browse All Programs</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related faculty
  const relatedFaculty = faculty.filter((f) =>
    program.name.toLowerCase().includes(f.department.toLowerCase().split(" ")[0])
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with background image */}
      <section className="relative pt-20">
        {/* Back link */}
        <div className="container-wide py-4">
          <Link
            href="/programs/finder"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            PROGRAM SEARCH
          </Link>
        </div>

        {/* Title & Apply Button */}
        <div className="bg-[hsl(var(--section-dark))]">
          <div className="container-wide py-8 flex items-center justify-between">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
              {program.name}
            </h1>
            <Button size="lg" className="rounded-full hidden md:flex">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Badges */}
              <div className="flex gap-3 mb-6">
                <Badge variant="outline" className="text-primary border-primary">
                  {program.studyType}
                </Badge>
                {program.onlineLearning !== "In-Person" && (
                  <Badge variant="secondary">{program.onlineLearning}</Badge>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {program.fullDescription}
              </p>

              {/* Video Placeholder */}
              <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden mb-8">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                  </div>
                </div>
              </div>

              {/* Accordion Sections */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="career">
                  <AccordionTrigger className="text-lg font-semibold">
                    Career Outlook
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Graduates of the {program.name} program are prepared for diverse career opportunities in the {program.careerPaths.join(", ")} industries.
                      </p>
                      <div className="bg-secondary rounded-lg p-4">
                        <p className="font-semibold text-foreground mb-2">Average Salary in the DMV Area</p>
                        <div className="flex gap-6">
                          <div>
                            <p className="text-2xl font-bold text-primary">{program.salary.annual}</p>
                            <p className="text-sm">per year</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-primary">{program.salary.hourly}</p>
                            <p className="text-sm">per hour</p>
                          </div>
                        </div>
                        <p className="text-sm mt-2">
                          The DMV area averages <span className="font-semibold">{program.jobOpenings} job openings</span> annually.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="requirements">
                  <AccordionTrigger className="text-lg font-semibold">
                    Requirements
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-muted-foreground">
                      <ul className="list-disc list-inside space-y-2">
                        <li>High school diploma or GED equivalent</li>
                        <li>Completed application form</li>
                        <li>Official transcripts from all previously attended institutions</li>
                        <li>Personal statement or essay (recommended)</li>
                        <li>For international students: TOEFL/IELTS scores and I-20 documentation</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="tuition">
                  <AccordionTrigger className="text-lg font-semibold">
                    Tuition & Costs
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">Annual Tuition:</span> {program.tuition}
                      </p>
                      <p>Additional fees may include:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Registration fee: $50</li>
                        <li>Technology fee: $150/semester</li>
                        <li>Lab fees (if applicable): $100-300</li>
                        <li>Books and supplies: $500-800</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="financial-aid">
                  <AccordionTrigger className="text-lg font-semibold">
                    Financial Aid
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Columbia College participates in federal financial aid programs. Eligible students may qualify for:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Federal Pell Grants</li>
                        <li>Federal Supplemental Educational Opportunity Grants (FSEOG)</li>
                        <li>Federal Work-Study Program</li>
                        <li>Institutional scholarships and grants</li>
                      </ul>
                      <p className="text-primary font-medium">
                        Financial Aid Deadline: {program.financialAidDeadline}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Apply Button - Mobile */}
              <div className="mt-8 lg:hidden">
                <Button size="lg" className="w-full rounded-full">
                  Apply For This Program
                </Button>
              </div>

              {/* Instructors Section */}
              {relatedFaculty.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-serif text-2xl font-bold mb-6">Our Instructors</h2>
                  <p className="text-muted-foreground mb-6">
                    Instructors in the {program.name} program are skilled professionals with specialized education and hands-on experience in the field.
                  </p>
                  <div className="space-y-4">
                    {relatedFaculty.map((instructor) => (
                      <div key={instructor.id} className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold">{instructor.name}</p>
                          <p className="text-sm text-muted-foreground">{instructor.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Info Card */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Program Details</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Study Type</span>
                      <span className="font-medium">{program.studyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Online Learning</span>
                      <span className="font-medium">{program.onlineLearning}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Credits</span>
                      <span className="font-medium">{program.credits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next Financial Aid</span>
                      <span className="font-medium">{program.financialAidDeadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Next Start Date</span>
                      <span className="font-medium text-primary">{program.nextStartDate}</span>
                    </div>
                  </div>
                </div>

                {/* Salary Card */}
                <div className="bg-primary text-primary-foreground rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Demand & Salaries</h3>
                  <p className="text-sm opacity-90 mb-4">
                    The DMV area averages {program.jobOpenings} job openings annually.
                  </p>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-2xl font-bold">{program.salary.annual}</p>
                      <p className="text-xs opacity-80">per year</p>
                    </div>
                    <div className="border-l border-white/30 pl-4">
                      <p className="text-2xl font-bold">{program.salary.hourly}</p>
                      <p className="text-xs opacity-80">per hour</p>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Need Assistance?</h3>
                  <div className="space-y-3">
                    <Button className="w-full" variant="default">
                      Ask AI Colby
                    </Button>
                    <Button className="w-full" variant="outline">
                      Request Info
                    </Button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm">
                    <p className="font-medium">Contact</p>
                    <a href="mailto:info@ccdc.edu" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                      info@ccdc.edu
                    </a>
                    <a href="tel:7032060508" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      (703) 206-0508
                    </a>
                  </div>
                </div>

                {/* Compliance Card */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Compliance & Guidelines</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Accreditations
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Policies
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetails;
