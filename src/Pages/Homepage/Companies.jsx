import company1 from '../../assets/company1.webp'
import company2 from '../../assets/company2.webp'
import company3 from '../../assets/company3.webp'
import company4 from '../../assets/company4.webp'
import company5 from '../../assets/company5.webp'

const Companies = () => {

    const companyImg = [company1, company2, company3, company4, company5]

    return (
        <div className="grid justify-center overflow-x-hidden">
            <div className="min-h-screen md:min-h-[60vh] flex flex-col justify-between companies w-[140vw] me-auto bg-dark z-40 text-white">
                <div className="my-container pt-24 md:pt-28 lg:pt-40">
                    <h1 className="text-center text-base">Brainhub is a software engineering agency trusted by 80+ US & European startups, scale-ups & enterprises.</h1>
                    <div className='flex lg:w-10/12 w-full mx-auto justify-between items-center flex-col md:flex-row lg:flex-row pt-6'>
                        {
                            companyImg.map(img => <img className='md:h-12 lg:h-20 h-16' key={img} src={img}></img>)
                        }
                    </div>
                </div>
                <div className='my-container text-center lg:w-[30%] space-y-8 pt-12'>
                    <h4 className='text-lightblue text-sm font-ibm'>[ WHY TECH COMPANIES CHOOSE BRAINHUB IN 2023 ]</h4>
                    <h1 className='text-4xl font-medium'>“A pain-free alternative to hiring engineers in-house.”</h1>
                    <h3>Focus solely on your product vision while we provide you with a dedicated team of A-player engineers ready to build, modernize and scale your software.</h3>
                </div>
            </div>


            {/* ===============gradient overlay=========== */}
            <div>
                <div className="h-[92vh] md:h-[55vh] companies-overlay w-[140vw] absolute lg:-top-2 top-0 bg-white z-20">
                </div>
            </div>
        </div>
    );
};

export default Companies;
