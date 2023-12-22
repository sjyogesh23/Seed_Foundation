import { Row, Col } from 'react-bootstrap'
import { Mission_card } from './MissionVision/Mission_card';
import { Vission_card } from './MissionVision/Vission_card';
import Aos from 'aos';
import { useEffect } from 'react';

export const WhoWeAre = () => { 
    
    let mission_data = "Technological & Leadership Empowerment of the Students of PTU through Innovation and Applied Engineering.";
    let vision_data= "Prepare the Students of PTU for a smooth transition to the Industry by helping them hone the required skills ahead of time.";
    let whoWeAre_data ="we are the owners of this website haha 🙂🙂";

    useEffect(()=>{
        Aos.init();
    }, [])

    return (
        <div className='whoWeAre_div'>
            <div className='onlyWhoWeAre'>
                <h3 className='whoWeAre_title logo_color' data-aos="fade-up" data-aos-duration="650">Who We Are</h3>
                <p className='whoWeAre_para' data-aos="fade-up" data-aos-duration="750">
                    {whoWeAre_data}
                </p>
            </div>
            

            <Row>
                <Col md={6} className='mb-4' data-aos="zoom-in" data-aos-duration="850">
                    <Mission_card content={mission_data}/>
                </Col>

                <Col md={6} className='mb-4' data-aos="zoom-in" data-aos-duration="850">
                    <Vission_card content={vision_data}/>
                </Col>
            </Row>
        </div>
    )
}
