import React from 'react';
import '../styles/Features.css';

export default function Features({ items }) {
  const features = items ?? [
    {
      id: 1,
      title: '40x More Nutrients',
      description:
        "Microgreens contain up to 40 times more nutrients than their mature counterparts.",
      icon: '🌱',
    },
    {
      id: 2,
      title: 'Rapid Growth',
      description: 'Harvested in just 7–14 days, ensuring peak freshness and nutrition.',
      icon: '🚀',
    },
    {
      id: 3,
      title: 'Pesticide-Free',
      description:
        'Grown in our controlled indoor environment without harmful chemicals.',
      icon: '🌿',
    },
    {
      id: 4,
      title: 'Locally Grown',
      description:
        'Grown right here in your community, reducing food miles and carbon footprint.',
      icon: '📍',
    },
    {
      id: 5,
      title: 'Sustainable',
      description: 'Uses ~95% less water than traditional farming methods.',
      icon: '💚',
    },
    {
      id: 6,
      title: 'Versatile',
      description: 'Perfect for salads, sandwiches, smoothies, and gourmet plating.',
      icon: '🍽️',
    },
  ];

  return (
    <section className="features-section" aria-labelledby="features-heading">
      <div className="features-inner">
        <h2 id="features-heading" className="features-title">
          Why Choose Indoor Kisan?
        </h2>
        <p className="features-subtitle">
          Our microgreens aren't just food — they're a superfood revolution that's transforming how we think about nutrition.
        </p>

        <div className="features-grid" role="list">
          {features.map((f) => (
            <article key={f.id} className="feature-card" role="listitem">
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <h3 className="feature-name">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}