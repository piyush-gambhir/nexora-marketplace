import Link from 'next/link';

import { LandingFooter } from '@/components/landing-footer';
import { LandingHeader } from '@/components/landing-header';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <div className="container mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Terms and Conditions</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section className="space-y-6">
            <div>
              <h2 className="mb-3 text-2xl font-semibold">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Nexora, you agree to be bound by these Terms and Conditions.
                If you disagree with any part of these terms, you may not access the service.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">2. Use License</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Permission is granted to temporarily access Nexora for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a transfer of title,
                and under this license you may not:
              </p>
              <ul className="text-muted-foreground ml-4 list-inside list-disc space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Nexora</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you create an account with us, you must provide information that is accurate,
                complete, and current at all times. You are responsible for safeguarding the
                password and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">4. Prohibited Uses</h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">You may not use Nexora:</p>
              <ul className="text-muted-foreground ml-4 list-inside list-disc space-y-2">
                <li>
                  In any way that violates any applicable national or international law or
                  regulation
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material
                </li>
                <li>
                  To impersonate or attempt to impersonate the company, a company employee, another
                  user, or any other person or entity
                </li>
                <li>
                  In any way that infringes upon the rights of others, or in any way is illegal,
                  threatening, fraudulent, or harmful
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service and its original content, features, and functionality are and will
                remain the exclusive property of Nexora and its licensors. The service is protected
                by copyright, trademark, and other laws.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">6. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately,
                without prior notice or liability, under our sole discretion, for any reason
                whatsoever and without limitation, including but not limited to a breach of the
                Terms.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">7. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is provided on an "as is" basis. To the fullest
                extent permitted by law, Nexora excludes all representations, warranties,
                conditions, and terms relating to our website and the use of this website.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Nexora, nor its directors, employees, partners, agents, suppliers,
                or affiliates, be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in
                which Nexora operates, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at
                any time. If a revision is material, we will provide at least 30 days notice prior
                to any new terms taking effect.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at{' '}
                <a
                  href="mailto:legal@nexora.com"
                  className="text-primary cursor-pointer hover:underline"
                >
                  legal@nexora.com
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
