import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Preguntas frecuentes de arquitectos.
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background hover:border-accent transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
