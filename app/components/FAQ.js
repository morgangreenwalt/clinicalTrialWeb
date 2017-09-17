import React, {Component} from "react";

export default class FAQ extends React.Component {
    // return(
    //     <div>
    //     {this.props.faq.map((data, i) => {

    render() {
        

        return(
            <div className="faq">

                <div className="row">
                    <div className="faqHero"></div>
                    <div className="container">
                        <div className="faqMain">
                            <h2 className="faqTitle">Frequenty Asked Questions</h2>
                            <p className="faqCopy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>    
                </div>
                <div className="container">
                    <div className="questions">
                        <div className="row">   
                            <div className="col-md-6">
                                <h4 className="question">Questions</h4>
                                <p className="answer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <h4 className="question">Questions</h4>
                                <p className="answer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className="col-md-6">
                                <h4 className="question">Questions</h4>
                                <p className="answer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                <h4 className="question">Questions</h4>
                                <p className="answer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="contactModule text-center">
                    <div className="row">
                        <div className="container">
                        <h2 className="contactText">Can't Find Your Answer?</h2>
                        <a href="/contact"><button type="button" className="btn btn-secondary btn-lg contactBtn">Contact Us</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
        // })}
        // </div>
        // )
    }
}