import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTypewriter } from "@/hooks/use-typewriter";
import { GlassCard } from "@/components/shared/GlassCard";
import { ContentSection } from "@/components/shared/ContentSection";
import { MapPin, Award, Building, GraduationCap, Users, Globe } from "lucide-react";
import growthAndAccreditation from "../../assets/growth-history.png";
import extensionSites from "../../assets/extension-history.png";
import expandingStudentSupport from "../../assets/expanding-history.png";
import currentCampusAndContinuedGrowth from "../../assets/current-history.png";

interface HistoryMilestone {
  year: string;
  title: string;
  image: string;
  content: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}

const historyMilestones: HistoryMilestone[] = [
  {
    year: "2004-2008",
    title: "Growth and Accreditation",
    image: growthAndAccreditation.src,
    icon: Award,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          In <strong className="text-primary">2004</strong>, Columbia College relocated to{" "}
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            <strong className="text-foreground">Fairfax, Virginia</strong>
          </span>, marking a significant milestone in its journey.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          By <strong className="text-primary">2005</strong>, the State Council of Higher Education for Virginia (SCHEV) authorized the College to offer <strong className="text-foreground">associate degree programs</strong> in:
        </p>
        <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Business Administration
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Information Technology
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Cosmetology
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Dental Laboratory Technology
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Early Childhood Education
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Technical and Business English
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          In <strong className="text-primary">February 2007</strong>, Columbia College earned{" "}
          <span className="inline-flex items-center gap-1">
            <Award className="w-4 h-4 text-primary" />
            <strong className="text-foreground">national accreditation</strong>
          </span>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          By <strong className="text-primary">September 2008</strong>, accreditation expanded to include the Associate degree programs, with two additional fields:
        </p>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Cosmetology</li>
          <li className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">TESOL</li>
        </ul>
      </div>
    ),
  },
  {
    year: "2006-2008",
    title: "Extension Sites",
    image: extensionSites.src,
    icon: Building,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          To better serve students in neighboring communities, Columbia College opened two <strong className="text-foreground">additional Extension Sites</strong>:
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm"><strong>Silver Spring, Maryland</strong> — February 2006</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-lg">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm"><strong>Centreville, Virginia</strong> — April 2008</span>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          These sites were established to accommodate individuals residing in these areas, expanding access to Columbia College's programs.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          At these Extensions, the <strong className="text-foreground">ESL</strong> and <strong className="text-foreground">Massage Therapy</strong> certificate programs were:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
            Certified to operate by the Maryland Higher Education Commission (MHEC) and SCHEV
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
            Later accredited by the Council on Occupational Education (COE)
          </li>
        </ul>
      </div>
    ),
  },
  {
    year: "2009-2010",
    title: "Expanding Student Support and Opportunities",
    image: expandingStudentSupport.src,
    icon: GraduationCap,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          In <strong className="text-primary">May 2009</strong>, Columbia College was approved to participate in the{" "}
          <strong className="text-foreground">Federal Student Financial Aid Programs (Title IV)</strong>, enabling students to receive financial assistance to help finance their education.
        </p>
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 space-y-3">
          <p className="text-muted-foreground leading-relaxed">
            In <strong className="text-primary">2010</strong>, the College was also approved by the{" "}
            <strong className="text-foreground">State Department of Veterans Affairs</strong> to provide training for Veterans, giving members of the armed forces access to quality education.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Additionally, in <strong className="text-primary">2010</strong>, the College was approved by the{" "}
            <strong className="text-foreground">U.S. Department of State</strong> to offer the J-1 Visa program, welcoming visiting international students and scholars.
          </p>
        </div>
        <p className="text-sm text-muted-foreground italic">
          These achievements demonstrate the College's dedication to supporting diverse learners and fostering global connections.
        </p>
      </div>
    ),
  },
  {
    year: "2014-Present",
    title: "Current Campus and Continued Growth",
    image: currentCampusAndContinuedGrowth.src,
    icon: Globe,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          In <strong className="text-primary">September 2014</strong>, Columbia College moved to its{" "}
          <strong className="text-foreground">current location in Vienna, Virginia</strong>, conveniently situated near the{" "}
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            <strong className="text-foreground">Spring Hill Metro station</strong>
          </span>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Today</strong>, Columbia College proudly offers:
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="bg-primary text-white p-4 rounded-xl text-center">
            <p className="text-2xl font-serif font-bold">6</p>
            <p className="text-xs opacity-90">Associate Degree Programs</p>
          </div>
          <div className="bg-primary text-white p-4 rounded-xl text-center">
            <p className="text-2xl font-serif font-bold">4</p>
            <p className="text-xs opacity-90">Certificate Programs</p>
          </div>
          <div className="bg-primary text-white p-4 rounded-xl text-center">
            <p className="text-2xl font-serif font-bold">3</p>
            <p className="text-xs opacity-90">English Programs</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="w-5 h-5 text-primary" />
            <span>Students from over <strong className="text-foreground">40 countries</strong> worldwide</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span><strong className="text-foreground">65% graduation rate</strong> (July 2022 – June 2023)</span>
          </div>
        </div>
      </div>
    ),
  },
];

const TypewriterTitle = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const { displayText, isComplete } = useTypewriter({
    text,
    speed: 30,
    delay: isVisible ? 300 : 0,
  });

  if (!isVisible) return null;

  return (
    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
      {displayText}
      {!isComplete && <span className="animate-pulse text-primary">|</span>}
    </h3>
  );
};

const HistoryCard = ({ milestone, index }: { milestone: HistoryMilestone; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;
  const Icon = milestone.icon;

  return (
    <div
      ref={ref}
      className={cn(
        "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
        !isEven && "lg:direction-rtl"
      )}
    >
      {/* Image Side */}
      <div
        className={cn(
          "relative transition-all duration-700 lg:direction-ltr",
          isVisible ? "opacity-100 translate-x-0" : isEven ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
        )}
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src={milestone.image}
            alt={milestone.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Year Badge */}
          <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-serif font-bold text-lg shadow-lg">
            {milestone.year}
          </div>
          
          {/* Icon Badge */}
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className={cn(
          "absolute -z-10 w-full h-full rounded-2xl bg-primary/10",
          isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
        )} />
      </div>

      {/* Content Side */}
      <div
        className={cn(
          "lg:direction-ltr transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <GlassCard className="p-6 md:p-8" hover={false}>
          <div className="mb-4">
            <TypewriterTitle text={milestone.title} isVisible={isVisible} />
          </div>
          {milestone.content}
        </GlassCard>
      </div>
    </div>
  );
};

export const HistorySection = () => {
  return (
    <ContentSection
      id="history"
      title="Our History"
      subtitle="A journey of growth, innovation, and commitment to education."
      variant="muted"
    >
      <div className="space-y-16 lg:space-y-24">
        {historyMilestones.map((milestone, index) => (
          <HistoryCard key={milestone.year} milestone={milestone} index={index} />
        ))}
      </div>

      {/* Timeline connector (visible on larger screens) */}
      <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 -z-10" />
    </ContentSection>
  );
};

export default HistorySection;
