const HouseSection = () => {
    return ( 
        <div className="flex flex-col p-8 sm:flex sm:justify-between sm:flex-row sm:space-x-8 lg:justify-center lg:space-x-[20em] py-[5em]">

              <h2 className="text-[12px] py-4 font-semibold tracking-widest uppercase text-gray-400">Houses</h2>
                
            <div>

            <div className="flex flex-col items-center justify-center">

            <h2 className="text-[14px] py-3 font-bold tracking-wide">Most popular metrics</h2>
                
                <p className="text-[12px] font-normal pt-3 pb-7">Our clients are primarily interested in these specifications.</p>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 max-w-[550px] m-auto">

                    <div className="flex flex-col items-center justify-center p-5 text-left align-top border-t-2 border-gray-400">  
                        <h1 className="text-[45px] text-gray-500">250</h1>
                        <p className="tracking-wide text-[14px] text-gray-400">Square Meters</p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-5 text-left align-top border-t-2 border-gray-400">  
                        <h1 className="text-[45px] text-gray-500">1-2</h1>
                        <p className="tracking-wide text-[14px] text-gray-400">Bedrooms</p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-5 text-left align-top border-t-2 border-gray-400">  
                        <h1 className="text-[45px] text-gray-500">1+</h1>
                        <p className="tracking-wide text-[14px] text-gray-400">Parking Space</p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-5 text-left align-top border-t-2 border-gray-400">  
                        <h1 className="text-[45px] text-gray-500">1-2</h1>
                        <p className="tracking-wide text-[14px] text-gray-400">Bathrooms</p>
                    </div>
                    
                </div>



            </div>

                
            </div>
    
        </div>
     );
} 
 
export default HouseSection;