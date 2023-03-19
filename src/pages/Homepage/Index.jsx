import  Header  from './Header'
import Center  from './Center/Index'
import  Footer  from './Footer'
import Accessibilty from './Accessibilty'

export default function Homepage() {
    return (
        <div className='mx-auto min-h-[600px] min-w-[1250px] max-h-screen'>
            <div className='mt-0 font-sans flex flex-col  h-screen '>
                <Header />
                <div className="h-3/6 mb-[39px] z-10 ">
                    <Center />
                </div>
                <Accessibilty/>
                <Footer />
            </div>
        </div>

        // <div className='flex flex-col items-center h-screen'>
        //     <Center/>
        // </div>
    )
}