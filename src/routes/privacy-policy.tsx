import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/privacy-policy')({
  head: () => ({ meta: [{ title: 'Privacy Policy | KOTA VAPE SHOP' }, { name: 'description', content: 'Privacy policy: how we collect, use, and safeguard your personal information.' }, { property: 'og:title', content: 'Privacy Policy | KOTA VAPE SHOP' }, { property: 'og:description', content: 'How we collect, use, and safeguard your personal information.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: PrivacyPolicy,
});

const sections: { title: string; body: string[] }[] = [
  {
    title: '1. Who We Are',
    body: [
      'Our website address is: http://vapeshopjaipur1.com. We are a premium e-commerce platform dedicated to providing high-quality vaping products and accessories to our adult customers in Jaipur and across India. Protecting your personal and financial information is our top priority.',
    ],
  },
  {
    title: '2. Age Restrictions and Verification',
    body: [
      'Due to the nature of our products, our website is strictly for individuals who are 18 years of age or older. We collect date of birth and age verification data during the checkout process to ensure compliance with local laws. We do not knowingly collect personal identifiable information from anyone under the age of 18. If we discover that a minor has provided us with personal information, we will immediately delete that data from our servers.',
    ],
  },
  {
    title: '3. Comments',
    body: [
      'When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor\u2019s IP address and browser user agent string to help spam detection.',
      'An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.',
    ],
  },
  {
    title: '4. Media',
    body: [
      'If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website. This is especially important for product reviews where you might upload photos of your purchases.',
    ],
  },
  {
    title: '5. Cookies and Tracking',
    body: [
      'If you leave a comment on our site you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.',
      'If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. We also use cookies to keep track of cart data while you browse our e-commerce store.',
    ],
  },
  {
    title: '6. E-commerce Transactions',
    body: [
      'When you purchase from us, we\u2019ll ask you to provide information including your name, billing address, shipping address, email address, phone number, credit card/payment details, and optional account information like username and password. We use this information for purposes such as:',
      'Sending you information about your account and order.',
      'Responding to your requests, including refunds and complaints.',
      'Processing payments and preventing fraud.',
      'Complying with any legal obligations we have, such as calculating taxes.',
    ],
  },
  {
    title: '7. Who We Share Your Data With',
    body: [
      'If you request a password reset, your IP address will be included in the reset email. Furthermore, we share specific data with third parties who help us provide our orders and store services to you. This includes secure payment gateways for processing transactions and courier/shipping partners to deliver your products safely to your doorstep. We never sell your personal data to marketing agencies.',
    ],
  },
  {
    title: '8. How Long We Retain Your Data',
    body: [
      'If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.',
      'For users that register on our website, we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information. Order information is retained for up to 5 years for accounting and tax purposes.',
    ],
  },
  {
    title: '9. What Rights You Have Over Your Data',
    body: [
      'If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.',
    ],
  },
  {
    title: '10. Contact Us',
    body: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please reach out to our support team. You can get in touch with us by visiting our Contact Us page or emailing us directly at our official support email.',
    ],
  },
];

function PrivacyPolicy() {
  return (
    <article className="page-container py-8 md:py-16 max-w-4xl">
      <p className="eyebrow">Policy</p>
      <h1 className="section-title mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground leading-8">
        <p>Welcome to the official Privacy Policy of Vape Shop Jaipur. Your privacy is critically important to us, and we are committed to protecting the personal information you share with us while browsing or shopping on our platform. This document explains how we collect, use, and safeguard your data, ensuring a secure experience for all our customers.</p>
        <div className="border border-border bg-surface p-6">
          <h2 className="font-display text-2xl text-foreground mb-3">Table of Contents</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm leading-7">
            {sections.map((s) => <li key={s.title}>{s.title}</li>)}
          </ol>
        </div>
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-3xl text-foreground mb-3">{section.title}</h2>
            {section.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          </section>
        ))}
      </div>
    </article>
  );
}
