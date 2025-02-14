import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FinalYearProjects = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Final Year Project Development</h1>
      <p className="text-lg text-center mb-8">We provide high-quality AI and Full-Stack development projects for final-year students.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">AI Projects</h2>
            <p className="mb-4">Explore innovative AI-based projects, including machine learning models, deep learning applications, and automation solutions.</p>
            <Button>Learn More</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Full-Stack Projects</h2>
            <p className="mb-4">Get hands-on experience with full-stack development using modern frameworks and technologies.</p>
            <Button>Learn More</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
        <p className="text-center mb-6">Fill out the form below to inquire about our projects.</p>
        <div className="flex flex-col space-y-4">
          <Input type="text" placeholder="Your Name" className="p-2 border rounded" />
          <Input type="email" placeholder="Your Email" className="p-2 border rounded" />
          <Input type="text" placeholder="Your Project Interest" className="p-2 border rounded" />
          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default FinalYearProjects;
