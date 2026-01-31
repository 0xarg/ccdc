export interface Program {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  studyType: "Associates Degree" | "Certificate";
  credits: number;
  duration: string;
  startDates: string[];
  onlineLearning: "100% Online" | "Hybrid" | "In-Person";
  careerPaths: string[];
  tuition: string;
  financialAidDeadline: string;
  nextStartDate: string;
  salary: {
    annual: string;
    hourly: string;
  };
  jobOpenings: number;
}

export interface Faculty {
  id: string;
  name: string;
  title: string;
  department: string;
  image: string;
  bio: string;
  education: string[];
  specializations: string[];
}

export const programs: Program[] = [
  {
    id: "dental-labs",
    name: "Dental Labs",
    slug: "dental-labs",
    shortDescription: "As the only program of its kind in the Washington DC Metropolitan area, the Associate of Applied Science in Dental Laboratory Technology program equips students with advanced skills.",
    fullDescription: "As the only program of its kind in the Washington DC Metropolitan area, the Associate of Applied Science in Dental Laboratory Technology program equips students with advanced skills to design and construct crowns, bridges, dentures, and orthodontic appliances. The Associate of Applied Science degree offers a flexible career path with opportunities for advancement. Graduates may go on to manage their own laboratories or take on leadership roles as department heads.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
    studyType: "Associates Degree",
    credits: 99,
    duration: "2 years",
    startDates: ["February 2026", "August 2026"],
    onlineLearning: "Hybrid",
    careerPaths: ["Healthcare", "Beauty / Personal Care"],
    tuition: "$15,500/year",
    financialAidDeadline: "Feb 7, 2026",
    nextStartDate: "Mar 23, 2026",
    salary: {
      annual: "$66,670",
      hourly: "$32.05"
    },
    jobOpenings: 480
  },
  {
    id: "culinary-arts",
    name: "Culinary Arts",
    slug: "culinary-arts",
    shortDescription: "The Associate of Applied Science in Culinary Arts/Management offers hands-on training in culinary processes and techniques, from baking to food service management.",
    fullDescription: "The Associate of Applied Science in Culinary Arts/Management offers hands-on training in culinary processes and techniques from baking to food service management. Students learn in a fully-equipped kitchen, mastering knife skills, food safety, menu planning, and restaurant operations. Graduates are prepared for careers in fine dining, catering, and hospitality management.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    studyType: "Associates Degree",
    credits: 90,
    duration: "2 years",
    startDates: ["January 2026", "June 2026"],
    onlineLearning: "In-Person",
    careerPaths: ["Culinary", "Hospitality"],
    tuition: "$14,800/year",
    financialAidDeadline: "Jan 15, 2026",
    nextStartDate: "Feb 10, 2026",
    salary: {
      annual: "$52,160",
      hourly: "$25.08"
    },
    jobOpenings: 350
  },
  {
    id: "cosmetology",
    name: "Cosmetology",
    slug: "cosmetology",
    shortDescription: "The Cosmetology Program prepares students for careers in hair design, nail artistry, and facial care through comprehensive hands-on training.",
    fullDescription: "The Cosmetology Program prepares students for careers in hair design, nail artistry, esthetics, and facial care. Through hands-on training and classroom instruction, students master cutting-edge techniques in hairstyling, coloring, makeup artistry, and skincare. Our program exceeds state licensing requirements and prepares graduates for successful careers in salons, spas, and the beauty industry.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    studyType: "Certificate",
    credits: 60,
    duration: "18 months",
    startDates: ["March 2026", "September 2026"],
    onlineLearning: "In-Person",
    careerPaths: ["Beauty / Personal Care", "Fashion"],
    tuition: "$12,200/year",
    financialAidDeadline: "Feb 28, 2026",
    nextStartDate: "Mar 15, 2026",
    salary: {
      annual: "$35,420",
      hourly: "$17.03"
    },
    jobOpenings: 620
  },
  {
    id: "business-administration",
    name: "Business Administration",
    slug: "business-administration",
    shortDescription: "The Associate of Applied Science in Business Administration prepares students with the business acumen and practical experience for today's competitive business environment.",
    fullDescription: "The Associate of Applied Science in Business Administration prepares students with comprehensive business knowledge including accounting, management, marketing, and entrepreneurship. Students develop critical thinking, leadership, and communication skills essential for success in today's competitive business environment. The program offers flexibility with online and hybrid learning options.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    studyType: "Associates Degree",
    credits: 90,
    duration: "2 years",
    startDates: ["January 2026", "April 2026", "August 2026"],
    onlineLearning: "100% Online",
    careerPaths: ["Business Administration", "Sales / Marketing", "Human Resources"],
    tuition: "$13,500/year",
    financialAidDeadline: "Jan 10, 2026",
    nextStartDate: "Jan 28, 2026",
    salary: {
      annual: "$58,350",
      hourly: "$28.05"
    },
    jobOpenings: 890
  },
  {
    id: "information-technology",
    name: "Information Technology",
    slug: "information-technology",
    shortDescription: "Learn cutting-edge technology skills in networking, cybersecurity, and systems administration to prepare for the rapidly growing IT industry.",
    fullDescription: "The Information Technology program provides comprehensive training in networking, cybersecurity, cloud computing, and systems administration. Students gain hands-on experience with industry-standard tools and technologies, preparing them for in-demand careers in the rapidly growing tech sector. The program includes preparation for industry certifications.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    studyType: "Associates Degree",
    credits: 90,
    duration: "2 years",
    startDates: ["February 2026", "June 2026", "October 2026"],
    onlineLearning: "100% Online",
    careerPaths: ["IT / Technical Support", "Business Administration"],
    tuition: "$14,200/year",
    financialAidDeadline: "Jan 20, 2026",
    nextStartDate: "Feb 15, 2026",
    salary: {
      annual: "$62,760",
      hourly: "$30.17"
    },
    jobOpenings: 1200
  },
  {
    id: "early-childhood-education",
    name: "Early Childhood Education",
    slug: "early-childhood-education",
    shortDescription: "Prepare for a rewarding career working with young children, learning child development theory and hands-on teaching practices.",
    fullDescription: "The Early Childhood Education program prepares students for meaningful careers working with young children from birth through age eight. Students learn child development theory, curriculum design, classroom management, and family engagement strategies. The program meets state licensing requirements and prepares graduates for careers in childcare centers, preschools, and Head Start programs.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
    studyType: "Associates Degree",
    credits: 85,
    duration: "2 years",
    startDates: ["January 2026", "August 2026"],
    onlineLearning: "100% Online",
    careerPaths: ["Education", "Customer Service"],
    tuition: "$12,800/year",
    financialAidDeadline: "Dec 15, 2025",
    nextStartDate: "Jan 10, 2026",
    salary: {
      annual: "$38,250",
      hourly: "$18.39"
    },
    jobOpenings: 540
  }
];

export const faculty: Faculty[] = [
  {
    id: "chef-martinez",
    name: "Chef Maria Martinez",
    title: "Lead Instructor",
    department: "Culinary Arts",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&h=300&fit=crop&crop=face",
    bio: "Chef Martinez brings over 20 years of culinary experience, having worked in Michelin-starred restaurants across Europe and the United States. She specializes in French and Mediterranean cuisines.",
    education: ["Le Cordon Bleu, Paris", "CIA, Hyde Park"],
    specializations: ["French Cuisine", "Pastry Arts", "Food Photography"]
  },
  {
    id: "dr-johnson",
    name: "Dr. Robert Johnson",
    title: "Program Director",
    department: "Dental Laboratory Technology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    bio: "Dr. Johnson has over 15 years of experience in dental laboratory technology. He has trained hundreds of technicians who now work in laboratories across the country.",
    education: ["Columbia College DC, AAS", "University of Maryland"],
    specializations: ["Crown & Bridge", "CAD/CAM Technology", "Orthodontics"]
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    title: "Senior Instructor",
    department: "Cosmetology",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    bio: "Sarah is a licensed cosmetologist with 12 years of salon experience. She has worked with major beauty brands and specializes in advanced coloring techniques.",
    education: ["Aveda Institute", "L'Oréal Professionnel Academy"],
    specializations: ["Hair Coloring", "Styling", "Makeup Artistry"]
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Instructor",
    department: "Information Technology",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Michael is a certified IT professional with expertise in cloud computing and cybersecurity. He previously worked as a systems architect for Fortune 500 companies.",
    education: ["George Washington University, MS", "CompTIA, AWS Certified"],
    specializations: ["Cloud Architecture", "Cybersecurity", "Network Administration"]
  },
  {
    id: "dr-patricia-adams",
    name: "Dr. Patricia Adams",
    title: "Program Coordinator",
    department: "Business Administration",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    bio: "Dr. Adams holds a PhD in Business Administration and has over 18 years of experience in both corporate leadership and academic instruction.",
    education: ["Georgetown University, PhD", "Harvard Business School, MBA"],
    specializations: ["Strategic Management", "Entrepreneurship", "Marketing"]
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    title: "Lead Instructor",
    department: "Early Childhood Education",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face",
    bio: "Lisa has dedicated her career to early childhood education, with experience directing childcare centers and developing curriculum for preschool programs.",
    education: ["University of Virginia, MEd", "National Board Certified"],
    specializations: ["Child Development", "Curriculum Design", "Family Engagement"]
  }
];

export const industries = [
  "Beauty / Personal Care",
  "Business Administration",
  "Culinary",
  "Hospitality",
  "Media",
  "Customer Service",
  "Education",
  "Fashion",
  "Healthcare",
  "Human Resources",
  "IT / Technical Support",
  "Retail",
  "Sales / Marketing"
];

export const studyMonths = [
  "January 2026",
  "February 2026",
  "March 2026",
  "April 2026",
  "June 2026",
  "July 2026",
  "August 2026",
  "September 2026",
  "October 2026",
  "November 2026"
];
