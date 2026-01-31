import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon?: React.ReactNode;
  iconEmoji?: string;
  title: string;
  description: string;
  className?: string;
}

export const InfoCard = ({
  icon,
  iconEmoji,
  title,
  description,
  className,
}: InfoCardProps) => {
  return (
    <div
      className={cn(
        "text-center p-6 group",
        className
      )}
    >
      <div className="mb-4 flex justify-center">
        {iconEmoji ? (
          <span className="text-4xl">{iconEmoji}</span>
        ) : icon ? (
          <div className="w-30 h-30 rounded-full flex items-center justify-center  transition-colors duration-300">
            {icon}
          </div>
        ) : null}
      </div>
      <h3 className="font-serif text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
