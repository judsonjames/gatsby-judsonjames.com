import React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Code from "../../../static/svg/code.svg";
import School from "../../../static/svg/school.svg";
import Work from "../../../static/svg/work.svg";
import "./styles.scss";

/**
 * Shared Props for all Timeline Elements
 */
export interface ItemProps {
  title: string;
  subtitle: string;
  description: string;
  dates: string;
  tags?: string[];
}

const tagItem = (text: string): JSX.Element => (
  <span className={"tag-item"}>
        {text}
    </span>
);

const iconColor: string = "rgba(255, 255, 255, 0.8)";

/**
 * Timeline Element Item used to represent held Employment
 * @param {ItemProps} props
 * @constructor
 */
export const WorkItem = (props: ItemProps): JSX.Element => {
  const backgroundColor: string = "rgba(29, 47, 111, 0.85)";
  const iconBackgroundColor: string = "rgba(29, 47, 111, 1)";
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{background: backgroundColor, color: iconColor, fontFamily: "Verdana"}}
      contentArrowStyle={{borderRight: `10px solid ${backgroundColor}`}}
      date={props.dates}
      dateClassName={"timeline__date"}
      iconStyle={{background: iconBackgroundColor, fill: "#000"}}
      icon={<Work className={"timeline__icon"}/>}
    >
      <h3 className={"vertical-timeline-element-title timeline__text"}>{props.title}</h3>
      <h4 className={"vertical-timeline-element-subtitle timeline__text"}>{props.subtitle}</h4>
      <p className={"timeline__text"}>{props.description}</p>
      <div className={"tags-container"}>
        {props.tags && props.tags.length && props.tags.sort().map((text: string) => tagItem(text))}
      </div>
    </VerticalTimelineElement>
  );
};

/**
 * Timeline Element used to Represent Educational events
 * @param {ItemProps} props
 * @constructor
 */
export const EducationItem = (props: ItemProps): JSX.Element => {
  const backgroundColor: string = "rgba(130, 9, 51, 0.8)";
  const iconBackgroundColor: string = "rgba(139, 9, 51, 1)";
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{background: backgroundColor, color: iconColor, fontFamily: "Verdana"}}
      contentArrowStyle={{borderRight: `10px solid ${backgroundColor}`}}
      date={props.dates}
      dateClassName={"timeline__date"}
      iconStyle={{background: iconBackgroundColor, color: "rgba(255, 255, 255, 0.8)"}}
      icon={<School className={"timeline__icon"}/>}
      style={{color: "white"}}
    >
      <h3 className={"vertical-timeline-element-title"}>{props.title}</h3>
      <h4 className={"vertical-timeline-element-subtitle"}>{props.subtitle}</h4>
      <p className={"timeline__text"}>{props.description}</p>
      <div className={"tags-container"}>
        {props.tags && props.tags.length && props.tags.sort().map((text: string) => tagItem(text))}
      </div>
    </VerticalTimelineElement>
  );
};

/**
 * Timeline Item used to represent Open Sourced Projects or Volunteer Events
 * @param {ItemProps} props
 * @constructor
 */
export const OpenSourceItem = (props: ItemProps): JSX.Element => {
  const backgroundColor: string = "rgba(17, 75, 95, 0.85)";
  const iconBackgroundColor: string = "rgba(17, 75, 95, 1)";
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{background: backgroundColor, color: iconColor, fontFamily: "Verdana"}}
      contentArrowStyle={{borderRight: `10px solid ${backgroundColor}`}}
      date={props.dates}
      dateClassName={"timeline__date"}
      iconStyle={{background: iconBackgroundColor, color: iconBackgroundColor}}
      icon={<Code className={"timeline__icon"}/>}
    >
      <h3 className={"vertical-timeline-element-title"}>{props.title}</h3>
      <h4 className={"vertical-timeline-element-subtitle"}>{props.subtitle}</h4>
      <p className={"timeline__text"}>{props.description}</p>
      <div className={"tags-container"}>
        {props.tags && props.tags.length && props.tags.sort().map((text: string) => tagItem(text))}
      </div>
    </VerticalTimelineElement>
  );
};
