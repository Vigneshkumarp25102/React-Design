import 'bootstrap/dist/css/bootstrap.min.css';
import {} from  '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendar, faCircleCheck, faCircleRight, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import './page5.css';



export function Page5(){
    return(
        <>
        <div className="container bg-primary p-5 mt-5">
            <div className="row justify-content-around">
                <div className='col-lg-3 text-center'>
                    <FontAwesomeIcon icon={faCalendar} className="text-light ic1pg5"/>
                    <p className='text-light ic1te1pg5'>&nbsp;12+</p>
                    <p className='text-light ic1te2pg5 '>YEAR OF EXPREIENCE</p>
                </div>
                <div className='col-lg-3 text-center'>
                    <FontAwesomeIcon icon={faCircleCheck} className="text-light ic1pg5"/>
                    <p className='text-light ic1te1pg5'>&nbsp;&nbsp;999+</p>
                    <p className='text-light ic1te2pg5 '>COMPLETED PROJECTS</p>
                </div>
                <div className='col-lg-3 text-center'>
                    <FontAwesomeIcon icon={faPeopleGroup} className="text-light ic1pg5"/>
                    <p className='text-light ic1te1pg5'>&nbsp;&nbsp;480+</p>
                    <p className='text-light ic1te2pg5 '>TOTAL CLIENTS</p>
                </div>
                <div className='col-lg-3 text-center'>
                    <FontAwesomeIcon icon={faHeart} className="text-light ic1pg5"/>
                    <p className='text-light ic1te1pg5'>&nbsp;&nbsp;15+</p>
                    <p className='text-light ic1te2pg5 '>AWARDS WON</p>
                </div>
            </div>
        </div>
        </>
    );
}