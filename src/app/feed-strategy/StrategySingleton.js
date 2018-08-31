import FeedStragtegy from "./FeedStrategy";

const StrategySingleton = (function() {
    let instance;

    const createInstance = () => {
        return new FeedStragtegy('');
    };

    return {
        getIntance: function() {
            if (!instance) {
                return createInstance();
            }
            return instance;
        }
    }
})();

export default StrategySingleton;
