// FAQ.jsx

const FAQ_ITEMS = [
  { q: 'How does the free trial work?',
    a: 'You get 1 free image generation and 1 free song when you sign up. No credit card required. If you love your card, you can purchase it and we\u2019ll print and mail it.' },
  { q: 'What does a Souvenote card look like?',
    a: 'Each card is unique, featuring your chosen template, personalized with your photos and message, and accompanied by a song you choose.' },
  { q: 'Can I preview my card before purchasing?',
    a: 'Yes! You can see a full preview before committing to a purchase.' },
];

export default function FAQ() {
  return (
    <section className="so-faq">
      <h2>FAQ</h2>
      <dl className="so-faq-list">
        {FAQ_ITEMS.map(({ q, a }, i) => (
          <div key={i} className="so-faq-item">
            <dt className="so-faq-question">{q}</dt>
            <dd className="so-faq-answer">{a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
