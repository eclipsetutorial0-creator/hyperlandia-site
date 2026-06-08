export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <span className="font-heading text-sm font-bold text-foreground tracking-widest">HYPER</span>
          <span className="font-heading text-sm font-bold text-primary tracking-widest">LANDIA</span>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © 2026 HyperLandia. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Discord</a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">YouTube</a>
          <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}