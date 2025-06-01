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
                                        <p className='p'> I'm a postdoctoral researcher at <a href='https://mac.kaist.ac.kr/'>Music and Audio Computing Lab</a>, advised by <a href="https://mac.kaist.ac.kr/~juhan/">Prof. Juhan Nam</a>. <br/> 
                                        My research focuses on the machine's ability to listen to music, express music experience in natural language, and imagine visuals. A key aspect of my research lies in representation learning, particularly in bridging the gap between music and multi-modal media. Presently, my primary focus is on <b>multi-turn conversation</b> and <b>multi-modality</b>. I aim for machines to comprehend diverse modalities during conversations, particularly in the context of music generation and retrieval, facilitating the discovery of music through dialogue.
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
                    <p className='p' style={{textAlign: 'center', marginTop: '30px', marginBottom: '5px'}}> <b>🔥 Plan to enter the job market at 2026 March! 🔥</b></p>
                </div>
            </div>
        </section>
    );
};

export default Prof;
