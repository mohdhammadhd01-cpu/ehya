import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function KnowledgeHub() {
  const sections = [
    {
      title: "Daily Ahadith",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      content: [
        {
          text: "The best among you are those who learn the Quran and teach it.",
          source: "Sahih Bukhari"
        },
        {
          text: "Seeking knowledge is an obligation upon every Muslim.",
          source: "Sunan Ibn Majah"
        },
        {
          text: "Whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise.",
          source: "Sahih Muslim"
        },
        {
          text: "The ink of the scholar is more holy than the blood of the martyr.",
          source: "Traditional Narration"
        },
        {
          text: "Knowledge is that which benefits, not that which is merely memorized.",
          source: "Imam Shafi'i (RA)"
        }
      ]
    },
    {
      title: "Daily Duas",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      content: [
        {
          title: "Dua for Knowledge",
          arabic: "رَّبِّ زِدْنِي عِلْمًا",
          transliteration: "Rabbi zidni 'ilma",
          meaning: "O my Lord, increase me in knowledge."
        },
        {
          title: "Before Starting Any Work",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
          transliteration: "Bismillahir Rahmanir Rahim",
          meaning: "In the name of Allah, the Entirely Merciful, the Especially Merciful."
        },
        {
          title: "Dua for Parents",
          arabic: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
          transliteration: "Rabbi irhamhuma kama rabbayani sagheera",
          meaning: "My Lord, have mercy upon them as they brought me up [when I was] small."
        },
        {
          title: "Dua for Protection",
          arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
          transliteration: "Bismillahilladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim",
          meaning: "In the Name of Allah with Whose Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing."
        },
        {
          title: "Dua for Ease",
          arabic: "اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا",
          transliteration: "Allahumma la sahla illa ma ja'altahu sahla, wa anta taj'alul-hazna idha shi'ta sahla",
          meaning: "O Allah, there is no ease except in what You have made easy, and You make the difficulty, if You wish, easy."
        }
      ]
    },
    {
      title: "Miracles of Islam",
      icon: <Sparkles className="h-6 w-6 text-accent" />,
      content: [
        {
          text: "The Splitting of the Moon: A profound miracle performed by Prophet Muhammad (SAW) when the moon was split by divine will.",
          source: "Prophetic Miracle"
        },
        {
          text: "The Ark of Nooh (AS): The saving of the believers and pairs of animals through the divine command given to Nooh (AS).",
          source: "Divine Sign"
        },
        {
          text: "The Quran: The ultimate and living miracle of Islam, preserved perfectly for over 1400 years.",
          source: "Living Miracle"
        }
      ]
    }
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Dua & Ahadith" 
        subtitle="A collection of sacred knowledge and supplications for your spiritual growth."
        centered
      />

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full border-border/50 shadow-md rounded-3xl overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-border/50 py-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-background rounded-xl shadow-sm">
                    {section.icon}
                  </div>
                  <CardTitle className="font-serif text-2xl text-primary">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {section.content.map((item: any, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors">
                      {item.arabic ? (
                        <div className="space-y-3">
                          <h4 className="font-bold text-primary">{item.title}</h4>
                          <p className="text-3xl font-serif text-right leading-loose text-foreground" dir="rtl">
                            {item.arabic}
                          </p>
                          <p className="text-sm italic text-muted-foreground">{item.transliteration}</p>
                          <p className="text-foreground">{item.meaning}</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <blockquote className="text-lg text-foreground italic leading-relaxed">
                            "{item.text}"
                          </blockquote>
                          <p className="text-sm font-bold text-primary">— {item.source}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}
