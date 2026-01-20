import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useTeachers } from "@/hooks/use-madrasa";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Teachers() {
  const { data: teachers, isLoading } = useTeachers();

  return (
    <Layout>
      <SectionHeader 
        title="Our Teachers" 
        subtitle="Dedicated educators committed to nurturing the next generation."
        centered
      />

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-80 bg-muted rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers?.map((teacher) => (
            <Card key={teacher.id} className="text-center border-border/50 shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-1">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-32 relative">
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 p-1 bg-background rounded-full">
                  <Avatar className="h-24 w-24 border-4 border-background">
                    {/* Placeholder or actual image if available */}
                    <AvatarImage src={teacher.imageUrl || undefined} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-serif font-bold">
                      {teacher.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardContent className="pt-16 pb-8 px-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-1">{teacher.name}</h3>
                <p className="text-accent font-medium text-sm mb-4 uppercase tracking-wide">{teacher.role}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {teacher.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  );
}
