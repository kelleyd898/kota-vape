import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/refund-policy')({
  head: () => ({ meta: [{ title: 'Refund and Returns Policy | KOTA VAPE SHOP' }, { name: 'description', content: 'Refund and returns policy: return window, eligibility, defective products, refund timelines and exchanges.' }, { property: 'og:title', content: 'Refund and Returns Policy | KOTA VAPE SHOP' }, { property: 'og:description', content: 'Return window, eligibility, defective products, refund timelines and exchanges.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: RefundPolicy,
});

const sections: { title: string; body: string[]; list?: string[] }[] = [
  {
    title: '1. Policy Overview',
    body: [
      'This policy applies to all products purchased directly from Vape Shop Jaipur through our official website. We reserve the right to amend this policy at any time. Any changes will be posted on this page and will apply to orders placed after the modification date. Due to hygiene and health regulations, certain types of vaping products have restricted return eligibility.',
    ],
  },
  {
    title: '2. Return Window',
    body: [
      'You have 30 calendar days from the date of delivery to request a return for eligible items. If 30 days have gone by since your delivery was confirmed by our courier partner, we unfortunately cannot offer you a refund or exchange. For products marked as \u201cDead on Arrival\u201d (DOA), a shorter notification window applies (see Section 5).',
    ],
  },
  {
    title: '3. Eligibility for Returns',
    body: [
      'To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original, sealed packaging. All tags, labels, and protective seals must remain intact. Any item not in its original condition, damaged, or missing parts for reasons not due to our error will not be eligible for a full refund.',
      'Electronic devices (vape mods, pod systems) must be unopened and unused.',
      'Accessories must be in their original, sealed tamper-proof packaging.',
    ],
  },
  {
    title: '4. Non-Returnable Items',
    body: [
      'For health, hygiene, and safety reasons, we cannot accept returns on opened, used, or tampered-with products that are consumable or come into direct contact with the user\u2019s mouth. The following items are NON-RETURNABLE once the original factory seal is broken:',
    ],
    list: [
      'E-liquids, e-juices, and nicotine salts (opened or unsealed).',
      'Disposable vapes (opened or used).',
      'Replacement coils, atomizers, and pods (opened from original packaging).',
      'Drip tips (mouthpieces).',
      'Batteries.',
      'Items marked as \u201cFinal Sale\u201d or \u201cClearance.\u201d',
    ],
  },
  {
    title: '5. Defective Products (Dead on Arrival)',
    body: [
      'If you receive an electronic device (mod, pod system, or tank) that is defective out of the box (Dead on Arrival \u2013 DOA), you must notify us within 48 hours of delivery. We will require photographic or video evidence of the defect to initiate the replacement or refund process. Following our verification, we will provide instructions for returning the defective unit at our expense, and a replacement will be shipped promptly.',
      'Manufacturer warranties beyond the DOA period are handled directly by the product manufacturer, though we can assist you in contacting them.',
    ],
  },
  {
    title: '6. How to Initiate a Return',
    body: [
      'To start a return, you must obtain a Return Merchandise Authorization (RMA) number. Returns sent without prior authorization will not be processed. To initiate the process:',
      'Email our customer support team at support@vapeshopjaipur1.com.',
      'Provide your Order ID, the specific item(s) you wish to return, and the reason for the return.',
      'Include clear photos of the product in its original, sealed packaging.',
      'Once your request is approved, we will issue an RMA number and provide the return shipping address.',
    ],
  },
  {
    title: '7. Refund Process and Timelines',
    body: [
      'Once your returned item is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund based on our inspection.',
      'If you are approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days. Please note that credit card processors and banks may take additional time to reflect the refund on your statement.',
    ],
  },
  {
    title: '8. Return Shipping Costs',
    body: [
      'For standard returns due to change of mind, the customer is responsible for paying all shipping costs associated with returning the item(s). Shipping costs are non-refundable. If you receive a refund, the cost of initial shipping to you will be deducted from your refund.',
      'If the return is due to our error (wrong item shipped) or the product was Dead on Arrival (verified), we will provide a prepaid return shipping label or reimburse you for the return shipping costs.',
    ],
  },
  {
    title: '9. Exchanges',
    body: [
      'We only replace items if they are defective or damaged upon arrival (DOA). We do not offer exchanges for different colors, flavors, or models if you have changed your mind. If you wish to exchange an unopened item, you must complete the standard return process and place a new order for the desired product.',
    ],
  },
  {
    title: '10. Contact Support',
    body: [
      'If you have any further questions regarding our Refund and Returns Policy, please do not hesitate to contact our dedicated support team in Jaipur. You can get in touch with us by visiting our Contact Us page or emailing us directly at support@vapeshopjaipur1.com.',
    ],
  },
];

function RefundPolicy() {
  return (
    <article className="page-container py-8 md:py-16 max-w-4xl">
      <p className="eyebrow">Policy</p>
      <h1 className="section-title mb-6">Refund and Returns Policy</h1>
      <div className="space-y-6 text-muted-foreground leading-8">
        <p>At Vape Shop Jaipur, your satisfaction is our top priority. We strive to provide premium vaping products to our adult customers. However, we understand that there may be occasions where you need to return an item or request a refund. This detailed Refund and Returns Policy outlines the conditions, timeframes, and processes for returning products purchased from our platform, http://vapeshopjaipur1.com.</p>
        <p>Our policy is designed to be fair, transparent, and compliant with consumer protection standards, while also recognizing the specific nature of consumable and electronic vaping products. Please read this policy carefully before making a purchase.</p>
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
            {section.list && <ul className="list-disc list-inside space-y-1 mt-3">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
      </div>
    </article>
  );
}
