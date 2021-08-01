import React from 'react';
import LinkButton from '../../components/button/LinkButton';
const Prof = ({ProfData}) => { 
    return (
        <section id="page-content" className="spacer">
            <div className="peoplecard">
                <div className="wrapper">
                    <div className="prof_cardwrapper">
                        {ProfData.map((item) => {
                            return (
                                <div className="img_div">
                                    <img className="prof_img" src={process.env.PUBLIC_URL + `/assets/img/people/`+ item.img} alt={item.title}/>
                                    <div className="info_div">
                                        <h4>{item.title}</h4>
                                        <p>{item.describtion} <br/> {item.detail}</p>
                                        <div className="btn_div">
                                            {Object.keys(item.material).map((key_name, index) => {
                                                if (index === 0){
                                                    return(
                                                        <LinkButton 
                                                            keyword = {key_name} 
                                                            link={item.material[key_name]}
                                                            position = ""
                                                            textcolor = "has-white-color"
                                                            backgroundcolor = "has-gray-dark-background-color"
                                                        />
                                                    );
                                                } else {
                                                    return(
                                                        <LinkButton 
                                                            keyword = {key_name} 
                                                            link={item.material[key_name]}
                                                            position = "inline"
                                                            textcolor = "has-white-color"
                                                            backgroundcolor = "has-gray-dark-background-color"
                                                        />
                                                    );
                                                }
                                            })
                                            }

                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prof;
