import React, { Component } from 'react'

export default class Loader extends Component 
{

    render () {
        return (
            <>
                <div id="wpf-loader-two">          
                    <div className="wpf-loader-two-inner">
                        <span>Loading</span>
                    </div>
                </div> 

                <a className="scrollToTop" href="#"><i className="fa fa-chevron-up"></i></a>
            </>
        );
    }
}