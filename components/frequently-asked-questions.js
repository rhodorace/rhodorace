import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";

export function FrequentlyAskedQuestions() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="relative bg-gray-50 py-24 px-4">
        <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray" className="mb-3">
        "Често задавани въпроси"
      </Typography>
    </div>
      <div className="container mx-auto">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>Какъв е маршрутът на маратона в Родопите?</AccordionHeader>
          <AccordionBody>
            Маратонът в Родопите предлага няколко различни маршрута за участниците, включително къс маратон, полумаратон и маршрут за разходки.
            Точните маршрути се обявяват преди събитието и могат да бъдат намерени на нашата уеб страница и в информационния пакет.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Каква е цената за участие и как мога да се регистрирам?
          </AccordionHeader>
          <AccordionBody>
            Цените за участие в маратона в Родопите варират в зависимост от избрания маршрут и категорията на участник (възрастова група и други фактори).
            За актуална информация относно цените и начина на регистрация, моля, посетете нашата уеб страница и следвайте инструкциите за регистрация.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Има ли настаняване и транспорт за участниците извън Момчилград?
          </AccordionHeader>
          <AccordionBody>
            Да, организираме настаняване и предоставяме информация за транспорт за участниците, които идват извън Момчилград.
            Можете да се свържете с нашия екип за организация на събитието,
            за да научите повече подробности и да резервирате настаняване или се консултирате относно транспортните опции.
          </AccordionBody>
        </Accordion>
      </div>
    </section>
  );
}