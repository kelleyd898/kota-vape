import { createFileRoute } from '@tanstack/react-router';
import { Mail, MessageCircle } from 'lucide-react';
import { contact } from '@/config/contact';
import { cities } from '@/data/cities';

const waDigits = contact.whatsapp.replace(/\D/g, '');
const whatsappUrl = contact.whatsapp ? `https://wa.me/${waDigits}?text=${encodeURIComponent('Hello, I have a question.')}` : '';

const toc = [
  { id: 'get-in-touch', label: '1. Get in Touch With Us' },
  { id: 'support-hours', label: '2. Customer Support Hours' },
  { id: 'areas-we-serve', label: '3. Local Areas We Serve' },
  { id: 'wholesale', label: '4. Wholesale and B2B Inquiries' },
  { id: 'quick-answers', label: '5. Quick Answers Before You Reach Out' },
  { id: 'send-message', label: '6. Send Us a Message' },
];

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | KOTA VAPE SHOP' },
      { name: 'description', content: 'Contact Vape Shop Jaipur — email and WhatsApp support, support hours, delivery areas, and wholesale inquiries.' },
      { property: 'og:title', content: 'Contact Us | KOTA VAPE SHOP' },
      { property: 'og:description', content: 'Questions about products, orders, or wholesale? Reach our support team by email or WhatsApp.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="page-container py-10 md:py-16">
      <p className="eyebrow">Contact us</p>
      <h1 className="font-display text-5xl md:text-7xl font-semibold text-primary leading-tight">Contact Vape Shop Jaipur</h1>
      <p className="max-w-none md:max-w-5xl lg:max-w-none mt-8 text-muted-foreground leading-8">
        Welcome to the Contact Us page of Vape Shop Jaipur. Whether you have a question about our premium vaping products, need assistance with an ongoing order, require advice on choosing the right e-liquid, or want to discuss bulk wholesale opportunities, our dedicated support team is here to help. We prioritize customer satisfaction and aim to provide prompt, helpful, and professional responses to all your inquiries.
      </p>

      <div className="border-t border-border mt-12 pt-10 max-w-2xl">
        <h2 className="section-title text-primary">Table of Contents</h2>
        <ol className="mt-6 space-y-3">
          {toc.map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-primary hover:opacity-80 transition-opacity">{item.label}</a>
            </li>
          ))}
        </ol>
      </div>

      <p className="sr-only">Contact Vape Shop Jaipur Support Customer Service Delivery Areas</p>

      <div className="mt-14 space-y-16 max-w-none">
        <section id="get-in-touch" className="scroll-mt-28">
          <h2 className="section-title text-primary">1. Get in Touch With Us</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            We offer multiple channels for you to reach our support team. Choose the method that is most convenient for you. For the fastest response regarding existing orders, please have your Order ID ready.
          </p>

          <h3 className="font-display text-2xl mt-8 text-primary">Email Support</h3>
          <p className="mt-3 text-muted-foreground leading-7">For general inquiries, order support, and returns, email us at:</p>
          <div className="mt-4 max-w-md border border-border bg-card p-5 flex items-center gap-5">
            <Mail className="text-primary shrink-0" size={22} />
            <a href="mailto:support@vapeshopjaipur1.com" className="text-primary hover:opacity-80 transition-opacity break-all">support@vapeshopjaipur1.com</a>
          </div>

          <h3 className="font-display text-2xl mt-10 text-primary">Phone &amp; WhatsApp</h3>
          <p className="mt-3 text-muted-foreground leading-7">Prefer to chat? Reach out to our customer care executives:</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4 max-w-xl">
            <div className="border border-border bg-card p-5 flex items-center gap-5">
              <MessageCircle className="text-primary shrink-0" size={22} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-1 block hover:text-primary">{contact.whatsapp}</a>
              </div>
            </div>
            <div className="border border-border bg-card p-5 flex items-center gap-5">
              <MessageCircle className="text-primary shrink-0" size={22} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Fastest reply</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-1 block text-primary hover:opacity-80 transition-opacity">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </section>

        <section id="support-hours" className="scroll-mt-28">
          <h2 className="section-title text-primary">2. Customer Support Hours</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            Our team works diligently to ensure your queries are resolved quickly. You can expect a response from us during our standard operating hours. If you contact us outside of these hours, we will get back to you on the next business day.
          </p>
          <ul className="mt-5 space-y-3 text-muted-foreground leading-7 list-disc pl-5">
            <li>Monday to Saturday: 10:00 AM – 7:00 PM (IST)</li>
            <li>Sunday: Closed (Limited email support available)</li>
            <li>Public Holidays: Operating hours may vary.</li>
          </ul>
        </section>

        <section id="areas-we-serve" className="scroll-mt-28">
          <h2 className="section-title text-primary">3. Local Areas We Serve (Jaipur &amp; Beyond)</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            As the leading destination for vaping enthusiasts, we ensure fast and secure delivery across the region. If you are looking for top-quality vapes, e-liquids, and accessories near you, our extensive delivery network covers all major localities in Jaipur for optimal local SEO ranking and customer convenience. We proudly serve:
          </p>
          <ul className="mt-5 space-y-3 text-muted-foreground leading-7 list-disc pl-5">
            <li>South &amp; East Jaipur: Malviya Nagar, Mansarovar, Jagatpura, Pratap Nagar, Tonk Road, and Sitapura.</li>
            <li>West Jaipur: Vaishali Nagar, Chitrakoot, Ajmer Road, and Sirsi Road.</li>
            <li>Central &amp; North Jaipur: C-Scheme, Civil Lines, Raja Park, Bapu Nagar, Bani Park, Vidhyadhar Nagar, and Jhotwara.</li>
          </ul>
          <p className="mt-5 text-muted-foreground leading-8">
            While our primary hub is deeply rooted in the heart of Rajasthan, our expansive e-commerce network successfully fulfills orders far beyond, reaching dedicated customers across major commercial hubs like Coimbatore and throughout Kerala. No matter your location, our commitment remains the same: delivering premium products straight to your doorstep securely.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            {cities.map(city => (
              <div key={city.slug} className="border-t border-primary bg-card p-5">
                <span className="font-display text-2xl">{city.name}</span>
                <p className="text-muted-foreground text-xs mt-2">{city.serviceArea}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="wholesale" className="scroll-mt-28">
          <h2 className="section-title text-primary">4. Wholesale and B2B Inquiries</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            Are you looking to stock your own retail store with premium vaping products? We offer competitive wholesale pricing for businesses. If you are a distributor or a shop owner seeking bulk purchases, please direct your emails to our dedicated B2B team. Include your business name, location, and the specific brands or quantities you are interested in, and our wholesale manager will contact you within 24-48 hours with a customized quotation.
          </p>
        </section>

        <section id="quick-answers" className="scroll-mt-28">
          <h2 className="section-title text-primary">5. Quick Answers Before You Reach Out</h2>
          <p className="mt-5 text-muted-foreground leading-8">To save you time, here are a few quick answers to our most common questions:</p>
          <ul className="mt-5 space-y-3 text-muted-foreground leading-7 list-disc pl-5">
            <li>How do I track my order? Once dispatched, you will receive a tracking link via email and SMS. You can also log into your account dashboard to view real-time updates.</li>
            <li>Do you offer same-day delivery? Same-day delivery is subject to availability and specifically applies to select pin codes within our primary Jaipur local delivery zones.</li>
            <li>What is your return policy? We offer a 30-day return window for unopened and unused items. Please review our full Refund Policy page for specific details regarding electronic devices and e-liquids.</li>
          </ul>
        </section>

        <section id="send-message" className="scroll-mt-28">
          <h2 className="section-title text-primary">6. Send Us a Message</h2>
          <p className="mt-5 text-muted-foreground leading-8">
            If you prefer, you can reach us directly on WhatsApp for the fastest response. Please share accurate details so our team can assist you efficiently. We aim to reply to all inquiries within 24 hours.
          </p>
          <div className="mt-6">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 hover:bg-primary/10 transition-colors">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
