import React, { useCallback, useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const particleCount = 500; // Optimized particle count
  const maxRadius = 0.5;
  const minRadius = 0.2;
  const maxVelocity = 0.4;

  const createParticle = (canvas) => {
    const radius = Math.random() * (maxRadius - minRadius) + minRadius;
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: radius,
      vx: (Math.random() - 0.5) * maxVelocity, // velocity x
      vy: (Math.random() - 0.5) * maxVelocity, // velocity y
      // alpha: Math.random() * 0.3 + 0.5, // opacity
      alpha: 1,
    };
  };

  const updateParticle = (particle, canvas) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Wrap particles around the canvas
    if (particle.x - particle.radius > canvas.width)
      particle.x = -particle.radius;
    if (particle.x + particle.radius < 0)
      particle.x = canvas.width + particle.radius;
    if (particle.y - particle.radius > canvas.height)
      particle.y = -particle.radius;
    if (particle.y + particle.radius < 0)
      particle.y = canvas.height + particle.radius;
  };

  const drawParticle = (ctx, particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
    ctx.fill();
  };

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.current.forEach((particle) => {
      updateParticle(particle, canvas);
      drawParticle(ctx, particle);
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 700;
      // Re-initialize particles on resize to distribute them correctly
      particles.current = Array.from({ length: particleCount }, () =>
        createParticle(canvas),
      );
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialize particles
    particles.current = Array.from({ length: particleCount }, () =>
      createParticle(canvas),
    );

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute w-full top-0 left-0 right-0 h-[140vh] z-60"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground;
