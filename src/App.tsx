import "./App.css";
import ToolCard from "./components/ToolCard";
import { tools } from "./data/tools";

function App() {
  return (
    <div className="min-h-screen px-6 py-10">

      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/40 bg-white/70 px-8 py-5 backdrop-blur-xl shadow-sm">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500 text-xl font-bold text-white">
            B
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Berlin Packaging
            </h1>

            <p className="text-sm text-slate-500">
              Sustainability Access Portal
            </p>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl pt-24 text-center">

        <h1 className="text-7xl font-black leading-tight tracking-tight text-slate-900">
          Sustainability
          <span className="text-red-500"> Ecosystem</span>
        </h1>

        <p className="mx-auto mt-8 max-w-4xl text-2xl leading-relaxed text-slate-600">
          Access sustainability intelligence, supplier assessment systems,
          marketplace solutions, and ESG insights from one centralized enterprise platform.
        </p>

      </section>

      {/* Cards */}
      <section className="mx-auto mt-24 grid max-w-7xl gap-10 md:grid-cols-3">

        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            link={tool.link}
            buttonText={tool.buttonText}
          />
        ))}

      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-slate-200 py-8 text-center text-slate-500">
        © 2026 Berlin Packaging — Sustainability Solutions
      </footer>

    </div>
  );
}

export default App;