const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-8">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} V9 Studios
        </span>
        <span className="text-sm font-medium text-primary">
          Motion · Art · Imagination
        </span>
      </div>
    </footer>
  );
};

export default Footer;
