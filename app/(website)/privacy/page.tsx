import Link from 'next/link';

import { LandingFooter } from '@/components/landing-footer';
import { LandingHeader } from '@/components/landing-header';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <div className="container mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section className="space-y-6">
            <div>
              <h2 className="mb-3 text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nexora ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when
                you use our service.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="text-muted-foreground ml-4 list-inside list-disc space-y-2">
                <li>Account information (name, email address, password)</li>
                <li>Profile information you choose to provide</li>
                <li>Payment information when you make purchases</li>
                <li>Communications you send to us</li>
                <li>Information about how you use our service</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="text-muted-foreground ml-4 list-inside list-disc space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information in the following situations:
              </p>
              <ul className="text-muted-foreground ml-4 list-inside list-disc space-y-2">
                <li>With service providers who assist us in operating our service</li>
                <li>To comply with legal obligations or respond to legal process</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
                <li>With your consent or at your direction</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect
                your personal information. However, no method of transmission over the Internet or
                electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">6. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our service
                and hold certain information. You can instruct your browser to refuse all cookies or
                to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">7. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">You have the right to:</p>
              <ul className="text-muted-foreground ml-4 list-inside list-disc space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required or
                permitted by law.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service is not intended for children under the age of 13. We do not knowingly
                collect personal information from children under 13. If you are a parent or guardian
                and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">10. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and maintained on computers located outside
                of your state, province, country, or other governmental jurisdiction where data
                protection laws may differ from those in your jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                updated" date.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a
                  href="mailto:privacy@nexora.com"
                  className="text-primary cursor-pointer hover:underline"
                >
                  privacy@nexora.com
                </a>
              </p>
            </div>
          </section>

          <div className="border-t pt-8">
            <Link
              href="/"
              className="text-primary cursor-pointer hover:underline"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}
