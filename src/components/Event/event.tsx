function Event() {
    return (
        <div
            className="event-tracker"
            data-service="/v1/event-tracker"
            data-leader-text="Leader"
            data-qualifying-text="Q"
        >
            <section
                className="countdown-wrapper"
                data-location-in-page="Event Tracker"
                style={{}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="race-title-wrapper">
                                <div className="race-status-wrapper f1-color--white">
              <span className="no-margin f1-bold--xxs date-text">
                17 - 19 June
              </span>
                                </div>
                                <div className="race-info-wrapper">
                                    <div className="circuit-image-wrapper">
                                        <img
                                            className="circuit-image"
                                            src="https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada.png"
                                            alt="F1 live race circuit"
                                        />
                                    </div>
                                    <div className="race-text-wrapper">
                                        <a
                                            href="https://www.formula1.com/content/fom-website/en/racing/2023/Canada.html"
                                            className="race-text-link race-hub-link"
                                            data-analytics-event="click"
                                            data-tracking='{
                          "event": "navigation_click",
                          "componentId": "Event tracker",
                          "path":"#",
                          "pathType":"external",
                          "locationInPage":"event_tracker",
                          "actionType":"linkClick",
                          "navigationElement":"eventHub"
                      }'
                                        >
                                            <div className="race-text f1-color--white f1-uppercase">
                                                <span className="race-name">Canada</span>
                                                <picture>
                                                    <img
                                                        className="race-year-image"
                                                        src="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/year%20icon/2023.png.transform/4col/image.jpg"
                                                        alt=""
                                                    />
                                                </picture>
                                            </div>
                                            <i className="icon icon-chevron-right"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4 col-xl-3">
                            <div className="countdown-clock-wrapper">
                                <div className="countdown-clock">
                                    <div className="title-bar f1-uppercase f1-center">Race</div>
                                    <div className="clock">
                                        <div className="days">
                                            <p className="f1-color--white countdown-text">00</p>
                                            <span className="f1-uppercase">days</span>
                                        </div>
                                        <div className="hours">
                                            <p className="f1-color--white countdown-text">13</p>
                                            <span className="f1-uppercase">hrs</span>
                                        </div>
                                        <div className="minutes">
                                            <p className="f1-color--white countdown-text">36</p>
                                            <span className="f1-uppercase">mins</span>
                                        </div>
                                        <div className="seconds d-none">
                                            <p className="f1-color--white countdown-text">54</p>
                                            <span className="f1-uppercase">secs</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rolex-clock-wrapper"
                                    data-promo-view='{"promotion_name": "Rolex Clock", "creative_name": "Rolex Clock", "creative_slot": "Static Sponsorship", "item_brand": "Rolex"}'
                                >
                                    <div id="rolex-clock" className="rolex-clock">
                                        <a
                                            className="clock-tracker"
                                            target="_blank"
                                            href="https://www.rolex.com/?cmpid=dw_Clocks_201500329"
                                        >
                                            <div className="rolex-clock--face">
                                                <div className="rolex-clock--seconds"/>
                                                <div
                                                    className="rolex-clock--minutes"
                                                    style={{transform: "rotate(139deg)"}}
                                                />
                                                <div
                                                    className="rolex-clock--hours"
                                                    style={{transform: "rotate(342deg)"}}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a
                                href="/"
                                className="live-experience-cta btn btn--default btn--join-live text-semi-bold"
                                data-analytics-event="click"
                                data-tracking='{
                  "event": "navigation_click",
                  "actionType": "CTAclick",
                  "path": "$|<<eventTypeLabel>>|Join Live|/content/fom-website/en/f1-live-lite.html#lap-by-lap",
                  "pathType": "internal",
                  "navigationElement": "eventTracker",
                  "locationInPage": "event_tracker",
                  "clickText": "Join Live"
                  }'
                            >
                                Join Live Session
                                <i className="f1-live f1-color--white"/>
                            </a>
                            <a
                                href="/"
                                className="live-timing-cta btn btn--default btn--join-live text-semi-bold d-none"
                                data-analytics-event="click"
                                data-tracking='{
                  "event": "navigation_click",
                  "actionType": "CTAclick",
                  "path": "$|<<eventTypeLabel>>|Join Live|/content/fom-website/en/f1-live-lite.html#lap-by-lap",
                  "pathType": "internal",
                  "navigationElement": "eventTracker",
                  "locationInPage": "event_tracker",
                  "clickText": "Join Live"
                  }'
                            >
                                Join Live Session
                                <i className="f1-live f1-color--white"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Event
