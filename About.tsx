import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="About Jamia Islamia Ehya-ul-Uloom niswa" 
          subtitle="Our history, mission, and vision for the future."
          centered
        />

        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-primary/5 p-8 rounded-3xl border border-primary/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                To provide high-quality Islamic education that empowers individuals to lead lives of purpose, integrity, and service. We strive to make sacred knowledge accessible and relevant to the modern world.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-accent/10 p-8 rounded-3xl border border-accent/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Contact Information</h3>
              <div className="space-y-3 text-foreground/80">
                <p><span className="font-semibold">Address:</span> Hasan Nagar, Shivrampally Jagir, Hyderabad, Telangana, 500052</p>
                <p><span className="font-semibold">Phone:</span> 9849132838</p>
                <p><span className="font-semibold">Email:</span> hammadhd02@gmail.com</p>
              </div>
            </motion.div>
          </div>

          {/* History Section with Unsplash Image */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                {/* islamic architecture archway geometric */}
                <img 
                  src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800" 
                  alt="Madrasa Architecture" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Our History</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 1991 by <span className="font-bold">Mufti Imamuddin Jamia</span>, Jamia Islamia Ehya-ul-Uloom niswa began as a visionary effort to empower girls through sacred knowledge. Over the decades, we have evolved into a distinguished institution where many students have successfully become <span className="font-semibold">Hafiza</span> and <span className="font-semibold">Alima</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently, our Madrasa is home to approximately <span className="font-bold">150 students</span>. We are deeply committed to social service, providing free education and support to poor students, ensuring that financial barriers never stand in the way of spiritual and academic growth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our curriculum has expanded significantly over the years, yet we remain steadfast in our core mission of nurturing character (Akhlaq) and excellence (Ihsan) under the guidance of our founder.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
