import { BookOpen, Heart, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Learn about our fellowship, our mission, and what to expect when you join us.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-shrink-0">
                <img src={logo} alt="Gathered IN HIS NAME Jesus" className="h-48 w-auto" />
              </div>
              <div>
                <h2 className="font-serif text-3xl text-primary font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gathered IN HIS NAME Jesus Prayer Fellowship was founded by believers who desired a place of authentic worship and genuine community. We believe that when we gather in Jesus' name, He is present among us, transforming our lives through His love and grace.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our fellowship has grown from a small group meeting in homes to a vibrant community of believers from all walks of life. What unites us is our shared faith in Jesus Christ and our commitment to prayer, worship, and serving one another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-primary font-bold mb-8">Our Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Love God",
                  description: "To worship God with all our heart, soul, mind, and strength.",
                },
                {
                  icon: Users,
                  title: "Love Others",
                  description: "To love and serve our neighbors as ourselves.",
                },
                {
                  icon: BookOpen,
                  title: "Make Disciples",
                  description: "To share the Gospel and help others grow in their faith.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-card p-8 rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl text-primary font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-primary font-bold text-center mb-12">
              What to Expect
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Warm Welcome",
                  description:
                    "From the moment you arrive, you'll be greeted with genuine warmth and hospitality. We're a family, and we want you to feel at home.",
                },
                {
                  title: "Heartfelt Worship",
                  description:
                    "Our worship is Spirit-led and centered on glorifying God. We sing hymns and contemporary songs that lift up the name of Jesus.",
                },
                {
                  title: "Biblical Teaching",
                  description:
                    "Our messages are rooted in Scripture and aimed at practical application. We believe God's Word has the power to transform lives.",
                },
                {
                  title: "Prayer Time",
                  description:
                    "Prayer is at the heart of everything we do. We pray together, for one another, and for our community and world.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-md border-l-4 border-secondary"
                >
                  <h3 className="font-serif text-xl text-primary font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
