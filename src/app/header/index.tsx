function Header() {
    return (
        <header
            className="site-nav"
            data-analyticscomponentid="header_component"
        >
            <div className="nav-mobile-wrapper remove-for-app">
                <div className="nav-mobile-header mobile-nav-helper">
                    <div className="nav-burger">
                        <button
                            type="button"
                            className="menu open"
                            name="button"
                            aria-label="Toggle Menu"
                        >
                            <span className="text-hide">Toggle Navigation&gt;</span>
                        </button>
                    </div>
                    <div className="logo">
                        <a href="#">
          <span>
            <img
                src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
                alt="Formula 1"
            />
          </span>
                        </a>
                    </div>
                    <div className="user-links logged-out">
                        <a
                            href="#"
                            data-locationinpage="navigation"
                            data-pathtype="internal"
                            className="signin login-link icon icon-user"
                        >
                            <span className="text-hide">Login/Register</span>
                        </a>
                        <a
                            href="#"
                            data-locationinpage="navigation"
                            data-pathtype="internal"
                            className="user-action icon icon-user"
                            data-toggle="modal"
                            data-target="#userLoggedInOverlay"
                        >
                            <span className="text-hide">User Options</span>
                        </a>
                    </div>
                </div>
                <div className="nav-wrapper">
                    <div className="nav-primary table-footer-group" id="primaryNav">
                        <div className="nav-width">
                            <div className="logo">
                                <a href="#">
              <span>
                <img
                    src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
                    alt="Formula 1"
                />
              </span>
                                </a>
                            </div>
                            <div className="primary-links">
                                <ul>
                                    <li className="expandable">
                                        <a
                                            href="https://www.formula1.com/en/latest.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink "
                                        >
                                            <span className="link-text">Latest</span>
                                        </a>
                                        <div className="nav-secondary nav-secondary--overlay">
                                            <div className="ns-wrapper">
                                                <div className="nav-width">
                                                    <div className="nav-contents">
                                                        <div className="nav-header">
                                                            <a
                                                                href="https://www.formula1.com/en/latest.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Latest
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/latest/what-is-f1.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                What is F1?{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                        </div>
                                                        <div
                                                            className="nav-list"
                                                            data-primary-label="Latest"
                                                            data-url="/v1/editorial-assemblies/navigation/latest/55qtJMP8A0lPHj7j2yAL5b"
                                                            data-view-assembly-id="55qtJMP8A0lPHj7j2yAL5b"
                                                            data-view-assembly-cache-expiry={60}
                                                            data-article-limit={3}
                                                            data-tag-limit={6}
                                                            data-tag-image-fallback="https://www.formula1.com/etc/designs/fom-website/images/patterns/placeholder_image.png"
                                                        >
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-lg-3 article-container">
                                                                        <div className="f1-color--white category-label">
                                                                            News
                                                                        </div>
                                                                        <div className="article-wrapper">
                                                                            <a
                                                                                href="https://www.formula1.com/en/latest/article.what-the-teams-said-qualifying-in-canada-2023.1BpwdftBubNujHyHo5SOYm.html"
                                                                                className="d-none d-md-flex f1-cc f1-stay-mobile f1-cc--tracker-black"
                                                                                data-analytics-event="click"
                                                                                data-tracking='{
          "event": "navigation_click",
          "path": "/en/latest/article.what-the-teams-said-qualifying-in-canada-2023.1BpwdftBubNujHyHo5SOYm.html",
          "pathType": "internal",
          "locationInPage": "secondary_navigation",
          "componentId": "Navigation Overlay",
          "actionType": "navigation",
          "navigationElement": "Latest > Article > Feature"
          }'
                                                                            >
                                                                                <div className="f1-cc--image">
                                                                                    <picture className="f1-cc--photo">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/v1687035345/trackside-images/2023/F1_Grand_Prix_of_Canada___Qualifying/1499277904.jpg.transform/2col/image.jpg, https://media.formula1.com/image/upload/v1687035345/trackside-images/2023/F1_Grand_Prix_of_Canada___Qualifying/1499277904.jpg.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/v1687035345/trackside-images/2023/F1_Grand_Prix_of_Canada___Qualifying/1499277904.jpg.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="f1-cc--caption">
                                                                                    <p className="misc--tag">Feature</p>
                                                                                    <p className="no-margin">
                                                                                        What the teams said – Qualifying
                                                                                        in
                                                                                        Canada
                                                                                    </p>
                                                                                </div>
                                                                            </a>
                                                                            <a
                                                                                href="https://www.formula1.com/en/latest/article.alonso-on-the-hunt-and-ferrari-on-the-back-foot-what-to-watch-for-in-the.p43k6buvliXIYK123Kwqc.html"
                                                                                className="d-none d-md-flex f1-cc f1-stay-mobile f1-cc--tracker-black"
                                                                                data-analytics-event="click"
                                                                                data-tracking='{
          "event": "navigation_click",
          "path": "/en/latest/article.alonso-on-the-hunt-and-ferrari-on-the-back-foot-what-to-watch-for-in-the.p43k6buvliXIYK123Kwqc.html",
          "pathType": "internal",
          "locationInPage": "secondary_navigation",
          "componentId": "Navigation Overlay",
          "actionType": "navigation",
          "navigationElement": "Latest > Article > Feature"
          }'
                                                                            >
                                                                                <div className="f1-cc--image">
                                                                                    <picture className="f1-cc--photo">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/f_auto/q_auto/v1687044528/fom-website/2023/Canada/MicrosoftTeams-image (21).jpg.transform/2col/image.jpg, https://media.formula1.com/image/upload/f_auto/q_auto/v1687044528/fom-website/2023/Canada/MicrosoftTeams-image (21).jpg.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/f_auto/q_auto/v1687044528/fom-website/2023/Canada/MicrosoftTeams-image (21).jpg.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="f1-cc--caption">
                                                                                    <p className="misc--tag">
                                                                                        Feature
                                                                                        <span className="unlock-tag">
                                          F1 Unlocked
                                        </span>
                                                                                    </p>
                                                                                    <p className="no-margin">
                                                                                        Alonso on the hunt and Ferrari
                                                                                        on the
                                                                                        back foot – What To Watch For in
                                                                                        the
                                                                                        Canadian Grand Prix
                                                                                    </p>
                                                                                </div>
                                                                            </a>
                                                                            <a
                                                                                href="https://www.formula1.com/en/latest/article.hulkenberg-loses-front-row-start-in-canada-as-he-lands-three-place-grid-drop.1WcvZS4G9gL64mylfDZ1T2.html"
                                                                                className="d-none d-md-flex f1-cc f1-stay-mobile f1-cc--tracker-black f1-cc--breaking-news-flat"
                                                                                data-analytics-event="click"
                                                                                data-tracking='{
          "event": "navigation_click",
          "path": "/en/latest/article.hulkenberg-loses-front-row-start-in-canada-as-he-lands-three-place-grid-drop.1WcvZS4G9gL64mylfDZ1T2.html",
          "pathType": "internal",
          "locationInPage": "secondary_navigation",
          "componentId": "Navigation Overlay",
          "actionType": "navigation",
          "navigationElement": "Latest > Article > News"
          }'
                                                                            >
                                                                                <div className="f1-cc--image">
                                                                                    <picture className="f1-cc--photo">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/f_auto/q_auto/v1687044311/fom-website/2023/Canada/hulkenberg-canada-practice-2023.png.transform/2col/image.jpg, https://media.formula1.com/image/upload/f_auto/q_auto/v1687044311/fom-website/2023/Canada/hulkenberg-canada-practice-2023.png.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/f_auto/q_auto/v1687044311/fom-website/2023/Canada/hulkenberg-canada-practice-2023.png.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                </div>
                                                                                <div className="f1-cc--caption">
                                                                                    <p className="misc--tag">
                                        <span className="f1-breaking-news">
                                          Breaking news
                                        </span>
                                                                                    </p>
                                                                                    <p className="no-margin">
                                                                                        Hulkenberg loses front-row start
                                                                                        in
                                                                                        Canada as he lands three-place
                                                                                        grid drop
                                                                                        for red flag breach
                                                                                    </p>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-9 tag-container">
                                                                        <div className="f1-color--white category-label">
                                                                            Topics
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-4">
                                                                                <a
                                                                                    href="https://www.formula1.com/en/latest/tags.f1-unlocked.5v2HQGB6VOZjbnFYceZW5I.html"
                                                                                    className="f1-cc f1-cc--collection f1-color--white f1-center f1-center f1-image--hover-zoom"
                                                                                    data-analytics-event="click"
                                                                                    data-tracking='{
              "event": "navigation_click",
              "path": "/en/latest/tags.f1-unlocked.5v2HQGB6VOZjbnFYceZW5I.html",
              "pathType": "internal",
              "locationInPage": "secondary_navigation",
              "componentId": "Navigation Overlay",
              "actionType": "navigation",
              "navigationElement": "Latest > Topic > F1 Unlocked"
              }'
                                                                                >
                                                                                    <picture
                                                                                        className="f1-cc--collection--photo ">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/f1 unlocked.jpg.transform/2col/image.jpg, https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/f1 unlocked.jpg.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/f1 unlocked.jpg.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                    <div
                                                                                        className="f1-cc--collection--caption">
                                        <span className="tag-name">
                                          F1 Unlocked
                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <a
                                                                                    href="https://www.formula1.com/en/latest/tags.race-calendar.2Sa4DEdBSUMcOqa8aYceEe.html"
                                                                                    className="f1-cc f1-cc--collection f1-color--white f1-center f1-center f1-image--hover-zoom"
                                                                                    data-analytics-event="click"
                                                                                    data-tracking='{
              "event": "navigation_click",
              "path": "/en/latest/tags.race-calendar.2Sa4DEdBSUMcOqa8aYceEe.html",
              "pathType": "internal",
              "locationInPage": "secondary_navigation",
              "componentId": "Navigation Overlay",
              "actionType": "navigation",
              "navigationElement": "Latest > Topic > Race calendar"
              }'
                                                                                >
                                                                                    <picture
                                                                                        className="f1-cc--collection--photo ">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/Race-calendar.jpg.transform/2col/image.jpg, https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/Race-calendar.jpg.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/Race-calendar.jpg.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                    <div
                                                                                        className="f1-cc--collection--caption">
                                        <span className="tag-name">
                                          Race calendar
                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <a
                                                                                    href="https://www.formula1.com/en/latest/tags.sustainability.2Xv0Ky85GUqpD8aP9sgUwq.html"
                                                                                    className="f1-cc f1-cc--collection f1-color--white f1-center f1-center f1-image--hover-zoom"
                                                                                    data-analytics-event="click"
                                                                                    data-tracking='{
              "event": "navigation_click",
              "path": "/en/latest/tags.sustainability.2Xv0Ky85GUqpD8aP9sgUwq.html",
              "pathType": "internal",
              "locationInPage": "secondary_navigation",
              "componentId": "Navigation Overlay",
              "actionType": "navigation",
              "navigationElement": "Latest > Topic > Sustainability"
              }'
                                                                                >
                                                                                    <picture
                                                                                        className="f1-cc--collection--photo ">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/f_auto/q_auto/v1679313708/fom-website/2018-redesign-assets/Tag collections/Other/NetZero_Car_i4_i3_0004.jpg.transform/2col/image.jpg, https://media.formula1.com/image/upload/f_auto/q_auto/v1679313708/fom-website/2018-redesign-assets/Tag collections/Other/NetZero_Car_i4_i3_0004.jpg.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/f_auto/q_auto/v1679313708/fom-website/2018-redesign-assets/Tag collections/Other/NetZero_Car_i4_i3_0004.jpg.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                    <div
                                                                                        className="f1-cc--collection--caption">
                                        <span className="tag-name">
                                          Sustainability
                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <a
                                                                                    href="https://www.formula1.com/en/latest/tags.beginner-s-guide.7szZSRQkywApBCsTz1sDwg.html"
                                                                                    className="f1-cc f1-cc--collection f1-color--white f1-center f1-center f1-image--hover-zoom"
                                                                                    data-analytics-event="click"
                                                                                    data-tracking='{
              "event": "navigation_click",
              "path": "/en/latest/tags.beginner-s-guide.7szZSRQkywApBCsTz1sDwg.html",
              "pathType": "internal",
              "locationInPage": "secondary_navigation",
              "componentId": "Navigation Overlay",
              "actionType": "navigation",
              "navigationElement": "Latest > Topic > Beginner&apos;s Guide"
              }'
                                                                                >
                                                                                    <picture
                                                                                        className="f1-cc--collection--photo ">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/f_auto/q_auto/v1680598927/fom-website/2018-redesign-assets/Tag collections/Other/b guide copy.jpg.transform/2col/image.jpg, https://media.formula1.com/image/upload/f_auto/q_auto/v1680598927/fom-website/2018-redesign-assets/Tag collections/Other/b guide copy.jpg.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/f_auto/q_auto/v1680598927/fom-website/2018-redesign-assets/Tag collections/Other/b guide copy.jpg.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                    <div
                                                                                        className="f1-cc--collection--caption">
                                        <span className="tag-name">
                                          Beginner's Guide
                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <a
                                                                                    href="https://www.formula1.com/en/latest/tags.f1-academy.E4U087QqWtfDuC0tsjhUi.html"
                                                                                    className="f1-cc f1-cc--collection f1-color--white f1-center f1-center f1-image--hover-zoom"
                                                                                    data-analytics-event="click"
                                                                                    data-tracking='{
              "event": "navigation_click",
              "path": "/en/latest/tags.f1-academy.E4U087QqWtfDuC0tsjhUi.html",
              "pathType": "internal",
              "locationInPage": "secondary_navigation",
              "componentId": "Navigation Overlay",
              "actionType": "navigation",
              "navigationElement": "Latest > Topic > F1 Academy"
              }'
                                                                                >
                                                                                    <picture
                                                                                        className="f1-cc--collection--photo ">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/f_auto/q_auto/v1677250082/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/F1 Academy.jpg.transform/2col/image.jpg, https://media.formula1.com/image/upload/f_auto/q_auto/v1677250082/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/F1 Academy.jpg.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/f_auto/q_auto/v1677250082/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/F1 Academy.jpg.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                    <div
                                                                                        className="f1-cc--collection--caption">
                                        <span className="tag-name">
                                          F1 Academy
                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <a
                                                                                    href="https://www.formula1.com/en/latest/tags.driver-market.48p0PATNawKYyi0QueUwyS.html"
                                                                                    className="f1-cc f1-cc--collection f1-color--white f1-center f1-center f1-image--hover-zoom"
                                                                                    data-analytics-event="click"
                                                                                    data-tracking='{
              "event": "navigation_click",
              "path": "/en/latest/tags.driver-market.48p0PATNawKYyi0QueUwyS.html",
              "pathType": "internal",
              "locationInPage": "secondary_navigation",
              "componentId": "Navigation Overlay",
              "actionType": "navigation",
              "navigationElement": "Latest > Topic > Driver market"
              }'
                                                                                >
                                                                                    <picture
                                                                                        className="f1-cc--collection--photo ">
                                                                                        <source
                                                                                            data-srcset="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/Driver_market.jpg.transform/2col/image.jpg, https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/Driver_market.jpg.transform/2col-retina/image.jpg 2x"/>
                                                                                        <img
                                                                                            data-src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Tag collections/Other/Driver_market.jpg.transform/2col/image.jpg"
                                                                                            className="lazy"
                                                                                            alt=""
                                                                                        />
                                                                                    </picture>
                                                                                    <div
                                                                                        className="f1-cc--collection--caption">
                                        <span className="tag-name">
                                          Driver market
                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://www.formula1.com/en/video.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink "
                                        >
                                            <span className="link-text">Video</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://www.formula1.com/en/page.discover-unlocked.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink "
                                        >
                                            <span className="link-text">F1 Unlocked</span>
                                        </a>
                                    </li>
                                    <li className="expandable">
                                        <a
                                            href="https://www.formula1.com/en/racing/2023.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink "
                                        >
                                            <span className="link-text">Schedule</span>
                                        </a>
                                        <div className="nav-secondary ">
                                            <div className="ns-wrapper">
                                                <div className="nav-width">
                                                    <div className="nav-contents">
                                                        <div className="nav-header">
                                                            <a
                                                                href="https://www.formula1.com/en/racing/2023.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Full Schedule{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/racing/2023/race-programmes.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Race Programmes{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                        </div>
                                                        <div
                                                            className="nav-list racing"
                                                            data-url="/v1/context/season"
                                                            data-next-text="Next"
                                                            data-upcoming-text="Upcoming"
                                                            data-completed-text="Previous"
                                                            data-started-text="Current"
                                                            data-started-color="#A3915E"
                                                        >
                                                            <div className="racing-events clearfix">
                                                                <div className="racing-cards">
                                                                    <a
                                                                        href="#"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        title=""
                                                                        className="event"
                                                                    >
                                                                        <div
                                                                            className="caption f1-bold--xs f1-color--white f1-bg--carbonBlack f1-uppercase"/>
                                                                        <div className="card">
                                                                            <div className="image-holder">
                                                                                <img
                                                                                    className="raceimage lazy"
                                                                                    data-src="https://www.formula1.com/etc/designs/fom-website/images/nav-races-card/AustraliaGP/Group_1x.png"
                                                                                    alt="Race GP"
                                                                                />
                                                                            </div>
                                                                            <div className="desc">
                                                                                <span
                                                                                    className="title f1--xxs f1-color--gray4"/>
                                                                                <span
                                                                                    className="date misc--label f1-color--white"/>
                                                                                <i className="icon icon-chevron-right f1-color--gray4 icon-chevron-desc--position"/>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="racing-cards completed">
                                                                    <a
                                                                        href="https://www.formula1.com/content/fom-website/en/racing/2023/Spain.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        title=""
                                                                        className="event"
                                                                    >
                                                                        <div
                                                                            className="caption f1-bold--xs f1-color--white f1-bg--carbonBlack f1-uppercase">
                                                                            Previous
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="image-holder">
                                                                                <img
                                                                                    className="raceimage lazy"
                                                                                    data-src="https://media.formula1.com/content/dam/fom-website/races/2023/Spanish_Grand_Prix.png"
                                                                                    alt="Race GP"
                                                                                />
                                                                            </div>
                                                                            <div className="desc">
                                    <span className="title f1--xxs f1-color--gray4">
                                      FORMULA 1 AWS GRAN PREMIO DE ESPAÑA 2023
                                    </span>
                                                                                <span
                                                                                    className="date misc--label f1-color--white">
                                      June 02-04
                                    </span>
                                                                                <i className="icon icon-chevron-right f1-color--gray4 icon-chevron-desc--position"/>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="racing-cards started">
                                                                    <a
                                                                        href="https://www.formula1.com/content/fom-website/en/racing/2023/Canada.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        title=""
                                                                        className="event"
                                                                    >
                                                                        <div
                                                                            className="caption f1-bold--xs f1-color--white f1-bg--carbonBlack f1-uppercase">
                                                                            Current
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="image-holder">
                                                                                <img
                                                                                    className="raceimage lazy"
                                                                                    data-src="https://media.formula1.com/content/dam/fom-website/races/2023/Canadian_Grand_Prix.png"
                                                                                    alt="Race GP"
                                                                                />
                                                                            </div>
                                                                            <div className="desc">
                                    <span className="title f1--xxs f1-color--gray4">
                                      FORMULA 1 PIRELLI GRAND PRIX DU CANADA
                                      2023
                                    </span>
                                                                                <span
                                                                                    className="date misc--label f1-color--white">
                                      June 16-18
                                    </span>
                                                                                <i className="icon icon-chevron-right f1-color--gray4 icon-chevron-desc--position"/>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="racing-cards upcoming">
                                                                    <a
                                                                        href="https://www.formula1.com/content/fom-website/en/racing/2023/Austria.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        title=""
                                                                        className="event"
                                                                    >
                                                                        <div
                                                                            className="caption f1-bold--xs f1-color--white f1-bg--carbonBlack f1-uppercase">
                                                                            Upcoming
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="image-holder">
                                                                                <img
                                                                                    className="raceimage lazy"
                                                                                    data-src="https://media.formula1.com/content/dam/fom-website/races/2023/Austrian_Grand_Prix.png"
                                                                                    alt="Race GP"
                                                                                />
                                                                            </div>
                                                                            <div className="desc">
                                    <span className="title f1--xxs f1-color--gray4">
                                      FORMULA 1 ROLEX GROSSER PREIS VON
                                      ÖSTERREICH 2023
                                    </span>
                                                                                <span
                                                                                    className="date misc--label f1-color--white">
                                      June 30-July 02
                                    </span>
                                                                                <i className="icon icon-chevron-right f1-color--gray4 icon-chevron-desc--position"/>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="racing-cards upcoming">
                                                                    <a
                                                                        href="https://www.formula1.com/content/fom-website/en/racing/2023/Great_Britain.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        title=""
                                                                        className="event"
                                                                    >
                                                                        <div
                                                                            className="caption f1-bold--xs f1-color--white f1-bg--carbonBlack f1-uppercase"
                                                                            style={{display: "none"}}
                                                                        >
                                                                            Upcoming
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="image-holder">
                                                                                <img
                                                                                    className="raceimage lazy"
                                                                                    data-src="https://media.formula1.com/content/dam/fom-website/races/2023/British_Grand_Prix.png"
                                                                                    alt="Race GP"
                                                                                />
                                                                            </div>
                                                                            <div className="desc">
                                    <span className="title f1--xxs f1-color--gray4">
                                      FORMULA 1 ARAMCO BRITISH GRAND PRIX 2023
                                    </span>
                                                                                <span
                                                                                    className="date misc--label f1-color--white">
                                      July 07-09
                                    </span>
                                                                                <i className="icon icon-chevron-right f1-color--gray4 icon-chevron-desc--position"/>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="expandable">
                                        <a
                                            href="https://www.formula1.com/en/results.html/2023/races.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink current"
                                        >
                                            <span className="link-text">Results</span>
                                        </a>
                                        <div className="nav-secondary ">
                                            <div className="ns-wrapper">
                                                <div className="nav-width">
                                                    <div className="nav-contents">
                                                        <div className="nav-header">
                                                            <a
                                                                href="https://www.formula1.com/en/results/latest.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                2023 Season{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/results/driver-standings.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Driver Standings{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/results/constructor-standings.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Constructor Standings{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/results/archive-1950-2016.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Archive 1950-2022{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/results/awards.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                F1 Awards{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="expandable">
                                        <a
                                            href="https://www.formula1.com/en/drivers.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink "
                                        >
                                            <span className="link-text">Drivers</span>
                                        </a>
                                        <div className="nav-secondary ">
                                            <div className="ns-wrapper">
                                                <div className="nav-width">
                                                    <div className="nav-contents">
                                                        <div className="nav-header">
                                                            <a
                                                                href="https://www.formula1.com/en/drivers.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                All Drivers{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/drivers/hall-of-fame.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Hall of Fame{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                        </div>
                                                        <div className="nav-list drivers">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/alexander-albon.html"
                                                                        className="driver "
                                                                        style={{color: "#37BEDD"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Alexander</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Albon
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/fernando-alonso.html"
                                                                        className="driver "
                                                                        style={{color: "#358C75"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Fernando</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Alonso
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/valtteri-bottas.html"
                                                                        className="driver "
                                                                        style={{color: "#C92D4B"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Valtteri</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Bottas
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/nyck-de-vries.html"
                                                                        className="driver "
                                                                        style={{color: "#5E8FAA"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Nyck</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    De Vries
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/pierre-gasly.html"
                                                                        className="driver "
                                                                        style={{color: "#2293D1"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Pierre</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Gasly
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/lewis-hamilton.html"
                                                                        className="driver "
                                                                        style={{color: "#6CD3BF"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Lewis</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Hamilton
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/nico-hulkenberg.html"
                                                                        className="driver "
                                                                        style={{color: "#B6BABD"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Nico</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Hulkenberg
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/charles-leclerc.html"
                                                                        className="driver "
                                                                        style={{color: "#F91536"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Charles</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Leclerc
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/kevin-magnussen.html"
                                                                        className="driver "
                                                                        style={{color: "#B6BABD"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Kevin</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Magnussen
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/lando-norris.html"
                                                                        className="driver "
                                                                        style={{color: "#F58020"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Lando</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Norris
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/esteban-ocon.html"
                                                                        className="driver "
                                                                        style={{color: "#2293D1"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Esteban</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Ocon
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/sergio-perez.html"
                                                                        className="driver "
                                                                        style={{color: "#3671C6"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Sergio</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Perez
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/oscar-piastri.html"
                                                                        className="driver "
                                                                        style={{color: "#F58020"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Oscar</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Piastri
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/george-russell.html"
                                                                        className="driver "
                                                                        style={{color: "#6CD3BF"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">George</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Russell
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/carlos-sainz.html"
                                                                        className="driver "
                                                                        style={{color: "#F91536"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Carlos</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Sainz
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/logan-sargeant.html"
                                                                        className="driver "
                                                                        style={{color: "#37BEDD"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Logan</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Sargeant
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/lance-stroll.html"
                                                                        className="driver "
                                                                        style={{color: "#358C75"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Lance</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Stroll
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/yuki-tsunoda.html"
                                                                        className="driver "
                                                                        style={{color: "#5E8FAA"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Yuki</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Tsunoda
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/max-verstappen.html"
                                                                        className="driver "
                                                                        style={{color: "#3671C6"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span className="name f1--xxs f1-color--white followed f1-capitalize ">
                                  <span className="firstname">Max</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Verstappen
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/drivers/guanyu-zhou.html"
                                                                        className="driver "
                                                                        style={{color: "#C92D4B"}}
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                    >
                                <span
                                    className="name f1--xxs f1-color--white followed f1-capitalize driver-lastname-primary">
                                  <span className="firstname">Guanyu</span>
                                  <span className="lastname f1-bold--xxs f1-uppercase">
                                    Zhou
                                  </span>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="expandable">
                                        <a
                                            href="https://www.formula1.com/en/teams.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink "
                                        >
                                            <span className="link-text">Teams</span>
                                        </a>
                                        <div className="nav-secondary ">
                                            <div className="ns-wrapper">
                                                <div className="nav-width">
                                                    <div className="nav-contents">
                                                        <div className="nav-header">
                                                            <a
                                                                href="https://www.formula1.com/en/teams.html"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                All Teams{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                        </div>
                                                        <div className="nav-list teams">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/Alfa-Romeo.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#C92D4B"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">Alfa Romeo</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo-racing.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo-racing.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo-racing.png.transform/4col/image.png"
                                        alt="Alfa Romeo"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/AlphaTauri.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#5E8FAA"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">AlphaTauri</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023/alphatauri.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023/alphatauri.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023/alphatauri.png.transform/4col/image.png"
                                        alt="AlphaTauri"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/Alpine.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#2293D1"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">Alpine</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023/alpine.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023/alpine.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023/alpine.png.transform/4col/image.png"
                                        alt="Alpine"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/Aston-Martin.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#358C75"}}
                                                                        className="team "
                                                                    >
                                <span className="name f1--xs">
                                  Aston Martin
                                </span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-astonmartin.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-astonmartin.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-astonmartin.png.transform/4col/image.png"
                                        alt="Aston Martin"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/Ferrari.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#F91536"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">Ferrari</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023/ferrari.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023/ferrari.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023/ferrari.png.transform/4col/image.png"
                                        alt="Ferrari"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/Haas-F1-Team.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#B6BABD"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">Haas</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023-Team-Pages/teamcar-haas.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023-Team-Pages/teamcar-haas.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023-Team-Pages/teamcar-haas.png.transform/4col/image.png"
                                        alt="Haas"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/McLaren.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#F58020"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">McLaren</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-mclaren.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-mclaren.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-mclaren.png.transform/4col/image.png"
                                        alt="McLaren"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/Mercedes.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#6CD3BF"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">Mercedes</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023-Team-Pages/teamcar-mercedes.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023-Team-Pages/teamcar-mercedes.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023-Team-Pages/teamcar-mercedes.png.transform/4col/image.png"
                                        alt="Mercedes"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/Red-Bull-Racing.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#3671C6"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">Red Bull</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-redbull.png.transform/4col/image.png"
                                        alt="Red Bull"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="https://www.formula1.com/en/teams/Williams.html"
                                                                        data-locationinpage="secondary_navigation"
                                                                        data-pathtype="internal"
                                                                        style={{color: "#37BEDD"}}
                                                                        className="team "
                                                                    >
                                                                        <span className="name f1--xs">Williams</span>
                                                                        <span className="car-img">
                                  <picture>
                                    <source
                                        data-srcset="https://media.formula1.com/content/dam/fom-website/teams/2023/williams.png.transform/2col/image.png, https://media.formula1.com/content/dam/fom-website/teams/2023/williams.png.transform/2col-retina/image.png 2x"/>
                                    <img
                                        data-src="https://media.formula1.com/content/dam/fom-website/teams/2023/williams.png.transform/4col/image.png"
                                        alt="Williams"
                                        className="lazy"
                                    />
                                  </picture>
                                </span>
                                                                        <i className="icon icon-chevron-right f1-color--white icon-chevron--position"/>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="expandable">
                                        <a
                                            href="https://www.formula1.com/en/gaming.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink "
                                        >
                                            <span className="link-text">Gaming</span>
                                        </a>
                                        <div className="nav-secondary ">
                                            <div className="ns-wrapper">
                                                <div className="nav-width">
                                                    <div className="nav-contents">
                                                        <div className="nav-header">
                                                            <a
                                                                href="https://www.formula1.com/en/gaming/esports.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Esports{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/gaming/fantasy.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                Fantasy{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/gaming/f1-23-official-console-game.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                F1 23{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/gaming/f1-manager-2023.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                F1 Manager 23{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/gaming/f1-play.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                F1 Play{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/gaming/f1-mobile-racing.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                F1 Mobile Racing{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                            <a
                                                                href="https://www.formula1.com/en/gaming/f1-clash.html"
                                                                target="_blank"
                                                                rel="noopener"
                                                                data-locationinpage="secondary_navigation"
                                                                data-pathtype="internal"
                                                                className="f1-bold--s f1-color--white "
                                                            >
                                                                F1 Clash{" "}
                                                                <i className="icon icon-chevron-right f1-color--warmRed"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="">
                                        <a
                                            href="https://www.formula1.com/en/f1-live.html"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                            className="nav-mainlink "
                                        >
                                            <span className="link-text">Live Timing</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-global table-header-group" id="globalNav">
                        <div className="nav-global-wrapper nav-width">
                            <div className="logo">
                                <a
                                    href="https://www.fia.com/"
                                    target="_blank"
                                    data-locationinpage="MastHead"
                                    data-pathtype="external"
                                >
                                    <img
                                        src="https://www.formula1.com/etc/designs/fom-website/images/fia_logo.png"
                                        alt="Federation Internationale de l'Automobile"
                                    />
                                </a>
                            </div>
                            <div className="wrapper-global-nav">
                                <div className="global-actions clearfix">
                                    <div className="sign-in logged-out display-upsell-link">
                                        <a
                                            href="#"
                                            className="login-link btn btn--alpha btn--icon-left"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                        >
                  <span className="user-icon-text">
                    <i className="icon icon-user"/>
                    Sign In{" "}
                  </span>
                                        </a>
                                        <a
                                            href="#"
                                            className="user-account-actions btn btn--default btn--icon-left btn--transparent"
                                            data-toggle="modal"
                                            data-target="#userLoggedInOverlay"
                                            data-locationinpage="navigation"
                                            data-pathtype="internal"
                                        >
                  <span className="user-icon-text">
                    <i className="icon icon-user"/>
                    <i className="icon icon-notification"/>
                    <span className="loggedin-user"/>
                  </span>
                                        </a>
                                        <a
                                            href="/subscribe-to-f1-tv"
                                            className="pitch-link upsell-link btn btn--default"
                                            data-locationinpage="navigation"
                                            data-pathtype="formula1.com"
                                        >
                                            Subscribe
                                        </a>
                                        <a
                                            href="/subscribe-to-f1-tv"
                                            className="subscribe-link upsell-link btn btn--default d-none"
                                            data-locationinpage="navigation"
                                            data-pathtype="formula1.com"
                                        >
                                            Subscribe
                                        </a>
                                        <a
                                            href="/subscribe-to-f1-tv"
                                            className="upgrade-link upsell-link btn btn--default d-none"
                                            data-locationinpage="navigation"
                                            data-pathtype="formula1.com"
                                        >
                                            Upgrade
                                        </a>
                                    </div>
                                </div>
                                <div className="global-links">
                                    <ul>
                                        <li className="has-image">
                                            <a
                                                href="https://f1tv.formula1.com"
                                                data-locationinpage="navigation"
                                                data-pathtype="external"
                                                target="“_blank”"
                                            >
                                                <img
                                                    src="https://www.formula1.com/etc/designs/fom-website/images/f1-tv-logo.svg"
                                                    alt="F1 TV Logo"
                                                    width={72}
                                                    height={12}
                                                />
                                                <span className="icon icon-chevron-right"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.f1authentics.com/"
                                                target="_blank"
                                                rel="noopener"
                                                data-locationinpage="MastHead"
                                                data-pathtype="external"
                                            >
                                                Authentics
                                                <span className="icon icon-chevron-right"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://f1store.formula1.com/en/?_s=bm-fi-f1-prtsite-topnav-230720-jm"
                                                target="_blank"
                                                rel="noopener"
                                                data-locationinpage="MastHead"
                                                data-pathtype="external"
                                            >
                                                Store
                                                <span className="icon icon-chevron-right"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://tickets.formula1.com"
                                                target="_blank"
                                                rel="noopener"
                                                data-locationinpage="MastHead"
                                                data-pathtype="external"
                                            >
                                                Tickets
                                                <span className="icon icon-chevron-right"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://tickets.formula1.com/en/h-formula1-hospitality"
                                                target="_blank"
                                                rel="noopener"
                                                data-locationinpage="MastHead"
                                                data-pathtype="external"
                                            >
                                                Hospitality
                                                <span className="icon icon-chevron-right"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://f1experiences.com/?utm_source=formula1.com&utm_medium=referral&utm_campaign=general"
                                                target="_blank"
                                                rel="noopener"
                                                data-locationinpage="MastHead"
                                                data-pathtype="external"
                                            >
                                                Experiences
                                                <span className="icon icon-chevron-right"/>
                                            </a>
                                        </li>
                                    </ul>
                                    <a
                                        href="https://f1tv.formula1.com"
                                        data-locationinpage="navigation"
                                        data-pathtype="external"
                                        target="“_blank”"
                                    >
                                        <img
                                            src="https://www.formula1.com/etc/designs/fom-website/images/f1-tv-logo.svg"
                                            alt="F1 TV Logo"
                                            width={72}
                                            height={12}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="f2-f3-nav">
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className="f2f3-black"
                                            data-locationinpage="MastHead"
                                            data-pathtype="internal"
                                        >
                  <span>
                    F1<sup>®</sup>
                  </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="f2f3-grey"
                                            href="https://www.fiaformula2.com/"
                                            target="_blank"
                                            data-locationinpage="MastHead"
                                            data-pathtype="external"
                                        >
                  <span>
                    F2<sup>™</sup>
                  </span>
                                            <img
                                                src="https://www.formula1.com/etc/designs/fom-website/images/f2_logo.png"
                                                alt="Formula 2"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="f2f3-grey"
                                            href="https://www.fiaformula3.com/"
                                            target="_blank"
                                            data-locationinpage="MastHead"
                                            data-pathtype="external"
                                        >
                  <span>
                    F3<sup>™</sup>
                  </span>
                                            <img
                                                src="https://www.formula1.com/etc/designs/fom-website/images/f3_logo.png"
                                                alt="Formula 3"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="f2f3-grey"
                                            href="https://www.f1academy.com/"
                                            target="_blank"
                                            data-locationinpage="MastHead"
                                            data-pathtype="external"
                                        >
                  <span>
                    F1<sup>®</sup> ACADEMY
                  </span>
                                            <img
                                                src="https://www.formula1.com/etc/designs/fom-website/images/f1academy.svg"
                                                alt="Formula 1 Academy"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav-backdrop" style={{display: "none"}}/>
                </div>
            </div>
        </header>

    )
}

export default Header
