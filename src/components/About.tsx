const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight animate-fade-in">
          About Homade
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in">
          <p>
            At Homade, we believe that furniture is more than just functional—it's
            the foundation of how we live, work, and connect.
          </p>
          <p>
            Our collections are thoughtfully curated to blend timeless design with
            contemporary aesthetics, creating spaces that are both beautiful and
            livable.
          </p>
          <p>
            Every piece is selected with intention, ensuring quality craftsmanship
            and enduring style that transforms your house into a home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
