import React, { Component } from 'react'

export default class EnterpriseSolution extends Component {
    render() {
        return (
            <div className="page-enterprisesolution">  
                <div className="softwaretools">           
                    <img src="images/softtools.png" width="40%" alt="DEVELOPPEMENT DE SITE WEB" />   
                    <div className="softwaretools-content">
                        <h2>Développement d'outils métiers</h2>
                        <p>
                            Nous concevons des outils métiers génériques et spécifiques 
                            selon vos demandes. 
                            Solutions pour des outils collaboratifs accessibilité permanente, 
                            outils évolutifs et synchrones à ceux existant.
                            Logiciel de gestion facturation et gestion de paiement en ligne…
                        </p>
                    </div>
                </div>
                <div className="designgraphic">
                    <div className="designgraphic-content">
                        <h2>Création graphique</h2>
                        <p>
                            Innovant et impactant, tels pourraient être les deux enjeux de 
                            notre approche. Notre objectif est de vous permettre de convaincre
                            votre public cible grâce à une communication visuelle percutante, 
                            dès le premier regard. 
                            Du print au web et au logiciel, Mindev met son professionnalisme 
                            au service de ses clients pour le donner le meilleur résultat. 
                        </p>
                    </div>                    
                    <img src="images/designgraphic.png" width="40%" alt="REFONTE ET MAINTENANCE SITE WEB" />                        
                </div>
                <div className="trainingAndEvents">
                    <h2>Formations et conférences acculturation.</h2>
                    <div className="trainingAndEvents-content">
                        <img src="images/trainingAndEvents.png" width="40%" alt="DEVELOPPEMENT DE SITE WEB" />
                        <p>
                            A cette ère où la technologie évolue très vite, on peut 
                            comprendre que certains Entreprises n’ont pas le temps d'aller 
                            peaufiner tous ces "trends" sur les dernières technologies du 
                            jour, ni le budget colossal pour former ses employés sur ces 
                            dernières. Et c’est à ce niveau-là qu'on intervient, grâce à nos 
                            équipes de passionnés et qui sont à fond sur les nouveaux 
                            stacks techniques de pointe chaque année, on est au courant 
                            de tout et on peut combler ce problème de veille en formant vos
                            équipes informatiques sur ces nouveautés technologiques à 
                            des prix abordables.
                            On peut acculturer vos équipes autour des grands thèmes de la
                            transformation digitale des entreprises.
                        </p>
                    </div>
                </div> 
            </div>
        )
    }
}
