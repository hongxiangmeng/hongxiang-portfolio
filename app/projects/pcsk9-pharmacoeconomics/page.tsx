import type { Metadata } from "next";
import Link from "next/link";
import SelectedOutputs from "./selected-outputs";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pharmacoeconomics of PCSK9 Inhibitors in Cardiovascular Disease | Hongxiang Meng",
  description: "A systematic review of economic evaluations of PCSK9 inhibitors for cardiovascular disease, exploring cost-effectiveness, reporting quality and uncertainty across healthcare settings.",
  openGraph: {
    title: "Pharmacoeconomics of PCSK9 Inhibitors in Cardiovascular Disease | Hongxiang Meng",
    description: "A systematic review of economic evaluations of PCSK9 inhibitors for cardiovascular disease, exploring cost-effectiveness, reporting quality and uncertainty across healthcare settings.",
    type: "article",
  },
};

const tags = ["Health Economics", "Pharmacoeconomics", "Cost-effectiveness", "HTA Evidence", "Systematic Review"];
const metrics = [
  { value: "600", label: "records identified" },
  { value: "25", label: "economic evaluations included" },
  { value: "13", label: "countries represented" },
  { value: "22", label: "studies using Markov models" },
];
const categories = [
  { title: "Economic evaluation", items: ["Cost-effectiveness analysis", "Cost-utility analysis"] },
  { title: "Health outcomes", items: ["QALYs", "Life years"] },
  { title: "Economic outcomes", items: ["Costs", "ICERs", "Willingness-to-pay thresholds"] },
  { title: "Model structures", items: ["Markov models", "Cardiovascular Disease Policy Model", "Trial-based model"] },
  { title: "Uncertainty analysis", items: ["One-way sensitivity analysis", "Probabilistic sensitivity analysis", "Scenario analysis"] },
  { title: "Reporting quality", items: ["CHEERS 2022"] },
];
const characteristics = [
  ["Included studies", "25 studies"],
  ["Economic evaluation methods", "24 cost-effectiveness analyses; 1 cost-utility analysis"],
  ["Model structures", "22 Markov models; 2 Cardiovascular Disease Policy Models; 1 trial-based cost-effectiveness model"],
  ["Geographic coverage", "13 countries"],
];
const findings = [
  {
    title: "Cost-effectiveness varied across settings",
    text: "10 of the 25 included studies concluded that PCSK9 inhibitors were cost-effective under the evaluated conditions, while 15 concluded that they were not.",
    note: "These were the conclusions reported by the included studies, not a new pooled economic estimate.",
  },
  {
    title: "Clinical risk and treatment context mattered",
    text: "Higher-risk cardiovascular populations were generally more likely to achieve favourable cost-effectiveness results, because greater baseline cardiovascular risk increased the potential health benefit from treatment.",
  },
  {
    title: "Drug price was an important driver",
    text: "Several sensitivity analyses showed that PCSK9 inhibitor price had a substantial influence on cost-effectiveness conclusions.",
  },
  {
    title: "Economic conclusions were context dependent",
    text: "Results differed across countries because of differences in healthcare-system perspective, willingness-to-pay thresholds, patient characteristics and treatment costs.",
  },
];
const quality = [{ label: "Good", value: "14" }, { label: "Moderate", value: "10" }, { label: "Low", value: "1" }];
const sensitivity = [
  { label: "One-way sensitivity analysis", value: "13" },
  { label: "Probabilistic sensitivity analysis", value: "17" },
  { label: "Scenario analysis", value: "4" },
];
const skills = ["Health Economics", "Pharmacoeconomics", "Economic Evidence Synthesis", "Cost-effectiveness Interpretation", "ICER and QALY Interpretation", "Sensitivity Analysis Interpretation", "CHEERS 2022", "Systematic Review"];
const container = "mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return <div><p className="eyebrow">{label}</p><h2 className="section-title mt-4">{title}</h2></div>;
}

function TextSection({ label, title, children, tinted = false }: { label: string; title: string; children: ReactNode; tinted?: boolean }) {
  return (
    <section className={tinted ? "border-y border-[#e5e7eb] bg-[#f6f8fb]" : undefined}>
      <div className={`${container} grid gap-10 lg:grid-cols-[0.52fr_1fr]`}>
        <SectionHeading label={label} title={title} />
        <div className="min-w-0 max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]">{children}</div>
      </div>
    </section>
  );
}

export default function Pcsk9PharmacoeconomicsPage() {
  return (
    <main className="overflow-hidden">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-6 lg:px-10" aria-label="Case study navigation">
        <Link href="/#top" className="text-lg font-bold tracking-[-0.02em] text-[#0b2a5b]">Hongxiang Meng</Link>
        <Link href="/#projects" className="text-sm font-semibold text-[#2563eb]">Back to projects <ArrowIcon /></Link>
      </nav>

      <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]">
        <div className={container}>
          <div className="max-w-4xl animate-rise">
            <p className="eyebrow">Project 02 / Case study</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#0b2a5b] sm:text-6xl">Pharmacoeconomics of PCSK9 Inhibitors in Cardiovascular Disease</h1>
            <p className="mt-6 text-lg font-semibold text-[#2563eb]">A Systematic Review of Economic Evaluations</p>
            <div className="mt-7 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="border border-[#dbe4ef] bg-white px-3 py-1.5 text-xs text-[#54708f]">{tag}</span>)}</div>
          </div>
        </div>
      </section>

      <TextSection label="01 / Overview" title="Economic evidence across healthcare settings.">
        <p>This project systematically reviewed published economic evaluations of PCSK9 inhibitors for cardiovascular disease, examining how cost-effectiveness findings varied across healthcare systems, patient populations and treatment settings.</p>
        <p>The review focused on economic evaluation methods, model structures, costs, health outcomes, ICERs, willingness-to-pay thresholds and sensitivity analyses across international studies.</p>
      </TextSection>

      <TextSection label="02 / Research question" title="What drives economic value?" tinted>
        <p className="border-l-2 border-[#2563eb] pl-6 text-2xl font-medium leading-relaxed text-[#0b2a5b]">Under what clinical and healthcare-system conditions are PCSK9 inhibitors considered cost-effective for cardiovascular disease?</p>
      </TextSection>

      <TextSection label="03 / My role" title="Reviewing and interpreting economic evidence.">
        <p>I conducted the literature search, study screening, data extraction, reporting-quality assessment and descriptive synthesis of published pharmacoeconomic studies.</p>
        <p>I compared economic evaluation methods, model characteristics, costs, health outcomes, ICERs, willingness-to-pay thresholds and sensitivity analyses across different countries and healthcare perspectives.</p>
      </TextSection>

      <section className="border-y border-[#e5e7eb] bg-[#eaf2ff]">
        <div className={container}>
          <SectionHeading label="04 / Research workflow" title="An international view of economic evidence." />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(({ value, label }) => <div key={label} className="flex flex-col border border-[#cad7e8] border-t-2 border-t-[#2563eb] bg-white p-6"><dt className="order-2 mt-3 text-sm leading-6 text-[#54708f]">{label}</dt><dd className="text-4xl font-semibold tracking-tight text-[#0b2a5b]">{value}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className={container}>
        <SectionHeading label="05 / What I evaluated" title="The components of economic value." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ title, items }) => <article key={title} className="border border-[#dbe4ef] bg-white p-6"><h3 className="font-semibold text-[#0b2a5b]">{title}</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-[#54708f]">{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
        </div>
      </section>

      <TextSection label="06 / Study characteristics" title="Methods, models and settings." tinted>
        <dl className="divide-y divide-[#dbe4ef] border-y border-[#dbe4ef]">
          {characteristics.map(([label, value]) => <div key={label} className="grid gap-2 py-5 sm:grid-cols-[0.8fr_1.2fr]"><dt className="text-sm font-semibold text-[#0b2a5b]">{label}</dt><dd className="text-sm leading-7">{value}</dd></div>)}
        </dl>
      </TextSection>

      <section className={container}>
        <SectionHeading label="07 / Key findings" title="Interpreting cost-effectiveness in context." />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {findings.map(({ title, text, note }, index) => <article key={title} className="border border-[#dbe4ef] bg-white p-6 sm:p-8"><p className="eyebrow">Finding 0{index + 1}</p><h3 className="mt-4 text-xl font-semibold leading-7 text-[#0b2a5b]">{title}</h3><p className="mt-4 text-[17px] leading-8 text-[#40536c]">{text}</p>{note && <p className="mt-5 border-l-2 border-[#2563eb] pl-4 text-sm leading-7 text-[#54708f]">{note}</p>}</article>)}
        </div>
      </section>

      <TextSection label="08 / Quality appraisal" title="Reporting quality, assessed with CHEERS." tinted>
        <p>CHEERS 2022 was used to assess reporting quality.</p>
        <dl className="grid gap-3 sm:grid-cols-3">{quality.map(({ label, value }) => <div key={label} className="border border-[#dbe4ef] bg-white p-5"><dt className="text-sm font-semibold text-[#0b2a5b]">{label}</dt><dd className="mt-3 text-3xl font-semibold text-[#0b2a5b]">{value}<span className="ml-2 text-sm font-normal text-[#54708f]">{value === "1" ? "study" : "studies"}</span></dd></div>)}</dl>
      </TextSection>

      <TextSection label="09 / Sensitivity analysis" title="Understanding uncertainty.">
        <p>Sensitivity analysis was used to explore how uncertainty in model inputs and assumptions affected cost-effectiveness results.</p>
        <dl className="divide-y divide-[#dbe4ef] border-y border-[#dbe4ef]">{sensitivity.map(({ label, value }) => <div key={label} className="flex items-start justify-between gap-5 py-5"><dt className="text-sm leading-7">{label}</dt><dd className="shrink-0 text-lg font-semibold text-[#0b2a5b]">{value} <span className="text-sm font-normal text-[#54708f]">studies</span></dd></div>)}</dl>
      </TextSection>

      <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]">
        <div className={container}>
          <SectionHeading label="10 / Selected outputs" title="Selected Outputs" />
          <SelectedOutputs />
        </div>
      </section>

      <TextSection label="11 / Why this matters" title="Value depends on context.">
        <p>Economic value is not determined by clinical effectiveness alone. This project showed how treatment cost, baseline cardiovascular risk, healthcare-system perspective and willingness-to-pay thresholds can change whether the same therapy is considered cost-effective across settings.</p>
        <p>It provided practical exposure to health economic evaluation and strengthened my interest in evidence generation for healthcare decision-making.</p>
      </TextSection>

      <TextSection label="12 / Skills demonstrated" title="A foundation in economic evidence." tinted>
        <ul className="flex flex-wrap gap-3">{skills.map((skill) => <li key={skill} className="border border-[#dbe4ef] bg-white px-4 py-2 text-sm text-[#40536c]">{skill}</li>)}</ul>
      </TextSection>

      <section className={`${container} flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between`}>
        <div><p className="eyebrow">Continue exploring</p><h2 className="section-title mt-4">Back to Projects</h2><p className="mt-4 text-[#40536c]">Return to the selected academic work overview.</p></div>
        <Link href="/#projects" className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#0b2a5b] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#17427d]">View Projects <ArrowIcon /></Link>
      </section>
      <footer className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 border-t border-[#e5e7eb] px-6 py-7 text-sm text-[#54708f] sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2026 Hongxiang Meng</p><Link href="/#top" className="hover:text-[#2563eb]">Back to top</Link></footer>
    </main>
  );
}
