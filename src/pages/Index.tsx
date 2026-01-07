import { Link } from "react-router-dom";
import { Heart, BookOpen, Users, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Gathered IN HIS NAME Jesus" className="h-32 md:h-40 mx-auto mb-8" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to Our Fellowship
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            "For where two or three gather in my name, there am I with them."
          </p>
          <p className="text-secondary font-serif text-lg mb-10">— Matthew 18:20</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a community of believers united by our faith in Jesus Christ. Our fellowship is dedicated to prayer, worship, and growing together in God's love. We welcome all who seek to deepen their relationship with the Lord and find fellowship with like-minded believers.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold text-center mb-12">
            What We Believe
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Love",
                description: "Love God with all your heart and love your neighbor as yourself.",
              },
              {
                icon: BookOpen,
                title: "Scripture",
                description: "The Bible is God's inspired Word and our guide for faith and life.",
              },
              {
                icon: Users,
                title: "Fellowship",
                description: "We grow stronger together through prayer, worship, and community.",
              },
              {
                icon: Clock,
                title: "Prayer",
                description: "Prayer is our lifeline to God and the foundation of our fellowship.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl text-primary font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Times */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Join Us for Worship</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary-foreground/10 rounded-xl p-8">
              <p className="text-secondary text-xl font-serif mb-2">Every Sunday</p>
              <p className="text-3xl font-bold mb-4">10:00 AM - 12:00 PM</p>
              <p className="text-primary-foreground/80">
                Come as you are and experience the joy of worshiping together in His name.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-block mt-8 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
