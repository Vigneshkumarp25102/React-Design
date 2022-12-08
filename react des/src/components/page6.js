import 'bootstrap/dist/css/bootstrap.min.css';
import './page6.css';
import img from '../car1.jpg'
import img2 from '../car2.jpg'
import img3 from '../car.webp';
import img4 from '../com(1).jpg'
import img5 from '../com (2).jpg'
import img6 from '../com(3).jpg';
export function Page6(){
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center text-primary">
                    <p className='head2pg6'>Our Protfolio</p>
                    <div className='row'>
                    <div className='col-lg-3'>&nbsp;</div>
                    <p className='col-lg-6'>The primary purpose of an about us page is to inform the reader about the company and its operations.The reader about the company and its operations.</p>
                    <div className='col-lg-3'>&nbsp;</div>
                     </div>
                </div>
            </div>
            <div className='row tepg6'>
                    <div className='col-lg-3'>&nbsp;</div>
                    <div className='col-lg-1'>
                        <p className='text-primary '>ALL</p></div>
                    <div className=' col-lg-2'>
                        <p className='text-primary'>WEB DEVELOPMENT</p></div>
                    <div className='col-lg-2'>
                        <p className='text-primary '>GAME DEVELOPMENT</p></div>
                    <div className='col-lg-2'>
                        <p className='text-primary'>APP DEVELOPMENT</p></div>
                    <div className='col-lg-2'>&nbsp;</div>
            </div>
            <div className='row d-flex'>
                <div className='col-lg-2'>&nbsp;</div>
                    <div className='col-lg-8'>
                    <img src={img} className="img-fluid  col-lg-4" alt='img'/>
                
               
                    <img src={img3} className="img-fluid   col-lg-4" alt='img'/>
               
                
                    <img src={img} className="img-fluid   col-lg-4" alt='img'/>
                    </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
            <div className='row mb-5 d-flex'>
                <div className='col-lg-2'>&nbsp;</div>
                    <div className='col-lg-8'>
                    <img src={img4} className="img-fluid   col-lg-4" alt='img'/>
                
               
                    <img src={img5} className="img-fluid   col-lg-4" alt='img'/>
               
                
                    <img src={img2} className="img-fluid   col-lg-4" alt='img'/>
                    </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
        </div>
        </>
    )
}