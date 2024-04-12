const LocationSection = () => {
    return ( 
        <div className="flex flex-col px-5 py-7">
            
            <div>
                <h1 className="text-[12px] py-2 font-semibold tracking-widest uppercase text-gray-400"> Locations </h1>

                <h2 className="pt-3 font-semibold whitespace-nowrap text-[14px] tracking-tight">
                    We have our Head Office located in Cape Town CBD
                </h2>

                <h3 className="text-[13px] py-2 tracking-tight leading-tight">
                    Feel free to reach out to us anytime to arrange a viewing of our available units.
                </h3>

                <h4 className="text-[10px] tracking-tight">Register with your email and book an appointment. We`ll arrange a viewing as soon as we can</h4>
            </div>

            <div className="p-2 my-2">

            <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=13%20kloff%20Street,cape%20town+(The%20Zen%20Den%20Apartments)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>

        </div>

     );
}
 
export default LocationSection;