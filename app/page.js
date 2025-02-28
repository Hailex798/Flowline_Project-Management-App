"use client";

import Link from "next/link";
import { Layout, Calendar, BarChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/CompanyCarousel";
import faq from "@/data/faq.json";

//     FEATURE SECTION DATA ->
const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  // const cardRef = useRef(null);

  // useEffect(() => {
  //   const cardElement = cardRef.current;

  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const scrollThreshold = 100;

  //     if (scrollPosition > scrollThreshold) {
  //       cardElement.classList.add("scrolled");
  //     } else {
  //       cardElement.classList.remove("scrolled");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Workflow <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with <span className="text-[#b43cff] glow-effect">Flowline</span>
          </span>
        </h1>
        <p className="text-md sm:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Empower your team with our intuitive project management solution.
        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
        <div className="flex flex-row flex-wrap justify-center gap-4 xs:gap-8">
          <Link href="/onboarding">
            <Button
              size="lg"
              className="transform transition duration-500 xs:scale-105 hover:scale-125"
            >
              Get Started <ArrowRight size={18} className="ml-1" />
            </Button>
          </Link>
          <Link href="#features">
            <Button
              size="lg"
              variant="secondary"
              className="transform transition duration-500 xs:scale-105 hover:scale-125"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-[#0f0316] py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Key Features</h3>
          <div className="card-wrapper grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card bg-gray-800 transform transition duration-500 hover:scale-110"
              >
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-[#b43cff]" />
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY CAROUSEL */}
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQs SECTION */}
      <section className="bg-[#0f0316] py-20 px-5">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#b43cff]">
            FAQs
          </h1>
          <h3 className="text-2xl mb-12 text-center">
            (Frequently Asked Questions)
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl !no-underline hover:text-[#b43cff]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-6 text-[#b43cff]">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using FlowLine to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
