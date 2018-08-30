import feeds from "./tasks.json";
import processJsonFeed from "../../utils/JsonFeedHelper";

class JSONFeeds {
    getFeeds() {
        return processJsonFeed(feeds);
    }
}

export default JSONFeeds;
