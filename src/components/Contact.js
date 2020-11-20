import React, { Component } from 'react'

export default class Contact extends Component {
    state= {
        message:{
            name:"",
            email:"",
            phoneNumber:"",
            description:""
        }

    }
    
    fullName= (e)=>{
        this.setState({
            message:{
                name: e.target.value,
                email: this.state.message.email,
                phoneNumber: this.state.message.phoneNumber,
                description: this.state.message.description
            }
        });
    }

    emailAddress=(e)=>{
        this.setState({
            message:{
                name: this.state.message.name,
                email: e.target.value,
                phoneNumber: this.state.message.phoneNumber,
                description: this.state.message.description
            }
        });
    }

    phoneNumber=(e)=>{
        this.setState({
            message:{                
                name: this.state.message.name,
                email: this.state.message.email,
                phoneNumber: e.target.value,
                description: this.state.message.description
            }
        });
    }
    messageDescription=(e)=>{
        this.setState({
            message:{           
                name: this.state.message.name,
                email: this.state.message.email,
                phoneNumber: this.state.message.phoneNumber,
                description: e.target.value
            }
        });
    }
    onSubmitted= (e)=>{
        e.preventDefault();
        const xhr= new XMLHttpRequest();
        let mail=JSON.stringify(this.state.message);
        
        

        const btnSendMail=document.getElementById("btnSendMail");
        const alertNotif= document.createElement("div");
        alertNotif.className="alert";
        
        btnSendMail.value="Envoi en cours...";
        btnSendMail.setAttribute("disabled", true);
        btnSendMail.classList.add("loadingBtn");  

        xhr.open('POST','http://localhost:5000/sendmail', true);
        xhr.setRequestHeader('Content-type','application/json');

        xhr.responseSendMailRequest=(btnElement, alertElement, message, className="alert--success")=>{
            btnElement.value="Envoyer";
            btnElement.removeAttribute("disabled");
            btnElement.classList.remove("loadingBtn");

            alertElement.classList.add(className);
            alertElement.appendChild(document.createTextNode(message));
            if (document.getElementsByClassName("alert")[0]) document.getElementsByClassName("alert")[0].remove();
            document.getElementById("messageDescription").after(alertElement);
        }
        
        let loadingAnimation=null;
        xhr.onloadstart=function(){      
            let count=1;
            loadingAnimation= setInterval(() => {
                if(count===4) count=1;
                btnSendMail.value="Envoi en cours"+ ".".repeat(count) ;
                count++;
            }, 1000);    
        }
        xhr.onload=function(){
            if(this.status===200){
                let resp=JSON.parse(this.responseText);
                if(resp==="sent"){
                    clearInterval(loadingAnimation);
                    this.responseSendMailRequest(btnSendMail, alertNotif, "Message envoyé");
                }
            }else{        
                clearInterval(loadingAnimation);    
                this.responseSendMailRequest(btnSendMail, alertNotif, "Une erreur est survenue lors de l'envoi du mail, veuillez réessayer.","alert--error");    
            }
        }
        xhr.onerror=function(){  
            clearInterval(loadingAnimation);  
            this.responseSendMailRequest(btnSendMail, alertNotif, "Une erreur est survenue, veuillez réessayer.", "alert--error");
        }

        xhr.send(mail);
    }    

    render() {        
        const h2Style={
            marginBottom: "2em"
        }
        return (
            <div>
                <div className="contact" id="contactUs">
                    <h2 style={h2Style}>CONTACTEZ NOUS</h2>
                    <form onSubmit={this.onSubmitted} method="post">
                        <input type="text" onChange={this.fullName} placeholder="Votre nom complet"/> <br/>
                        <input type="email" onChange={this.emailAddress} placeholder="Adresse e-mail"/> <br/>
                        <input type="text" onChange={this.phoneNumber} placeholder="Votre numéro"/> <br/>
                        <textarea onChange={this.messageDescription} placeholder="Ecrivez votre message ici" id="messageDescription">
                            
                        </textarea>
                        <input type="submit" value="Envoyer" className="btn-contact" id="btnSendMail" />
                    </form>
                </div>
            </div>
        )
    }
}
