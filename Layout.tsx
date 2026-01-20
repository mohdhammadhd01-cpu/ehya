import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen, GraduationCap, Calendar, Users, Mail, Home, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About Us", icon: BookOpen },
  { href: "/knowledge", label: "Knowledge Hub", icon: Sparkles },
  { href: "/courses", label: "Courses", icon: GraduationCap },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/teachers", label: "Teachers", icon: Users },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern pointer-events-none z-0" />
      
      {/* Navbar - Desktop & Mobile Header */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="font-serif text-xl font-bold text-primary tracking-tight">
              Jamia Islamia Ehya-ul-Uloom niswa
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2",
                    isActive 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}>
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar/Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background md:hidden pt-20 px-6"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div 
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors cursor-pointer border border-border/50 shadow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium text-lg">{item.label}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-accent" />
              <h3 className="font-serif text-xl font-bold">Jamia Islamia</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Jamia Islamia Ehya-ul-Uloom niswa: Nurturing hearts and minds with sacred knowledge and spiritual growth. 
              Join our community of learners.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.slice(0, 4).map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-accent">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Hasan Nagar, Shivrampally Jagir</li>
              <li>Hyderabad, Telangana, 500052</li>
              <li>hammadhd02@gmail.com</li>
              <li>9849132838</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Jamia Islamia Ehya-ul-Uloom niswa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
