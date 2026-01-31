import { MapPin, Phone, Printer, Globe } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface AccreditationCardProps {
  logo?: string;
  logoText?: string;
  title: string;
  description: string;
  address?: {
    street: string;
    city: string;
  };
  phone?: string;
  fax?: string;
  website?: string;
  websiteLabel?: string;
}

export const AccreditationCard = ({
  logo,
  logoText,
  title,
  description,
  address,
  phone,
  fax,
  website,
  websiteLabel,
}: AccreditationCardProps) => {
  return (
    <GlassCard className="flex flex-col md:flex-row gap-6">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
        {logo ? (
          <img src={logo} alt={title} className="w-20 h-20 object-contain" />
        ) : (
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
            {logoText || title.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {address && (
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Address</p>
                <p className="text-muted-foreground">{address.street}</p>
                <p className="text-muted-foreground">{address.city}</p>
              </div>
            </div>
          )}

          {phone && (
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Telephone</p>
                <p className="text-muted-foreground">{phone}</p>
              </div>
            </div>
          )}
 {website && (
            <div className="flex items-start gap-2">
              <Globe className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Website</p>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {websiteLabel || website}
                </a>
              </div>
            </div>
          )}
          {fax && (
            <div className="flex items-start gap-2">
              <Printer className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Fax</p>
                <p className="text-muted-foreground">{fax}</p>
              </div>
            </div>
          )}

         
        </div>
      </div>
    </GlassCard>
  );
};

export default AccreditationCard;
