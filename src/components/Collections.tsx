import bedroomImage from "@/assets/collection-bedroom.jpg";
import diningImage from "@/assets/collection-dining.jpg";
import outdoorImage from "@/assets/collection-outdoor.jpg";

const collections = [
  {
    title: "Bedroom",
    image: bedroomImage,
    description: "Rest in refined comfort",
  },
  {
    title: "Dining",
    image: diningImage,
    description: "Gather with elegance",
  },
  {
    title: "Outdoor",
    image: outdoorImage,
    description: "Extend your living space",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Collections
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our curated selection of timeless furniture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-square mb-4">
                <img
                  src={collection.image}
                  alt={`${collection.title} collection`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-wide">
                {collection.title}
              </h3>
              <p className="text-muted-foreground">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
