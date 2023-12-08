import React, { useState, useEffect } from 'react';

export function InfoPlanet({nom, onClose}){

    const [planetData, setPlanetData] = useState({
        name: '',
        moons: '',
        mass: '',
        vol: '',
        density: '',
        gravity: '',
        escape: '',
        meanRadius: '',
        sideralOrbit: '',
        sideralRotation: '',
        discoveredBy: '',
        avgTemp: '',
    });

    const [dataReady, setDataReady] = useState(false);
    
    // Effect pour effectuer l'appel à l'API et mettre à jour l'état
    useEffect(() => {
        // Remplacez l'URL de l'API par votre propre URL
        fetch('https://api.le-systeme-solaire.net/rest/bodies/' + nom)
        .then(response => response.json())
        .then(data => {// Créer un nouvel objet avec les propriétés souhaitées
            console.log('Données brutes de l\'API :', data);
            const filteredData = {
                name: data.name,
                moons: data.moons,
                mass: data.mass,
                vol: data.vol,
                density: data.density,
                gravity: data.gravity,
                escape: data.escape,
                meanRadius: data.meanRadius,
                sideralOrbit: data.sideralOrbit,
                sideralRotation: data.sideralRotation,
                discoveredBy: data.discoveredBy,
                avgTemp: data.avgTemp,
            };

            // Mettre à jour l'état avec le nouvel objet filtré
            setPlanetData(filteredData);
            // Indiquer que les données sont prêtes
            setDataReady(true);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données', error);
            // En cas d'erreur, vous pouvez également indiquer que les données ne sont pas prêtes
            setDataReady(true);
        });
    }, [nom]); // Le tableau vide indique que cet effet s'exécute une fois après le rendu initial
      
    console.log('https://api.le-systeme-solaire.net/rest/bodies/'+nom.nom);

    if (!dataReady) {
        return <div>Chargement...</div>; // Vous pouvez personnaliser le message de chargement
    }

    return (
        <div className="infoPlanete">
            
                <h2>{planetData.name}</h2>
                <img src="/src/assets/circle-xmark-regular.svg" alt="Fermer Focus Planète" onClick={onClose}/>
            <div className="trait"></div>
            <ul>
            <li className="infoLune">
                    Lunes :
                    <div>
                        {planetData.moons && planetData.moons[0] ? planetData.moons[0].moon : 'Aucune'}
                    </div>
                </li>
                <li className="infoMasse">Masse : <div>{planetData.mass.massValue} 10<sup>{planetData.mass.massExponent}</sup> kg</div></li>
                <li className="infoVolume">Volume : <div>{planetData.vol.volValue} 10<sup>{planetData.vol.volExponent}</sup> km<sup>3</sup></div></li>
                <li className="infoDensite">Densité : <div>{planetData.density} g.cm<sup>3</sup></div></li>
                <li className="infoGravité">Gravité : <div>{planetData.gravity} m/s<sup>2</sup></div></li>
                <li className="infoVitesseEchappement">Vitesse d'échappement : <div>{planetData.escape} m/s</div></li>
                <li className="infoRayon">Rayon : <div>{planetData.meanRadius} km</div></li>
                <li className="infoRevolution">Révolution : <div>{planetData.sideralOrbit} jours</div></li>
                <li className="infoRotation">Rotation : <div>{planetData.sideralRotation} heures</div></li>
                <li className="infoDecouverte">Découverte : <div>{planetData.discoveredBy ? planetData.discoveredBy : 'Antiquité'}</div></li>
                <li className="infoTemperature">Température moyenne : <div>{planetData.avgTemp} °K</div></li>
            </ul>
        </div>
    );
}