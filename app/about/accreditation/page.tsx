"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";
import { PageHero } from "@/components/shared/PageHero";
import { SubNavigation } from "@/components/shared/SubNavigation";
import { ContentSection } from "@/components/shared/ContentSection";
import { AccreditationCard } from "@/components/shared/AccreditationCard";
import { GlassCard } from "@/components/shared/GlassCard";
import { CheckCircle } from "lucide-react";
import affiliationHero from "../../../assets/affiliation-hero.jpg";
import coe from "../../../assets/coe.jpg";
import schev from "../../../assets/schev.jpg";
import cea from "../../../assets/cea.jpg";

const aboutSubNav = [
  { label: "About", href: "/about", isAnchor: false },
  { label: "Mission & Vision", href: "/about#mission-vision", isAnchor: false },
  { label: "Welcome Letter", href: "/about#welcome-letter", isAnchor: false },
  { label: "History", href: "/about#history", isAnchor: false },
  { label: "Accreditation & Affiliations", href: "/about/accreditation", isAnchor: false },
  { label: "Memorandum of Understanding", href: "/about/mou", isAnchor: false },
];

const accreditations = [
  {
    logo: coe,
    logoText: "COE",
    title: "Council on Occupational Education (COE)",
    description: "Columbia College is accredited by the Council on Occupational Education (COE) to award certificates and associate degrees. It is reaffirmed by COE after a team visit every 4-6 years.",
    address: {
      street: "7840 Roswell Road, Building 300, Suite 325",
      city: "Atlanta, GA 30350",
    },
    phone: "(770) 396-3898",
    fax: "(770) 396-3790",
    website: "https://www.council.org/",
    websiteLabel: "www.council.org",
  },
  {
    logo: schev,
    logoText: "SCHEV",
    title: "State Council of Higher Education for Virginia (SCHEV)",
    description: "Columbia College is certified to operate in Virginia by the State Council of Higher Education for Virginia (SCHEV). James Monroe Building, 10th Floor, 101 N. 14th Street, Richmond, VA 23219",
    address: {
      street: "James Monroe Building, 10th Floor, 101 N. 14th Street",
      city: "Richmond, VA 23219",
    },
    phone: "(804) 225-2600",
    fax: "(804) 225-2604",
    website: "https://www.schev.edu",
    websiteLabel: "www.schev.edu",
  },
  {
    logo: cea,
    logoText: "CEA",
    title: "Commission on English Language Program Accreditation",
    description: "The Columbia College English as a Second Language Program is accredited by the Commission on English Language Program Accreditation (CEA) for the period August 2022 through August 2027 and agrees to uphold the CEA Standards for English Language Programs and Institutions. CEA is recognized by the U.S. Secretary of Education as a nationally recognized accrediting agency for English language programs and institutions in the U.S. Accreditation (CEA).",
    address: {
      street: "1001 N. Fairfax Street, Suite 630",
      city: "Alexandria, VA 22314",
    },
    phone: "(703) 665-3400",
    website: "https://www.cea-accredit.org",
    websiteLabel: "www.cea-accredit.org",
  },
];

const memberships = [
  "U.S. Department of Education",
  "U.S. Department of State",
  "Authorized to enroll nonimmigrant (F-1) students by the U.S. Citizenship and Immigration Services (USCIS)",
  "Student and Exchange Visitor Information System (SEVIS)",
  "U.S. Department of Veterans Affairs – Post-9/11 GI Bill",
  "Cambridge – Michigan Language Assessment (CaMLA)",
  "Virginia State Corporation Commission",
  "Virginia Department of Health Professions",
  "Virginia Health Care Association (VHCA)",
  "American Massage Therapy Association (AMTA)",
  "National Association of Dental Laboratories (NADL)",
  "National Certification Board for Therapeutic Massage and Bodywork (NCBTMB)",
  "College Board Membership",
  "Microsoft IT Academy Membership",
  "American Culinary Federation Membership",
  "TESOL Membership",
];

const Accreditation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        breadcrumb="About"
        title="Accreditation & Affiliations"
        backgroundImage={affiliationHero.src}
      />
      
      <SubNavigation items={aboutSubNav} />

      {/* Accreditations */}
      <ContentSection variant="light">
        <div className="space-y-8 max-w-4xl mx-auto">
          {accreditations.map((accreditation) => (
            <AccreditationCard key={accreditation.title} logo={accreditation.logo.src} logoText={accreditation.logoText} title={accreditation.title} description={accreditation.description} address={accreditation.address} phone={accreditation.phone} fax={accreditation.fax} website={accreditation.website} websiteLabel={accreditation.websiteLabel} />
          ))}
        </div>
      </ContentSection>

      {/* Memberships */}
      <ContentSection
        title="Memberships and Affiliations"
        subtitle="Columbia College has expanded its educational and professional boundaries by establishing solid relationships with a variety of affiliations."
        variant="muted"
      >
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <ul className="grid sm:grid-cols-2 gap-4">
              {memberships.map((membership) => (
                <li key={membership} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{membership}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </ContentSection>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Accreditation;
