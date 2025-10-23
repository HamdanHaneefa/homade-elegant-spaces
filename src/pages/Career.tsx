import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Career = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              CAREER
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-muted-foreground tracking-wide">
              JOIN THE HOMADE FAMILY!
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              <p>
                We are building a team of passionate, curious, mission-focused people
                who are always seeking new challenges.
              </p>
              <p>
                Working with Homade is based on creative thinking, teamwork, and
                continuous growth. A place where you can fulfil your big dreams!
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" required placeholder="First Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" required placeholder="Last Name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" required placeholder="Email address" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" required placeholder="Phone number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Address" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="City" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="resume">Resume</Label>
                <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                <p className="text-xs text-muted-foreground">
                  Please attach your resume for review
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="resumeLink">Resume Link</Label>
                <Input
                  id="resumeLink"
                  type="url"
                  placeholder="https://"
                />
                <p className="text-xs text-muted-foreground">
                  Alternatively, insert a link to your resume
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio</Label>
                <Input id="portfolio" type="file" accept=".pdf,.doc,.docx" />
                <p className="text-xs text-muted-foreground">
                  If available, please attach your portfolio
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolioLink">Portfolio Link</Label>
                <Input
                  id="portfolioLink"
                  type="url"
                  placeholder="https://"
                />
                <p className="text-xs text-muted-foreground">
                  Alternatively, insert a link to your portfolio
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Why Homade?</Label>
              <Textarea
                id="message"
                placeholder="Tell us why you want to join Homade..."
                rows={5}
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
