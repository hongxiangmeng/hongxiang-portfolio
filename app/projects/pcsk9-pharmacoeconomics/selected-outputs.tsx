import Image from "next/image";

const totalStudies = 25;
const evaluationTypes = [
  { label: "CEA", description: "Cost-effectiveness analysis", count: 24 },
  { label: "CUA", description: "Cost-utility analysis", count: 1 },
];
const modelStructures = [
  { label: "Markov", description: "Markov models", count: 22 },
  { label: "CVDPM", description: "Cardiovascular Disease Policy Models", count: 2 },
  { label: "Trial-based", description: "Trial-based cost-effectiveness model", count: 1 },
];
const conclusions = [
  { label: "Cost-effective", count: 10, color: "bg-[#0b2a5b]" },
  { label: "Not cost-effective", count: 15, color: "bg-[#6d91bd]" },
];
const factors = ["Drug Price", "Baseline Cardiovascular Risk", "Willingness-to-Pay Threshold", "Healthcare-System Context"];
const cardClass = "flex min-w-0 flex-col border border-[#cad7e8] bg-white p-5 sm:p-8";
const dataCardClass = "flex min-w-0 flex-col border border-[#cad7e8] bg-white px-5 py-4 sm:px-8 sm:py-[26px]";

function StudyBars({ title, rows }: { title: string; rows: { label: string; description: string; count: number }[] }) {
  return (
    <div className="mt-5 border-t border-[#dbe4ef] pt-4">
      <h3 className="text-sm font-semibold text-[#0b2a5b]">{title}</h3>
      <dl className="mt-4 space-y-4">
        {rows.map(({ label, count }) => (
          <div key={label}>
            <div className="flex items-start justify-between gap-3 text-xs leading-5">
              <dt className="min-w-0 text-sm font-semibold text-[#0b2a5b]">{label}</dt>
              <dd className="shrink-0 text-xl font-semibold leading-6 tabular-nums text-[#0b2a5b]">{count}</dd>
            </div>
            <div className="mt-2 h-2 bg-[#dbe4ef]" aria-hidden="true">
              <div className="h-full bg-[#2563eb]" style={{ width: `${(count / totalStudies) * 100}%` }} />
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function SelectedOutputs() {
  const flowSrc = "/projects/pcsk9-pharmacoeconomics/study-selection-flow.png";

  return (
    <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
      <figure className={`${cardClass} lg:col-span-2`}>
        <div className="flex justify-center bg-white">
          <Image
            src={flowSrc}
            alt="Original undergraduate dissertation study selection flow diagram, in Chinese, showing identification, screening, eligibility and inclusion."
            width={1080}
            height={1220}
            unoptimized
            className="h-auto max-h-[540px] w-full object-contain"
          />
        </div>
        <figcaption className="mt-6 flex flex-col gap-3 border-t border-[#dbe4ef] pt-5 text-sm leading-6 text-[#0b2a5b] sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <span className="font-semibold">Study Selection Flow</span>
          <a href={flowSrc} target="_blank" rel="noopener noreferrer" aria-label="View full-size study selection flow figure (opens in a new tab)" className="inline-flex min-h-11 items-center gap-2 self-start hover:text-[#2563eb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]">
            View full-size figure <span aria-hidden="true">↗</span>
          </a>
        </figcaption>
      </figure>

      <figure className={dataCardClass}>
        <figcaption className="text-lg font-semibold leading-7 text-[#0b2a5b]">Economic Evaluation Landscape</figcaption>
        <div className="mt-6">
          <p className="text-[41px] leading-none font-semibold tracking-tight tabular-nums text-[#0b2a5b]">{totalStudies}</p>
          <p className="mt-2 text-sm text-[#54708f]">Economic evaluations</p>
          <StudyBars title="Evaluation Type" rows={evaluationTypes} />
          <StudyBars title="Model Structure" rows={modelStructures} />
          <dl className="mt-5 space-y-1 border-t border-[#dbe4ef] pt-4 text-[11px] leading-5 text-[#54708f]">
            {[...evaluationTypes, modelStructures[1]].map(({ label, description }) => <div key={label}><dt className="inline">{label}</dt><dd className="inline"> — {description}</dd></div>)}
          </dl>
        </div>
      </figure>

      <figure className={dataCardClass}>
        <figcaption className="text-lg font-semibold leading-7 text-[#0b2a5b]">Cost-effectiveness Summary</figcaption>
        <div className="mt-6">
          <dl className="grid grid-cols-2 gap-5">
            {conclusions.map(({ label, count, color }) => (
              <div key={label} className="flex min-w-0 flex-col">
                <dt className="order-2 mt-3 flex items-start gap-2 text-sm leading-6 text-[#40536c]"><span aria-hidden="true" className={`mt-2 h-2.5 w-2.5 shrink-0 ${color}`} />{label}</dt>
                <dd className="text-[41px] leading-none font-semibold tracking-tight tabular-nums text-[#0b2a5b] sm:text-[51px]">{count}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex h-5 overflow-hidden" aria-hidden="true">
            {conclusions.map(({ label, count, color }) => <div key={label} className={color} style={{ width: `${(count / totalStudies) * 100}%` }} />)}
          </div>
          <p className="mt-5 text-xs leading-6 text-[#54708f]">Based on the conclusions reported by the included studies; not a pooled economic estimate.</p>
          <div className="mt-5 border-t border-[#dbe4ef] pt-4">
            <h3 className="text-sm font-semibold text-[#0b2a5b]">Key drivers of cost-effectiveness</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">{factors.map((factor) => <li key={factor} className="flex min-w-0 items-center border border-[#dbe4ef] bg-[#f7faff] px-3 py-3 text-xs leading-5 text-[#0b2a5b]">{factor}</li>)}</ul>
          </div>
        </div>
      </figure>
    </div>
  );
}
