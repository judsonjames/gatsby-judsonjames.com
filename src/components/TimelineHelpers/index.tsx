import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import School from "../../../static/svg/school.svg";
import Work from "../../../static/svg/work.svg";

/**
 * Shared Props for all Timeline Elements
 */
export interface ItemProps {
    title: string;
    subtitle: string;
    description: string;
    dates: string;
}

/**
 * Timeline Element Item used to represent held Employment
 * @param {ItemProps} props
 * @constructor
 */
export const WorkItem = (props: ItemProps): JSX.Element => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={props.dates}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Work/>}
        >
            <h3 className={"vertical-timeline-element-title"}>{props.title}</h3>
            <h4 className={"vertical-timeline-element-subtitle"}>{props.subtitle}</h4>
            <p>{props.description}</p>
        </VerticalTimelineElement>
    );
};

/**
 * Timeline Element used to Represent Educational events
 * @param {ItemProps} props
 * @constructor
 */
export const EducationItem = (props: ItemProps): JSX.Element => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={props.dates}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<School/>}
        >
            <h3 className={"vertical-timeline-element-title"}>{props.title}</h3>
            <h4 className={"vertical-timeline-element-subtitle"}>{props.subtitle}</h4>
            <p>{props.description}</p>
        </VerticalTimelineElement>
    );
};

/**
 * Timeline Item used to represent Open Sourced Projects or Volunteer Events
 * @param {ItemProps} props
 * @constructor
 */
export const OpenSourceItem = (props: ItemProps): JSX.Element => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={props.dates}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={props.icon}
        >
            <h3 className={"vertical-timeline-element-title"}>{props.title}</h3>
            <h4 className={"vertical-timeline-element-subtitle"}>{props.subtitle}</h4>
            <p>{props.description}</p>
        </VerticalTimelineElement>
    );
};
