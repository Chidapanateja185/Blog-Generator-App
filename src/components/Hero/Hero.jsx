import React from 'react'
import "./Hero.css";
import Button from '../ui/Button/Button';


function Hero({title, description, variant = "home", children, btn}) {
  return (
    <section className={`hero hero--${variant}`}>
        
        {btn && (
          <Button variant='about'>{btn}</Button>
        )}
        <h1 className="hero__title">
          {title}
        </h1>
          {description && (
            <p className="hero__description">
              {description}
            </p>
          )}

        {children && (
        <div className="hero__content">
          {children}
        </div>
      )}
    </section>
  )
}

export default Hero;
