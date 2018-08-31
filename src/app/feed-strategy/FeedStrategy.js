function FeedStragtegy(feedSource) {
    this.feedSource = feedSource;
}

FeedStragtegy.prototype = {
    setFeedSource: function(feedSource) {
        this.feedSource = feedSource;
    },
    getFeeds: function() {
        return this.feedSource.getFeeds();
    }
};

export default FeedStragtegy;
