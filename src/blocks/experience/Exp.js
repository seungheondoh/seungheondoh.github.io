import React from 'react';
import LinkButton from '../../components/button/LinkButton'

const Exp = ({ExpInfoData}) => {
    const Service = ExpInfoData['Service']
    const Talk = ExpInfoData['Talk']
    const Teaching = ExpInfoData['Teaching']
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="wrapper">
                    <h4>Service, Talk, Teaching</h4>
                    <div className="experience">
                    <h6>Service</h6>
                    
                    {Service.map((item) => {
                        if (item.link === ""){
                            return (
                                <>
                                    <p> {item.date} | {item.contents}</p>
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <p> {item.date} | {item.contents} 
                                        <LinkButton 
                                            keyword = "Link" 
                                            link={item.link}
                                            position = "inline"
                                            textcolor = "has-white-color"
                                            backgroundcolor = "has-gray-dark-background-color"
                                        />
                                    </p>
                                </>
                            );
                        }
                    } ) }
                    <h6>Talk</h6>
                    
                    {Talk.map((item) => {
                        if (item.link === ""){
                            return (
                                <>
                                    <p> {item.date} | {item.contents}</p>
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <p> {item.date} | {item.contents} 
                                        <LinkButton 
                                            keyword = "Link" 
                                            link={item.link}
                                            position = "inline"
                                            textcolor = "has-white-color"
                                            backgroundcolor = "has-gray-dark-background-color"
                                        />
                                    </p>
                                </>
                            );
                        }
                    } ) }

                    <h6>Teaching</h6>
                    
                    {Teaching.map((item) => {
                        if (item.link === ""){
                            return (
                                <>
                                    <p> {item.date} | {item.contents}</p>
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <p> {item.date} | {item.contents} 
                                        <LinkButton 
                                            keyword = "Link" 
                                            link={item.link}
                                            position = "inline"
                                            textcolor = "has-white-color"
                                            backgroundcolor = "has-gray-dark-background-color"
                                        />
                                    </p>
                                </>
                            );
                        }
                    } ) }
                    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exp;
