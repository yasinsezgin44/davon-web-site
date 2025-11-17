export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Davon Health. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#platform" className="hover:text-slate-200">
            Platform
          </a>
          <a href="#solutions" className="hover:text-slate-200">
            Solutions
          </a>
          <a href="#insights" className="hover:text-slate-200">
            Insights
          </a>
          <a href="#contact" className="hover:text-slate-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}


