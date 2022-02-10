import React, { Component } from "react";
import moment from "moment";
import styles from "./styles.module.css";

class CountDown extends Component {
  state = {
    weeks: undefined,
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      let difference = +new Date(then) - +new Date(now);
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
          days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      this.setState({
        weeks: timeLeft.weeks,
        days: timeLeft.days,
        hours: timeLeft.hours,
        minutes: timeLeft.minutes,
        seconds: timeLeft.seconds,
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { weeks, days, hours, minutes, seconds } = this.state;
    const weeksRadius = mapNumber(weeks, 30, 0, 0, 360);
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <div className={styles.countdownWrapper}>
          {weeks && (
            <div className={styles.countdownItem}>
              <SVGCircle radius={weeksRadius} />
              {weeks}
              <span className={styles.text}>semanas</span>
            </div>
          )}
          {days && (
            <div className={styles.countdownItem}>
              <SVGCircle radius={daysRadius} />
              {days}
              <span className={styles.text}>dias</span>
            </div>
          )}
          {hours && (
            <div className={styles.countdownItem}>
              <SVGCircle radius={hoursRadius} />
              {hours}
              <span className={styles.text}>horas</span>
            </div>
          )}
          {minutes && (
            <div className={styles.countdownItem}>
              <SVGCircle radius={minutesRadius} />
              {minutes}
              <span className={styles.text}>minutos</span>
            </div>
          )}
          {seconds && (
            <div className={styles.countdownItem}>
              <SVGCircle radius={secondsRadius} />
              {seconds}
              <span className={styles.text}>segundos</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const SVGCircle = ({ radius }) => (
  <svg className={styles.countdownSvg}>
    <path
      fill="none"
      stroke="#333"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default CountDown;
