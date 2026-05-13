import { Hero } from '../components/Hero';
import { CTABlock } from '../components/CTABlock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const faqs = [
  {
    question: 'Do you have multiple photographers and videographers?',
    answer: 'Yes! 223Visions operates as a creative agency with a network of talented professionals. We assign the right team members based on your project\'s specific needs, style, and scope. This ensures you get the perfect fit every time.',
  },
  {
    question: 'Can I meet my photographer or videographer before the shoot?',
    answer: 'Absolutely! We encourage pre-shoot consultations where you can meet your assigned team members, discuss your vision, and plan the details. This helps ensure everyone is on the same page and comfortable working together.',
  },
  {
    question: 'How does the booking process work?',
    answer: 'Simply contact us through our website or by phone to discuss your project. We\'ll provide a quote, assign the right team, and send you a contract. A deposit secures your date, and we\'ll handle all the details from there.',
  },
  {
    question: 'What\'s the turnaround time for receiving my photos or videos?',
    answer: 'Turnaround times vary by project type. For photography, expect 2-4 weeks for full editing and delivery. Weddings typically take 3-4 weeks. Videography projects can take 4-6 weeks depending on complexity. Rush delivery is available for an additional fee.',
  },
  {
    question: 'What geographic areas do you serve?',
    answer: 'We\'re based in Atlanta and primarily serve the Atlanta metro area and throughout Georgia. However, we\'re available for travel projects anywhere in the US. Travel fees may apply for locations outside our primary service area.',
  },
  {
    question: 'Do you provide RAW files or unedited footage?',
    answer: 'Our standard packages include professionally edited final deliverables. RAW files and unedited footage can be provided for an additional fee. We believe our professional editing adds significant value to your investment.',
  },
  {
    question: 'What happens if my photographer or videographer can\'t make it?',
    answer: 'As an agency, we always have backup professionals available. If your assigned team member has an emergency, we\'ll immediately assign an equally qualified replacement. You\'re covered no matter what.',
  },
  {
    question: 'Can you accommodate specific style requests?',
    answer: 'Definitely! During our consultation, share examples of styles you love. We\'ll match you with team members whose portfolio aligns with your vision and ensure we capture exactly what you\'re looking for.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans for most projects. Typically, we require a 50% deposit to secure your date, with the balance due before or on the day of the shoot. Custom payment arrangements can be discussed.',
  },
  {
    question: 'What\'s your cancellation and rescheduling policy?',
    answer: 'Cancellations made 30+ days before your shoot receive a full refund minus a small processing fee. Cancellations within 30 days may forfeit the deposit. We\'re happy to reschedule due to emergencies or weather with no additional fees.',
  },
];

export function FAQ() {
  return (
    <>
      <Hero
        headline="Your Questions, Answered by Our Team"
        subheadline="Everything you need to know about working with 223Visions."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="opacity-70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABlock
        headline="Still Have Questions?"
        description="We're here to help! Reach out and we'll get back to you as soon as possible."
        ctaText="Contact Us"
        ctaLink="/contact"
        variant="dark"
      />
    </>
  );
}
