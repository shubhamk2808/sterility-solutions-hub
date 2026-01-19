import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-br from-medical-blue/5 via-background to-medical-teal/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

            <div className="prose prose-slate max-w-none">
              <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the BiosteriMed website and services, you accept and agree to be 
                    bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, 
                    please do not use our website or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    BiosteriMed provides medical sterilization services and related products. Our services include 
                    but are not limited to: ethylene oxide (EO) sterilization, steam sterilization, gamma irradiation, 
                    and sterilization monitoring products.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Service specifications, pricing, and availability are subject to change without notice. 
                    Specific service agreements will be documented in separate contracts.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Use of Website</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree to use this website only for lawful purposes and in a manner that does not:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Interfere with or disrupt the website's functionality</li>
                    <li>Attempt to gain unauthorized access to any systems</li>
                    <li>Transmit any harmful code or malware</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and software, is the 
                    property of BiosteriMed or its licensors and is protected by intellectual property laws. 
                    You may not reproduce, distribute, modify, or create derivative works without our express 
                    written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Product Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We make reasonable efforts to ensure product information is accurate. However, we do not 
                    warrant that product descriptions, specifications, or other content is error-free. For 
                    critical applications, please contact us to verify specifications before ordering.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Regulatory Compliance</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    BiosteriMed provides sterilization services and products compliant with applicable 
                    regulatory standards including ISO 13485, ISO 11135, ISO 17665, and ISO 11137. 
                    Specific compliance requirements should be discussed during the quotation process.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Customers are responsible for ensuring their products meet all applicable regulatory 
                    requirements for their intended markets and applications.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the maximum extent permitted by law, BiosteriMed shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages arising from your use of our 
                    website or services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Our total liability for any claims arising from these terms or our services shall not 
                    exceed the amount paid by you for the specific services giving rise to the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This website and its content are provided "as is" without any warranties of any kind, 
                    either express or implied. We do not warrant that the website will be uninterrupted, 
                    error-free, or free of viruses or other harmful components.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless BiosteriMed, its officers, directors, employees, 
                    and agents from any claims, damages, losses, or expenses arising from your use of the 
                    website or violation of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Service Agreements</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sterilization services are provided under separate service agreements that specify:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                    <li>Specific sterilization parameters and requirements</li>
                    <li>Product handling and packaging specifications</li>
                    <li>Turnaround times and delivery terms</li>
                    <li>Pricing and payment terms</li>
                    <li>Quality and documentation requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Service shall be governed by and construed in accordance with the laws 
                    of the jurisdiction in which BiosteriMed is incorporated, without regard to conflict 
                    of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. Changes will be 
                    effective immediately upon posting to the website. Your continued use of the website 
                    after any changes constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-foreground font-medium">BiosteriMed Legal Department</p>
                    <p className="text-muted-foreground">Email: legal@biosterimed.com</p>
                    <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
                  </div>
                </section>

                <section className="border-t border-border pt-8">
                  <p className="text-muted-foreground text-sm">
                    <strong>Disclaimer:</strong> BiosteriMed provides sterilization services and products 
                    compliant with ISO 13485, ISO 11135, ISO 17665, and ISO 11137 standards. Information on 
                    this website is for general reference. For specific compliance requirements, consult 
                    relevant regulatory bodies and engage with our technical team.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
