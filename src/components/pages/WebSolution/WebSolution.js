import React, {useRef, useEffect} from 'react';
import Engagment from '../../Engagement';

export default function WebSolution () {
   
    return (
        <div className="page-websolution">
            <div className="webdev">
                <h2>DEVELOPPEMENT DE SITE WEB</h2>
                <div className="webdev-content">
                    <img src="images/webdev.png" width="250" alt="DEVELOPPEMENT DE SITE WEB" />
                    <p>
                        La conception, création de site web, optimisation de site : nous proposons des 
                        solutions techniques qui répondent aux spécialités web actuelles 
                        (accessibilité, navigation, UX, mobile first, site responsive…) et utilisons les 
                        dernières tendance « stacks technique » du marché tels que : React, Laravel, 
                        CakePHP, Node, WordPress etc... 
                        Nous garantissons une développement de site internet SEO friendly.
                    </p>
                </div>
            </div>
            <div className="webrefactor">
                <h2>REFONTE ET MAINTENANCE SITE WEB</h2>
                <div className="webrefactor-content">
                    <p>
                        Passée l'étape de la création du site, il est nécessaire de faire vivre son site web. En remodelant votre site, vous renouvellerez votre cœur de cible, vous 
                        anticiperez sur votre futur activité sur internet. 
                        Vous pouvez même, comme certains de nos clients qui nous ont fait confiance, 
                        changer complétement d'orientation et de système pour votre site web en optant 
                        pour une refonte complète.
                        Nous garantissons une refonte de site internet SEO friendly.
                    </p>
                    <img src="images/webrefactor.png" width="250" alt="REFONTE ET MAINTENANCE SITE WEB" />                        
                </div>
            </div>
            <div className="webapps">
                <h2>DEVELOPPEMENT D'APPLICATION WEB</h2>
                <div className="webapps-content">
                    <img src="images/webapps.png" width="250" alt="DEVELOPPEMENT DE SITE WEB" />
                    <p>
                        Une application web est un logiciel hébergé sur un serveur et accessible via
                        un navigateur. Ce dernier permet de mettre en relation deux ou 
                        plusieurs personnes différentes. 
                        Nous avons actuellement quelques équipes passionnés par le 
                        développement d'application web. 
                        Si vous avez ainsi, un grand projet de réalisation d'une appli web, notre 
                        agence est à votre entière disposition. 
                    </p>
                </div>
            </div>             
        </div>
    )
}
