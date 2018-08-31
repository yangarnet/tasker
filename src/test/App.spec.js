import React from "react";
import { shallow, mount } from "enzyme";
import { assert, expect } from "chai";
import App from "../App";
import TaskItemContainer from "../features/tasks/TaskItemContainer";
import TaskItemComponent from "../features/tasks/TaskItemComponent";
import feeds from "../shared-test-data/mock.feeds.json";

describe("The App", () => {
    it("should render the app properly without crash", () => {
        let wrapper = shallow(<App />);
        const appContainer = wrapper.find(".container");

        assert(appContainer !== null && appContainer !== undefined);

        expect(appContainer).to.have.lengthOf(1);
        expect(appContainer.find(TaskItemContainer)).to.have.lengthOf(1);
        expect(appContainer.find(".active-url")).to.be.not.null;
        expect(appContainer.find(".active-url")).to.have.lengthOf(1);
    });

    it("should display task data and handle mouse hover events properly", () => {
        let wrapper = mount(<App />);

        const appContainer = wrapper.find(".container");

        assert(appContainer !== null && appContainer !== undefined);

        expect(appContainer).to.have.lengthOf(1);
        expect(appContainer.find(TaskItemContainer)).to.have.lengthOf(1);

        const taskItemsWrapper = appContainer.find(TaskItemComponent);
        expect(appContainer.find(TaskItemComponent)).to.have.lengthOf(
            7,
            "we have 7 task items in the list"
        );

        const firstSpanInTask = taskItemsWrapper
            .find("li")
            .at(0)
            .find("span")
            .at(0);
        expect(firstSpanInTask.text()).to.be.equal("James T.");

        firstSpanInTask.simulate("mouseover");
        let urlWrapper = wrapper.find(".active-url");
        expect(urlWrapper.find("span").text()).to.be.eq("/users/james-tippett");

        const thridSpanInTask = taskItemsWrapper
            .find("li")
            .at(0)
            .find("span")
            .at(2);
        expect(thridSpanInTask.text()).to.be.equal(
            "Teach me how to fly a drone"
        );

        thridSpanInTask.simulate("mouseover");
        urlWrapper = wrapper.find(".active-url");
        expect(urlWrapper.find("span").text()).to.be.eq("/tasks/drone");
    });
});
