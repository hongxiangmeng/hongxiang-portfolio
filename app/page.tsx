import Image from "next/image";

const navItems = ["About", "Skills", "Projects", "Education", "CV", "Contact"];
const cvPath = "/cv/hongxiang-meng-cv.pdf";
const cvDownloadName = "Hongxiang-Meng-CV.pdf";
const emailHref = "mailto:menghongxiang@outlook.com";
const githubHref = "https://github.com/hongxiangmeng";
const linkedinHref = "https://www.linkedin.com/in/hongxiang-meng-a20a83422";

const skills = [
  { title: "Research", items: ["Systematic Review", "Meta-analysis", "Evidence Synthesis", "Literature Screening", "Data Extraction", "Critical Appraisal"] },
  { title: "Data & Statistics", items: ["R", "RStudio", "Statistical Analysis", "Data Visualisation", "Meta-analytic Methods"] },
  { title: "Clinical & Healthcare", items: ["Clinical Pharmacology", "Clinical Pharmacy", "Clinical Research", "Clinical Outcomes", "Healthcare Resource Utilisation"] },
  { title: "Research Tools", items: ["Rayyan", "PubMed", "Embase", "Web of Science", "Microsoft Excel"] },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

function SkillMark({ index }: { index: number }) {
  return <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#b7c8dc] text-[10px] font-bold text-[#2563eb]" aria-hidden="true">0{index + 1}</span>;
}

function ResearchSnapshot() {
  return (
    <section className="relative overflow-hidden border border-[#cad7e8] bg-[#f7faff] p-5 sm:p-7" aria-labelledby="research-snapshot-title">
      <div className="absolute inset-x-0 top-0 h-1 bg-[#2563eb]" />
      <div>
        <h2 id="research-snapshot-title" className="text-2xl font-semibold tracking-[-0.03em] text-[#0b2a5b]">Research Snapshot</h2>
        <p className="mt-1 text-xs text-[#54708f]">Selected evidence synthesis work</p>
      </div>

      <div className="mt-6 divide-y divide-[#dbe4ef]">
        <article className="pb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2563eb]">Project 01</p>
          <h3 className="mt-2 text-base font-semibold leading-5 text-[#0b2a5b]">Outcome Reporting, Healthcare Resource Use and Economic Evidence in Vasospastic Angina</h3>
          <p className="mt-2 text-xs font-semibold text-[#54708f]">Systematic Review &amp; Meta-analysis</p>
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="flex flex-col"><dt className="order-2 mt-1 text-[11px] leading-4 text-[#54708f]">database records</dt><dd className="text-xl font-semibold text-[#0b2a5b]">4,325</dd></div>
            <div className="flex flex-col"><dt className="order-2 mt-1 text-[11px] leading-4 text-[#54708f]">eligible reports</dt><dd className="text-xl font-semibold text-[#0b2a5b]">47</dd></div>
            <div className="flex flex-col"><dt className="order-2 mt-1 text-[11px] leading-4 text-[#54708f]">underlying studies / cohorts</dt><dd className="text-xl font-semibold text-[#0b2a5b]">32</dd></div>
            <div className="flex flex-col"><dt className="order-2 mt-1 text-[11px] leading-4 text-[#54708f]">quantitative syntheses</dt><dd className="text-xl font-semibold text-[#0b2a5b]">8</dd></div>
          </dl>
        </article>

        <article className="pt-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2563eb]">Project 02</p>
          <h3 className="mt-2 text-base font-semibold leading-5 text-[#0b2a5b]">Pharmacoeconomics of PCSK9 Inhibitors in Cardiovascular Disease</h3>
          <p className="mt-2 text-xs font-semibold text-[#54708f]">Systematic Review of Economic Evaluations</p>
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">
            <div className="flex flex-col"><dt className="order-2 mt-1 text-[11px] leading-4 text-[#54708f]">economic evaluations</dt><dd className="text-xl font-semibold text-[#0b2a5b]">25</dd></div>
            <div className="flex flex-col"><dt className="order-2 mt-1 text-[11px] leading-4 text-[#54708f]">countries represented</dt><dd className="text-xl font-semibold text-[#0b2a5b]">13</dd></div>
          </dl>
          <div className="mt-5" aria-label="Cost-effectiveness findings: 10 cost-effective and 15 not cost-effective">
            <div className="flex h-2 overflow-hidden bg-[#dbe4ef]" role="img" aria-label="10 cost-effective and 15 not cost-effective">
              <span className="w-2/5 bg-[#0b2a5b]" />
              <span className="w-3/5 bg-[#6d91bd]" />
            </div>
            <div className="mt-3 flex justify-between gap-3 text-[11px] leading-4 text-[#54708f]"><span><strong className="text-[#0b2a5b]">10</strong> cost-effective</span><span className="text-right"><strong className="text-[#0b2a5b]">15</strong> not cost-effective</span></div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ForestPlotVisual() {
  return (
    <figure className="project-visual flex h-72 min-h-64 flex-col bg-[#f1f5f9] p-5 sm:p-6">
      <figcaption className="text-xs font-semibold text-[#0b2a5b]">Unstable-angina hospitalisation / readmission</figcaption>
      <div className="mt-4 flex min-h-0 flex-1 items-center justify-center border border-[#dbe4ef] bg-white p-2">
        <Image
          src="/projects/vasospastic-angina/forest-hospitalisation.png"
          alt="Forest plot of unstable-angina hospitalisation or readmission among patients with vasospastic angina."
          width={3950}
          height={1610}
          className="h-auto max-h-full w-full object-contain"
        />
      </div>
    </figure>
  );
}

function CostEffectivenessVisual() {
  const conclusions = [
    { label: "Cost-effective", count: 10, color: "bg-[#0b2a5b]" },
    { label: "Not cost-effective", count: 15, color: "bg-[#6d91bd]" },
  ];
  const totalStudies = 25;

  return (
    <figure className="project-visual flex h-72 min-h-64 flex-col bg-[#eaf2ff] p-5 sm:p-6">
      <figcaption className="flex items-center justify-between gap-4 text-xs font-semibold text-[#0b2a5b]">
        <span>Cost-effectiveness Summary</span>
        <span className="shrink-0 text-[#54708f]">Total n = 25</span>
      </figcaption>
      <dl className="mt-6 grid grid-cols-2 gap-5">
        {conclusions.map(({ label, count, color }) => (
          <div key={label} className="flex min-w-0 flex-col">
            <dt className="order-2 mt-2 flex items-start gap-2 text-xs leading-5 text-[#40536c]"><span aria-hidden="true" className={`mt-1.5 h-2.5 w-2.5 shrink-0 ${color}`} />{label}</dt>
            <dd className="text-4xl font-semibold leading-none tabular-nums text-[#0b2a5b]">{count}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-5 flex h-4 overflow-hidden" role="img" aria-label="Included studies reported conclusions: 10 cost-effective and 15 not cost-effective, out of 25 studies.">
        {conclusions.map(({ label, count, color }) => <span key={label} className={color} style={{ width: `${(count / totalStudies) * 100}%` }} />)}
      </div>
      <p className="mt-5 text-xs leading-5 text-[#54708f]">Based on conclusions reported by the included studies; not a pooled economic estimate.</p>
    </figure>
  );
}

function ButtonLink({ children, href = "#", secondary = false, target, rel, download }: { children: React.ReactNode; href?: string; secondary?: boolean; target?: React.HTMLAttributeAnchorTarget; rel?: string; download?: string }) {
  return <a href={href} target={target} rel={rel} download={download} className={`inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${secondary ? "border border-[#0b2a5b] bg-white text-[#0b2a5b] hover:bg-[#edf3fb]" : "bg-[#0b2a5b] text-white hover:bg-[#17427d]"}`}>{children}</a>;
}

export default function Home() {
  return <main id="top" className="overflow-hidden">
    <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6 lg:px-10" aria-label="Main navigation"><a href="#top" className="text-lg font-bold tracking-[-0.02em] text-[#0b2a5b]">Hongxiang Meng</a><div className="hidden items-center gap-7 text-sm text-[#40536c] lg:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-[#2563eb]">{item}</a>)}<ButtonLink href={cvPath} download={cvDownloadName}>Download CV <ArrowIcon /></ButtonLink></div><a href="#contact" className="text-sm font-semibold text-[#2563eb] lg:hidden">Contact <ArrowIcon /></a></nav>

    <section className="border-y border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-14 lg:grid-cols-[1fr_0.86fr] lg:px-10 lg:py-20"><div className="animate-rise"><p className="eyebrow">CLINICAL PHARMACOLOGY / HEOR &amp; RWE / DATA ANALYTICS</p><h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#0b2a5b] sm:text-7xl">Evidence that moves healthcare forward.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#40536c]">Bridging clinical pharmacology, evidence synthesis and healthcare data to generate evidence for better healthcare decisions.</p><div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="#projects">View Projects <ArrowIcon /></ButtonLink><ButtonLink href={cvPath} secondary download={cvDownloadName}>Download CV <ArrowIcon /></ButtonLink></div><div className="mt-12 flex gap-6 text-sm font-semibold text-[#54708f]"><a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">LinkedIn</a><a href={githubHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">GitHub</a><a href={emailHref} className="hover:text-[#2563eb]">Email</a></div></div><ResearchSnapshot /></div></section>

    <section id="about" className="mx-auto grid max-w-[1240px] gap-10 px-6 py-16 lg:grid-cols-[0.55fr_1fr] lg:px-10 lg:py-[5.5rem]"><div><p className="eyebrow">01 / About me</p><h2 className="section-title">From clinical evidence<br />to healthcare decisions.</h2></div><div className="max-w-2xl space-y-5 text-[17px] leading-8 text-[#40536c]"><p>I have a background in Clinical Pharmacy and postgraduate training in Clinical Pharmacology at the University of Glasgow, with experience in evidence synthesis, systematic review, meta-analysis and clinical outcomes research.</p><p>My academic work has involved evaluating clinical outcomes, healthcare utilisation and published evidence using structured review methods and R-based statistical analysis. Through this experience, I have developed a growing interest in how clinical evidence and healthcare data can be used beyond traditional research settings.</p><p>I am currently building my focus in Health Economics and Outcomes Research (HEOR), Real-World Evidence (RWE) and healthcare data analytics, with the long-term goal of combining clinical knowledge, quantitative methods and real-world data to support treatment evaluation, value assessment and better healthcare decision-making.</p></div></section>

    <section id="skills" className="border-y border-[#e5e7eb] bg-[#f6f8fb]"><div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20"><p className="eyebrow">02 / Skills & expertise</p><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill, index) => <div key={skill.title} className="border border-[#dbe4ef] bg-white p-6 shadow-[0_1px_2px_rgba(11,42,91,0.03)]"><div className="flex items-center gap-3"><SkillMark index={index} /><h3 className="font-semibold text-[#0b2a5b]">{skill.title}</h3></div><ul className="mt-5 space-y-3 text-sm text-[#54708f]">{skill.items.map((item) => <li key={item} className="flex gap-2"><span className="text-[#2563eb]">/</span>{item}</li>)}</ul></div>)}</div></div></section>

    <section id="projects" className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-[5.5rem]"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">03 / Featured projects</p><h2 className="section-title mt-4">Research with a<br />decision in mind.</h2></div><span className="text-sm text-[#54708f]">Selected academic work</span></div><div className="mt-10 grid gap-6 lg:grid-cols-2"><article className="flex flex-col border border-[#dbe4ef] bg-white"><ForestPlotVisual /><div className="flex flex-1 flex-col p-6 sm:p-8"><p className="eyebrow">Project 01</p><h3 className="mt-4 text-2xl font-semibold leading-tight text-[#0b2a5b]">Outcome Reporting, Healthcare Resource Use and Economic Evidence in Vasospastic Angina</h3><p className="mt-3 text-sm font-semibold text-[#2563eb]">Systematic Review & Meta-analysis</p><div className="mt-6 flex flex-wrap gap-2">{["Evidence Synthesis", "Meta-analysis", "R", "Clinical Outcomes", "Healthcare Resource Use"].map((tag) => <span key={tag} className="border border-[#dbe4ef] px-2.5 py-1 text-xs text-[#54708f]">{tag}</span>)}</div><div className="mt-7 grid grid-cols-2 gap-y-5 border-t border-[#e5e7eb] pt-6 text-sm"><div><strong className="block text-xl text-[#0b2a5b]">4,325</strong><span className="text-[#54708f]">database records</span></div><div><strong className="block text-xl text-[#0b2a5b]">47</strong><span className="text-[#54708f]">eligible reports</span></div><div><strong className="block text-xl text-[#0b2a5b]">32</strong><span className="text-[#54708f]">underlying studies / cohorts</span></div><div><strong className="block text-xl text-[#0b2a5b]">8</strong><span className="text-[#54708f]">quantitative syntheses</span></div></div><a href="/projects/vasospastic-angina" className="mt-8 inline-flex items-center gap-2 border-t border-[#e5e7eb] pt-5 text-sm font-semibold text-[#0b2a5b] hover:text-[#2563eb]">View Case Study <ArrowIcon /></a></div></article><article className="flex flex-col border border-[#dbe4ef] bg-white"><CostEffectivenessVisual /><div className="flex flex-1 flex-col p-6 sm:p-8"><p className="eyebrow">Project 02</p><h3 className="mt-4 text-2xl font-semibold leading-tight text-[#0b2a5b]">Pharmacoeconomics of PCSK9 Inhibitors in Cardiovascular Disease</h3><p className="mt-3 text-sm font-semibold text-[#2563eb]">Systematic Review of Economic Evaluations</p><div className="mt-6 flex flex-wrap gap-2">{["Health Economics", "Pharmacoeconomics", "Cost-effectiveness", "HTA"].map((tag) => <span key={tag} className="border border-[#dbe4ef] px-2.5 py-1 text-xs text-[#54708f]">{tag}</span>)}</div><div className="mt-7 grid grid-cols-2 gap-y-5 border-t border-[#e5e7eb] pt-6 text-sm"><div><strong className="block text-xl text-[#0b2a5b]">600</strong><span className="text-[#54708f]">records identified</span></div><div><strong className="block text-xl text-[#0b2a5b]">25</strong><span className="text-[#54708f]">economic evaluations</span></div><div><strong className="block text-xl text-[#0b2a5b]">13</strong><span className="text-[#54708f]">countries</span></div><div><strong className="block text-xl text-[#0b2a5b]">22</strong><span className="text-[#54708f]">studies using Markov models</span></div></div><a href="/projects/pcsk9-pharmacoeconomics" className="mt-8 inline-flex items-center gap-2 border-t border-[#e5e7eb] pt-5 text-sm font-semibold text-[#0b2a5b] hover:text-[#2563eb]">View Case Study <span aria-hidden="true">&rarr;</span></a></div></article></div></section>

    <section id="education" className="border-y border-[#e5e7eb] bg-[#0b2a5b] text-white"><div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20"><p className="eyebrow text-[#9fc2f5]">04 / Education</p><div className="mt-8 divide-y divide-[#35527c]">{[{ school: "University of Glasgow", degree: "MSc Clinical Pharmacology", date: "2025–2026", description: "Focused on clinical pharmacology, evidence-based medicine, clinical research and quantitative evidence synthesis." }, { school: "Tianjin Medical University", degree: "Bachelor's Degree in Clinical Pharmacy", date: "Completed 2023", description: "Academic training in clinical pharmacy, pharmacology and pharmaceutical sciences, with an undergraduate dissertation in pharmacoeconomics." }].map((item) => <div key={item.school} className="grid gap-4 py-6 md:grid-cols-[1fr_1.2fr_0.65fr] md:items-start"><p className="font-semibold text-[#9fc2f5]">{item.school}</p><div><h3 className="text-xl font-semibold">{item.degree}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#c5d4e8]">{item.description}</p></div><p className="text-sm text-[#9fc2f5] md:text-right">{item.date}</p></div>)}</div></div></section>

    <section id="cv" className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-24"><div><p className="eyebrow">05 / Curriculum vitae</p><h2 className="section-title mt-4">Want the full picture?</h2><p className="mt-4 text-[#40536c]">View my academic background, research experience and technical skills in more detail.</p></div><div className="flex flex-wrap gap-3"><ButtonLink href={cvPath} target="_blank" rel="noopener noreferrer">View CV <ArrowIcon /></ButtonLink><ButtonLink href={cvPath} secondary download={cvDownloadName}>Download CV <ArrowIcon /></ButtonLink></div></section>

    <section id="contact" className="border-t border-[#e5e7eb] bg-[#eaf2ff]"><div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-end sm:justify-between lg:px-10 lg:py-24"><div><p className="eyebrow">06 / Contact</p><h2 className="section-title mt-4">Let&apos;s Connect</h2><p className="mt-4 max-w-md text-[#40536c]">I am interested in opportunities across HEOR, real-world evidence, healthcare analytics and clinical research.</p></div><div className="flex gap-6 text-sm font-semibold text-[#0b2a5b]"><a href={emailHref} className="hover:text-[#2563eb]">Email <ArrowIcon /></a><a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">LinkedIn <ArrowIcon /></a><a href={githubHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">GitHub <ArrowIcon /></a></div></div></section>

    <footer className="mx-auto flex max-w-[1240px] flex-col gap-4 px-6 py-7 text-sm text-[#54708f] sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>© 2026 Hongxiang Meng</p><div className="flex gap-5"><a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">LinkedIn</a><a href={githubHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">GitHub</a><a href={emailHref} className="hover:text-[#2563eb]">Email</a></div></footer>
  </main>;
}
