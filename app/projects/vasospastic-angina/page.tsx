import type { Metadata } from "next";
import Link from "next/link";
import ResearchFigure from "./research-figure";
import type { ReactNode } from "react";

const tags = ["Evidence Synthesis", "Meta-analysis", "R", "Clinical Outcomes", "Healthcare Resource Use"];

const workflow = [
  { value: "4,325", label: "database records" },
  { value: "47", label: "eligible reports" },
  { value: "32", label: "underlying studies / cohorts" },
  { value: "8", label: "quantitative syntheses" },
];

const skills = ["Systematic Review", "Evidence Synthesis", "Meta-analysis", "Clinical Outcome Research", "Critical Appraisal", "Healthcare Resource Use", "R-based Statistical Analysis", "Research Data Management"];

function ArrowIcon() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

function SectionHeading({ index, children }: { index: string; children: ReactNode }) {
  return <div><p className="eyebrow">{index}</p><h2 className="section-title mt-4 text-4xl sm:text-5xl">{children}</h2></div>;
}

export const metadata: Metadata = {
  title: "Outcome Reporting, Healthcare Resource Use and Economic Evidence in Vasospastic Angina | Hongxiang Meng",
  description: "Systematic review and meta-analysis case study by Hongxiang Meng.",
  openGraph: {
    title: "Outcome Reporting, Healthcare Resource Use and Economic Evidence in Vasospastic Angina | Hongxiang Meng",
    description: "Systematic review and meta-analysis case study by Hongxiang Meng.",
    type: "article",
  },
};

export default function VasospasticAnginaPage() {
  return (
    <main className="overflow-hidden">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-10" aria-label="Case study navigation"><Link href="/#top" className="text-lg font-bold tracking-[-0.02em] text-[#0b2a5b]">Hongxiang Meng</Link><Link href="/#projects" className="text-sm font-semibold text-[#2563eb]">Back to projects <ArrowIcon /></Link></nav>
      <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24"><div className="max-w-4xl animate-rise"><p className="eyebrow">Project 01 / Case study</p><h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#0b2a5b] sm:text-6xl">Outcome Reporting, Healthcare Resource Use and Economic Evidence in Vasospastic Angina</h1><p className="mt-6 text-lg font-semibold text-[#2563eb]">Systematic Review &amp; Meta-analysis</p><div className="mt-7 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="border border-[#dbe4ef] bg-white px-3 py-1.5 text-xs text-[#54708f]">{tag}</span>)}</div></div></div></section>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="01 / Overview">A structured view of the evidence.</SectionHeading><div className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]"><p>This project examined the clinical, patient-reported and healthcare resource-use outcomes reported in contemporary studies of epicardial vasospastic angina (VSA), while also assessing the availability of VSA-specific economic evidence.</p><p>The review included evidence published from 2013 onwards and assessed which clinical outcomes could be synthesised quantitatively. It did not attempt to independently estimate the economic burden of VSA.</p></div></section>
      <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="02 / Research question">What does the evidence capture?</SectionHeading><div className="max-w-2xl border-l-2 border-[#2563eb] pl-6 text-2xl font-medium leading-relaxed text-[#0b2a5b]">How well does the contemporary evidence capture the clinical, patient-reported and healthcare-use burden of vasospastic angina, and what VSA-specific evidence is available to support future economic evaluation?</div></div></section>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="03 / My role">From screening to synthesis.</SectionHeading><div className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]"><p>I carried out the title and abstract screening, full-text assessment, data extraction, critical appraisal, evidence synthesis and quantitative analyses for the review. I also assessed potentially overlapping cohorts and classified clinical, patient-reported and healthcare resource-use outcomes for synthesis.</p><p>My supervisor advised on the clinical scope, interpretation of VSA diagnostic criteria and overall review design, and checked proposed inclusions and diagnostically uncertain reports. I made the final eligibility and analysis decisions.</p></div></section>
      <section className="border-y border-[#e5e7eb] bg-[#0b2a5b] text-white"><div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24"><SectionHeading index="04 / Research workflow">From records to synthesis.</SectionHeading><p className="mt-6 text-sm leading-7 text-[#c5d4e8]">Search &rarr; Screen &rarr; Extract &rarr; Appraise &rarr; Analyse &rarr; Interpret</p><div className="mt-10 grid gap-px border border-[#35527c] bg-[#35527c] sm:grid-cols-2 lg:grid-cols-4">{workflow.map((item) => <div key={item.label} className="bg-[#0b2a5b] p-6"><strong className="block text-3xl font-semibold text-white">{item.value}</strong><span className="mt-2 block text-sm leading-6 text-[#c5d4e8]">{item.label}</span></div>)}</div></div></section>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="05 / Methods & tools">Evidence synthesis in practice.</SectionHeading><div className="grid gap-4 sm:grid-cols-2"><div className="border border-[#dbe4ef] bg-white p-6"><h3 className="font-semibold text-[#0b2a5b]">Methods</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-[#54708f]"><li>Systematic review</li><li>Evidence synthesis</li><li>Random-effects meta-analysis</li><li>Critical appraisal</li><li>Diagnostic sensitivity analyses</li><li>Post hoc influence analyses</li></ul></div><div className="border border-[#dbe4ef] bg-white p-6"><h3 className="font-semibold text-[#0b2a5b]">Tools / Platforms</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-[#54708f]"><li>PubMed</li><li>Embase</li><li>Web of Science</li><li>Rayyan</li><li>Microsoft Excel</li><li>R 4.5.1</li><li>meta package 8.5-0</li></ul></div><div className="border border-[#dbe4ef] bg-white p-6 sm:col-span-2"><h3 className="font-semibold text-[#0b2a5b]">Critical appraisal</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-[#54708f]"><li>JBI critical appraisal tools</li><li>Cochrane RoB 2</li><li>GRADE-style certainty assessment</li></ul></div></div></section>
      <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="06 / Key findings">Key findings.</SectionHeading>
        <div className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]">
          <article className="border border-[#dbe4ef] bg-white p-6">
            <p className="eyebrow">Finding 01</p>
            <h3 className="mt-3 text-xl font-semibold leading-7 text-[#0b2a5b]">Clinical outcomes could be pooled, but heterogeneity was substantial</h3>
            <p className="mt-4">Four clinical outcomes had sufficient compatible data for exploratory cumulative-proportion meta-analysis. The pooled cumulative proportions were:</p>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>Cardiac or cardiovascular death: 0.73% (95% CI 0.39–1.34)</li>
              <li>All-cause death: 2.23% (95% CI 0.59–8.03)</li>
              <li>Non-fatal myocardial infarction: 1.54% (95% CI 0.68–3.46)</li>
              <li>Unstable-angina hospitalisation or readmission: 6.79% (95% CI 4.74–9.64)</li>
            </ul>
            <p className="mt-5 border-l-2 border-[#2563eb] pl-4">These estimates were based on study-specific follow-up periods and should not be interpreted as common fixed-time risks.</p>
          </article>
          <article className="border border-[#dbe4ef] bg-white p-6">
            <p className="eyebrow">Finding 02</p>
            <h3 className="mt-3 text-xl font-semibold leading-7 text-[#0b2a5b]">Patient-centred outcomes were under-reported</h3>
            <p className="mt-4">Traditional clinical outcomes were reported in 40/47 reports, whereas disease-specific patient-reported outcome measures were reported in only 6/47 reports and health-related quality of life in 3/47 reports.</p>
          </article>
          <article className="border border-[#dbe4ef] bg-white p-6">
            <p className="eyebrow">Finding 03</p>
            <h3 className="mt-3 text-xl font-semibold leading-7 text-[#0b2a5b]">A major economic evidence gap remained</h3>
            <p className="mt-4">No included study reported VSA-specific direct healthcare costs, preference-based health utility values, QALYs, ICERs or a formal economic evaluation.</p>
          </article>
        </div></div></section>
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading index="07 / Selected outputs">Selected Outputs</SectionHeading><p className="max-w-md text-sm leading-6 text-[#54708f]">Selected dissertation figures covering study selection, meta-analysis and critical appraisal.</p></div><div className="mt-10 grid gap-5 lg:grid-cols-3"><ResearchFigure title="PRISMA" figureNumber={1} src="/projects/vasospastic-angina/prisma-flow.png" alt="Dissertation Figure 1: PRISMA 2020 flow diagram showing study identification, screening, eligibility and inclusion." caption="PRISMA 2020 study selection flow" /><ResearchFigure title="Forest Plot" figureNumber={5} src="/projects/vasospastic-angina/forest-hospitalisation.png" alt="Dissertation Figure 5: forest plot of unstable-angina hospitalisation or readmission among patients with vasospastic angina." caption="Meta-analysis of unstable-angina hospitalisation/readmission" /><ResearchFigure title="Critical Appraisal" figureNumber={10} src="/projects/vasospastic-angina/critical-appraisal.png" alt="Dissertation Figure 10: summary of critical appraisal across the 43 cohort reports." caption="Critical appraisal summary across cohort reports" /></div></section>
      <section className="border-y border-[#e5e7eb] bg-[#eaf2ff]"><div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="08 / Why this matters">Beyond traditional clinical outcomes.</SectionHeading><div className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]"><p>The review highlighted a gap between the clinical outcomes commonly reported in VSA studies and the evidence needed to understand its wider patient and healthcare burden.</p><p>Although hospitalisation, emergency care and repeat procedures were reported across multiple studies, healthcare-use definitions were inconsistent and no VSA-specific cost or health-utility evidence was identified. Future studies need to integrate clinical events with validated patient-reported outcomes, clearly classified healthcare resource use, cost data and preference-based health-status measures.</p></div></div></section>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="09 / Skills demonstrated">A foundation for evidence-led work.</SectionHeading><div className="flex max-w-2xl flex-wrap content-start gap-3">{skills.map((skill) => <span key={skill} className="border border-[#dbe4ef] bg-white px-4 py-2 text-sm text-[#40536c]">{skill}</span>)}</div></section>
      <section className="border-t border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-20"><div><p className="eyebrow">10 / Continue exploring</p><h2 className="section-title mt-4">Back to Projects</h2><p className="mt-4 text-[#40536c]">Return to the selected academic work overview.</p></div><Link href="/#projects" className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#0b2a5b] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#17427d]">View Projects <ArrowIcon /></Link></div></section>
      <footer className="mx-auto flex max-w-[1240px] flex-col gap-4 px-6 py-7 text-sm text-[#54708f] sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2026 Hongxiang Meng</p><Link href="/#top" className="hover:text-[#2563eb]">Back to top</Link></footer>
    </main>
  );
}