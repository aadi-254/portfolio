export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Aditya Makwana. All rights reserved.
          </p>
          <p className="font-mono text-primary text-sm">
            "Code. Create. Innovate."
          </p>
        </div>
      </div>
    </footer>
  );
}
