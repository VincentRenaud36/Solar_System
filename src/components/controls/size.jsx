const scale = 8000000;
export const sunSize = logScale(1392000,0.7); // Taille réelle du soleil en km
export const mercurySize = logScale(4879, 0.09); // Taille réelle de Mercure en km
export const venusSize = logScale(12104, 0.3); // Taille réelle de Venus en km
export const earthSize = logScale(12756,0.3); // Taille réelle de la Terre en km
export const marsSize = logScale(6792,0.3); // Taille réelle de Mars en km
export const jupiterSize = logScale(142984, 0.6); // Taille réelle de Jupiter en km
export const saturnSize = logScale(120536, 0.4); // Taille réelle de Saturne en km
export const uranusSize = logScale(51118, 0.4); // Taille réelle d'Uranus en km
export const neptuneSize = logScale(49528,0.4); // Taille réelle de Neptune en km
export const moonSize = logScale(3474); // Taille réelle de la Lune en km

export const mercuryDistance = 57910000 / scale; // Distance réelle de Mercure en km
export const venusDistance = 108200000 / scale; // Distance réelle de Venus en km
export const earthDistance = 149600000 / scale; // Distance réelle de la Terre en km
export const marsDistance = (227900000 / scale) / 1.15; // Distance réelle de Mars en km
export const jupiterDistance = (778330000 / scale) / 2.5; // Distance réelle de Jupiter en km
export const saturnDistance = (1429400000 / scale) / 3.5; // Distance réelle de Saturne en km
export const uranusDistance = 2870990000 / scale / 5// Distance réelle d'Uranus en km
export const neptuneDistance = (4497100000 / scale) / 6; // Distance réelle de Neptune en km
export const moonDistance = logScale(384400); // Distance réelle de la Lune en km

export const mercuryRotation = 0.5 / 5.86; // Vitesse de rotation de Mercure
export const venusRotation = 0.5 / 2.43; // Vitesse de rotation de Venus
export const earthRotation = 0.5 / 1; // Vitesse de rotation de la Terre
export const marsRotation = 0.5 / 1.03; // Vitesse de rotation de Mars
export const jupiterRotation = 0.5 / 0.41; // Vitesse de rotation de Jupiter
export const saturnRotation = 0.5 / 0.45; // Vitesse de rotation de Saturne
export const uranusRotation = 0.5 / 0.72; // Vitesse de rotation d'Uranus
export const neptuneRotation = 0.5 / 0.67; // Vitesse de rotation de Neptune
export const moonRotation = 0.5 / 27.3; // Vitesse de rotation de la Lune

// Autour du soleil
export const mercuryOrbit = 0.2 / 0.24; // Vitesse de rotation de Mercure
export const venusOrbit = 0.2 / 0.62; // Vitesse de rotation de Venus
export const earthOrbit = 0.2 / 1; // Vitesse de rotation de la Terre
export const marsOrbit = 0.2 / 1.88; // Vitesse de rotation de Mars
export const jupiterOrbit = 0.2 / 11.86; // Vitesse de rotation de Jupiter
export const saturnOrbit = 0.2 / 29.46; // Vitesse de rotation de Saturne
export const uranusOrbit = 0.2 / 84.01; // Vitesse de rotation d'Uranus
export const neptuneOrbit = 0.2 / 164.8; // Vitesse de rotation de Neptune
export const moonOrbit = 0.2 / 27.3; // Vitesse de rotation de la Lune

export function logScale(size, test = 1) {
    const logSize = Math.log10(size);
    return logSize * test;
}