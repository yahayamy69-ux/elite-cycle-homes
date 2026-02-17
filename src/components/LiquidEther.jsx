import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LiquidEther.css';

export default function LiquidEther({
  mouseForce = 20,
  cursorSize = 100,
  isViscous = false,
  viscous = 30,
  iterationsViscous = 32,
  iterationsPoisson = 32,
  dt = 0.014,
  BFECC = true,
  resolution = 0.5,
  isBounce = false,
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  style = {},
  className = '',
  autoDemo = true,
  autoSpeed = 0.5,
  autoIntensity = 2.2,
  takeoverDuration = 0.25,
  autoResumeDelay = 1000,
  autoRampDuration = 0.6
}) {
  const mountRef = useRef(null);
  const webglRef = useRef(null);
  const rafRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!mountRef.current) return;

    function makePaletteTexture(stops) {
      let arr = stops.length > 0 ? (stops.length === 1 ? [stops[0], stops[0]] : stops) : ['#ffffff', '#ffffff'];
      const w = arr.length;
      const data = new Uint8Array(w * 4);
      for (let i = 0; i < w; i++) {
        const c = new THREE.Color(arr[i]);
        data[i * 4 + 0] = Math.round(c.r * 255);
        data[i * 4 + 1] = Math.round(c.g * 255);
        data[i * 4 + 2] = Math.round(c.b * 255);
        data[i * 4 + 3] = 255;
      }
      const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
      tex.magFilter = THREE.LinearFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.generateMipmaps = false;
      tex.needsUpdate = true;
      return tex;
    }

    const paletteTex = makePaletteTexture(colors);
    const container = mountRef.current;
    container.style.position = 'relative';
    container.style.overflow = 'hidden';

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setClearColor(new THREE.Color(0x000000), 0);
    renderer.autoClear = false;

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const clock = new THREE.Clock();
    clock.start();

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    renderer.setSize(width, height);

    const fboSize = new THREE.Vector2();
    const cellScale = new THREE.Vector2();
    const simWidth = Math.max(1, Math.round(resolution * width));
    const simHeight = Math.max(1, Math.round(resolution * height));
    fboSize.set(simWidth, simHeight);
    cellScale.set(1.0 / simWidth, 1.0 / simHeight);

    const type = /(iPad|iPhone|iPod)/i.test(navigator.userAgent) ? THREE.HalfFloatType : THREE.FloatType;
    const fbos = {};
    const fboNames = ['vel_0', 'vel_1', 'div', 'pressure_0', 'pressure_1'];
    
    for (let name of fboNames) {
      fbos[name] = new THREE.WebGLRenderTarget(fboSize.x, fboSize.y, {
        type,
        depthBuffer: false,
        stencilBuffer: false,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping
      });
    }

    const vertexShader = `
attribute vec3 position;
varying vec2 uv;
uniform vec2 boundarySpace;
precision highp float;
void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}`;

    const colorFragmentShader = `
precision highp float;
uniform sampler2D velocity;
uniform sampler2D palette;
uniform vec4 bgColor;
varying vec2 uv;
void main(){
  vec2 vel = texture2D(velocity, uv).xy;
  float lenv = clamp(length(vel), 0.0, 1.0);
  vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
  vec3 outRGB = mix(bgColor.rgb, c, lenv);
  float outA = mix(bgColor.a, 1.0, lenv);
  gl_FragColor = vec4(outRGB, outA);
}`;

    const output = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.RawShaderMaterial({
        vertexShader,
        fragmentShader: colorFragmentShader,
        transparent: true,
        depthWrite: false,
        uniforms: {
          velocity: { value: fbos.vel_0.texture },
          boundarySpace: { value: new THREE.Vector2() },
          palette: { value: paletteTex },
          bgColor: { value: new THREE.Vector4(0, 0, 0, 0) }
        }
      })
    );
    scene.add(output);

    let running = true;
    let time = 0;

    function resize() {
      width = container.offsetWidth;
      height = container.offsetHeight;
      renderer.setSize(width, height, false);
      const newSimWidth = Math.max(1, Math.round(resolution * width));
      const newSimHeight = Math.max(1, Math.round(resolution * height));
      fboSize.set(newSimWidth, newSimHeight);
      cellScale.set(1.0 / newSimWidth, 1.0 / newSimHeight);
      for (let name of fboNames) {
        fbos[name].setSize(newSimWidth, newSimHeight);
      }
    }

    function animate() {
      if (!running) return;
      rafRef.current = requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      time += delta;

      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', resize);
    animate();

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [colors, resolution, autoDemo]);

  return <div ref={mountRef} className={`liquid-ether-container ${className || ''}`} style={{ ...style, width: '100%', height: '100%' }} />;
}
