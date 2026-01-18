import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: January 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing or using BiosteriMed's website and services, you agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <p className="text-muted-foreground mb-4">
                  BiosteriMed provides medical sterilization services and related products. Our services 
                  include but are not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Ethylene Oxide (EO) sterilization</li>
                  <li>Steam sterilization</li>
                  <li>Gamma irradiation</li>
                  <li>Sterilization monitoring products</li>
                  <li>Validation and consultation services</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Service Agreements</h2>
                <p className="text-muted-foreground mb-4">
                  Sterilization services are provided under separate service agreements that specify:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Scope of services</li>
                  <li>Pricing and payment terms</li>
                  <li>Turnaround times</li>
                  <li>Quality specifications</li>
                  <li>Liability provisions</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Client Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Provide accurate product information and documentation</li>
                  <li>Ensure products are properly packaged for sterilization</li>
                  <li>Disclose any hazardous materials or special handling requirements</li>
                  <li>Comply with applicable regulations</li>
                  <li>Pay invoices in accordance with agreed terms</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All content on this website, including text, graphics, logos, and software, is the 
                  property of BiosteriMed and is protected by intellectual property laws. You may not 
                  reproduce, distribute, or create derivative works without our written permission.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law, BiosteriMed shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising from your 
                  use of our services. Our total liability shall not exceed the amount paid for the 
                  specific service giving rise to the claim.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Warranty Disclaimer</h2>
                <p className="text-muted-foreground mb-4">
                  Our services are provided "as is" without warranties of any kind, except as 
                  specifically stated in individual service agreements. We do not warrant that our 
                  website will be error-free or uninterrupted.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Regulatory Compliance</h2>
                <p className="text-muted-foreground mb-4">
                  BiosteriMed operates in compliance with applicable regulatory requirements including 
                  FDA regulations, ISO standards, and other relevant guidelines. Clients are responsible 
                  for ensuring their products and processes comply with applicable regulations in their 
                  markets.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these Terms of Service at any time. Changes will be 
                  effective upon posting to this website. Your continued use of our services constitutes 
                  acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws 
                  of the jurisdiction in which BiosteriMed is incorporated, without regard to conflict 
                  of law principles.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  BiosteriMed Legal Department<br />
                  Email: legal@biosterimed.com<br />
                  Phone: +1 (234) 567-8900<br />
                  Address: 123 Medical Center Drive, Healthcare City, HC 12345
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
