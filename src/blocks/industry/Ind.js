import React from 'react';

const Ind = ({IndInfoData}) => { 
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="industry wrapper">
                    <h4>Industry Experience</h4>
                    <div className="eduacation">
                    { IndInfoData.map((item) => {
                            return (
                                <>
                                    <h6>{ item.institution }</h6>
                                    <p>
                                        { item.position } {item.advisor !== "" ? (<span>{ item.advisor }</span>) : null}
                                    </p>
                                    <p className="date">{ item.location } | { item.duration }</p>
                                </>
                            );
                        } ) }
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Ind;
