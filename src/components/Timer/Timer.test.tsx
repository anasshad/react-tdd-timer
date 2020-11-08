import React from "react";
import {
  mount,
  ReactWrapper,
  shallow,
  ShallowWrapper,
  MountRendererProps,
} from "enzyme";

import Timer from "./Timer";

describe("Timer", () => {
  let container: ShallowWrapper;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should render instances of the TimerButton component", () => {
    expect(container.find("TimerButton").length).toEqual(3);
  });
});

describe("mounted Timer", () => {
  let container: ReactWrapper<MountRendererProps>;

  beforeEach(() => {
    container = mount(<Timer />);
  });

  it("invokes start timer when the start button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "startTimer" as "context");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".start-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("invokes stop timer when the stop button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "stopTimer" as "context");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".stop-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("invokes reset timer when the reset button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "resetTimer" as "context");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".reset-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should change isOn state to true when the start button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".start-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(true);
  });

  it("should change isOn state to false when the stop button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".stop-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(false);
  });

  it("should change isOn state to true when the reset button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".reset-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(false);
  });
});
