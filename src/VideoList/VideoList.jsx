import { Video } from '../Video/Video'

export const VideoList = (props) => {
  const { list } = props;
  return (
    list.map(item => <Video url={item.url} date={item.date} key={item.url}/>)
  )
}
