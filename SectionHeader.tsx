import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-accent mt-4 rounded-full",
        centered && "mx-auto"
      )} />
    </div>
  );
}
