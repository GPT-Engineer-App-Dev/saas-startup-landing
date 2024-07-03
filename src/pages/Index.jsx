import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("features");

  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="flex justify-between items-center py-6">
        <div className="text-2xl font-bold">SaaS Startup</div>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <Button variant="outline">Sign Up</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Our SaaS Product</h1>
        <p className="text-lg">The best solution for your business needs.</p>
        <Button size="lg">Get Started</Button>
        <img width="600" height="400" src="/placeholder.svg" alt="placeholder" />
      </section>

      {/* Features Section */}
      <section id="features" className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Customer 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"This product is amazing!"</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Customer 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"It has changed the way we do business."</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardHeader>
                  <CardTitle>Customer 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>"Highly recommend to everyone."</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <ul>
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="outline">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <ul>
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="outline">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <ul>
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button variant="outline">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-4 text-center py-6">
        <div className="text-2xl font-bold">SaaS Startup</div>
        <nav className="space-x-4">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
        </nav>
        <div className="space-x-4">
          <a href="#facebook" className="hover:underline">Facebook</a>
          <a href="#twitter" className="hover:underline">Twitter</a>
          <a href="#linkedin" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;