function Footer() {
    return (
        <footer className="f1-footer">
            <div className="f1-footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="f1-app-download__heading float-md-left misc--label no-margin f1-uppercase">
                                Download the Official F1 App
                            </p>
                            <ul className="f1-app-download__links d-table float-md-left">
                                <li>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&hl=en_GB"
                                        target="_blank"
                                        data-analytics-event="click"
                                        data-tracking='{"navigationElement":"Footer"}'
                                    >
                                        <img
                                            data-src="https://www.formula1.com/etc/designs/fom-website/images/svg/google-play-badge.svg"
                                            className="lazy loaded"
                                            alt="Google Play"
                                            src="https://www.formula1.com/etc/designs/fom-website/images/svg/google-play-badge.svg"
                                            data-was-processed="true"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://itunes.apple.com/gb/app/official-f1-app/id835022598?mt=8"
                                        target="_blank"
                                        data-analytics-event="click"
                                        data-tracking='{"navigationElement":"Footer"}'
                                    >
                                        <img
                                            data-src="https://www.formula1.com/etc/designs/fom-website/images/svg/download-on-the-app-store-apple.svg"
                                            className="lazy loaded"
                                            alt="App Store"
                                            src="https://www.formula1.com/etc/designs/fom-website/images/svg/download-on-the-app-store-apple.svg"
                                            data-was-processed="true"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <hr className="f1-divider d-md-none" />
                        <div className="col-md-5">
                            <ul className="f1-social-networks d-table float-md-right">
                                <li>
                                    <a href="https://www.facebook.com/Formula1" target="_blank">
                                        Facebook <i className="icon icon-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/f1" target="_blank">
                                        Twitter <i className="icon icon-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/f1/" target="_blank">
                                        Instagram <i className="icon icon-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/F1" target="_blank">
                                        YouTube <i className="icon icon-youtube" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f1-footer__middle">
                <div className="container">
                    <div className="row">
                        <div className="col-12 footer-partners">
                            <div className="row">
                                <div className="col-12 f1-center f1-sponsor-header">
              <span className="logo-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={80}
                    height={20}
                    viewBox="0 0 80 20"
                    fill="none"
                    className="injected-svg js-svg-inject"
                >
                  <g clipPath="url(#clip0_1_38-2)">
                    <g clipPath="url(#clip1_1_38-2)">
                      <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9917 6.01667L0 20H11.275L20.5208 10.8125C23.9875 7.375 25.8 6.81667 32.8333 6.81667H58.6542L65.6083 0H31.3375C21.8 0 19.0583 0.954167 13.9917 6.01667ZM21.9583 12.1958C25.1292 9.02917 26.4917 8.70833 33.525 8.70833H56.7375L49.7833 15.5792H32.7C29.2083 15.5792 28.5958 15.9542 27.1292 17.4708L24.65 20H14.2042L21.9583 12.1958ZM48.05 20L68.0625 0H80L59.9083 20H48.05ZM69.0709 19.0958C69.6667 19.7 70.4167 20 71.3167 20H71.3125C72.2125 20 72.9584 19.7 73.5417 19.1C74.1292 18.5 74.4209 17.7583 74.4209 16.8792C74.4209 16 74.1251 15.2583 73.5376 14.6542C72.9501 14.05 72.2042 13.75 71.3042 13.75C70.4042 13.75 69.6542 14.05 69.0626 14.65C68.4709 15.25 68.175 15.9917 68.175 16.8708C68.175 17.75 68.4751 18.4917 69.0709 19.0958ZM69.4459 15.0083C69.9417 14.4958 70.5625 14.2417 71.3 14.2417V14.2375C72.0376 14.2375 72.6542 14.4917 73.1542 15.0042C73.6501 15.5167 73.9001 16.1417 73.9001 16.8708C73.9001 17.6 73.6501 18.2208 73.1542 18.7292C72.6584 19.2375 72.0376 19.4917 71.3 19.4917C70.5625 19.4917 69.9459 19.2375 69.4459 18.725C68.9501 18.2167 68.7001 17.5958 68.7001 16.8667C68.7001 16.1375 68.9459 15.5208 69.4459 15.0083ZM70.6875 18.6167V17.3917H71.3876L71.9792 18.6167H72.7042L72.05 17.3C72.2709 17.2 72.425 17.0667 72.5167 16.9042C72.6084 16.7417 72.6542 16.4875 72.6542 16.1542C72.6542 15.8208 72.5417 15.5667 72.3167 15.4C72.0917 15.2333 71.7542 15.15 71.3042 15.15H70.0001V18.6167H70.6875ZM70.675 16.8542V15.6875H71.2417C71.7334 15.6875 71.9792 15.8833 71.9792 16.2708C71.9792 16.475 71.9334 16.625 71.8376 16.7167C71.7417 16.8083 71.5876 16.8542 71.3751 16.8542H70.675Z"
                          fill="#E10600"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_38-2">
                      <rect width={80} height={20} fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1_38-2">
                      <rect width={80} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
                                    <span className="f1-bold--s f1-color--white header">
                <a
                    href="https://formula1.comhttps://www.formula1.com/en/toolbar/partners.html"
                    data-analytics-event="click"
                    data-tracking='{
											"event":"navigation_click",
											"actionType":"linkclick",
											"path":"Our partners",
											"pathType":"internal",
											"navigationElement":"Sponsor logo",
											"locationInPage":"Footer",
											"componentId": "F1 Partner Link"
										}'
                >
                  <span>Our partners</span>
                  <i className="icon icon-chevron-right f1-color--white" />
                </a>
              </span>
                                </div>
                            </div>
                            <div className="row footer-partners-container">
                                <div className="col-12">
                                    <ul
                                        className="primary-partners global-partners flex-container js-promo-item"
                                        style={{}}
                                    >
                                        <li className="Rolex">
                                            <a
                                                href="https://www.rolex.com/"
                                                target="_blank"
                                                title="Rolex"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "Rolex",
																"creative_name": "Tier 1 | banner 1",
																"creative_slot": "Static Sponsorship",
																"item_brand":"Rolex"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/rolex.png"
                                                    alt="Rolex"
                                                    data-promo-view='{"promotion_name": "Rolex", "creative_name": "Tier 1 | banner 1", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="Pirelli">
                                            <a
                                                href="https://bit.ly/2IjWDjE"
                                                target="_blank"
                                                title="Pirelli"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "Pirelli",
																"creative_name": "Tier 1 | banner 2",
																"creative_slot": "Static Sponsorship",
																"item_brand":"Pirelli"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/pirelli.png"
                                                    alt="Pirelli"
                                                    data-promo-view='{"promotion_name": "Pirelli", "creative_name": "Tier 1 | banner 2", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="Aramco">
                                            <a
                                                href="https://www.saudiaramco.com/"
                                                target="_blank"
                                                title="Aramco"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "Aramco",
																"creative_name": "Tier 1 | banner 3",
																"creative_slot": "Static Sponsorship",
																"item_brand":"Aramco"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/aramco.png"
                                                    alt="Aramco"
                                                    data-promo-view='{"promotion_name": "Aramco", "creative_name": "Tier 1 | banner 3", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="Heineken">
                                            <a
                                                href="https://www.heineken.com/"
                                                target="_blank"
                                                title="Heineken"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "Heineken",
																"creative_name": "Tier 1 | banner 4",
																"creative_slot": "Static Sponsorship",
																"item_brand":"Heineken"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/Heineken%20-%20Outlined.png"
                                                    alt="Heineken"
                                                    data-promo-view='{"promotion_name": "Heineken", "creative_name": "Tier 1 | banner 4", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="DHL">
                                            <a
                                                href="https://inmotion.dhlhttps://www.formula1.com/en/formula-1/?utm_content=DHL-F1&utm_source=f1&utm_medium=website&utm_campaign=DHL-F1"
                                                target="_blank"
                                                title="DHL"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "DHL",
																"creative_name": "Tier 1 | banner 5",
																"creative_slot": "Static Sponsorship",
																"item_brand":"DHL"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png"
                                                    alt="DHL"
                                                    data-promo-view='{"promotion_name": "DHL", "creative_name": "Tier 1 | banner 5", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="Qatar Airways">
                                            <a
                                                href="https://www.qatarairways.com/"
                                                target="_blank"
                                                title="Qatar Airways"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "Qatar Airways",
																"creative_name": "Tier 1 | banner 6",
																"creative_slot": "Static Sponsorship",
																"item_brand":"Qatar Airways"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/qatar.png"
                                                    alt="Qatar Airways"
                                                    data-promo-view='{"promotion_name": "Qatar Airways", "creative_name": "Tier 1 | banner 6", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="AWS">
                                            <a
                                                href="https://aws.amazon.com/f1/"
                                                target="_blank"
                                                title="AWS"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "AWS",
																"creative_name": "Tier 1 | banner 7",
																"creative_slot": "Static Sponsorship",
																"item_brand":"AWS"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/AWS%20GLOBAL.png"
                                                    alt="AWS"
                                                    data-promo-view='{"promotion_name": "AWS", "creative_name": "Tier 1 | banner 7", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="Crypto.com">
                                            <a
                                                href="https://www.crypto.com"
                                                target="_blank"
                                                title="Crypto.com"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "Crypto.com",
																"creative_name": "Tier 1 | banner 8",
																"creative_slot": "Static Sponsorship",
																"item_brand":"Crypto.com"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/crypto.com.png"
                                                    alt="Crypto.com"
                                                    data-promo-view='{"promotion_name": "Crypto.com", "creative_name": "Tier 1 | banner 8", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="MSC">
                                            <a
                                                href="https://www.msccruises.com"
                                                target="_blank"
                                                title="MSC"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "MSC",
																"creative_name": "Tier 1 | banner 9",
																"creative_slot": "Static Sponsorship",
																"item_brand":"MSC"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/msc.png"
                                                    alt="MSC"
                                                    data-promo-view='{"promotion_name": "MSC", "creative_name": "Tier 1 | banner 9", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                        <li className="Salesforce">
                                            <a
                                                href="https://www.salesforce.com/campaign/formula1/?d=7013y000002RO1gAAG&utm_source=formula1&utm_medium=referral&utm_campaign=us_c360aw&utm_content=formula1-salesforce-logo_7013y000002RO1gAAG"
                                                target="_blank"
                                                title="Salesforce"
                                                data-analytics-event="click"
                                                data-tracking='{
															"event":"select_promotion",
															"locationInPage":"footer",
															"actionType": "promoClick",
															"ecommerce": {
																"items": [{
																"promotion_name": "Salesforce",
																"creative_name": "Tier 1 | banner 10",
																"creative_slot": "Static Sponsorship",
																"item_brand":"Salesforce"
																}]
															}
													}'
                                            >
                                                <img
                                                    src="https://media.formula1.com/image/upload/f_auto/q_auto/v1678707357/content/dam/fom-website/2020/sponsors/salesforce.png"
                                                    alt="Salesforce"
                                                    data-promo-view='{"promotion_name": "Salesforce", "creative_name": "Tier 1 | banner 10", "creative_slot": "Static Sponsorship"}'
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12">
                                    <div
                                        className="secondary-partners official-partners flex-container js-promo-item"
                                        style={{}}
                                    >
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/f_auto/q_auto/v1681231879/fom-website/2020/sponsors/Paramount%2B.png"
                                                alt="Paramount+"
                                                data-promo-view='{ "promotion_name": "Paramount+", "creative_name": "Tier 2 | banner 1", "creative_slot": "Static Sponsorship"}'
                                            />
                                        </div>
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/lenovo.png"
                                                alt="Lenovo"
                                                data-promo-view='{ "promotion_name": "Lenovo", "creative_name": "Tier 2 | banner 2", "creative_slot": "Static Sponsorship"}'
                                            />
                                        </div>
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/ferrari-trento.png"
                                                alt="Ferrari Trento"
                                                data-promo-view='{ "promotion_name": "Ferrari Trento", "creative_name": "Tier 2 | banner 3", "creative_slot": "Static Sponsorship"}'
                                            />
                                        </div>
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/liqui-moly.png"
                                                alt="Liqui Moly"
                                                data-promo-view='{ "promotion_name": "Liqui Moly", "creative_name": "Tier 2 | banner 4", "creative_slot": "Static Sponsorship"}'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div
                                        className="secondary-partners regional-partners flex-container js-promo-item"
                                        style={{}}
                                    >
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/Workday.png"
                                                alt="Workday"
                                                data-promo-view='{ "promotion_name": "Workday", "creative_name": "Tier 3 | banner 1", "creative_slot": "Static Sponsorship" }'
                                            />
                                        </div>
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/AlphaTauri.png"
                                                alt="AlphaTauri"
                                                data-promo-view='{ "promotion_name": "AlphaTauri", "creative_name": "Tier 3 | banner 2", "creative_slot": "Static Sponsorship" }'
                                            />
                                        </div>
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/BBS.png"
                                                alt="BBS"
                                                data-promo-view='{ "promotion_name": "BBS", "creative_name": "Tier 3 | banner 3", "creative_slot": "Static Sponsorship" }'
                                            />
                                        </div>
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/TATA.png"
                                                alt="TATA"
                                                data-promo-view='{ "promotion_name": "TATA", "creative_name": "Tier 3 | banner 4", "creative_slot": "Static Sponsorship" }'
                                            />
                                        </div>
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/188.png"
                                                alt="188 Bet"
                                                data-promo-view='{ "promotion_name": "188 Bet", "creative_name": "Tier 3 | banner 5", "creative_slot": "Static Sponsorship" }'
                                            />
                                        </div>
                                        <div className="logo-wrapper ">
                                            <img
                                                src="https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png"
                                                alt="Puma"
                                                data-promo-view='{ "promotion_name": "Puma", "creative_name": "Tier 3 | banner 6", "creative_slot": "Static Sponsorship" }'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <fieldset className="f1-border">
                        <div className="row">
                            {/* /* Wrapper added to allow editing component in AEM  - without this editing option is not visible properly for individual columns* / */}
                            <div className="col-lg-2">
                                <ul>
                                    <li className="f1-nav__item">
                                        <a href="https://www.formula1.com/en/latest.html" data-pathtype="internal">
                                            <span className="f1-nav__underline">Latest News</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a
                                            href="https://www.formula1.comhttps://www.formula1.com/en/page.what-is-f1.html"
                                            data-pathtype="internal"
                                        >
                                            <span className="f1-nav__underline">What is F1?</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a href="https://www.formula1.com/en/video.html" data-pathtype="internal">
                                            <span className="f1-nav__underline">Video</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a href="https://www.formula1.com/en/drivers.html" data-pathtype="internal">
                                            <span className="f1-nav__underline">Drivers</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a href="https://www.formula1.com/en/teams.html" data-pathtype="internal">
                                            <span className="f1-nav__underline">Teams</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a href="https://www.formula1.com/en/racing/2023.html" data-pathtype="internal">
                                            <span className="f1-nav__underline">Schedule</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /* Wrapper added to allow editing component in AEM  - without this editing option is not visible properly for individual columns* / */}
                            <div className="col-lg-2">
                                <ul>
                                    <li className="f1-nav__item f1-nav__item--has-children js-closed">
                                        <a href="https://www.formula1.com/en/results.html">
                                            <span className="f1-nav__underline">Standings</span>{" "}
                                            <i className="icon icon-chevron-down" />
                                        </a>
                                        <ul>
                                            <li className="f1-nav__item">
                                                <a href="https://www.formula1.com/en/results/latest.html" data-pathtype="internal">
                                                    <span className="f1-nav__underline">2023 Season</span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a
                                                    href="https://www.formula1.com/en/results/driver-standings.html"
                                                    data-pathtype="internal"
                                                >
                      <span className="f1-nav__underline">
                        Driver Standings
                      </span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a
                                                    href="https://www.formula1.com/en/results/constructor-standings.html"
                                                    data-pathtype="internal"
                                                >
                      <span className="f1-nav__underline">
                        Constructor Standings
                      </span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a
                                                    href="https://www.formula1.com/en/results/archive-1950-2016.html"
                                                    data-pathtype="internal"
                                                >
                      <span className="f1-nav__underline">
                        Archive 1950-2022
                      </span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a href="https://www.formula1.com/en/results/awards.html" data-pathtype="internal">
                                                    <span className="f1-nav__underline">F1 Awards</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* /* Wrapper added to allow editing component in AEM  - without this editing option is not visible properly for individual columns* / */}
                            <div className="col-lg-2">
                                <ul>
                                    <li className="f1-nav__item f1-nav__item--has-children js-closed">
                                        <a href="https://www.formula1.com/en/gaming.html">
                                            <span className="f1-nav__underline">Gaming</span>{" "}
                                            <i className="icon icon-chevron-down" />
                                        </a>
                                        <ul>
                                            <li className="f1-nav__item">
                                                <a href="https://www.formula1.com/en/gaming/esports.html" data-pathtype="internal">
                                                    <span className="f1-nav__underline">Esports</span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a href="https://www.formula1.com/en/gaming/fantasy.html" data-pathtype="internal">
                                                    <span className="f1-nav__underline">Fantasy</span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a
                                                    href="https://www.formula1.com/en/gaming/f1-23-official-console-game.html"
                                                    data-pathtype="internal"
                                                >
                                                    <span className="f1-nav__underline">F1 23</span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a
                                                    href="https://www.formula1.com/en/gaming/f1-manager-2023.html"
                                                    data-pathtype="internal"
                                                >
                                                    <span className="f1-nav__underline">F1 Manager 23</span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a href="https://www.formula1.com/en/gaming/f1-play.html" data-pathtype="internal">
                                                    <span className="f1-nav__underline">F1 Play</span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a
                                                    href="https://www.formula1.com/en/gaming/f1-mobile-racing.html"
                                                    data-pathtype="internal"
                                                >
                      <span className="f1-nav__underline">
                        F1 Mobile Racing
                      </span>
                                                </a>
                                            </li>
                                            <li className="f1-nav__item">
                                                <a href="https://www.formula1.com/en/gaming/f1-clash.html" data-pathtype="internal">
                                                    <span className="f1-nav__underline">F1 Clash</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* /* Wrapper added to allow editing component in AEM  - without this editing option is not visible properly for individual columns* / */}
                            <div className="col-lg-2">
                                <ul>
                                    <li className="f1-nav__item">
                                        <a href="https://www.formula1.com/en/f1-live.html" data-pathtype="internal">
                                            <span className="f1-nav__underline">Live Timing</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /* Wrapper added to allow editing component in AEM  - without this editing option is not visible properly for individual columns* / */}
                            <div className="col-lg-2">
                                <ul>
                                    <li className="f1-nav__item">
                                        <a
                                            href="https://tickets.formula1.com/"
                                            data-pathtype="internal"
                                        >
                                            <span className="f1-nav__underline">Tickets</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a
                                            href="https://f1experiences.com/?utm_source=formula1.com&utm_medium=referral&utm_campaign=general"
                                            data-pathtype="internal"
                                        >
                                            <span className="f1-nav__underline">F1® Experiences</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a
                                            href="https://f1store.formula1.comhttps://www.formula1.com/en/?_s=bm-fi-f1-prtsite-bottomnav-230720-jm"
                                            data-pathtype="internal"
                                        >
                                            <span className="f1-nav__underline">Store</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a
                                            href="https://tickets.formula1.comhttps://www.formula1.com/en/pc-paddock-club"
                                            data-pathtype="internal"
                                        >
                                            <span className="f1-nav__underline">Paddock Club</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a href="https://f1tv.formula1.com" data-pathtype="internal">
                                            <span className="f1-nav__underline">F1® TV</span>
                                        </a>
                                    </li>
                                    <li className="f1-nav__item">
                                        <a
                                            href="https://www.f1authentics.com/"
                                            data-pathtype="internal"
                                        >
                                            <span className="f1-nav__underline">F1® Authentics</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /* Wrapper added to allow editing component in AEM  - without this editing option is not visible properly for individual columns* / */}
                            <div className="col-lg-2">
                                <ul>
                                    <li className="f1-nav__item">
                                        <a
                                            href="https://www.formula1.com/en/championship/inside-f1/rules-regs.html"
                                            data-pathtype="internal"
                                        >
                  <span className="f1-nav__underline">
                    Rules &amp; Regulations
                  </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="f1-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <ul className="f1-legal-links">
                                <li className="f1-nav__item f1-nav__item--has-children js-closed">
                                    <a href="#" className="d-lg-none">
                                        <span className="f1-nav__underline">More</span>{" "}
                                        <i className="icon icon-chevron-down" />
                                    </a>
                                    <ul>
                                        <li className="f1-nav__item">
                                            <a href="https://www.formula1.com/en/toolbar/contacts.html" data-pathtype="internal">
                                                <span className="f1-nav__underline">Contacts</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a href="https://www.formula1.com/en/toolbar/faq.html" data-pathtype="internal">
                                                <span className="f1-nav__underline">F1 TV Support</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/privacy-policy.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Privacy Policy</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/cookies-policy.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Cookies Policy</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                  <span
                      id="cookie_Preference"
                      className="f1-nav__underline text--xxs"
                  >
                    <div
                        id="teconsent"
                        aria-label="Open Cookie Preferences Modal"
                        role="complementary"
                    >
                      <a
                          role="link"
                          id="icon-id028846854851312"
                          tabIndex={0}
                          lang="en"
                          aria-haspopup="true"
                          aria-label="Cookie Preferences"
                          className="truste_cursor_pointer"
                      >
                        Cookie Preferences
                      </a>
                    </div>
                  </span>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/guidelines.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Guidelines</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/legal-notices.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Legal Notices</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/code-of-conduct.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Code of Conduct</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/Anti-Bribery.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Anti-Bribery</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/statement-of-commitment-to-respect-for-human-rights.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Human Rights</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/gender-pay-report.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Gender Pay Report</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/terms-of-use.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">Terms of Use</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a href="https://www.formula1.com/en/toolbar/partners.html" data-pathtype="internal">
                                                <span className="f1-nav__underline">Partners</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/f1-fan-voice.html"
                                                data-pathtype="internal"
                                            >
                                                <span className="f1-nav__underline">F1® Fan Voice</span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/beyond-the-grid-f1-podcast.html"
                                                data-pathtype="internal"
                                            >
                    <span className="f1-nav__underline">
                      Beyond The Grid - the F1® podcast
                    </span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/f1-corporate-site.html"
                                                data-pathtype="internal"
                                            >
                    <span className="f1-nav__underline">
                      F1® Corporate Site
                    </span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/become-an-affiliate.html"
                                                data-pathtype="internal"
                                            >
                    <span className="f1-nav__underline">
                      Become an Affiliate
                    </span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/official-f1-race-programme.html"
                                                data-pathtype="internal"
                                            >
                    <span className="f1-nav__underline">
                      Official F1® Race Programme
                    </span>
                                            </a>
                                        </li>
                                        <li className="f1-nav__item">
                                            <a
                                                href="https://www.formula1.com/en/toolbar/modern-slavery-statement.html"
                                                data-pathtype="internal"
                                            >
                    <span className="f1-nav__underline">
                      Modern Slavery Statement
                    </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f1-footer__baseline">
                <div className="container">
                    <hr className="f1-divider d-none d-lg-block" />
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <a
                                href="https://www.formula1.com"
                                title="Formula 1"
                                className="f1-logo"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={320}
                                    height={80}
                                    viewBox="0 0 320 80"
                                    fill="none"
                                    className="injected-svg js-svg-inject"
                                >
                                    <g clipPath="url(#clip0_1_57-1)">
                                        <g clipPath="url(#clip1_1_57-1)">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M45.2583 80L80.7417 45.575H80.7333C94.7167 32.0167 100.392 29.9583 127.058 29.9583H233.408L264.008 0H123.025C87.3333 0 77.2417 3.4 56.3083 24.1167L0 80H45.2583ZM127.7 34.7417H228.842L200.792 62.7917H128.225C114.925 62.7917 111.983 63.4167 105.383 70.0167L95.4 80H53.4333L84.4583 48.975C96.6417 36.8 100.842 34.7417 127.7 34.7417ZM320 0L239.783 80H190.175L270.175 0H320ZM267.183 77.4667C268.85 79.1583 270.95 80 273.475 80C276 80 278.075 79.1583 279.717 77.4833C281.358 75.8083 282.175 73.7333 282.175 71.2667C282.175 68.8 281.35 66.725 279.7 65.0333C278.05 63.3417 275.967 62.5 273.442 62.5C270.917 62.5 268.825 63.3417 267.167 65.0167C265.508 66.6917 264.675 68.7667 264.675 71.2333C264.675 73.7 265.508 75.775 267.183 77.4667ZM268.225 66.025C269.625 64.5917 271.358 63.875 273.425 63.875C275.5 63.875 277.233 64.5917 278.625 66.025C280.017 67.4583 280.717 69.2 280.717 71.25C280.717 73.3 280.017 75.0333 278.625 76.4583C277.225 77.8833 275.5 78.5917 273.425 78.5917C271.35 78.5917 269.617 77.875 268.225 76.4417C266.833 75.0083 266.133 73.275 266.133 71.2333C266.133 69.1917 266.833 67.4583 268.225 66.025ZM271.717 76.125V72.6917L271.725 72.7H273.683L275.342 76.1333H277.367L275.542 72.45C276.158 72.1667 276.592 71.8 276.85 71.3417C277.108 70.8833 277.233 70.1833 277.233 69.2417C277.233 68.3 276.917 67.5917 276.283 67.125C275.65 66.65 274.7 66.4167 273.442 66.4167H269.792V76.125H271.717ZM271.683 71.1833V67.9167H273.275C274.65 67.9167 275.333 68.4583 275.333 69.55C275.333 70.125 275.2 70.5417 274.933 70.8C274.675 71.0583 274.242 71.1833 273.642 71.1833H271.683Z"
                                                fill="white"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_57-1">
                                            <rect width={320} height={80} fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1_1_57-1">
                                            <rect width={320} height={80} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <p className="f1-copyright-notice float-xl-right">
                                © 2003-2023 Formula One World Championship Limited
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
