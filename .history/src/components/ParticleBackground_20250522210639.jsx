import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Configuración
    const particleCount = 50;
    const particles = [];
    const colors = ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784'];
    
    // Función para ajustar el tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Crea partículas iniciales
    const initParticles = () => {
      particles.length = 0; // Limpiar array existente
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };
    
    // Dibuja y actualiza partículas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${p.opacity})`;
        ctx.fill();
        
        // Mover partícula
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Rebotar en los bordes
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    // Convertir hex a rgb
    function hexToRgb(hex) {
      // Elimina el # si existe
      hex = hex.replace('#', '');
      
      // Convierte a RGB
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      return `${r}, ${g}, ${b}`;
    }
    
    // Inicializar
    resizeCanvas();
    initParticles();
    drawParticles();
    
    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
}