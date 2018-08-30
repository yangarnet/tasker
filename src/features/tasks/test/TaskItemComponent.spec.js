import React from "react";
import { shallow } from "enzyme";
import { assert, expect } from "chai";
import TaskItemComponent from "../TaskItemComponent";

describe("Task Item Component", () => {
    let wrapper;

    beforeEach(() => {
        let props = {
            user: "test user",
            status: "POSTED",
            description: "help with react unit test",
            userpath: "react",
            taskpath: "unit-test",
            onUpdateUrl: function() {}
        };

        wrapper = shallow(<TaskItemComponent {...props} />);
    });

    it("should dispaly task item with given props", () => {
        const renderResult = wrapper.find("li");
        expect(renderResult).to.be.not.null;
        expect(renderResult).to.have.lengthOf(1);

        const renderSpans = renderResult.find("span");
        expect(renderSpans).to.have.lengthOf(3);
        expect(renderSpans.at(0).text()).to.be.eq("test user");
        expect(renderSpans.at(1).text()).to.be.eq("POSTED");
        expect(renderSpans.at(2).text()).to.be.eq("help with react unit test");
    });

    it("should allow user to setting new props", () => {
        const newProps = {
            user: "new test user",
            status: "new POSTED",
            description: "new help unit test",
            userpath: "new react",
            taskpath: "new unit-test",
            onUpdateUrl: function() {}
        };

        wrapper.setProps(newProps);

        const renderResult = wrapper.find("li");
        expect(renderResult).to.be.not.null;
        expect(renderResult).to.have.lengthOf(1);

        const renderSpans = renderResult.find("span");
        expect(renderSpans).to.have.lengthOf(3);
        expect(renderSpans.at(0).text()).to.be.eq("new test user");
        expect(renderSpans.at(1).text()).to.be.eq("new POSTED");
        expect(renderSpans.at(2).text()).to.be.eq("new help unit test");
    });
});
