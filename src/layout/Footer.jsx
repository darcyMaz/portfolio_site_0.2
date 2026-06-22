const socialLinks = [
  { src: "/github.svg", href: "https://www.github.com/darcyMaz/", alt:"GitHub logo, black on transparent" },
  { src: "/linkedin.svg", href: "https://www.linkedin.com/in/darcy-mazloum/", alt:"Linked In logo, black on transparent" },
];

const footerLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const BackToTop = () => {
    window.scrollTo({top:0, behavior:"smooth"});
  }


  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              DM<span className="text-primary">.</span> {currentYear}
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={BackToTop} href="#"> Back to Top </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (

              <a key={idx} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" href={social.href}>
                <img alt={social.alt} src={social.src} style={{width:50, height:'auto'}}/>
              </a>

            ))}

          </div>
        </div>
      </div>
    </footer>
  );
};