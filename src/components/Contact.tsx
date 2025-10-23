import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your space?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-muted-foreground">hello@homade.com</p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-bold mb-2">Visit Us</h3>
            <p className="text-muted-foreground">123 Design Street</p>
          </div>
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: "450ms" }}>
          <Button size="lg" asChild>
            <a href="mailto:hello@homade.com">Send Message</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
