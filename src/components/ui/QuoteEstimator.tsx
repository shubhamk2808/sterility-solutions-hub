import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Flame, Radiation, Check, ArrowRight, Calculator, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MethodId = "eo" | "steam" | "gamma";

const methods: {
  id: MethodId;
  name: string;
  icon: typeof Wind;
  blurb: string;
  base: number;
  perUnit: number;
  lead: string;
}[] = [
  { id: "eo", name: "EO Sterilization", icon: Wind, blurb: "Low-temperature, ideal for sensitive devices", base: 850, perUnit: 0.42, lead: "5-7 days" },
  { id: "steam", name: "Steam Sterilization", icon: Flame, blurb: "Fast, residue-free, heat-tolerant items", base: 450, perUnit: 0.18, lead: "1-3 days" },
  { id: "gamma", name: "Gamma Irradiation", icon: Radiation, blurb: "High penetration, bulk single-use devices", base: 1100, perUnit: 0.26, lead: "7-10 days" },
];

const equipment: { id: string; name: string; factor: number; methods: MethodId[] }[] = [
  { id: "surgical", name: "Surgical Instruments", factor: 1, methods: ["steam", "eo"] },
  { id: "singleuse", name: "Single-Use Devices", factor: 0.9, methods: ["eo", "gamma"] },
  { id: "implants", name: "Implants & Orthopedics", factor: 1.35, methods: ["eo", "gamma"] },
  { id: "electronics", name: "Electronic Devices", factor: 1.5, methods: ["eo"] },
  { id: "labware", name: "Labware & Glassware", factor: 0.8, methods: ["steam", "gamma"] },
  { id: "pharma", name: "Pharma & Packaging", factor: 1.2, methods: ["gamma", "eo"] },
];

const volumes = [
  { id: "s", label: "Up to 1,000 units", units: 1000, factor: 1 },
  { id: "m", label: "1,000 – 10,000 units", units: 6000, factor: 0.92 },
  { id: "l", label: "10,000 – 50,000 units", units: 25000, factor: 0.8 },
  { id: "xl", label: "50,000+ units", units: 75000, factor: 0.68 },
];

const turnarounds = [
  { id: "standard", label: "Standard", factor: 1, note: "Routine scheduling" },
  { id: "priority", label: "Priority", factor: 1.25, note: "Next available cycle" },
  { id: "rush", label: "Rush (24-48h)", factor: 1.6, note: "Dedicated slot" },
];

const addOns = [
  { id: "validation", label: "Cycle validation (ISO 11135/17665)", price: 2400 },
  { id: "bi", label: "Biological indicator testing", price: 480 },
  { id: "residual", label: "EO residual analysis", price: 720 },
  { id: "docs", label: "Full documentation pack & CoS", price: 350 },
  { id: "logistics", label: "Pickup & return logistics", price: 620 },
];

const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function QuoteEstimator() {
  const [method, setMethod] = useState<MethodId | null>(null);
  const [equip, setEquip] = useState<string | null>(null);
  const [volume, setVolume] = useState<string | null>(null);
  const [turnaround, setTurnaround] = useState("standard");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["docs"]);

  const activeMethod = methods.find((m) => m.id === method) ?? null;
  const activeEquip = equipment.find((e) => e.id === equip) ?? null;
  const activeVolume = volumes.find((v) => v.id === volume) ?? null;
  const activeTurnaround = turnarounds.find((t) => t.id === turnaround)!;

  const ready = Boolean(activeMethod && activeEquip && activeVolume);

  const quote = useMemo(() => {
    if (!activeMethod || !activeEquip || !activeVolume) return null;
    const processing =
      activeMethod.perUnit * activeVolume.units * activeVolume.factor * activeEquip.factor;
    const subtotal = (activeMethod.base + processing) * activeTurnaround.factor;
    const extras = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    const total = subtotal + extras;
    return {
      base: activeMethod.base,
      processing,
      extras,
      low: Math.round((total * 0.92) / 10) * 10,
      high: Math.round((total * 1.12) / 10) * 10,
      perUnit: total / activeVolume.units,
    };
  }, [activeMethod, activeEquip, activeVolume, activeTurnaround, selectedAddOns]);

  const reset = () => {
    setMethod(null);
    setEquip(null);
    setVolume(null);
    setTurnaround("standard");
    setSelectedAddOns(["docs"]);
  };

  const toggleAddOn = (id: string) =>
    setSelectedAddOns((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));

  const compatibleEquipment = method ? equipment.filter((e) => e.methods.includes(method)) : equipment;

  const quoteParams = new URLSearchParams({
    ...(activeMethod ? { method: activeMethod.name } : {}),
    ...(activeEquip ? { equipment: activeEquip.name } : {}),
    ...(activeVolume ? { volume: activeVolume.label } : {}),
    turnaround: activeTurnaround.label,
  }).toString();

  return (
    <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8">
      {/* Selections */}
      <div className="space-y-8">
        <Step number={1} title="Select a sterilization method">
          <div className="grid sm:grid-cols-3 gap-4">
            {methods.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setMethod(m.id);
                  if (equip && !equipment.find((e) => e.id === equip)?.methods.includes(m.id)) setEquip(null);
                }}
                aria-pressed={method === m.id}
                className={cn(
                  "text-left rounded-2xl border p-5 transition-all duration-300 bg-card hover:border-primary/40 hover:shadow-medical",
                  method === m.id ? "border-primary ring-2 ring-primary/20" : "border-border"
                )}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
                  <m.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-semibold text-foreground">{m.name}</div>
                <p className="text-sm text-muted-foreground mt-1">{m.blurb}</p>
                <p className="text-xs text-primary mt-2">Lead time: {m.lead}</p>
              </button>
            ))}
          </div>
        </Step>

        <Step number={2} title="What equipment are you sterilizing?">
          <div className="grid sm:grid-cols-3 gap-3">
            {compatibleEquipment.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setEquip(e.id)}
                aria-pressed={equip === e.id}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm font-medium transition-colors bg-card text-foreground hover:border-primary/40",
                  equip === e.id ? "border-primary bg-primary/5 text-primary" : "border-border"
                )}
              >
                {e.name}
              </button>
            ))}
          </div>
          {method && compatibleEquipment.length < equipment.length && (
            <p className="text-xs text-muted-foreground mt-3">
              Showing categories compatible with {activeMethod?.name}.
            </p>
          )}
        </Step>

        <Step number={3} title="Estimated batch volume">
          <div className="grid sm:grid-cols-4 gap-3">
            {volumes.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVolume(v.id)}
                aria-pressed={volume === v.id}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm font-medium transition-colors bg-card text-foreground hover:border-primary/40",
                  volume === v.id ? "border-primary bg-primary/5 text-primary" : "border-border"
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
        </Step>

        <Step number={4} title="Turnaround & optional services">
          <div className="grid sm:grid-cols-3 gap-3 mb-5">
            {turnarounds.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTurnaround(t.id)}
                aria-pressed={turnaround === t.id}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left transition-colors bg-card hover:border-primary/40",
                  turnaround === t.id ? "border-primary bg-primary/5" : "border-border"
                )}
              >
                <div className={cn("text-sm font-semibold", turnaround === t.id ? "text-primary" : "text-foreground")}>
                  {t.label}
                </div>
                <div className="text-xs text-muted-foreground">{t.note}</div>
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {addOns.map((a) => {
              const on = selectedAddOns.includes(a.id);
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => toggleAddOn(a.id)}
                  aria-pressed={on}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm transition-colors bg-card hover:border-primary/40",
                    on ? "border-primary bg-primary/5" : "border-border"
                  )}
                >
                  <span className="flex items-center gap-2 text-left text-foreground">
                    <span
                      className={cn(
                        "w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0",
                        on ? "bg-primary border-primary" : "border-border"
                      )}
                    >
                      {on && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
                    </span>
                    {a.label}
                  </span>
                  <span className="text-muted-foreground whitespace-nowrap">+{currency(a.price)}</span>
                </button>
              );
            })}
          </div>
        </Step>
      </div>

      {/* Quote summary */}
      <div className="lg:sticky lg:top-24 h-fit">
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-medical">
          <div className="bg-gradient-to-br from-primary to-secondary p-6 text-primary-foreground">
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Calculator className="h-4 w-4" /> Your estimate
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={ready ? `${method}-${equip}-${volume}-${turnaround}-${selectedAddOns.join()}` : "empty"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-2"
              >
                {quote ? (
                  <>
                    <div className="text-3xl font-bold">
                      {currency(quote.low)} – {currency(quote.high)}
                    </div>
                    <div className="text-sm opacity-90 mt-1">
                      ≈ {quote.perUnit.toFixed(2)} USD per unit · {activeMethod?.lead} lead time
                    </div>
                  </>
                ) : (
                  <div className="text-lg font-medium">Complete steps 1–3 to see pricing</div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="p-6 space-y-3 text-sm">
            <Row label="Method" value={activeMethod?.name} />
            <Row label="Equipment" value={activeEquip?.name} />
            <Row label="Volume" value={activeVolume?.label} />
            <Row label="Turnaround" value={activeTurnaround.label} />
            {quote && (
              <>
                <div className="border-t border-border pt-3 space-y-2">
                  <Row label="Setup & handling" value={currency(quote.base)} />
                  <Row label="Processing" value={currency(quote.processing)} />
                  <Row label="Optional services" value={currency(quote.extras)} />
                </div>
              </>
            )}

            <div className="pt-4 space-y-3">
              <Button asChild size="lg" className="w-full" disabled={!ready}>
                <Link to={`/contact?${quoteParams}`} className="flex items-center justify-center gap-2">
                  Request Formal Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button type="button" variant="outline" className="w-full" onClick={reset}>
                <RotateCcw className="h-4 w-4 mr-2" /> Reset selections
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-2">
              Estimates are indicative and based on typical batch parameters. Final pricing is confirmed
              after material review and validation requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground text-right">{value ?? "—"}</span>
    </div>
  );
}
