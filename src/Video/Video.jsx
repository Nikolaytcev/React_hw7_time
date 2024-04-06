import { DateTime } from '../DateTime/DateTime'
import DateTimePretty from '../DateTimePretty/DateTimePretty'


export const DateTimeNew = DateTimePretty(DateTime)

export const Video = ({ url, date }) => {
    return (
      <div className="video">
              <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              <DateTimeNew date={date} />
          </div>
    )
  }
