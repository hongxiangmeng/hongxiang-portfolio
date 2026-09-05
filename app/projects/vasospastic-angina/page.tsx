import Link from "next/link";
import type { ReactNode } from "react";

const tags = ["Evidence Synthesis", "Meta-analysis", "R", "Clinical Outcomes", "Healthcare Resource Use"];

const workflow = [
  { value: "4,325", label: "database records" },
  { value: "47", label: "eligible reports" },
  { value: "32", label: "underlying studies / cohorts" },
  { value: "8", label: "quantitative syntheses" },
];

const skills = ["Systematic review", "Evidence synthesis", "Meta-analysis", "Clinical outcomes", "Healthcare resource use", "R-based analysis"];

function ArrowIcon() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

function AbstractOutput({ type }: { type: "prisma" | "forest" | "appraisal" }) {
  if (type === "prisma") {
    return (
      <div className="relative min-h-72 overflow-hidden border border-[#cad7e8] bg-[#f7faff] p-5" role="img" aria-label="Abstract PRISMA flow diagram placeholder">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-[#54708f]"><span>PRISMA</span><span>Abstract placeholder</span></div>
        <div className="mt-6 grid gap-3 text-center text-[10px] font-semibold text-[#0b2a5b] sm:mx-8"><div className="border border-[#9eb4d1] bg-white px-3 py-3">Identification</div><div className="mx-auto h-4 border-l border-dashed border-[#6d91bd]" /><div className="border border-[#9eb4d1] bg-white px-3 py-3">Screening</div><div className="mx-auto h-4 border-l border-dashed border-[#6d91bd]" /><div className="grid gap-3 sm:grid-cols-2"><div className="border border-[#9eb4d1] bg-white px-3 py-3">Eligibility</div><div className="border border-[#9eb4d1] bg-white px-3 py-3">Included</div></div></div>
        <p className="mt-5 text-center text-[10px] uppercase tracking-[0.12em] text-[#54708f]">Structure only - no flow counts shown</p>
      </div>
    );
  }

  if (type === "forest") {
    return (
      <div className="relative min-h-72 overflow-hidden border border-[#cad7e8] bg-[#f1f5f9] p-5" role="img" aria-label="Abstract forest plot placeholder">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-[#54708f]"><span>Forest plot</span><span>Abstract placeholder</span></div>
        <div className="relative mt-8 h-40"><div className="absolute inset-y-0 left-1/2 border-l border-dashed border-[#9eb4d1]" />{["top-2", "top-12", "top-22", "top-32"].map((position, index) => <div key={position} className={`absolute ${position} left-0 right-0 flex items-center`}><span className="w-7 text-[10px] text-[#54708f]">0{index + 1}</span><div className="h-px w-1/4 bg-[#6d91bd]" /><span className="mx-2 h-3 w-3 rotate-45 bg-[#2563eb]" /><div className="h-px flex-1 bg-[#6d91bd]" /></div>)}</div>
        <p className="text-center text-[10px] uppercase tracking-[0.12em] text-[#54708f]">Layout only - no effect estimates shown</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-72 overflow-hidden border border-[#cad7e8] bg-[#f7faff] p-5" role="img" aria-label="Abstract critical appraisal placeholder">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-[#54708f]"><span>Critical appraisal</span><span>Abstract placeholder</span></div>
      <div className="mt-8 space-y-5">{["Study quality", "Outcome reporting", "Evidence relevance"].map((label, index) => <div key={label}><div className="mb-2 flex justify-between text-xs font-semibold text-[#0b2a5b]"><span>{label}</span><span>0{index + 1}</span></div><div className="h-2 border border-[#b7c8dc] bg-white"><div className={`h-full bg-[#6d91bd] ${index === 0 ? "w-3/4" : index === 1 ? "w-1/2" : "w-2/3"}`} /></div></div>)}</div>
      <p className="mt-7 text-center text-[10px] uppercase tracking-[0.12em] text-[#54708f]">Framework only - no ratings shown</p>
    </div>
  );
}

function SectionHeading({ index, children }: { index: string; children: ReactNode }) {
  return <div><p className="eyebrow">{index}</p><h2 className="section-title mt-4 text-4xl sm:text-5xl">{children}</h2></div>;
}

export const metadata = {
  title: "Vasospastic Angina | Hongxiang Meng",
  description: "Systematic review and meta-analysis case study by Hongxiang Meng.",
};

export default function VasospasticAnginaPage() {
  return (
    <main className="overflow-hidden">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-10" aria-label="Case study navigation"><Link href="/#top" className="text-lg font-bold tracking-[-0.02em] text-[#0b2a5b]">Hongxiang Meng</Link><Link href="/#projects" className="text-sm font-semibold text-[#2563eb]">Back to projects <ArrowIcon /></Link></nav>
      <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24"><div className="max-w-4xl animate-rise"><p className="eyebrow">Project 01 / Case study</p><h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#0b2a5b] sm:text-6xl">Outcome Reporting, Healthcare Resource Use and Economic Evidence in Vasospastic Angina</h1><p className="mt-6 text-lg font-semibold text-[#2563eb]">Systematic Review &amp; Meta-analysis</p><div className="mt-7 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="border border-[#dbe4ef] bg-white px-3 py-1.5 text-xs text-[#54708f]">{tag}</span>)}</div></div></div></section>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="01 / Overview">A structured view of the evidence.</SectionHeading><div className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]"><p>This case study presents a systematic review and meta-analysis focused on outcome reporting, healthcare resource use and economic evidence in vasospastic angina.</p><p>The page separates verified project-level information from visual placeholders. No study-level estimates, paper-specific findings or unverified contribution details are presented here.</p></div></section>
      <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="02 / Research question">What does the published evidence report?</SectionHeading><div className="max-w-2xl border-l-2 border-[#2563eb] pl-6 text-2xl font-medium leading-relaxed text-[#0b2a5b]">How are clinical outcomes, healthcare resource use and economic evidence reported across the available literature on vasospastic angina?</div></div></section>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="03 / My role">A documented scope.</SectionHeading><div className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]"><p>The available project record supports describing this work through its research focus, evidence synthesis workflow and R-based analysis context.</p><p>Specific personal contribution details are intentionally not expanded on this page until they can be verified. This keeps the case study accurate rather than implying responsibilities that are not documented.</p></div></section>
      <section className="border-y border-[#e5e7eb] bg-[#0b2a5b] text-white"><div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24"><SectionHeading index="04 / Research workflow">From records to synthesis.</SectionHeading><div className="mt-10 grid gap-px border border-[#35527c] bg-[#35527c] sm:grid-cols-2 lg:grid-cols-4">{workflow.map((item) => <div key={item.label} className="bg-[#0b2a5b] p-6"><strong className="block text-3xl font-semibold text-white">{item.value}</strong><span className="mt-2 block text-sm leading-6 text-[#c5d4e8]">{item.label}</span></div>)}</div></div></section>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="05 / Methods & tools">Evidence synthesis in practice.</SectionHeading><div className="grid gap-4 sm:grid-cols-2"><div className="border border-[#dbe4ef] bg-white p-6"><h3 className="font-semibold text-[#0b2a5b]">Methods</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-[#54708f]"><li>Systematic review</li><li>Evidence synthesis</li><li>Meta-analysis</li><li>Clinical outcomes review</li><li>Healthcare resource use review</li></ul></div><div className="border border-[#dbe4ef] bg-white p-6"><h3 className="font-semibold text-[#0b2a5b]">Tools</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-[#54708f]"><li>R-based statistical analysis</li><li>Structured review methods</li><li>Literature screening</li><li>Data extraction</li><li>Critical appraisal</li></ul></div></div></section>
      <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="06 / Key findings">A careful boundary around findings.</SectionHeading><div className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]"><p>Verified project-level findings currently available for this page are the scope and workflow metrics shown above.</p><p>Detailed clinical outcomes, resource-use results, economic findings and pooled estimates are not reproduced here because the source details are not available in the current project brief.</p></div></div></section>
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-24"><div className="flex flex-wrap items-end justify-between gap-5"><SectionHeading index="07 / Selected outputs">Research artefacts.</SectionHeading><span className="text-sm text-[#54708f]">Abstract visual placeholders</span></div><div className="mt-10 grid gap-5 lg:grid-cols-3"><AbstractOutput type="prisma" /><AbstractOutput type="forest" /><AbstractOutput type="appraisal" /></div></section>
      <section className="border-y border-[#e5e7eb] bg-[#eaf2ff]"><div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="08 / Why this matters">Evidence is only useful when it can be understood.</SectionHeading><p className="max-w-2xl text-[17px] leading-8 text-[#40536c]">Bringing clinical outcomes, healthcare resource use and economic evidence into one structured view can help clarify what is reported, where evidence is comparable and where important uncertainty remains.</p></div></section>
      <section className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.52fr_1fr] lg:px-10 lg:py-24"><SectionHeading index="09 / Skills demonstrated">A foundation for evidence-led work.</SectionHeading><div className="flex max-w-2xl flex-wrap content-start gap-3">{skills.map((skill) => <span key={skill} className="border border-[#dbe4ef] bg-white px-4 py-2 text-sm text-[#40536c]">{skill}</span>)}</div></section>
      <section className="border-t border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-20"><div><p className="eyebrow">10 / Continue exploring</p><h2 className="section-title mt-4">Back to Projects</h2><p className="mt-4 text-[#40536c]">Return to the selected academic work overview.</p></div><Link href="/#projects" className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#0b2a5b] px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#17427d]">View Projects <ArrowIcon /></Link></div></section>
      <footer className="mx-auto flex max-w-[1240px] flex-col gap-4 px-6 py-7 text-sm text-[#54708f] sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2026 Hongxiang Meng</p><Link href="/#top" className="hover:text-[#2563eb]">Back to top</Link></footer>
    </main>
  );
}