import { Badge } from "@/components/ui/badge";
import type { Faculty } from "../../data/program";

interface FacultyCardProps {
  faculty: Faculty;
}

export const FacultyCard = ({ faculty }: FacultyCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex gap-6">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground">
                {faculty.name}
              </h3>
              <p className="text-primary font-medium">{faculty.title}</p>
            </div>
            <Badge variant="outline" className="flex-shrink-0">
              {faculty.department}
            </Badge>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {faculty.bio}
          </p>

          {/* Education */}
          <div className="mb-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
              Education
            </p>
            <div className="flex flex-wrap gap-1">
              {faculty.education.map((edu, index) => (
                <span key={index} className="text-sm text-foreground">
                  {edu}
                  {index < faculty.education.length - 1 && ", "}
                </span>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="flex flex-wrap gap-2">
            {faculty.specializations.map((spec) => (
              <Badge key={spec} variant="secondary" className="text-xs">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
