import React, { Component } from 'react';

class BannerSolution extends Component{
    componentDidMount(){        
        this.props.pageOpen("WebSolution");
    }
    
    render(){
        const styleContainerBottomBar={
            paddingTop: "10em"
        }
        return (
            <div className="container" style={styleContainerBottomBar}>
                <h1>WEB SOLUTIONS</h1> <span>ce qu'on vous propose</span>
                <div className="content">
                    <div className="content-left">
                        <ul>
                            <li>
                            Conception et développement de site web: site professionnel, site vitrine, site e-commerce...
                            </li>
                            <li>
                            Refonte et maintenance de site web: correction bugs, amélioration performance etc...
                            </li>
                            <li>
                            Développement d'application web: application web intranet (gestion salaire …)
                            </li>
                        </ul>
                    </div>
                    <div className="content-right">
                        <h2>
                        ENVIE DE NOUS DISCUTER UN PEU DE VOS PROJETS ?
                        </h2>
                        <a href="mailto:contact@mindev.mg" className="btn btn-success" alt="Voir nos propositions">DEMANDER UN DEVIS</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerSolution;