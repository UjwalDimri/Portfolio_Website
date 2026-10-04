import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export const CanvasStarfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const STAR_COUNT = Math.min(140, Math.floor((width * height) / 12000));
    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 0.8 + 0.2,
          radius: Math.random() * 1.2 + 0.4,
          baseAlpha: Math.random() * 0.5 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    initStars();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle celestial gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.2,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, 'rgba(16, 185, 129, 0.04)');
      bgGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.015)');
      bgGrad.addColorStop(1, 'rgba(9, 9, 11, 0)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      time += 0.015;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.y -= 0.15 * star.z;
          if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
          }

          // Gentle parallax shift from mouse
          if (mouseRef.current.active) {
            const dx = (mouseRef.current.x - width / 2) * 0.015 * star.z;
            const dy = (mouseRef.current.y - height / 2) * 0.015 * star.z;
            star.x += (star.x - dx * 0.1 > width ? -width : 0);
          }
        }

        const alpha =
          star.baseAlpha +
          Math.sin(star.twinklePhase + time * (star.twinkleSpeed * 50)) * 0.25;
        const clampedAlpha = Math.max(0.1, Math.min(0.85, alpha));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 235, 245, ${clampedAlpha})`;
        ctx.shadowBlur = star.radius > 1 ? 4 : 0;
        ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    if (prefersReducedMotion) {
      render();
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInteractive]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-70 transition-opacity duration-700"
      />
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/40 to-[#09090b]" />
    </div>
  );
};
