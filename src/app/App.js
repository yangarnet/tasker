import React, { Component } from "react";
import StrategySingleton from "./feed-strategy/StrategySingleton";
import JSONFeeds from "./feed-strategy/json/JsonFeeds";

import "./App.css";
import TaskItemContainer from "./features/tasks/TaskItemContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUrl: "",
            feedType: "json",
            feeds: {}
        };
        this.feedStragtegy = StrategySingleton.getIntance();
        this.onUpdateUrl = this.onUpdateUrl.bind(this);
    }

    chooseFeedType() {
        const handler = {
            "json": JSONFeeds
        };
        const selectedHandler = handler[this.state.feedType];
        this.feedStragtegy.setFeedSource(new selectedHandler());
    }

    componentDidMount() {
        this.chooseFeedType();
        this.setState({
            feeds: this.feedStragtegy.getFeeds()
        });
    }

    onUpdateUrl(url) {
        this.setState({
            activeUrl: url
        });
    }

    render() {
        const {feeds} = this.state;
        return (
            <div className="container">
                <TaskItemContainer
                    onUpdateUrl={this.onUpdateUrl}
                    feeds={feeds}
                />
                <div className="active-url">
                    <span>{this.state.activeUrl}</span>
                </div>
            </div>
        );
    }
}

export default App;
