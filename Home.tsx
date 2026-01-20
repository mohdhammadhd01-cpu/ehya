import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAnnouncements, useDailyInspirations } from "@/hooks/use-madrasa";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, Users, GraduationCap, ClipboardCheck, Book, Bell } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import banner1 from "@assets/WhatsApp_Image_2026-01-19_at_1.24.05_PM_1768891259021.jpeg";
import banner2 from "@assets/WhatsApp_Image_2026-01-19_at_1.24.06_PM_1768891259022.jpeg";
import banner3 from "@assets/IMG_20260119_132242_1768813893243.jpg";

export default function Home() {
  const { data: announcements, isLoading } = useAnnouncements();
  const { data: inspirations } = useDailyInspirations();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden rounded-3xl bg-primary text-primary-foreground mb-16 shadow-2xl">
        {/* Background Images Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 z-10" />
          <div className="grid grid-cols-3 h-full opacity-40">
            <img src={banner1} alt="Madrasa Banner 1" className="w-full h-full object-cover" />
            <img src={banner2} alt="Madrasa Banner 2" className="w-full h-full object-cover" />
            <img src={banner3} alt="Madrasa Banner 3" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="container relative z-20 px-6 mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-accent-foreground mb-6 border border-accent/30">
              <span className="text-sm font-bold uppercase tracking-wider">Contact Us: 9849132838</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Jamia Islamia Ehya-ul-Uloom niswa
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Welcome to Jamia Islamia Ehya-ul-Uloom niswa. A sanctuary for learning, spiritual growth, and community building. Join us on a journey of discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Shortcuts */}
      <section className="mb-16">
        <SectionHeader 
          title="Quick Access" 
          subtitle="Direct links to essential Madrasa services and daily practices."
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Prayer Times", icon: Clock, href: "/prayer-times", color: "bg-teal-500" },
            { label: "Dua & Ahadith", icon: Book, href: "/knowledge", color: "bg-purple-500" },
            { label: "Classes", icon: GraduationCap, href: "/courses", color: "bg-green-500" },
            { label: "Attendance", icon: ClipboardCheck, href: "/contact", color: "bg-orange-500" },
            { label: "Announcements", icon: Bell, href: "/", color: "bg-red-500" },
            { label: "Teachers", icon: Users, href: "/teachers", color: "bg-blue-500" },
          ].map((shortcut, idx) => (
            <Link key={idx} href={shortcut.href}>
              <div className="group flex flex-col items-center p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                <div className={cn("p-3 rounded-xl mb-3 text-white transition-transform group-hover:scale-110", shortcut.color)}>
                  <shortcut.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-primary">{shortcut.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section: Founder & Student Success */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-primary">Our Legacy & Founder</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by <span className="font-semibold text-primary">Mufti Imamuddin Jamia</span>, our Madrasa has been a beacon of light since 1991. 
              Under his visionary leadership, many students have successfully become <span className="font-semibold">Hafiza</span> and <span className="font-semibold">Alima</span>, spreading the message of Islam across the globe.
            </p>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-primary mb-2">Current Strength</h4>
              <p className="text-muted-foreground">Currently, we have approximately <span className="font-bold text-primary">150 students</span> pursuing their education in a nurturing environment.</p>
            </div>
            <p className="text-muted-foreground">
              We are dedicated to helping poor students by providing them with free education and essential resources, ensuring that sacred knowledge is accessible to everyone regardless of their financial background.
            </p>
          </motion.div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video md:aspect-auto md:h-full">
            <img src={banner2} alt="Students studying" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="mb-16">
        <SectionHeader 
          title="Latest Announcements" 
          subtitle="Stay updated with the latest news and updates from our administration."
          centered
        />

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-48 bg-muted rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements?.length === 0 ? (
              <div className="col-span-full text-center py-12 bg-secondary/30 rounded-2xl border border-dashed border-secondary-foreground/20">
                <p className="text-muted-foreground">No announcements at the moment.</p>
              </div>
            ) : (
              announcements?.map((announcement) => (
                <Card key={announcement.id} className="border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-accent font-medium mb-2">
                      <Calendar className="h-4 w-4" />
                      {announcement.date ? format(new Date(announcement.date), 'MMMM d, yyyy') : 'Recent'}
                    </div>
                    <CardTitle className="font-serif text-xl text-primary">{announcement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {announcement.content}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </section>

      {/* Features/Values Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { title: "Qualified Teachers", desc: "Learn from experienced educators with deep knowledge of Islamic sciences.", icon: "👨‍🏫" },
          { title: "Holistic Curriculum", desc: "A balanced approach combining traditional wisdom with modern relevance.", icon: "📚" },
          { title: "Community Focus", desc: "Building strong bonds through brotherhood, sisterhood, and service.", icon: "🤝" }
        ].map((feature, idx) => (
          <div key={idx} className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
