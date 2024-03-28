const AboutSection = () => {
    return ( 
        <div>
            <section className="flex flex-col p-8 sm:flex sm:justify-between sm:flex-row sm:space-x-8 lg:justify-center lg:space-x-[20em]">

                <h2 className="text-[12px] py-4 font-semibold tracking-widest uppercase text-gray-400">About</h2>

                <div className="sm:max-w-[500px] lg:max-w-[920px]">
                    
                    <h2 className="text-[16px] py-3 font-bold tracking-wide"> Welcome to Zen Den Apartments, where modern living meets tranquility.</h2>

                    <div className="flex flex-col space-y-2 md:space-x-3 md:flex md:flex-row">
                        <h3 className="text-[12px]">
                        Our newly built apartment complex offers a serene and contemporary oasis for residents seeking a peaceful retreat in the heart of the city.With sleek and stylish design elements, spacious floor plans, and state-of-the-art amenities, Zen Den Apartments provides the perfect blend of comfort and sophistication.
                        </h3>

                        <h3 className="text-[12px]">
                        Whether you`re relaxing by the pool, enjoying the lush landscaping in our zen garden, or unwinding in your own private sanctuary, every corner of our community is designed to evoke a sense of calm and relaxation. Experience the essence of modern living at Zen Den Apartments - your urban sanctuary awaits.
                        </h3>
                    </div>
                </div>

            </section>
        </div>
     );
}
 
export default AboutSection;

