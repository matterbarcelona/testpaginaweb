import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo funciona el servicio de muestras en 24 h?",
      answer: "Una vez seleccionas los materiales en nuestra biblioteca o con ayuda de nuestro equipo, procesamos tu pedido y enviamos las muestras físicas en un plazo máximo de 24 horas laborables. Puedes recibirlas en tu estudio o recogerlas en nuestras materiotecas.",
    },
    {
      question: "¿Podéis ayudarme a encontrar equivalencias si un material no llega a tiempo?",
      answer: "Absolutamente. Nuestro equipo técnico está especializado en encontrar alternativas equivalentes que cumplan las mismas especificaciones técnicas, estéticas y normativas. Trabajamos con más de 900 fabricantes, lo que nos permite ofrecer soluciones ágiles ante imprevistos.",
    },
    {
      question: "¿Ofrecéis asesoramiento técnico durante la obra?",
      answer: "Sí. Acompañamos el proyecto desde la especificación hasta la instalación. Nuestro equipo técnico puede resolver dudas de puesta en obra, validar instalaciones y coordinar con el constructor para garantizar que el material se aplique correctamente.",
    },
    {
      question: "¿Puedo visitar la materioteca con mi cliente?",
      answer: "Por supuesto. Nuestras materiotecas en Barcelona, Madrid y Sotogrande están diseñadas para inspirar. Puedes reservar visitas privadas con tus clientes, donde nuestro equipo os presentará materiales curados específicamente para vuestro proyecto.",
    },
    {
      question: "¿Tiene coste vuestro servicio de consultoría?",
      answer: "El servicio de consultoría, asesoramiento técnico y envío de muestras es gratuito para arquitectos e interioristas. Solo facturamos si decides hacer el suministro del material a través de nosotros, con precios competitivos y transparentes.",
    },
  ];

  return (
    <section 
      id="faq-pres"
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="faq-heading"
          className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground text-balance"
        >
          Preguntas frecuentes de arquitectos
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-line rounded-lg px-6 bg-background hover:border-accent transition-colors duration-300"
              >
                <AccordionTrigger 
                  className="text-left text-foreground hover:text-accent hover:no-underline py-6"
                  onClick={() => {
                    analyticsEvents.trackEvent('faq_toggle', {
                      question: faq.question,
                      location: 'faq_prescriptores'
                    });
                  }}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent 
                  id={`faq-content-${index}`}
                  className="text-muted-foreground leading-relaxed pb-6"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA después de FAQ */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                analyticsEvents.trackEvent('cta_click', {
                  label: 'Hablar con un consultor',
                  location: 'faq_prescriptores'
                });
                window.location.href = '/contacto?tipo=prescriptor';
              }}
              data-analytics="cta_click"
              data-label="Hablar con un consultor - FAQ"
              aria-label="Hablar con un consultor de materiales"
            >
              Hablar con un consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
