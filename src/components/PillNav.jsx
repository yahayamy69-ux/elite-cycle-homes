import { useState, useEffect } from 'react';
import styles from './PillNav.module.css';

function PillNav({ 
  logo,
  logoAlt = "Logo",
  items = [],
  activeHref = "/",
  className = "",
  baseColor = "#2563eb",
  pillColor = "#ffffff",
  pillTextColor = "#2563eb",
  hoveredPillTextColor = "#ffffff",
  currentPage = 'home',
  onNavigate = () => {}
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (pageName) => (e) => {
    e.preventDefault();
    onNavigate(pageName);
  };

  return (
    <nav className={`${styles.pillNav} ${className} ${!isVisible ? styles.hidden : ''}`} style={{ backgroundColor: baseColor }}>
      <div className={styles.container} style={{ position: 'relative', zIndex: 2 }}>
        {/* Navigation Items */}
        <div className={styles.navItems}>
          {items.map((item, index) => {
            const isActive = currentPage === item.pageName;
            return (
              <a
                key={index}
                href={item.href}
                onClick={handleNavClick(item.pageName)}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                style={
                  isActive || hoveredIndex === index
                    ? {
                        backgroundColor: pillColor,
                        color: hoveredIndex === index ? hoveredPillTextColor : pillTextColor,
                      }
                    : { color: '#ffffff' }
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default PillNav;
