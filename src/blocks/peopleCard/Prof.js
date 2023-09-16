import React from 'react';
import LinkButton from '../../components/button/LinkButton';
import DownloadButton from '../../components/button/DownloadButton';
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
                                        <p className='p'> I'm a Ph.D Student at <a href='https://mac.kaist.ac.kr/'>Music and Audio Computing Lab</a>, advised by <a href="https://mac.kaist.ac.kr/~juhan/">Prof. Juhan Nam</a>. <br/> 
                                        I'm working on Music and Machine Learning, with a specific focus on advancing our understanding of machines' ability to perceive music, articulate musical experiences using natural language, and generate visual representations. My primary research efforts are concentrated on advancing the domain of representation learning for music and multimodal media
                                        </p>

                                        <div className="btn_div">
                                            <DownloadButton 
                                                keyword = "cv"
                                                link= {process.env.PUBLIC_URL + `/assets/cv/CV_seungheon.pdf`}
                                                position = ""
                                                textcolor = "has-white-color"
                                                backgroundcolor = "has-olive-background-color"
                                            />
                                            {Object.keys(item.material).map((key_name, index) => {
                                                    return(
                                                        <LinkButton 
                                                            keyword = {key_name} 
                                                            link={item.material[key_name]}
                                                            position = "inline"
                                                            textcolor = "has-white-color"
                                                            backgroundcolor = "has-gray-dark-background-color"
                                                        />
                                                    );
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
