"use client";
import { useState, useMemo } from "react";
import { LayoutGrid, List } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/shared/PageHero";
import SubNavigation from "@/components/shared/SubNavigation";
import ProgramCard from "@/components/programs/ProgramCard";
import ProgramFilters from "@/components/programs/ProgramFilters";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { programs } from "../../../data/program";

const programsSubNav = [
  { label: "Program Finder", href: "/programs/finder" },
  { label: "Global Education Programs", href: "/programs/global-education" },
  { label: "Online Learning", href: "/programs/online-learning" },
  { label: "Faculty", href: "/programs/faculty" },
];

const ProgramFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState<"program" | "career">("program");
  const [selectedStudyTypes, setSelectedStudyTypes] = useState<string[]>([]);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [availableOnline, setAvailableOnline] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  const filteredPrograms = useMemo(() => {
    return programs.filter((program) => {
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = program.name.toLowerCase().includes(query);
        const matchesDescription = program.shortDescription.toLowerCase().includes(query);
        const matchesCareer = program.careerPaths.some((path) =>
          path.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDescription && !matchesCareer) {
          return false;
        }
      }

      // Study Type filter
      if (selectedStudyTypes.length > 0) {
        if (!selectedStudyTypes.includes(program.studyType)) {
          return false;
        }
      }

      // Start Date filter
      if (selectedMonths.length > 0) {
        const hasMatchingDate = program.startDates.some((date) =>
          selectedMonths.includes(date)
        );
        if (!hasMatchingDate) {
          return false;
        }
      }

      // Industry/Career filter
      if (selectedIndustries.length > 0) {
        const hasMatchingIndustry = program.careerPaths.some((path) =>
          selectedIndustries.includes(path)
        );
        if (!hasMatchingIndustry) {
          return false;
        }
      }

      // Online availability
      if (availableOnline) {
        if (program.onlineLearning === "In-Person") {
          return false;
        }
      }

      return true;
    });
  }, [
    searchQuery,
    selectedStudyTypes,
    selectedMonths,
    selectedIndustries,
    availableOnline,
  ]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedStudyTypes([]);
    setSelectedMonths([]);
    setSelectedIndustries([]);
    setAvailableOnline(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        breadcrumb="Programs"
        title="Program Finder"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=600&fit=crop"
      />

      <SubNavigation items={programsSubNav} />

      <section className="py-12">
        <div className="container-wide">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <ProgramFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchMode={searchMode}
              setSearchMode={setSearchMode}
              selectedStudyTypes={selectedStudyTypes}
              setSelectedStudyTypes={setSelectedStudyTypes}
              selectedMonths={selectedMonths}
              setSelectedMonths={setSelectedMonths}
              selectedIndustries={selectedIndustries}
              setSelectedIndustries={setSelectedIndustries}
              availableOnline={availableOnline}
              setAvailableOnline={setAvailableOnline}
              onClearFilters={handleClearFilters}
            />

            {/* Results */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{filteredPrograms.length}</span>{" "}
                  {filteredPrograms.length === 1 ? "program" : "programs"} found
                </p>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("list")}
                    className={cn(
                      "p-2 rounded transition-all",
                      viewMode === "list"
                        ? "bg-background shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={cn(
                      "p-2 rounded transition-all",
                      viewMode === "grid"
                        ? "bg-background shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Program Cards */}
              {filteredPrograms.length > 0 ? (
                <div
                  className={cn(
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "space-y-4"
                  )}
                >
                  {filteredPrograms.map((program) => (
                    <ProgramCard
                      key={program.id}
                      program={program}
                      variant={viewMode}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-card border border-border rounded-xl">
                  <p className="text-xl font-serif font-bold mb-2">No programs found</p>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={handleClearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramFinder;
