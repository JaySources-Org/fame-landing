import * as React from "react";


const FAQ = () => {
    return (
        <div className="faq-timeline-area section-padding-100">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 col-md-12">
                        <div className="section-heading">
                            <div className="dream-dots wow fadeInUp" data-wow-delay="0.2s">
                                <span/><span/><span/><span/><span/><span/><span/>
                            </div>
                            <h2 className="wow fadeInUp" data-wow-delay="0.3s">Frequently Asked Questions</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.4s" style={{marginLeft: 0}}>Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl
                                hendrerit commodo.</p>
                        </div>
                        <div className="dream-faq-area">
                            <dl>
                                {/* Single FAQ Area */}
                                <dt className="wave wow fadeInUp" data-wow-delay="0.2s">What are the objectives of this
                                    token?
                                </dt>
                                <dd className="wow fadeInUp" data-wow-delay="0.3s">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat
                                        nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda
                                        dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                                </dd>
                                {/* Single FAQ Area */}
                                <dt className="wave wow fadeInUp" data-wow-delay="0.3s">What is Token Sale and
                                    pre-sale?
                                </dt>
                                <dd>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat
                                        nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda
                                        dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                                </dd>
                                {/* Single FAQ Area */}
                                <dt className="wave wow fadeInUp" data-wow-delay="0.4s">What is the pre-sale start
                                    date?
                                </dt>
                                <dd>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat
                                        nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda
                                        dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                                </dd>
                                {/* Single FAQ Area */}
                                <dt className="wave wow fadeInUp" data-wow-delay="0.5s">how may I take part in
                                    pre-sale?
                                </dt>
                                <dd>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat
                                        nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda
                                        dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 offset-lg-0 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                        <div className="ico-counter">
                            <div className="counter-down">
                                <div className="content">
                                    <div className="conuter-header">
                                        <h3 className="text-center">TOKEN SALE ENDS IN</h3>
                                    </div>
                                    <div className="counterdown-content">
                                        {/* <div class="ico-sales-status mb-15 o-hidden">
                                  <div class="pull-left">
                                      <h3 class="dollar-earning">$7,575,357</h3>
                                      <p style="padding-left:10px">Worth of DREAM tokens</p>
                                  </div>
                                  <div class="pull-right">
                                      <h3 class="btc-earning">9.764 <span>BTC</span></h3>
                                      <p>BTC Raised</p>
                                  </div>
                              </div> */}
                                        {/* Countdown  */}
                                        <div className="count-down titled circled text-center">
                                            <div className="simple_timer syotimer timer">
                                                <div className="timer-head-block"/>
                                                <div className="timer-body-block">
                                                    <div className="table-cell day">
                                                        <div className="tab-val">122</div>
                                                        <div className="tab-metr tab-unit">days</div>
                                                    </div>
                                                    <div className="table-cell hour">
                                                        <div className="tab-val">08</div>
                                                        <div className="tab-metr tab-unit">hours</div>
                                                    </div>
                                                    <div className="table-cell minute">
                                                        <div className="tab-val">52</div>
                                                        <div className="tab-metr tab-unit">minutes</div>
                                                    </div>
                                                    <div className="table-cell second">
                                                        <div className="tab-val" style={{opacity: 1}}>58</div>
                                                        <div className="tab-metr tab-unit">seconds</div>
                                                    </div>
                                                </div>
                                                <div className="timer-foot-block"/>
                                            </div>
                                        </div>
                                        <div className="ico-progress">
                                            <ul className="list-unstyled list-inline clearfix mb-10">
                                                <li className="title">33m</li>
                                                <li className="strength">75m</li>
                                            </ul>
                                            {/* skill strength */}
                                            <div className="current-progress">
                                                <div className="progress-bar has-gradient" style={{width: '75%'}}/>
                                            </div>
                                            <span className="pull-left">Softcap in 103 days</span>
                                            <span className="pull-right">Token Hardcap</span>
                                        </div>
                                        <div className="text-center">
                                            <a href="#" className="button mt-30">Buy More Tokens</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ico-docs">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="doc-element">
                                        <a className="document-entry" href="#" target="_blank"><span
                                            className="title">WhitePaper</span></a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="doc-element">
                                        <a className="document-entry" href="#" target="_blank"><span
                                            className="title">OnePager</span></a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="doc-element">
                                        <a className="document-entry" href="#" target="_blank"><span className="title">Rating Review</span></a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="doc-element">
                                        <a className="document-entry" href="#" target="_blank"><span className="title">Marketing Plan</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default FAQ