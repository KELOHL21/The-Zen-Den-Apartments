const PartnerSection = () => {
    return (
        <div>
            <section className="flex flex-col px-5 sm:flex-row lg:justify-center lg:space-x-[20em]">
                <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 sm:gap-3 md:gap-10">

                    <div className="sm:max-w-[50%] md:max-w-[75%] ">
                        <h2 className="text-[12px] py-4 font-semibold tracking-widest uppercase text-gray-400">
                            Partners
                        </h2>
                        <h1 className="text-[12px] w-full tracking-tight">
                            Delve into the symbiotic connections we`ve forged with our esteemed partners, where mutual support and collaboration thrive, enhancing every aspect of your experience with us.
                        </h1>
                    </div>
                    <div className="grid items-center justify-center grid-cols-2 gap-3 gap-x-[5rem] py-8 max-w-[500px] sm:grid-cols-3 sm:-ml-[5rem]">
                        {['partner1.png', 'partner2.png', 'partner3.jpg', 'partner4.png', 'partner5.png', 'partner6.png'].map((image, index) => (
                            <div key={index} className="w-[150px] sm:w-[115px] ">
                                <img
                                    src={`/public/assets/${image}`}
                                    alt={`partner${index + 1}`}
                                    className="object-contain w-full rounded shadow-lg h-[120px] md:h-[120px] p-2 "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerSection;
