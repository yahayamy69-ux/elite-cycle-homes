import { useEffect, useRef } from 'react';

function LightPillar({
  topColor = '#5227FF',
  bottomColor = '#FF9FFC',
  intensity = 1,
  rotationSpeed = 0.3,
  glowAmount = 0.002,
  pillarWidth = 3,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  pillarRotation = 25,
  interactive = false,
  mixBlendMode = 'screen',
  quality = 'high'
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * (quality === 'high' ? 2 : 1);
      canvas.height = canvas.offsetHeight * (quality === 'high' ? 2 : 1);
      ctx.scale(quality === 'high' ? 2 : 1, quality === 'high' ? 2 : 1);
    };

    setCanvasSize();

    let animationFrame;
    let rotation = pillarRotation;
    let time = 0;

    const drawPillar = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate((rotation * Math.PI) / 180);

      const pillarW = pillarWidth;
      const pillarH = height * pillarHeight;

      // Create gradient for pillar
      const gradient = ctx.createLinearGradient(0, -pillarH / 2, 0, pillarH / 2);
      gradient.addColorStop(0, topColor);
      gradient.addColorStop(0.5, bottomColor);
      gradient.addColorStop(1, topColor);

      // Draw pillar with glow
      ctx.fillStyle = gradient;
      ctx.globalAlpha = intensity * 0.8;
      ctx.fillRect(-pillarW / 2, -pillarH / 2, pillarW, pillarH);

      // Add glow effect
      ctx.globalAlpha = intensity * glowAmount * 100;
      ctx.fillStyle = bottomColor;
      ctx.filter = `blur(20px)`;
      ctx.fillRect(-pillarW / 2 - 20, -pillarH / 2 - 20, pillarW + 40, pillarH + 40);

      ctx.filter = 'none';
      ctx.restore();

      rotation += rotationSpeed;
      time += 0.016;

      animationFrame = requestAnimationFrame(drawPillar);
    };

    drawPillar();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, [topColor, bottomColor, intensity, rotationSpeed, glowAmount, pillarWidth, pillarHeight, quality]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        mixBlendMode: 'screen'
      }}
    />
  );
}

export default LightPillar;
