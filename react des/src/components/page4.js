import 'bootstrap/dist/css/bootstrap.min.css'
import './page4.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCircleCheck, faEye } from '@fortawesome/free-regular-svg-icons';
import { faComputer, faGamepad, faGear, faHistory, faLaptop, faMobile, faMobileAndroid, faPhone, faPhoneAlt, faSortAlphaAsc } from '@fortawesome/free-solid-svg-icons';

export function Page4(){
    return(
    <>
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-12">
                    <p className="text-primary headpage4 text-center">Our Services</p>                
                </div>
            </div>
            <div className="row mt-2">
                <div className='col-lg-3'>&nbsp;</div>
                <div className="col-lg-6 text-center">
                    <p className="text-primary head2page4">The primary purpose of an about us page is to inform the reader about the company and its operations.This is a straightforward goal that nearly all businesses.</p>                
                </div>
                <div className='col-lg-3'>&nbsp;</div>
            </div>
            <div className='row mt-2 justify-content-around'>
                <div className='col-lg-3 text-center fstpg4 p-2 mt-2'>
                <FontAwesomeIcon icon={faComputer} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary col-lg-10'>WEB DESIGN</span>
                </div>
                <div className='col-lg-3 text-center fstpg4 p-2 mt-2'>
                <FontAwesomeIcon icon={faLaptop} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary col-lg-10'>WEB DEVELOPMENT</span>
                </div>
                <div className='col-lg-3 text-center fstpg4 p-2 mt-2'>
                <FontAwesomeIcon icon={faGear} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary col-lg-10'>THEME DEVELOPMENT</span>
                </div>
            </div>
            <div className='row mt-2 justify-content-around'>
                <div className='col-lg-3 text-center fstpg4 p-2  mt-2'>
                <FontAwesomeIcon icon={faGamepad} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary col-lg-10'>GAME DEVELOPMENT</span>
                </div>
                <div className='col-lg-3 text-center fstpg4 p-2 mt-2'>
                <FontAwesomeIcon icon={faMobile} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary col-lg-10'>APPS DEVELOPMENT</span>
                </div>
                <div className='col-lg-3 text-center fstpg4 p-2 mt-2'>
                <FontAwesomeIcon icon={faComputer} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary col-lg-10'>DESKTOP APPLICATION</span>
                </div>
            </div>
            <div className='row mt-2 justify-content-around'>
                <div className='col-lg-3 text-center fstpg4 p-2 mt-2'>
                <FontAwesomeIcon icon={faSortAlphaAsc} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary col-lg-10'>WORDPRESS THEMES</span>
                </div>
                <div className='col-lg-3 text-center fstpg4 p-2 mt-2'>
                <FontAwesomeIcon icon={faGear} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary  col-lg-10'>WORDPRESS PLUGINS</span>
                </div>
                <div className='col-lg-3 text-center fstpg4 p-2 mt-2'>
                <FontAwesomeIcon icon={faPhone} className="ic1pg4 text-primary col-lg-2"/><span className='ic1te1pg4 text-primary col-lg-10'>SUPPORT & IT</span>
                </div>
            </div>
        </div>
    </>
    );
}