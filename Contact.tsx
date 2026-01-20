import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useContactMutation } from "@/hooks/use-madrasa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { insertContactMessageSchema as formSchema } from "@shared/schema";

type ContactFormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const mutation = useContactMutation();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      await mutation.mutateAsync(data);
      toast({
        title: "Message Sent",
        description: "We have received your message and will get back to you shortly.",
        className: "bg-primary text-primary-foreground border-none",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <SectionHeader 
        title="Contact Us" 
        subtitle="Have questions? We'd love to hear from you."
        centered
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="bg-primary text-primary-foreground border-none shadow-xl rounded-3xl overflow-hidden relative">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            </div>
            
            <CardContent className="p-8 md:p-12 relative z-10 space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Get in Touch</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Whether you want to enroll your child, volunteer, or just say salaam, we are here to answer any questions you may have.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-primary-foreground/80">
                      Hasan Nagar, Shivrampally Jagir<br />
                      Hyderabad, Telangana, 500052
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-primary-foreground/80">
                      hammadhd02@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-primary-foreground/80">
                      9849132838
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border/50">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} className="h-12 rounded-xl bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} className="h-12 rounded-xl bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?" 
                        className="min-h-[150px] rounded-xl bg-background resize-none p-4" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full h-12 rounded-xl text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
