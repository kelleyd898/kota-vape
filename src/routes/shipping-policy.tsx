import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/shipping-policy')({
  head: () => ({ meta: [{ title: 'Shipping Policy | KOTA VAPE SHOP' }, { name: 'description', content: 'Shipping policy: order processing times, shipping rates, delivery estimates and age verification at delivery.' }, { property: 'og:title', content: 'Shipping Policy | KOTA VAPE SHOP' }, { property: 'og:description', content: 'Order processing times, shipping rates, delivery estimates and age verification at delivery.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: ShippingPolicy,
});

const sections = [
  {
    title: '1. Order Processing Time',
    body: [
      'All orders placed on our website are subject to a processing time before they are handed over to our courier partners. Orders are typically processed within 1 to 2 business days (excluding weekends and public holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.',
      'Please note that during periods of high volume, such as festive sales or promotional events, processing times may be slightly delayed. If there will be a significant delay in the shipment of your order, we will contact you via email or telephone.',
    ],
  },
  {
    title: '2. Shipping Rates and Delivery Estimates',
    body: [
      'Shipping charges for your order will be calculated and displayed at checkout based on the weight of the items and the destination pin code. We partner with reliable, top-tier courier services in India to ensure your packages arrive safely.',
      'Standard Shipping: Delivery typically takes 4 to 7 business days depending on your location.',
      'Express Shipping: For select pin codes, we offer expedited shipping which takes 2 to 4 business days.',
      'Note: Delivery delays can occasionally occur due to unforeseen circumstances such as extreme weather conditions, regional disruptions, or logistical issues at the courier\u2019s end. We are not liable for delays caused by third-party courier services.',
    ],
  },
  {
    title: '3. Local Delivery in Jaipur',
    body: [
      'For our customers residing in the Jaipur area, we offer a specialized local delivery service. Orders placed before our daily cut-off time may be eligible for same-day or next-day delivery. The availability of this service and the associated fees will be clearly displayed during the checkout process if your delivery address falls within our active local delivery zones.',
    ],
  },
  {
    title: '4. Shipment Confirmation and Order Tracking',
    body: [
      'Once your order has been packed and handed over to the courier, you will receive a Shipment Confirmation email containing your tracking number(s). The tracking number will generally become active within 24 hours. You can use this number on the courier\u2019s official website to track the journey of your package in real-time.',
    ],
  },
  {
    title: '5. Mandatory Age Verification at Delivery',
    body: [
      'Because we sell vaping and e-cigarette products, compliance with age restriction laws is mandatory. All deliveries require adult signature and age verification upon receipt. Our delivery partners are instructed to ask for a valid government-issued ID (such as an Aadhar Card, PAN Card, or Driving License) to verify that the recipient is 18 years of age or older.',
      'If the recipient cannot prove their age, or if the recipient is underage, the package will not be delivered, and it will be returned to our warehouse. In such cases, the customer will be responsible for the return shipping costs, which will be deducted from any eligible refund.',
    ],
  },
  {
    title: '6. Damages and Lost Packages',
    body: [
      'We take great care in securely packing your items. However, if you receive an order that has been damaged in transit, please save all packaging materials and the damaged goods. Contact our support team within 48 hours of delivery with clear photographs of the damage. We will file a claim with the carrier and arrange for a replacement or refund.',
      'If your tracking information shows that your package was delivered but you have not received it, please contact us within 3 business days so we can initiate an investigation with the shipping carrier.',
    ],
  },
  {
    title: '7. Undeliverable and Returned Packages',
    body: [
      'Packages may be returned to us as undeliverable due to incorrect addresses, multiple failed delivery attempts, or refusal to accept the package (including failure to provide age verification). If a package is returned to us for these reasons, we will contact you to arrange reshipment. The customer will be responsible for the secondary shipping charges. If you choose to cancel the order instead, the original shipping costs and any return shipping fees will be deducted from your refund.',
    ],
  },
  {
    title: '8. Contact Us',
    body: [
      'If you have any questions or require further assistance regarding our Shipping Policy, please reach out to our dedicated support team. You can contact us by visiting our Contact Us page or emailing us directly at our official customer service email address.',
    ],
  },
];

function ShippingPolicy() {
  return (
    <article className="page-container py-8 md:py-16 max-w-4xl">
      <p className="eyebrow">Policy</p>
      <h1 className="section-title mb-6">Shipping Policy</h1>
      <div className="space-y-6 text-muted-foreground leading-8">
        <p>Welcome to the official Shipping Policy of Vape Shop Jaipur. We know that when you order premium vaping products, you want them delivered securely and as quickly as possible. This policy outlines our order processing times, shipping rates, delivery estimates, and important guidelines regarding the safe transit of our products across India. Please review this information carefully before placing your order on http://vapeshopjaipur1.com.</p>
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
