import { Row, Col } from 'react-bootstrap'
import { Mission_card } from './MissionVision/Mission_card';
import { Vission_card } from './MissionVision/Vission_card';
import Aos from 'aos';
import { useEffect } from 'react';

export const WhoWeAre = () => { 

    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <div className='whoWeAre_div'>
            <div className='onlyWhoWeAre'>
                <h3 className='whoWeAre_title logo_color' data-aos="fade-up" data-aos-duration="650">Who We Are</h3>
                <p className='whoWeAre_para' data-aos="fade-up" data-aos-duration="750">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod leo ut
                    justo condimentum, sit amet rhoncus orci consequat. Sed sodales risus eget enim
                    pellentesque, sit amet facilisis nulla ultrices.
                </p>
            </div>
            

            <Row>
                <Col md={6} className='mb-4' data-aos="zoom-in" data-aos-duration="850">
                    <Mission_card/>
                </Col>

                <Col md={6} className='mb-4' data-aos="zoom-in" data-aos-duration="850">
                    <Vission_card/>
                </Col>
            </Row>
        </div>
    )
}
