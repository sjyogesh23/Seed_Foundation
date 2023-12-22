import { Container } from "react-bootstrap";
import './style.css';
import { RelatedVideo } from "./RelatedVideo";
export const EachVideo = (props) => {

  const videoData = {
    title: 'Sample Video',
    videoSource: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: '01/09/2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sit amet consectetur adipiscing elit ut aliquam purus. Tristique risus nec feugiat in fermentum posuere urna. Quis varius quam quisque id. Justo nec ultrices dui sapien. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Tortor aliquam nulla facilisi cras fermentum odio. Montes nascetur ridiculus mus mauris vitae ultricies leo. Viverra aliquet eget sit amet tellus cras adipiscing. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.',
  };


  return (
    <Container>
          <h2 className='logo_color'>{videoData.title}</h2>
          <video controls className="w-100 video" src={videoData.videoSource} type="video/mp4"/>
          <div>{videoData.date}</div>
          <h3 className='logo_color e_vid_des_title'>Description</h3>
          <div className='e_vid_des'>{videoData.description}.</div> 
          <RelatedVideo/>
    </Container>
  )
}
