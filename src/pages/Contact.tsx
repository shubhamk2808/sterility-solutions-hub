import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  jobTitle: z.string().min(2, "Job title is required").max(100),
  company: z.string().min(2, "Company name is required").max(100),
  industry: z.string().min(1, "Please select an industry"),
  email: z.string().email("Please enter a valid email").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  country: z.string().min(1, "Please select a country/region"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
  urgency: z.string().optional(),
  preferredContact: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const inquiryTypes = [
  { value: "quote", label: "Request Quote" },
  { value: "technical", label: "Technical Question" },
  { value: "product", label: "Product Information" },
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "other", label: "Other" },
];

const industries = [
  "Hospitals & Clinics",
  "Medical Device Manufacturer",
  "Pharmaceutical Company",
  "Research Laboratory",
  "Dental Practice",
  "Veterinary",
  "Other",
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "Belgium",
  "Switzerland",
  "Australia",
  "Japan",
  "Singapore",
  "United Arab Emirates",
  "Saudi Arabia",
  "Other",
];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const watchedValues = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    if (step === 1) {
      fieldsToValidate = ["inquiryType"];
    } else if (step === 2) {
      fieldsToValidate = ["name", "jobTitle", "company", "industry", "email", "phone", "country"];
    } else if (step === 3) {
      fieldsToValidate = ["subject", "message"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll respond within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-[80vh] flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-8">
              Your inquiry has been received. Our team will review your message and respond within 24 hours.
            </p>
            <Button asChild className="rounded-full">
              <a href="/">Return to Home</a>
            </Button>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have a question or need a quote? Fill out the form below and our team 
              will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
                {/* Progress */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                          s <= step
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {s}
                      </div>
                      {s < 4 && (
                        <div
                          className={`w-full h-1 mx-2 rounded ${
                            s < step ? "bg-primary" : "bg-muted"
                          }`}
                          style={{ width: "60px" }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Step 1: Inquiry Type */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-foreground mb-6">
                        What can we help you with?
                      </h2>
                      <RadioGroup
                        value={watchedValues.inquiryType}
                        onValueChange={(value) => setValue("inquiryType", value)}
                        className="grid gap-4"
                      >
                        {inquiryTypes.map((type) => (
                          <div key={type.value} className="flex items-center">
                            <RadioGroupItem value={type.value} id={type.value} className="peer sr-only" />
                            <Label
                              htmlFor={type.value}
                              className="flex-1 p-4 border-2 border-border rounded-xl cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50"
                            >
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {errors.inquiryType && (
                        <p className="text-sm text-destructive">{errors.inquiryType.message}</p>
                      )}
                    </motion.div>
                  )}

                  {/* Step 2: Contact Information */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-foreground mb-6">
                        Your Contact Information
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" {...register("name")} placeholder="John Smith" />
                          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="jobTitle">Job Title *</Label>
                          <Input id="jobTitle" {...register("jobTitle")} placeholder="CSSD Manager" />
                          {errors.jobTitle && <p className="text-sm text-destructive">{errors.jobTitle.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name *</Label>
                          <Input id="company" {...register("company")} placeholder="Hospital Name" />
                          {errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry *</Label>
                          <Select onValueChange={(value) => setValue("industry", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              {industries.map((ind) => (
                                <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.industry && <p className="text-sm text-destructive">{errors.industry.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" {...register("email")} placeholder="john@hospital.com" />
                          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone *</Label>
                          <Input id="phone" {...register("phone")} placeholder="+1 (555) 000-0000" />
                          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <Label htmlFor="country">Country/Region *</Label>
                          <Select onValueChange={(value) => setValue("country", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem key={country} value={country}>{country}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.country && <p className="text-sm text-destructive">{errors.country.message}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Inquiry Details */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-foreground mb-6">
                        Tell Us More
                      </h2>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input id="subject" {...register("subject")} placeholder="Quote request for EO sterilization" />
                          {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea 
                            id="message" 
                            {...register("message")} 
                            placeholder="Please describe your requirements in detail..."
                            rows={6}
                          />
                          {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review & Submit */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h2 className="text-2xl font-bold text-foreground mb-6">
                        Review Your Information
                      </h2>
                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="p-4 bg-surface rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Inquiry Type</p>
                            <p className="font-medium text-foreground capitalize">{watchedValues.inquiryType?.replace("-", " ")}</p>
                          </div>
                          <div className="p-4 bg-surface rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Name</p>
                            <p className="font-medium text-foreground">{watchedValues.name}</p>
                          </div>
                          <div className="p-4 bg-surface rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Company</p>
                            <p className="font-medium text-foreground">{watchedValues.company}</p>
                          </div>
                          <div className="p-4 bg-surface rounded-lg">
                            <p className="text-sm text-muted-foreground mb-1">Email</p>
                            <p className="font-medium text-foreground">{watchedValues.email}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-surface rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Subject</p>
                          <p className="font-medium text-foreground">{watchedValues.subject}</p>
                        </div>
                        <div className="p-4 bg-surface rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">Message</p>
                          <p className="text-foreground">{watchedValues.message}</p>
                        </div>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Preferred Contact Method</Label>
                            <RadioGroup
                              value={watchedValues.preferredContact || "email"}
                              onValueChange={(value) => setValue("preferredContact", value)}
                              className="flex gap-6"
                            >
                              <div className="flex items-center gap-2">
                                <RadioGroupItem value="email" id="pref-email" />
                                <Label htmlFor="pref-email">Email</Label>
                              </div>
                              <div className="flex items-center gap-2">
                                <RadioGroupItem value="phone" id="pref-phone" />
                                <Label htmlFor="pref-phone">Phone</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="space-y-2">
                            <Label>Urgency</Label>
                            <RadioGroup
                              value={watchedValues.urgency || "standard"}
                              onValueChange={(value) => setValue("urgency", value)}
                              className="flex gap-6"
                            >
                              <div className="flex items-center gap-2">
                                <RadioGroupItem value="standard" id="urg-standard" />
                                <Label htmlFor="urg-standard">Standard</Label>
                              </div>
                              <div className="flex items-center gap-2">
                                <RadioGroupItem value="urgent" id="urg-urgent" />
                                <Label htmlFor="urg-urgent">Urgent</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-10 pt-6 border-t border-border">
                    {step > 1 ? (
                      <Button type="button" variant="outline" onClick={prevStep} className="rounded-full">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                      </Button>
                    ) : (
                      <div />
                    )}
                    
                    {step < 4 ? (
                      <Button type="button" onClick={nextStep} className="rounded-full">
                        Next <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting} className="rounded-full">
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" /> Submit Inquiry
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+12345678900" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@biosterimed.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@biosterimed.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        123 Medical Center Drive<br />
                        Suite 100<br />
                        Healthcare City, HC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-8">
                <h3 className="font-semibold text-foreground mb-4">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call our main phone line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
