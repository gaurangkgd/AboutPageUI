import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesOfferedSection = () => {
  const serviceCards = [
    {
      title: "RESIDENTIAL CONSTRUCTION:",
      description: "Independent homes, apartment buildings, villas.",
      size: "regular",
    },
    {
      title: "COMMERCIAL PROJECTS:",
      description: "Offices, showrooms, business parks, retail spaces.",
      size: "large",
    },
    {
      title: "INSTITUTIONAL CONSTRUCTION:",
      description: "Schools, colleges, training centers, hospitals.",
      size: "regular",
    },
  ];

  return (
    <section className="flex justify-center gap-12 py-16 w-full">
      <div className="flex gap-12 max-w-[1523px]">
        {serviceCards.map((card, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden rounded-[34px] shadow-md ${
              card.size === "large"
                ? "w-[529px] h-[744px]"
                : "w-[450px] h-[636px] my-[55px]"
            }`}
          >
            <CardContent className="p-0 h-full">
              <div className="relative h-full">
                <img
                  className="absolute w-full h-full object-cover"
                  alt="Workers construction"
                  src="https://c.animaapp.com/mdvey2vvsTasLU/img/workers-construction-site-1-2.png"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 ${
                    card.size === "large" ? "h-[415px]" : "h-[283px]"
                  } bg-gradient-to-t from-transparent to-black/70`}
                />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3
                    className={`font-bold font-['Antonio',Helvetica] tracking-tight mb-4 ${
                      card.size === "large"
                        ? "text-[53.6px] tracking-[-1.07px]"
                        : "text-[41.1px] tracking-[-0.82px]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`font-['Source_Sans_Pro',Helvetica] ${
                      card.size === "large"
                        ? "text-[35.1px] leading-[39px]"
                        : "text-[27.3px] leading-[29.3px]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
