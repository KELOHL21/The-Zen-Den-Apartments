const HouseSection = () => {
    return ( 
        <div className="flex flex-col p-8 sm:flex sm:justify-between sm:flex-row sm:space-x-8 lg:justify-center lg:space-x-[20em] py-[5em]">

              <h2 className="text-[12px] py-4 font-semibold tracking-widest uppercase text-gray-400">Houses</h2>
                
            <div>

            
            <div className="flex flex-col items-center justify-center">

            <h2 className="text-[14px] py-3 font-bold tracking-wide">Most popular metrics</h2>
                
                <p className="text-[12px] font-normal pt-3 pb-7">Our clients are primarily interested in these specifications.</p>

                <div className="flex flex-row flex-wrap justify-center m-auto  gap-5 max-w-[500px]">

                    <div className="flex flex-col items-center justify-center p-10 text-left align-top border-t-2 border-gray-400">  
                        <h1 className=" -mt-5  text-[45px]  text-gray-500">250</h1>
                        <p className="tracking-wide text-[14px]  left-0 top-0  text-gray-400">Square Meters</p>
                    </div>
                
                    <div className="flex flex-col items-center justify-center p-10 text-left align-top border-t-2 border-gray-400">  
                        <h1 className=" -mt-5  text-[45px] text-gray-500">1-2</h1>
                        <p className="tracking-wide text-[14px]  left-0 top-0 text-gray-400">Bedrooms</p>
                    </div>
                
                    <div className="flex flex-col items-center justify-center p-10 text-left align-top border-t-2 border-gray-400">  
                        <h1 className=" -mt-5  text-[45px] text-gray-500">1+</h1>
                        <p className="tracking-wide text-[14px]  left-0 top-0 text-gray-400">Parking Space</p>
                    </div>
                
                    <div className="flex flex-col items-center justify-center p-10 text-left align-top border-t-2 border-gray-400">  
                        <h1 className=" -mt-5  text-[45px] text-gray-500">1-2</h1>
                        <p className="tracking-wide text-[14px]  left-0 top-0 text-gray-400">Bathrooms</p>
                    </div>
                
                    
                </div>
                
            </div>

                
            </div>
    
        </div>
     );
}
 
export default HouseSection;