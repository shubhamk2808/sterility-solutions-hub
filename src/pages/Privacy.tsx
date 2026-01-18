import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: January 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  BiosteriMed ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
                  Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  We may collect personal information that you voluntarily provide when you:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Fill out contact forms or request quotes</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Create an account or register for services</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  This information may include: name, email address, phone number, company name, 
                  job title, and business address.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-4">
                  When you visit our website, we automatically collect certain information including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process orders and provide our services</li>
                  <li>Send you relevant updates and marketing communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors (lawyers, accountants)</li>
                  <li>Regulatory authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your experience. 
                  You can control cookie preferences through your browser settings. We use:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies (Google Analytics) to understand usage</li>
                  <li>Marketing cookies for relevant advertising</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information. However, no method of transmission over the internet is 100% secure, and 
                  we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, 
                  please contact us at:
                </p>
                <p className="text-muted-foreground">
                  BiosteriMed Privacy Team<br />
                  Email: privacy@biosterimed.com<br />
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
