import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useCourses } from "@/hooks/use-madrasa";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users } from "lucide-react";
import { Link } from "wouter";

export default function Courses() {
  const { data: courses, isLoading } = useCourses();

  return (
    <Layout>
      <SectionHeader 
        title="Our Courses" 
        subtitle="Comprehensive Islamic education."
      />

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 bg-muted rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses?.map((course) => (
            <Card key={course.id} className="flex flex-col h-full border-border/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden group">
              <div className="h-2 bg-primary group-hover:bg-accent transition-colors duration-500" />
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-foreground/80">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{course.schedule}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t border-border/30">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                    Enroll Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  );
}
