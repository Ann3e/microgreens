import React from 'react'
import '../styles/Process.css'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Seed Selection',
      desc:
        'We carefully select premium, organic seeds from trusted suppliers for optimal germination and nutrition.',
    },
    {
      number: '02',
      title: 'Indoor Growing',
      desc:
        'Seeds are grown in our state-of-the-art indoor facility with precise climate and lighting control.',
    },
    {
      number: '03',
      title: 'Harvesting',
      desc:
        'Microgreens are harvested at peak nutrition (7-14 days) when nutrient density is highest.',
    },
    {
      number: '04',
      title: 'Fresh Delivery',
      desc:
        'Packaged immediately and delivered fresh to your door within hours of harvesting.',
    },
  ]

  return (
    <section className="process-section" aria-labelledby="process-heading">
      <div className="container">
        <h2 id="process-heading" className="process-title">
          From <span className="highlight">Seed</span> to <span className="highlight">Table</span>
        </h2>
        <p className="process-subtitle">
          Our carefully controlled process ensures you get the freshest, most nutritious microgreens possible.
        </p>

        <div className="process-grid">
          {steps.map((s, idx) => (
            <div className="process-step" key={idx}>
              <div className="step-top">
                <div className="line left" aria-hidden={idx === 0} />
                <div className="step-circle" aria-hidden="true">
                  {s.number}
                </div>
                <div className="line right" aria-hidden={idx === steps.length - 1} />
              </div>

              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
