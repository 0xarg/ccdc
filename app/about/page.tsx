"use client"; 
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";
import { PageHero } from "@/components/shared/PageHero";
import { SubNavigation } from "@/components/shared/SubNavigation";
import { ContentSection } from "@/components/shared/ContentSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { InfoCard } from "@/components/shared/InfoCard";
import { HistorySection } from "@/components/about/HistorySection";
import { useTypewriter } from "@/hooks/use-typewriter";
import { Briefcase, Award, Users, BookOpen, GraduationCap, Handshake, TrendingUp, ArrowRight, Target, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import aboutHero from "../../assets/about-hero.jpg";
import welcomeLetter from "../../assets/welcome.png";
import presidentSignature from "../../assets/president-signature.png";
import professionalGoals from "../../assets/professional-goals.png";
import academicExcellence from "../../assets/academic-goals.png";
import careerDevelopment from "../../assets/career-goals.png";
import innovativeInstruction from "../../assets/innovative-goals.png";
import studetnSupport from "../../assets/student-objective.png";
import excellenceInTeaching from "../../assets/excellence-objective.png";
import staffDevelopment from "../../assets/staff-objective.png";
import partnerships from "../../assets/partnership-objective.png";
import Image from "next/image";

const aboutSubNav = [
  { label: "Mission & Vision", href: "#mission-vision", isAnchor: true },
  { label: "Welcome Letter", href: "#welcome-letter", isAnchor: true },
  { label: "History", href: "#history", isAnchor: true },
  { label: "Accreditation & Affiliations", href: "/about/accreditation", isAnchor: false },
  { label: "Memorandum of Understanding", href: "/about/mou", isAnchor: false },
];

const educationalGoals = [
  {
    icon: professionalGoals,
    title: "Professional Training",
    description: "Provide professional training opportunities that support economic independence in the community.",
  },
  {
    icon: academicExcellence,
    title: "Academic Excellence",
    description: "Deliver academic studies that build self-confidence and success in students' chosen fields.",
  },
  {
    icon: careerDevelopment,
    title: "Career Development",
    description: "Offer career training for students entering rapidly growing service industries.",
  },
  {
    icon: innovativeInstruction,
    title: "Innovative Instruction",
    description: "Constantly innovate instruction and improve the delivery of academic material.",
  },
];

const strategicObjectives = [
  {
    icon: studetnSupport,
    title: "Student Support",
    description: "Foster a campus environment that promotes equity, personal growth, and educational achievement.",
  },
  {
    icon: excellenceInTeaching,
    title: "Excellence in Teaching",
    description: "Offer professional development for faculty and administrators, benefiting teachers and students.",
  },
  {
    icon: staffDevelopment,
    title: "Staff Development",
    description: "Provide programs that encourage individual and team growth, creating a cohesive educational organization.",
  },
  {
    icon: partnerships,
    title: "Partnerships",
    description: "Maintain strong relationships with community agencies and organizations, including those serving immigrant communities.",
  },
];

const WelcomeSection = () => {
  const { displayText, isComplete } = useTypewriter({ 
    text: '"We would like to challenge you to succeed!"', 
    speed: 40,
    delay: 500
  });

  return (
    <ContentSection id="welcome-letter" variant="light">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={welcomeLetter.src}
              alt="Dr. Richard K. Kim"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="font-serif text-lg font-bold">Dr. Richard K. Kim</p>
            <p className="text-sm opacity-90">President / Founder</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Welcome to Columbia College DC
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            On behalf of the faculty and staff here at <strong className="text-foreground">Columbia College</strong>, it is my pleasure to say welcome. You are invited to experience the challenging, yet rewarding educational opportunities we have to offer to current and prospective students.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <Image src={presidentSignature.src} alt="President Signature" width={250} height={250} />
            <a href="mailto:president@ccdc.edu" className="text-primary hover:underline">
              president@ccdc.edu
            </a>
            <span className="text-muted-foreground">703-206-0508</span>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center py-12 border-y border-border">
        <h3 className="font-serif text-2xl md:text-4xl font-bold text-foreground min-h-[3rem]">
          {displayText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </h3>
        <p className="mt-6 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          That is our motto here at Columbia College. The entire faculty and staff work closely and efficiently because our students are like family. Together, we will excel in the years to come.
        </p>
      </div>

      {/* Welcome Content */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Columbia College offers a variety of programs ranging from <strong className="text-foreground">Vocational English as a Second Language (VESL)</strong>, to <strong className="text-foreground">certificate</strong> and <strong className="text-foreground">associate degree</strong> programs. Through these diverse programs, we are committed and qualified to provide students with an education that equips them with the academic and intellectual skills necessary for their future, as well as the practical knowledge and expertise that are in high demand in today's global workforce.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At our institution, you will find <strong className="text-foreground">devoted faculty and staff</strong> with exceptional instructional ability and extensive experience in their fields. We foster a <em>"student first"</em> environment, prioritized by the entire team to help students achieve their educational and career goals.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Columbia College provides its students with the knowledge and skills necessary to increase their potential and make their career aspirations a reality. Here, we are confident that students will be able to achieve their goals through our <strong className="text-foreground">individually tailored programs</strong>, designed to appeal to each person's unique learning style.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our educational atmosphere is <strong className="text-foreground">inviting, supportive, caring, and knowledgeable</strong>, with a focus on both the present and the future. We look forward to welcoming you and assisting you on your career journey.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button asChild className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 rounded-full group">
          <Link href="/programs">
            Explore Our Programs
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </ContentSection>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        breadcrumb="About"
        title="About Columbia College"
        backgroundImage={aboutHero.src}
      />
      
      <SubNavigation items={aboutSubNav} />

      {/* Mission & Vision Section */}
      <ContentSection id="mission-vision" variant="light">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-4">
              {/* choose better icon */}
              <Target className="w-10 h-10 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-foreground">Mission Statement</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Columbia College offers high-quality occupational training that supports professional, intellectual, and personal growth, preparing individuals for initial employment, career advancement, and further educational opportunities.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-10 h-10 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-foreground">Vision of the College</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Columbia College strives to deliver <strong className="text-foreground">competitive and responsive professional training programs</strong>. We cultivate a <strong className="text-foreground">student-centered culture</strong> that challenges and supports learning, offering outstanding hands-on professional development opportunities. With a focus on <strong className="text-foreground">excellence in adult education</strong>, we use creative teaching approaches and embrace the rich cultural diversity of the Metropolitan area.
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      {/* Educational Goals */}
      <ContentSection
        title="Educational Goals"
        subtitle="The curriculum of each program is designed around these guiding principles."
        variant="muted"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationalGoals.map((goal) => (
            <GlassCard key={goal.title} className="text-center">
              <InfoCard
                icon={<Image src={goal.icon.src} alt={goal.title} width={150} height={150} />}
                title={goal.title}
                description={goal.description}
              />
            </GlassCard>
          ))}
        </div>
      </ContentSection>

      {/* Strategic Objectives */}
      <ContentSection
        title="Strategic Objectives"
        variant="light"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {strategicObjectives.map((objective) => (
            <GlassCard key={objective.title} className="text-center">
              <InfoCard
                icon={<Image src={objective.icon.src} alt={objective.title} width={150} height={150} /> as React.ReactNode}
                title={objective.title}
                description={objective.description}
              />
            </GlassCard>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" asChild className="rounded-full px-8">
            <Link href="/programs">
              <ArrowRight className="mr-2 w-4 h-4" />
              Learn More About Our Programs
            </Link>
          </Button>
        </div>
      </ContentSection>

      {/* Welcome Letter */}
      <WelcomeSection />

      {/* History Section - Now using the new component */}
      <HistorySection />

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default About;
