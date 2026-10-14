import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, Vite &amp; Three.js</p>
      </div>
    </footer>
  );
}
