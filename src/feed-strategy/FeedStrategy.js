function FeedStragtegy(feedSource) {
    this.feedSource = feedSource;
}

FeedStragtegy.prototype = {
    setFeedSource: feedSource => {
        this.feedSource = feedSource;
    },
    getFeeds: () => {
        this.feedSource.getFeeds();
    }
};

export default FeedStragtegy;
