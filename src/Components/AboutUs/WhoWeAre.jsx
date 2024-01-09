import { Row, Col } from 'react-bootstrap';
import Aos from 'aos';
import { useEffect, useState } from 'react';

export const WhoWeAre = (props) => {
  let mission_data = props.mission;
  let vision_data = props.vision;
  let whoWeAre_data = props.whoweare;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init();
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const SkeletonText = ({ lines }) => (
    <div>
      {[...Array(lines)].map((_, index) => (
        <div key={index} className={`about_skeleton-line animate-skeleton-${loading ? 'in' : 'out'}`} />
      ))}
    </div>
  );

  return (
    <div className='about_whoWeAre_div'>
      <div className='about_whoWeAre'>
        <h3 className='about_whoWeAre_title logo_color' data-aos="fade-up" data-aos-duration="650">
          Who We Are
        </h3>
        <div className='about_whoWeAre_para' data-aos="fade-up" data-aos-duration="750">
          {loading ? <SkeletonText lines={4} /> : whoWeAre_data}
        </div>
      </div>

      <div className='about_mission_vision'>
        <Row>
          <Col md={6} className='mb-4' data-aos="fade-right" data-aos-duration="850">
            <div>
              <h2 className="logo_color">Our Mission</h2>
              <div>{loading ? <SkeletonText lines={2} /> : mission_data}</div>
            </div>
          </Col>

          <Col md={6} className='mb-4' data-aos="fade-left" data-aos-duration="850">
            <div>
              <h2 className="logo_color">Our Vision</h2>
              <div>{loading ? <SkeletonText lines={2} /> : vision_data}</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
