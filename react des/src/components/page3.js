import './page3.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faCircle, faCircleCheck, faEye } from '@fortawesome/free-regular-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

export function Page3(){
    return(
        <>
        <div className='container mt-3'>
        <div className='row'>
                    <div className='card col-lg-4 bg-primary p-5'>
                        <FontAwesomeIcon icon={faHistory} className="text-light ic1pag2 mt-3"/>
                        <h4 className='text-center text-light mt-2'>Our Story</h4>
                        <p className='text-center text-light mt-2'>The primary purpose of an about us page is to inform the reader about the company and its operations. This is a straightforward goal that nearly all businesses have to fulfill in some fashion or another. However, there are other reasons why about us pages are common fixtures on business websites.</p>
                        
                    
                </div>
                     <div className='card col-lg-4 bg-dark p-5'>
                        <FontAwesomeIcon icon={faCircleCheck} className="text-light ic1pag2 mt-3"/>
                        <h4 className='text-center text-light mt-2'>Our Story</h4>
                        <p className='text-center text-light mt-2'>The primary purpose of an about us page is to inform the reader about the company and its operations. This is a straightforward goal that nearly all businesses have to fulfill in some fashion or another. However, there are other reasons why about us pages are common fixtures on business websites.</p>
                        
                    </div>
    
                    <div className='card col-lg-4 bg-primary p-5'>
                        <FontAwesomeIcon icon={faEye} className="text-light ic1pag2 mt-3"/>
                        <h4 className='text-center text-light mt-2'>Our Story</h4>
                        <p className='text-center text-light mt-2'>The primary purpose of an about us page is to inform the reader about the company and its operations. This is a straightforward goal that nearly all businesses have to fulfill in some fashion or another. However, there are other reasons why about us pages are common fixtures on business websites.</p>
                        
                    </div>
              
            </div>
        </div>
        </>
    );
}