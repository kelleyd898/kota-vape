import { Headset, Truck } from 'lucide-react';

export function AllIndiaStrip({ className = '' }: { className?: string }) {
  const items = [
    { Icon: Headset, label: 'All India Service' },
    { Icon: Truck, label: 'All India Delivery' },
  ];
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {items.map(({ Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-[0_6px_20px_-10px_var(--primary)]"
        >
          <Icon size={14} strokeWidth={2.2} />
          {label}
        </span>
      ))}
    </div>
  );
}
