import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const VisionMissionSection = () => {
  // Navigation menu items
  const navItems = [
    { text: "Home", href: "#" },
    { text: "About", href: "#" },
    { text: "Services", href: "#" },
    { text: "Projects", href: "#" },
  ];

  return (
    <section className="absolute top-0 left-0 w-full h-[987px] bg-cover bg-center" style={{
      backgroundImage: "url('https://c.animaapp.com/mdvey2vvsTasLU/img/image.png')"
    }}>
      {/* Navigation Bar */}
      <nav className="absolute top-[76px] left-[156px] right-[156px] flex items-center justify-between">
        <img
          className="h-[77px] w-[126px]"
          alt="DP Associates Logo"
          src="https://c.animaapp.com/mdvey2vvsTasLU/img/image-188.png"
        />

        <div className="flex items-center gap-[32px]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-['Source_Sans_Pro',Helvetica] text-[25.2px] text-white"
            >
              {item.text}
            </a>
          ))}

          <Button className="ml-[32px] h-[53px] w-[192px] rounded-[36px] bg-[#473018] font-['Source_Sans_Pro',Helvetica] text-[28.8px] text-white">
            Contact us
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        {/* Heading with highlight */}
        <div className="relative mb-[64px] text-center">
          <h1 className="font-['Antonio',Helvetica] text-[100px] font-bold leading-tight tracking-[-2.00px] text-white text-shadow-[0px_4px_4px_#00000080]">
            we bring over <br />
            <span className="relative">
              35 years
              <div className="absolute -z-10 h-[128px] w-[362px] -translate-x-1/2 rounded-[30px] bg-[#7d5226] left-1/2 top-1/2 -translate-y-1/2"></div>
            </span>
            &nbsp;&nbsp;of experience
          </h1>
        </div>

        {/* Description */}
        <p className="mb-[64px] max-w-[1200px] text-center font-['Source_Sans_Pro',Helvetica] text-[32px] leading-[35px] text-white">
          DP Associates is a well-established construction firm operating out of
          Delhi NCR. With a strong commitment to quality, professionalism, and
          client satisfaction, we specialize in residential, commercial, and
          public infrastructure projects. Our team blends years of experience
          with modern techniques to create structures that are not just strong,
          but sustainable and efficient.
        </p>

        {/* Tabs */}
        <Tabs defaultValue="vision" className="w-[400px] mb-[32px]">
          <TabsList className="grid w-full grid-cols-2 h-[48px]">
            <TabsTrigger
              value="vision"
              className="bg-white font-['Source_Sans_Pro',Helvetica] text-[20px] font-bold uppercase"
            >
              Vision
            </TabsTrigger>
            <TabsTrigger
              value="mission"
              className="bg-white font-['Source_Sans_Pro',Helvetica] text-[20px] font-bold uppercase"
            >
              Mission
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-[48px]">
          <button className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-[0.8px] border-solid border-white">
            <ChevronLeftIcon className="h-[23px] w-[14px] text-white" />
          </button>
          <button className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-[0.8px] border-solid border-white">
            <ChevronRightIcon className="h-[23px] w-[14px] text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
