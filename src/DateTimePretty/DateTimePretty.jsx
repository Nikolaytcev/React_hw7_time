import React from 'react'

function changeTime (time) {
  const difDate = new Date() - new Date(time);
  if (Math.floor(difDate/(60 * 60 * 24 * 1000)) > 0) {
    return `${Math.floor(difDate/(60 * 60 * 24 * 1000))} дней назад`
  }
  else if (Math.floor(difDate/(60 * 60 * 1000)) > 0) {
    return `${Math.floor(difDate/(60 * 60 * 1000))} часов назад`
  }
  else {
    return `${Math.floor(difDate/(60 * 1000))} минут назад`
  }
}

export default function DateTimePretty(Component) {
    return class DateTimePretty extends React.Component {
        render() {       
        const { date } = this.props;
          return (
            <Component date={changeTime(date)}/>
          )
        }
      }
}


