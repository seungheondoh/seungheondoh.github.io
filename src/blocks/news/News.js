import React from 'react';

const News = ({NewsInfoData}) => {
    return (
        <section id="page-content" className="spacer p-top-lg p-bottom-lg">
            <div id="blog">
                <div className="news wrapper">
                    <h4>News</h4>
                    <ul>
                    {NewsInfoData.map((item) => {
                        if (item.link === ""){
                            return (
                                <>
                                    <li> {item.date} | {item.contents}</li>
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <li>{item.date}, <a href={item.link}>[Link]</a></li>
                                </>
                            );
                        }
                    } ) }
                    </ul>
                    <hr/>
                </div>
            </div>
        </section>
    );
};

export default News;
