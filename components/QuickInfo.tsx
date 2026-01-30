import { Calendar, Clock, ArrowRight, DollarSign } from "lucide-react";

const quickLinks = [
  { icon: Calendar, label: "CALENDAR", href: "#" },
  { icon: DollarSign, label: "COST CALCULATOR", href: "#" },
];

const importantDates = [
  {
    icon: Clock,
    date: "Feb 7",
    label: "Financial Aid Deadline",
  },
  {
    icon: Calendar,
    date: "Feb 17",
    label: "Classes Start",
  },
];

export const QuickInfo = () => {
  return (
    <section className="relative z-20 -mt-12 md:-mt-14">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-border">
            {/* Quick Links */}
            <div className="flex-1 p-4 md:p-5 flex items-center justify-center sm:justify-start gap-4 md:gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-xs md:text-sm transition-all duration-300"
                >
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* Important Dates */}
            <div className="flex-1 p-4 md:p-5 flex items-center justify-center sm:justify-end gap-4 md:gap-6">
              {importantDates.map((item) => (
                <div key={item.label} className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-primary font-serif font-bold text-base md:text-lg leading-tight">
                      {item.date}
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm leading-tight">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
