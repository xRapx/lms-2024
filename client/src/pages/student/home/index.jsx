import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import banner from "/src/assets/image/banner-img.png";

import { getDataDemo } from "@/services";
import {
  ArrowRight,
  CheckCircle,
  Coffee,
  Globe,
  Stars,
  Zap,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TypeWrite from "@/components/TypeWrite";
import { courseCategories } from "@/config";

function StudentHomePage() {
  // state
  const [certificate, setCertificate] = useState([]);
  const [listSubject, setListSubject] = useState([]);
  console.log(certificate);
  console.log(listSubject);

  // type write component
  const words1 = ["Learning thet gets you"];
  const words2 = ["Transform Your Learning Process"];

  const navigate = useNavigate();

  // fetch certificate
  async function fetchCertificate() {
    const response = await getDataDemo();
    if (response?.success) {
      setCertificate(response?.data);
    }
  }

  function handleNavigate() {
    navigate("/courses");
  }

  useEffect(() => {
    fetchCertificate();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="flex flex-col lg:flex-row items-center justify-between py-8 px-4 lg:px-8">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl font-bold mb-4">
            <TypeWrite words={words1} />
          </h1>
          <p className="text-xl">
            Skills for your present and your future. Get Started with US
          </p>
        </div>
        <div className="lg:w-full mb-8 lg:mb-0">
          <img
            src={banner}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="py-8 px-4 lg:px-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Certificate Course</h2>
        <div className="flex justify-center items-center">
          <Carousel className="w-[80%]  ">
            <CarouselContent className="-ml-1">
              {certificate.map((cert) => (
                <CarouselItem
                  key={cert._id}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="hover:shadow-lg transform  rounded-xl bg-white shadow-xl transition duration-300 hover:scale-105">
                      <CardHeader>
                        <Stars className="text-green-500" />
                        <span className="text-2xl font-semibold ml-2">
                          {cert.name}
                        </span>
                      </CardHeader>

                      <CardContent className="flex w items-center justify-center p-6">
                        <CardDescription>
                          Experience unparalleled speed and efficiency.
                        </CardDescription>
                      </CardContent>

                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="hover:bg-gray-950 hover:text-white"
                          onClick={() => handleNavigate()}
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container px-4 md:px-6">
          {/* Hero Area */}
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <TypeWrite words={words2}/>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Boost productivity and streamline your processes with our
              cutting-edge platform.
            </p>
            <div className="space-x-4">
              <Button onClick={() => handleNavigate()}>Get Started</Button>
              <Button variant="outline" onClick={() => handleNavigate()}>
                Learn More
              </Button>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            <Card>
              <CardHeader>
                <Zap className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Experience unparalleled learning speed and efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Our platform is optimized for performance, ensuring that you can
                work without any delays or interruptions.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" onClick={() => handleNavigate()}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Global Reach</CardTitle>
                <CardDescription>
                  Connect with teams and clients worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent>
                With our robust infrastructure, you can collaborate seamlessly
                across different time zones and locations.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" onClick={() => handleNavigate()}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Coffee className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Easy to Use</CardTitle>
                <CardDescription>
                  Intuitive interface for all skill levels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                Our user-friendly design ensures that everyone on your team can
                get up to speed quickly and easily.
              </CardContent>
              <CardFooter>
                <Button variant="ghost" onClick={() => handleNavigate()}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Tabbed Content */}
          <Tabs defaultValue="individuals" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="individuals">For Individuals</TabsTrigger>
              <TabsTrigger value="teams">For Teams</TabsTrigger>
            </TabsList>
            <TabsContent value="individuals">
              <Card>
                <CardHeader>
                  <CardTitle>Empower Your Personal Workflow</CardTitle>
                  <CardDescription>
                    Tailored solutions for individual professionals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                      Personalized dashboard
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                      Custom task management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                      Individual progress tracking
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Start Free Trial</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="teams">
              <Card>
                <CardHeader>
                  <CardTitle>Supercharge Your Team's Productivity</CardTitle>
                  <CardDescription>
                    Collaborative tools for seamless teamwork.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                      Team workspaces
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                      Real-time collaboration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />{" "}
                      Advanced permission settings
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Schedule Demo</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">
              Join thousands of satisfied users and transform your workflow
              today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                className="max-w-xs"
                placeholder="Enter your email"
                type="email"
              />
              <Button variant="secondary">Sign Up Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentHomePage;
