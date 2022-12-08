import 'bootstrap/dist/css/bootstrap.min.css';
import './page2.css';

export function Page2(){
    return(
        <>
        <div className='container-fluid'>
            <div className='row mt-3'>
            <div className='col-lg-4'>&nbsp;</div>
            <div className='col-lg-4'><p className='headingpage2 text-primary text-center'>Welcome To Our Website</p></div>
            <div className='col-lg-4'>&nbsp;</div>
            </div>
            <div className='row'>
                <div className='col-lg-2'>&nbsp;</div>
                <div className='col-lg-8'>
                    <p className='text-center'>The primary purpose of an about us page is to inform the reader about the company and its operations. This is a straightforward goal that nearly all businesses have to fulfill in some fashion or another. However, there are other reasons why about us pages are common fixtures on business websites.The primary purpose of an about us page is to inform the reader about the company and its operations..</p>
                </div>
                <div className='col-lg-2'>&nbsp;</div>
            </div>
            <div className='row'>
            <div className='col-lg-5'>&nbsp;</div>
            <div className='col-lg-2 text-center'>
                <button className="bg-light btn btn-outline-primary text-center btnpage2">Read more</button>
            </div>
            <div className='col-lg-5'>&nbsp;</div>
            </div>
        </div>
       
        </>);

}