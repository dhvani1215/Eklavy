
import React, { ReactNode, useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-left' | 'pulse-scale';

interface AnimatedElementProps {
  children: ReactNode;
  animation: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimatedElement = ({ 
  children, 
  animation, 
  delay = 0, 
  duration = 500, 
  className = ''
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    return `animate-${animation}`;
  };

  const getStyle = () => {
    return {
      animationDelay: `${delay}ms`,
      animationDuration: `${duration}ms`,
    };
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={getStyle()}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
