import { useState } from "react";
import { Search, X, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { industries, studyMonths } from "../../data/program";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ProgramFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchMode: "program" | "career";
  setSearchMode: (mode: "program" | "career") => void;
  selectedStudyTypes: string[];
  setSelectedStudyTypes: (types: string[]) => void;
  selectedMonths: string[];
  setSelectedMonths: (months: string[]) => void;
  selectedIndustries: string[];
  setSelectedIndustries: (industries: string[]) => void;
  availableOnline: boolean;
  setAvailableOnline: (available: boolean) => void;
  onClearFilters: () => void;
}

export const ProgramFilters = ({
  searchQuery,
  setSearchQuery,
  searchMode,
  setSearchMode,
  selectedStudyTypes,
  setSelectedStudyTypes,
  selectedMonths,
  setSelectedMonths,
  selectedIndustries,
  setSelectedIndustries,
  availableOnline,
  setAvailableOnline,
  onClearFilters,
}: ProgramFiltersProps) => {
  const handleStudyTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedStudyTypes([...selectedStudyTypes, type]);
    } else {
      setSelectedStudyTypes(selectedStudyTypes.filter((t) => t !== type));
    }
  };

  const handleMonthChange = (month: string, checked: boolean) => {
    if (checked) {
      setSelectedMonths([...selectedMonths, month]);
    } else {
      setSelectedMonths(selectedMonths.filter((m) => m !== month));
    }
  };

  const handleIndustryChange = (industry: string, checked: boolean) => {
    if (checked) {
      setSelectedIndustries([...selectedIndustries, industry]);
    } else {
      setSelectedIndustries(selectedIndustries.filter((i) => i !== industry));
    }
  };

  const hasActiveFilters =
    selectedStudyTypes.length > 0 ||
    selectedMonths.length > 0 ||
    selectedIndustries.length > 0 ||
    availableOnline ||
    searchQuery;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search programs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Search Mode Toggle */}
      <div>
        <p className="text-sm font-medium mb-3">Search by</p>
        <div className="flex bg-secondary rounded-full p-1">
          <button
            onClick={() => setSearchMode("program")}
            className={cn(
              "flex-1 py-2 px-4 text-sm font-medium rounded-full transition-all",
              searchMode === "program"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Program
          </button>
          <button
            onClick={() => setSearchMode("career")}
            className={cn(
              "flex-1 py-2 px-4 text-sm font-medium rounded-full transition-all",
              searchMode === "career"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Career Path
          </button>
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="text-sm text-primary hover:underline font-medium"
        >
          Clear Filters
        </button>
      )}

      {/* Program Mode Filters */}
      {searchMode === "program" && (
        <>
          {/* Study Type */}
          <div>
            <p className="text-sm font-semibold mb-3">Study Type</p>
            <div className="space-y-3">
              {["Associates Degree", "Certificate"].map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer">
                  <Checkbox
                    checked={selectedStudyTypes.includes(type)}
                    onCheckedChange={(checked) =>
                      handleStudyTypeChange(type, checked as boolean)
                    }
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Study Starting */}
          <div>
            <p className="text-sm font-semibold mb-3">Study Starting</p>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {studyMonths.map((month) => (
                <label key={month} className="flex items-center gap-3 cursor-pointer">
                  <Checkbox
                    checked={selectedMonths.includes(month)}
                    onCheckedChange={(checked) =>
                      handleMonthChange(month, checked as boolean)
                    }
                  />
                  <span className="text-sm">{month}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Other */}
          <div>
            <p className="text-sm font-semibold mb-3">Other</p>
            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={availableOnline}
                onCheckedChange={(checked) => setAvailableOnline(checked as boolean)}
              />
              <span className="text-sm">Available Online</span>
            </label>
          </div>
        </>
      )}

      {/* Career Mode Filters */}
      {searchMode === "career" && (
        <div>
          <p className="text-sm font-semibold mb-3">Industry</p>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {industries.map((industry) => (
              <label key={industry} className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  checked={selectedIndustries.includes(industry)}
                  onCheckedChange={(checked) =>
                    handleIndustryChange(industry, checked as boolean)
                  }
                />
                <span className="text-sm">{industry}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-24 bg-card border border-border rounded-xl p-6">
          <FilterContent />
        </div>
      </aside>

      {/* Mobile Filter Button + Sheet */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="lg" className="rounded-full shadow-lg">
              <Filter className="w-5 h-5 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 w-5 h-5 rounded-full bg-white text-primary text-xs flex items-center justify-center">
                  !
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filter Programs</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ProgramFilters;
