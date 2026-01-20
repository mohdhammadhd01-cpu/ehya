import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrayerTimes() {
  const prayers = [
    { name: "Fajr", time: "5:30 AM", rakat: "4 Rakat (2 Sunnah, 2 Fard)", icon: "🌅" },
    { name: "Dhuhr", time: "12:45 PM", rakat: "12 Rakat (4 Sunnah, 4 Fard, 2 Sunnah, 2 Nafl)", icon: "☀️" },
    { name: "Asr", time: "4:30 PM", rakat: "8 Rakat (4 Sunnah, 4 Fard)", icon: "🌤️" },
    { name: "Maghrib", time: "6:15 PM", rakat: "7 Rakat (3 Fard, 2 Sunnah, 2 Nafl)", icon: "🌇" },
    { name: "Isha", time: "8:00 PM", rakat: "17 Rakat (4 Sunnah, 4 Fard, 2 Sunnah, 2 Nafl, 3 Witr, 2 Nafl)", icon: "🌙" },
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Daily Prayer Times" 
        subtitle="Accurate timings and Rakat information for our community in Hyderabad."
        centered
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {prayers.map((prayer, idx) => (
          <Card key={idx} className="hover-elevate bg-card border-border/50 shadow-md rounded-3xl overflow-hidden text-center">
            <CardHeader className="bg-primary/5 pb-4">
              <div className="text-5xl mb-4">{prayer.icon}</div>
              <CardTitle className="font-serif text-2xl text-primary">{prayer.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-3xl font-bold text-accent mb-4">{prayer.time}</p>
              <div className="bg-secondary/30 p-4 rounded-2xl border border-secondary">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Rakat Information</p>
                <p className="text-muted-foreground leading-relaxed">{prayer.rakat}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-primary/5 rounded-3xl p-8 border border-primary/10 max-w-3xl mx-auto text-center">
        <h3 className="font-serif text-2xl font-bold text-primary mb-4">Friday (Jumu'ah) Prayer</h3>
        <p className="text-lg text-muted-foreground">
          Khotbah starts at <span className="font-bold text-primary">1:15 PM</span> followed by Jumu'ah Salah.
        </p>
      </div>
    </Layout>
  );
}
