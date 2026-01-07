import { Link } from "react-router-dom";
import { Users, BookOpen, Clock, MapPin, Heart, Cross } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.png";

const Index = () => {
  const beliefs = [
    {
      icon: Cross,
      title: "Christ-Centered",
      description: "Jesus Christ is the foundation of our fellowship and the center of all we do.",
    },
    {
      icon: BookOpen,
      title: "Scripture-Based",
      description: "We hold firmly to the Word of God as our guide for faith and practice.",
    },
    {
      icon: Users,
      title: "Community-Focused",
      description: "We believe in the power of believers gathering together in unity and love.",
    },
    {
      icon: Heart,
      title: "Prayer-Driven",
      description: "Prayer is the heartbeat of our fellowship, connecting us to our Heavenly Father.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 md:py-32 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a84b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center">
            <img 
              src={logo} 
              alt="Gathered IN HIS NAME Jesus Fellowship Logo" 
              className="h-32 md:h-40 w-auto mb-8 animate-fade-in"
            />
            <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Gathered <span className="text-gold">IN HIS NAME</span>
            </h1>
            <p className="text-xl md:text-2xl text-gold font-serif mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Prayer Fellowship
            </p>
            <blockquote className="max-w-2xl text-primary-foreground/90 text-lg md:text-xl italic mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              "For where two or three gather in my name, there am I with them."
              <footer className="mt-2 text-gold not-italic text-base">— Matthew 18:20</footer>
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold-dark font-semibold px-8">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-primary font-semibold px-8">
                <Link to="/contact">Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Welcome to Our <span className="text-gold">Fellowship</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We are a community of believers united by our love for Jesus Christ and our commitment 
              to prayer. Our fellowship is a place where hearts are lifted, burdens are shared, 
              and the presence of God is experienced together. Whether you're seeking spiritual 
              growth, prayer support, or simply a loving community, you are welcome here.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
            What We <span className="text-gold">Believe</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((belief, index) => (
              <Card 
                key={belief.title} 
                className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <belief.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{belief.title}</h3>
                  <p className="text-muted-foreground text-sm">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Information Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Join Us in <span className="text-gold">Prayer</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gold mb-2">Meeting Times</h3>
                  <p className="text-primary-foreground/80">Sunday Worship: 10:00 AM</p>
                  <p className="text-primary-foreground/80">Wednesday Prayer: 7:00 PM</p>
                  <p className="text-primary-foreground/80">Friday Bible Study: 6:30 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-gold mb-2">Location</h3>
                  <p className="text-primary-foreground/80">Community Fellowship Hall</p>
                  <p className="text-primary-foreground/80">123 Faith Street</p>
                  <p className="text-primary-foreground/80">Grace City, GC 12345</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold-dark font-semibold px-8">
                <Link to="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Come as You Are
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Whether you're taking your first steps in faith or have walked with the Lord for years, 
            there's a place for you in our fellowship. We'd love to meet you.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-navy-dark font-semibold px-8">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
