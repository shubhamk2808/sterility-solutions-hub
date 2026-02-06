import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Mail, Phone, MapPin, Clock, Send, ChevronRight, ChevronLeft,
  MessageSquare, FileQuestion, Package, Users, CheckCircle
} from "lucide-react";

const contactSchema = z.object({
  inquiryType: z.enum(["quote", "technical", "product", "partnership", "other"]),
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  jobTitle: z.string().min(2, "Job title is required").max(100),
  company: z.string().min(2, "Company name is required").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  country: z.string().min(2, "Country is required").max(100),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inquiryTypes = [
  { value: "quote", label: "Request Quote", icon: FileQuestion },
  { value: "technical", label: "Technical Question", icon: MessageSquare },
  { value: "product", label: "Product Information", icon: Package },
  { value: "partnership", label: "Partnership Inquiry", icon: Users },
];

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Sterilization Way, Medical District, MD 12345, USA" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "info@biosterimed.com" },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 8:00 AM - 6:00 PM EST" },
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "quote",
      fullName: "",
      jobTitle: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll respond within 24 business hours.",
    });
  };

  const nextStep = async () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      const isValid = await form.trigger(["fullName", "jobTitle", "company", "email", "phone", "country"]);
      if (isValid) setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding bg-gradient-to-br from-medical-blue/5 via-background to-medical-teal/5 min-h-[60vh] flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-medical-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-medical-teal" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Thank You for Contacting Us!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your message has been received. Our team will review your inquiry and 
                respond within 24 business hours.
              </p>
              <Button onClick={() => { setIsSubmitted(false); form.reset(); setStep(1); }}>
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero
        badge="Get in Touch"
        title={<>Contact <span className="text-gradient">BiosteriMed</span></>}
        description="Have questions about our sterilization services or products? Our team is ready to help."
      />

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedCard className="bg-slate-50 p-6 md:p-8 rounded-2xl">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                          step >= s 
                            ? "bg-medical-blue text-white" 
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {s}
                      </div>
                      {s < 3 && (
                        <div className={`w-20 md:w-32 h-1 mx-2 ${
                          step > s ? "bg-medical-blue" : "bg-slate-200"
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Step 1: Inquiry Type */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                          What can we help you with?
                        </h3>
                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="grid md:grid-cols-2 gap-4"
                                >
                                  {inquiryTypes.map((type) => (
                                    <Label
                                      key={type.value}
                                      htmlFor={type.value}
                                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                        field.value === type.value
                                          ? "border-medical-blue bg-medical-blue/5"
                                          : "border-slate-200 hover:border-medical-blue/50"
                                      }`}
                                    >
                                      <RadioGroupItem value={type.value} id={type.value} />
                                      <type.icon className="w-5 h-5 text-medical-blue" />
                                      <span className="font-medium">{type.label}</span>
                                    </Label>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Step 2: Contact Info */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                          Your Contact Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="jobTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Job Title *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Quality Manager" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="ABC Medical Devices" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@company.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country/Region *</FormLabel>
                              <FormControl>
                                <Input placeholder="United States" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Step 3: Message */}
                    {step === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                          Your Message
                        </h3>
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input placeholder="EO Sterilization Quote Request" {...field} />
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
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please describe your sterilization needs, product details, and any specific requirements..."
                                  className="min-h-[150px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                      {step > 1 ? (
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ChevronLeft className="mr-2 w-4 h-4" /> Back
                        </Button>
                      ) : (
                        <div />
                      )}
                      {step < 3 ? (
                        <Button type="button" onClick={nextStep}>
                          Continue <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      ) : (
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message <Send className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </AnimatedCard>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <AnimatedCard delay={0.1} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-medical-blue" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium text-foreground">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2} className="bg-gradient-to-br from-medical-blue to-medical-teal p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="text-white/80 text-sm mb-4">
                  For urgent sterilization needs or technical emergencies, call our priority line.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  <Phone className="mr-2 w-4 h-4" /> Call Priority Line
                </Button>
              </AnimatedCard>

              {/* Map Placeholder */}
              <AnimatedCard delay={0.3} className="bg-slate-200 rounded-xl overflow-hidden h-48">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <span className="text-sm">Interactive Map</span>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
