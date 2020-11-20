import React, { Component } from 'react'

class BannerEnterpriseSolution extends Component{
    componentDidMount(){        
        this.props.pageOpen("EnterpriseSolution");
    }

    render(){
        const styleContainerBottomBar={
            paddingTop: "10em"
        }
        return (
            <div className="container" style={styleContainerBottomBar}>
                <h1>ENTERPRISE SOLUTIONS</h1> <span>ce qu'on vous propose</span>
                <div className="content">
                    <div className="content-left">
                        <ul>
                            <li>
                            Conception et développement d'outils métiers génériques et spécifiques selon vos demandes.
                            </li>
                            <li>
                            Conception et création graphique: Business card, affiches, flyers… 
                            </li>
                            <li>
                            Formations et conférences acculturation.
                            </li>
                        </ul>
                    </div>
                    <div className="content-right">
                        <p>
                            <h2>
                            NOUS OFFRONS UNE ETUDE GRATUITE DE VOS BESOINS EN INTERNE.
                            </h2>
                            <a href="mailto:contact@mindev.mg" className="btn btn-success" alt="Voir nos propositions">DEMANDER UN DEVIS</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerEnterpriseSolution;