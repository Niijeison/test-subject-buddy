import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Community Fellowship Hall", "123 Faith Street", "Grace City, GC 12345"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@gatheredinhisname.org"],
    },
    {
      icon: Clock,
      title: "Meeting Times",
      details: ["Sunday: 10:00 AM", "Wednesday: 7:00 PM", "Friday: 6:30 PM"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a prayer request, a question, 
            or just want to say hello—reach out to us.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">
                Send Us a <span className="text-gold">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="border-border focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="border-border focus:ring-gold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="border-border focus:ring-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    required
                    className="border-border focus:ring-gold resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-navy-dark font-semibold px-8"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-6">
                Contact <span className="text-gold">Information</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="bg-cream border-none">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="mt-6 bg-cream border-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2 text-gold" />
                      <p className="font-serif text-lg">Map Coming Soon</p>
                      <p className="text-sm">123 Faith Street, Grace City</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            We Look Forward to <span className="text-gold">Meeting You</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Come experience the warmth of our fellowship. Join us for worship, prayer, 
            and genuine Christian community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-gold/20 rounded-lg px-6 py-4">
              <p className="text-gold font-semibold">Sunday Worship</p>
              <p className="text-primary-foreground">10:00 AM</p>
            </div>
            <div className="bg-gold/20 rounded-lg px-6 py-4">
              <p className="text-gold font-semibold">Wednesday Prayer</p>
              <p className="text-primary-foreground">7:00 PM</p>
            </div>
            <div className="bg-gold/20 rounded-lg px-6 py-4">
              <p className="text-gold font-semibold">Friday Bible Study</p>
              <p className="text-primary-foreground">6:30 PM</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
