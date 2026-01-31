"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";
import { PageHero } from "@/components/shared/PageHero";
import { SubNavigation } from "@/components/shared/SubNavigation";
import { ContentSection } from "@/components/shared/ContentSection";
import { GlassCard } from "@/components/shared/GlassCard";
import { PartnerGrid } from "@/components/shared/PartnerGrid";
import { CheckCircle, GraduationCap } from "lucide-react";
import mouHero from "../../../assets/mou-hero.jpg";
import potomac from "../../../assets/potomac.jpg";
import strayer from "../../../assets/strayer.jpg";
import Image from "next/image";
const aboutSubNav = [
  { label: "About", href: "/about", isAnchor: false },
  { label: "Mission & Vision", href: "/about#mission-vision", isAnchor: false },
  { label: "Welcome Letter", href: "/about#welcome-letter", isAnchor: false },
  { label: "History", href: "/about#history", isAnchor: false },
  { label: "Accreditation & Affiliations", href: "/about/accreditation", isAnchor: false },
  { label: "Memorandum of Understanding", href: "/about/mou", isAnchor: false },
];

const transferPartners = [
  { name: "University of the Potomac", logo: potomac },
  { name: "Strayer University", logo: strayer },
];

const partnerInstitutions = [
  { name: "The Society of Business Practitioners, U.K." },
  { name: "Kunjang University" },
  { name: "Daegu Health College" },
  { name: "Daejin University" },
  { name: "Digital Seoul Culture Arts University" },
  { name: "Seoul Digital University" },
  { name: "Baekseok University" },
  { name: "Baekseok Culture University" },
  { name: "Wonkwang Health Science University" },
  { name: "Incheon JEI University" },
  { name: "Korea Tourism College" },
  { name: "Daily University News Network" },
  { name: "Korea Hotel and Tourism College" },
  { name: "Seoul Robotics High School" },
  { name: "Daegu Technopark Bio Industry Center" },
  { name: "Kyungdong University" },
  { name: "Korea Pro-Make-Up Artists Career Exchange Association" },
  { name: "MBC Academy Beauty School" },
  { name: "Chungbuk Health & Science University" },
  { name: "Kwandong University" },
  { name: "Gachon University" },
  { name: "Konyang University" },
  { name: "Sahmyook Health University" },
  { name: "Gangwon Provincial College" },
  { name: "Ansan University" },
  { name: "Yewon Arts University" },
  { name: "Technological Vocational College of Dezhou" },
  { name: "Changchun Guanghua University" },
  { name: "EC English" },
  { name: "Hyatt Regency Tysons Corner Center" },
  { name: "Caritas Academy" },
  { name: "Tongmyong University" },
];

const MOU = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        breadcrumb="About"
        title="Memorandum of Understanding"
        backgroundImage={mouHero.src}
      />
      
      <SubNavigation items={aboutSubNav} />

      {/* Transfer Opportunities */}
      <ContentSection
        title="Transfer Opportunities for Bachelor's and Master's Degrees"
        subtitle="Columbia College students have the opportunity to continue their education and earn Bachelor's and/or Master's degrees at University of the Potomac & Strayer University."
        variant="light"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center  gap-8 mb-12">
            {/* One of image is stretched */}

            {transferPartners.map((partner) => (
                <Image key={partner.name} src={partner.logo.src} alt={partner.name} width={150} height={150} className={partner.name === "University of the Potomac" ? "object-cover" : "object-contain"} />
            ))}
          </div>

          <GlassCard className="text-center">
            <p className="text-muted-foreground leading-relaxed mb-6">
              This pathway is available upon successful completion of an <strong className="text-foreground">Associate Degree</strong> in <strong className="text-foreground">Business Administration</strong> or <strong className="text-foreground">Information Technology</strong> at Columbia College.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <CheckCircle className="w-5 h-5" />
              <span>Guaranteed Admission</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Students who complete the specified Associate programs are guaranteed admission to the partner universities to continue their studies.
            </p>
          </GlassCard>
        </div>
      </ContentSection>

      {/* Partner Institutions */}
      <ContentSection
        title="Partner Institutions"
        subtitle="Columbia College has established partnerships with institutions around the world to expand educational opportunities."
        variant="muted"
      >
        <PartnerGrid partners={partnerInstitutions} />
      </ContentSection>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default MOU;
