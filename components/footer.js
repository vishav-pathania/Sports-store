const footer = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="mt-5 lg:mt-0 py-10 text-center">
                <p className="uppercase text-center text-16 lg:text-20 text-grey-700 font-bold">Our Purpose</p>
                <p className="mt-5 text-16 lg:text-20 text-center text-blue-400">
                    <span className="cn-544">To Sustainably  </span>
                    make the Pleasure and Benefits of Sport accessible to the Many
                </p>
                <div className="mt-9 relative">
                    <img className="mt-3.5 mb-5 mx-auto cn-200 lg:w-[900px]" src="" alt="TruSports" crossOrigin="anonymous" loading="lazy" />
                    <img className="absolute w-20 h-20 cn-23 cn-24 lg:w-[200px] lg:h-[200px] lg:top-[-130px] lg:right-[180px]" src="/leaves.webp" alt="TruSports" crossOrigin="anonymous" loading="lazy" />
                    <p className="mt-9 mb-5 text-12 text-center text-grey-700">© 2023 TruSports India Pvt Ltd. All rights reserved.</p>
                    <img className="hidden lg:inline absolute cn-214 cn-124 left-0 cn-26 z-10" src="/wood.webp" alt="Decathlon" crossOrigin="anonymous" loading="lazy"></img>
                </div>
            </div>
        </div>
    )
}

export default footer