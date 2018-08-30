import React, { Component } from "react";
import FeedStragtegy from "./feed-strategy/FeedStrategy";
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
        this.feedStragtegy = new FeedStragtegy("");
        this.onUpdateUrl = this.onUpdateUrl.bind(this);
    }

    chooseFeedType() {
        const handler = [
            {
                json: JSONFeeds
            }
        ];
        this.feedStragtegy.setFeedSource(new handler[this.state.feedType]());
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
        return (
            <div className="container">
                <TaskItemContainer
                    onUpdateUrl={this.onUpdateUrl}
                    feeds={this.state.feeds}
                />
                <div className="active-url">
                    <span>{this.state.activeUrl}</span>
                </div>
            </div>
        );
    }
}

export default App;
