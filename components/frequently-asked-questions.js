import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PageTitle from "@/components/layout/page-title";

export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
   <section className="relative bg-gray-50 py-24 px-4">
   <PageTitle heading="Често задавани въпроси"/>
      <div className="container mx-auto">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </section>
  );
}