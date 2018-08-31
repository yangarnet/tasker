import React from "react";
import { shallow } from "enzyme";
import { assert, expect } from "chai";
import TaskItemContainer from "../TaskItemContainer";
import feeds from '../../../shared-test-data/mock.feeds.json';
import processJsonFeed from '../../../utils/JsonFeedHelper';


describe("TaskItemContainer", () => {

    let wrapper;
    it("should render an empty task item container when no task feeds", () => {
        const props = {
            feeds: {}, onUpdateUrl: () => {}
        };
        wrapper = shallow(<TaskItemContainer {...props}/>);

        expect(wrapper.find('ul')).to.be.not.null;
        expect(wrapper.find('ul')).to.have.lengthOf(1);
        expect(wrapper.find('ul').children().length).to.be.eq(0);
    });

    it("should render task list property with given tasks", () => {
        const props = {
            feeds: processJsonFeed(feeds),
            onUpdateUrl: () => {}
        };

        wrapper = shallow(<TaskItemContainer {...props}/>);

        expect(wrapper.find('ul')).to.be.not.null;
        expect(wrapper.find('ul')).to.have.lengthOf(1);
        expect(wrapper.find('ul').children().length).to.be.eq(7);
    });
});
