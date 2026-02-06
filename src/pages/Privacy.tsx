import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/PageHero";

export default function Privacy() {
  return (
    <Layout>
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        description="Last updated: January 2024"
      />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            <div className="prose prose-slate max-w-none">
              <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    BiosteriMed ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                    explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                  <h3 className="text-lg font-medium text-foreground mb-2">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide when you:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Fill out contact or quote request forms</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request technical documentation</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    This information may include: name, job title, company name, email address, phone number, 
                    and business address.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-2 mt-6">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, we may automatically collect certain information including:
                    IP address, browser type, operating system, referring URLs, pages viewed, and time spent on pages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Process quote requests and service orders</li>
                    <li>Send technical documentation and product information</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                    <li>Communicate important updates about our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience. 
                    These include essential cookies for site functionality, analytics cookies to understand 
                    how visitors use our site, and preference cookies to remember your settings.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    You can control cookie preferences through your browser settings. Note that disabling 
                    certain cookies may affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Information Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell your personal information. We may share information with:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                    <li>Service providers who assist in our operations (under confidentiality agreements)</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners with your consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to certain processing activities</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes 
                    for which it was collected, including to satisfy legal, regulatory, or reporting requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. International Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country 
                    of residence. We ensure appropriate safeguards are in place to protect your information 
                    in accordance with applicable data protection laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                    <p className="text-foreground font-medium">BiosteriMed Privacy Office</p>
                    <p className="text-muted-foreground">Email: privacy@biosterimed.com</p>
                    <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material 
                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
