"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SubNavigation from "@/components/shared/SubNavigation";
import ContentSection from "@/components/shared/ContentSection";
import FacultyCard from "@/components/programs/FacultyCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { faculty } from "../../../data/program";

const programsSubNav = [
  { label: "Program Finder", href: "/programs/finder" },
  { label: "Global Education Programs", href: "/programs/global-education" },
  { label: "Online Learning", href: "/programs/online-learning" },
  { label: "Faculty", href: "/programs/faculty" },
];

const Faculty = () => {
  const departments = [...new Set(faculty.map((f) => f.department))];
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const filteredFaculty = selectedDepartment
    ? faculty.filter((f) => f.department === selectedDepartment)
    : faculty;

  // Group faculty by department for display
  const groupedFaculty = departments.reduce((acc, dept) => {
    acc[dept] = filteredFaculty.filter((f) => f.department === dept);
    return acc;
  }, {} as Record<string, typeof faculty>);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        breadcrumb="Programs"
        title="Faculty"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=600&fit=crop"
      />

      <SubNavigation items={programsSubNav} />

      {/* Intro */}
      <ContentSection>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Instructors
          </h2>
          <p className="text-lg text-muted-foreground">
            Our faculty members are experienced professionals who bring real-world expertise to the classroom. They are committed to student success and provide personalized guidance throughout your educational journey.
          </p>
        </div>
      </ContentSection>

      {/* Department Filter */}
      <div className="container-wide pb-8">
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedDepartment === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedDepartment(null)}
            className="rounded-full"
          >
            All Departments
          </Button>
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={selectedDepartment === dept ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDepartment(dept)}
              className="rounded-full"
            >
              {dept}
            </Button>
          ))}
        </div>
      </div>

      {/* Faculty List */}
      <ContentSection variant="muted">
        <div className="space-y-12">
          {Object.entries(groupedFaculty)
            .filter(([, members]) => members.length > 0)
            .map(([department, members]) => (
              <div key={department}>
                <h3 className="font-serif text-2xl font-bold mb-6 pb-2 border-b border-border">
                  {department}
                </h3>
                <div className="space-y-4">
                  {members.map((member) => (
                    <FacultyCard key={member.id} faculty={member} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-4">
            Interested in Teaching at Columbia College?
          </h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for passionate educators to join our team. If you have expertise in your field and a commitment to student success, we'd love to hear from you.
          </p>
          <Button size="lg" className="rounded-full">
            View Career Opportunities
          </Button>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default Faculty;
