export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-gray-900 space-y-10">

      {/* Header */}
      <header className="mb-10 pb-6 border-b border-gray-200 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-1">Anabel Ferreiro Perez</h1>
        <p className="text-sm text-gray-500 mt-1">
          Business Analytics Student • Data Engineering • AI & Analytics
        </p>
        <p className="text-sm text-gray-600">
          <a href="tel:8508231724" className="hover:underline">(850) 823-1724</a>
          {" | "}
          <a href="mailto:anabelferreiro02@gmail.com" className="hover:underline">anabelferreiro02@gmail.com</a>
          {" | "} South Florida {" | "}
          <a href="https://linkedin.com/in/anabel-ferreiro" className="hover:underline">linkedin.com/in/anabel-ferreiro</a>
        </p>
      </header>

      {/* Summary */}
      <section className="border-t border-gray-200 pt-6 mt-6">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-700 mb-3">Summary</h2>
        <p className="text-sm text-gray-700">
          Business Analytics & Information Systems student at USF with hands-on experience in SQL, Python, Tableau, and data engineering. Proven ability to translate complex data into actionable insights for senior stakeholders. Seeking opportunities to apply analytical and technical skills in a fast-paced, data-driven environment.
        </p>
      </section>

      {/* Education */}
      <section className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-700 mb-3">Education</h2>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">University of South Florida | Tampa, FL</h3>
            <p className="text-sm text-gray-600">B.S. in Business Analytics and Information Systems / Cybersecurity Concentration</p>
            <p className="text-sm text-gray-600">GPA: 3.97</p>
          </div>
          <p className="text-sm text-gray-500 whitespace-nowrap">Expected Aug 2027</p>
        </div>
      </section>

      {/* Experience */}
      <section className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-700 mb-4">Experience</h2>

        {/* Job 1 */}
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Miami-Dade County Dept. of Transportation & Public Works | Miami, FL</h3>
              <p className="text-sm text-gray-600 italic">Data Analytics Project – Miami Tech Works Challenge</p>
            </div>
            <p className="text-sm text-gray-500 whitespace-nowrap">Oct – Nov 2025</p>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            <li>Analyzed 3,000+ rows of transaction data using SQL and Excel to identify digital vs. cash payment behavior across BRT stations.</li>
            <li>Built Tableau dashboards to visualize KPIs including ridership trends, digital adoption rates, and TVM dependency.</li>
            <li>Identified key barriers to digital payment adoption, including high cash usage during peak commute hours and limited TVM accessibility.</li>
            <li>Presented data-driven insights and strategic recommendations to DTPW senior leadership and cross-functional stakeholders.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">LawDetail | Miami, FL</h3>
              <p className="text-sm text-gray-600 italic">Data Engineer Intern</p>
            </div>
            <p className="text-sm text-gray-500 whitespace-nowrap">Dec 2024 – Apr 2025</p>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            <li>Designed Python and SQL pipelines to extract, clean, and load 100,000+ legal documents into MySQL databases using Vertex AI.</li>
            <li>Improved data accuracy through schema refinement and validation logic; generated structured JSON outputs for compliance reporting.</li>
            <li>Implemented logging, retry logic, and error handling for scalable and resilient data ingestion workflows.</li>
            <li>Collaborated with business stakeholders to align data extraction outputs with legal analytics and reporting requirements.</li>
          </ul>
        </div>

        {/* Job 3 */}
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">Expedia Group | Remote</h3>
              <p className="text-sm text-gray-600 italic">Extern – Competitive Intelligence & Strategy</p>
            </div>
            <p className="text-sm text-gray-500 whitespace-nowrap">Aug – Sep 2024</p>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            <li>Analyzed retail media networks and digital advertising trends to support strategic planning for Expedia's travel media business unit.</li>
            <li>Conducted competitive analysis on ad product offerings and revenue models across leading retail media networks.</li>
            <li>Synthesized competitive research into executive-ready presentations with actionable recommendations for business development.</li>
            <li>Translated industry research into actionable recommendations to guide internal decision-making within the business unit.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-700 mb-3">Projects</h2>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">AI-Powered Internship Tracker</h3>
            <p className="text-sm text-gray-600 italic">AWS PartyRock (Generative AI)</p>
          </div>
          <p className="text-sm text-gray-500 whitespace-nowrap">Apr 2026</p>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
          <li>Built a generative AI app to match internship opportunities to user profiles; designed prompt engineering workflows for personalized recommendations.</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-700 mb-3">Certifications</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>AWS AI Practitioner — Udacity | Apr 2026</li>
          <li>Building with the Claude API — Anthropic | May 2026</li>
          <li>Data Analysis with Spreadsheets and SQL — Meta / Coursera | Oct 2025</li>
          <li>College Credit Certificate – Business Industry Operations — Miami Dade College | Aug 2025</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-700 mb-3">Skills</h2>
        <div className="text-sm text-gray-700 space-y-1">
          <p><span className="font-semibold">Technical:</span> SQL, Python, Pandas, Tableau, Excel (PivotTables, VLOOKUP), Vertex AI, AWS, Microsoft Office Suite</p>
          <p><span className="font-semibold">Analytics:</span> Data analysis, data visualization, dashboard development, KPI reporting, statistical analysis, data cleaning</p>
          <p><span className="font-semibold">Business:</span> Requirements gathering, stakeholder management, process documentation, competitive analysis, business intelligence</p>
          <p><span className="font-semibold">Methodologies:</span> Agile (familiar), data-driven decision making, cross-functional collaboration, executive presentations</p>
          <p><span className="font-semibold">Languages:</span> English (C1), Spanish (Native)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-6 mt-6 text-center text-xs text-gray-400">
        <p>© 2026 Anabel Ferreiro Perez</p>
      </footer>

    </main>
  );
}