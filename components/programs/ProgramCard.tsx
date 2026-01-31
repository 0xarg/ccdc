import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Program } from "../../data/program";

interface ProgramCardProps {
  program: Program;
  variant?: "grid" | "list";
}

export const ProgramCard = ({ program, variant = "grid" }: ProgramCardProps) => {
  if (variant === "list") {
    return (
      <Link
        href={`/program/${program.slug}`}
        className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={program.image}
              alt={program.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {program.studyType}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {program.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {program.shortDescription}
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Study Type</p>
                <p className="font-medium">{program.studyType}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Credits</p>
                <p className="font-medium">{program.credits}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Format</p>
                <p className="font-medium">{program.onlineLearning}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Next Start</p>
                <p className="font-medium text-primary">{program.nextStartDate}</p>
              </div>
            </div>

            {/* Deadlines */}
            <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Financial Aid: {program.financialAidDeadline}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Duration: {program.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid variant
  return (
    <Link
      href={`/program/${program.slug}`}
      className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 card-hover"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <Badge variant="secondary" className="bg-primary text-primary-foreground mb-2">
            {program.studyType}
          </Badge>
          <h3 className="font-serif text-lg font-bold text-white">
            {program.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {program.shortDescription}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Monitor className="w-3 h-3" />
            <span>{program.onlineLearning}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{program.duration}</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">Next Start Date</p>
          <p className="text-sm font-semibold text-primary">{program.nextStartDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;
