import { BookOpen, Users, Heart, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const expectations = [
    {
      icon: Heart,
      title: "Warm Welcome",
      description: "You'll be greeted with genuine love and hospitality from the moment you arrive.",
    },
    {
      icon: BookOpen,
      title: "Biblical Teaching",
      description: "Clear, practical teaching from Scripture that applies to everyday life.",
    },
    {
      icon: Users,
      title: "Heartfelt Worship",
      description: "Sincere praise and worship that honors God and encourages the soul.",
    },
    {
      icon: Sparkles,
      title: "Powerful Prayer",
      description: "Corporate and individual prayer times where we seek God's presence together.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">
            About <span className="text-gold">Our Fellowship</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Learn about who we are, what we believe, and our heart for prayer and community.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-8">
              Our <span className="text-gold">Story</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6 leading-relaxed">
                The "Gathered IN HIS NAME" Prayer Fellowship began with a simple desire: to create 
                a space where believers could come together in authentic prayer and worship, 
                experiencing the presence of God in community.
              </p>
              <p className="mb-6 leading-relaxed">
                What started as a small group of families meeting in living rooms has grown into 
                a vibrant fellowship of believers from all walks of life. Yet our heart remains 
                the same—to gather in Jesus' name, to pray for one another, and to grow in our 
                faith together.
              </p>
              <p className="leading-relaxed">
                We believe that when God's people come together in unity and prayer, miraculous 
                things happen. Lives are transformed, hearts are healed, and the love of Christ 
                flows through us to our community and beyond.
              </p>
            </div>
            <div className="w-24 h-1 bg-gold mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
              Our <span className="text-gold">Mission</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl text-foreground mb-4">Our Purpose</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To gather believers in the name of Jesus Christ for prayer, worship, and 
                    fellowship, creating a community where faith is strengthened, burdens are 
                    shared, and the love of God is experienced.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To see transformed lives through the power of prayer, building a community 
                    of believers who are rooted in Scripture, passionate about prayer, and 
                    committed to sharing God's love with the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
            What to <span className="text-gold">Expect</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            When you visit our fellowship, here's what you can look forward to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {expectations.map((item, index) => (
              <Card 
                key={item.title} 
                className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl italic max-w-3xl mx-auto">
            "And let us consider how we may spur one another on toward love and good deeds, 
            not giving up meeting together, as some are in the habit of doing, but encouraging 
            one another—and all the more as you see the Day approaching."
          </blockquote>
          <footer className="mt-4 text-gold text-lg">— Hebrews 10:24-25</footer>
        </div>
      </section>

      {/* Core Beliefs Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
              Our Core <span className="text-gold">Beliefs</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "The Bible",
                  text: "We believe the Bible is the inspired, infallible Word of God, our ultimate authority for faith and practice.",
                },
                {
                  title: "God",
                  text: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
                },
                {
                  title: "Jesus Christ",
                  text: "We believe in Jesus Christ, God's Son, born of a virgin, who lived a sinless life, died for our sins, rose from the dead, and will return again.",
                },
                {
                  title: "Salvation",
                  text: "We believe salvation is by grace alone, through faith alone, in Christ alone—a free gift to all who believe.",
                },
                {
                  title: "The Church",
                  text: "We believe the Church is the body of Christ, called to worship, fellowship, and share the Gospel with the world.",
                },
                {
                  title: "Prayer",
                  text: "We believe in the power of prayer as our direct communication with God, essential for spiritual growth and community.",
                },
              ].map((belief) => (
                <div key={belief.title} className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="font-serif text-xl text-foreground mb-2">{belief.title}</h3>
                  <p className="text-muted-foreground">{belief.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
