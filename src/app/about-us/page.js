import AccordionComponent from "@/components/Accordian";
import Feedbacks from "@/components/FeedBack";


export default function AboutUs() {
    return (
        <main>
            <section className=" ">
                <div className="relative flex justify-start items-start px-20" style={{height: 'calc(110vh - 80px)'}}>
                    <h1 className=" z-[30] text-white absolute mt-[65px] ml-12 font-extrabold text-6xl">For the love of cinema</h1>
                    <div className=" w-full h-full z-[2] gap-y-8 px-20 flex mt-[100px] flex-col bg-red-300 rounded-tr-[17rem] rounded-tl-[5rem] rounded-bl-[10rem] justify-center items-center" style={{height: 'calc(90vh - 80px)'}}>
                        <div className=" w-full h-[70%] flex flex-row justify-between items-center gap-x-8">
                            <div className=" w-[45%] h-full rounded-tr-[18rem] rounded-tl-[3rem] rounded-bl-[12rem] rounded-br-[4rem]">
                                <img alt="" src="https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" w-full h-full rounded-tr-[18rem] rounded-tl-[3rem] rounded-bl-[12rem] rounded-br-[4rem]"/>
                            </div>
                       
                            <div className=" flex h-full w-[50%] justify-center items-start flex-col p-4 gap-y-4">
                                <h1 className=" text-2xl font-bold">Welcome to cineVie</h1>
                                <div className=" flex flex-col">
                                    <p className=" text-lg">
                                        At <span className=" font-extrabold">cineVie</span>, we are passionate about bringing the magic of
                                        cinema to your together. Our platform is designed to make your 
                                        movie-going experience seamples, enjoyable, and hassie-free. Whether youre a film enthusiasts,
                                        a casual moviegoer, or someone planning a night out with friends, 
                                    </p>
                                    <p className=" font-bold text-lg">Weve got you convered</p>

                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </section>
            <section className=" mt-10">
                <div className="relative flex justify-start items-start px-20" style={{height: 'calc(50vh - 80px)'}}>
                    <div className=" flex flex-col gap-y-4 justify-start items-start">
                        <h1 className=" z-[30] text-white mt-[65px] font-bold text-3xl h-full">Who we are?</h1>
                        <p className=" font-normal text-lg text-gray-300">
                            Founded in 2024. CineVie is a leading online destination for movie enthusiasts. We pride ourselves
                            on offering a user-friendly and secure platform that simplifies the process discovering, selecting.
                            and looking tickets for the latest blockbuster films. Our mission is to enhance your movie experience
                            by providing the best movie-watching experience.Our mission is to enhance your movie experience
                            by providing the best movie-watching experience.Our mission is to enhance your movie experience
                            by providing the best movie-watching experience.
                        </p>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="relative flex justify-start items-start px-20" style={{height: 'calc(200vh - 80px)'}}>
                    <div className=" flex flex-col gap-y-4 justify-start items-start w-full">
                        <h1 className=" z-[30]  mt-[65px] font-bold text-3xl w-full h-full mb-10">Who choose us?</h1>
                        <div className=" flex flex-col justify-between w-full h-full px-20">
                            <div className=" flex flex-row justify-start items-start w-full ">
                                <div className="h-[18rem] flex flex-row justify-between w-[50%] ml-20">
                                    <h1 className="inset-0 text-gradient font-serif flex justify-start items-end">1</h1>
                                    <div className="  flex-col flex justify-start mt-6 items-start gap-y-4">
                                        <h1 className=" font-bold text-2xl">User-Friendly Interface</h1>
                                        <p className=" font-normal text-[19px] leading-[26px] mt-2 text-gray-300">
                                            Our website is designed with you in mind.
                                            Navigate effortlessly, discover new movies.
                                            and book tickets with just a few clicks.Enjoy
                                            a seamless and intuitive booking process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className=" flex flex-row justify-end items-start w-full">
                                <div className="h-[18rem] flex flex-row justify-between w-[50%] mr-20">
                                    <h1 className="inset-0 text-gradient font-serif flex justify-start items-end">2</h1>
                                    <div className="  flex-col flex justify-start mt-6 items-start gap-y-4">
                                        <h1 className=" font-bold text-2xl">User-Friendly Interface</h1>
                                        <p className=" font-normal text-[19px] leading-[26px] mt-2 text-gray-300">
                                            Our website is designed with you in mind.
                                            Navigate effortlessly, discover new movies.
                                            and book tickets with just a few clicks.Enjoy
                                            a seamless and intuitive booking process.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex flex-row justify-start items-start w-full ml-20">
                                <div className="h-[18rem] flex flex-row justify-between w-[50%]">
                                    <h1 className="inset-0 text-gradient font-serif flex justify-start items-end">3</h1>
                                    <div className="  flex-col flex justify-start mt-6 items-start gap-y-4">
                                        <h1 className=" font-bold text-2xl">User-Friendly Interface</h1>
                                        <p className=" font-normal text-[19px] leading-[26px] mt-2 text-gray-300">
                                            Our website is designed with you in mind.
                                            Navigate effortlessly, discover new movies.
                                            and book tickets with just a few clicks.Enjoy
                                            a seamless and intuitive booking process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        
                            <div className=" flex flex-row justify-end items-start w-full">
                                <div className="h-[18rem] flex flex-row justify-between w-[50%] mr-20">
                                    <h1 className="inset-0 text-gradient font-serif flex justify-start items-end">4</h1>
                                    <div className="  flex-col flex justify-start mt-6 items-start gap-y-4">
                                        <h1 className=" font-bold text-2xl">User-Friendly Interface</h1>
                                        <p className=" font-normal text-[19px] leading-[26px] mt-2 text-gray-300">
                                            Our website is designed with you in mind.
                                            Navigate effortlessly, discover new movies.
                                            and book tickets with just a few clicks.Enjoy
                                            a seamless and intuitive booking process.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="relative flex justify-start items-start px-20 w-full" style={{height: 'calc(80vh - 80px)'}}>
                    <div className=" flex flex-row gap-x-4 justify-between items-center w-full h-full">
                        <div className="flex flex-col justify-center item-start gap-y-4 w-[80%]">
                            <h1 className="font-bold text-3xl h-full ">Technolofy and security</h1>
                            <p className=" font-normal text-lg text-gray-300">
                                At CineFil, we prioritize the seamless experience and security of our users. Our commitment to utilizing cutting-edge technology and implementing robust security measures is at the core of everything we do. By intertwining state-of-the-art technology with stringent security measures, Cinfeil aims to provide a user-friendly and secure environment for all your movie ticket booking needs.
                                Trust us to make your movie-going experience not only enjoyable but also worry-free
                            </p>
                           <div className="flex flex-col font-bold">
                                <p>1. Trusted Payment Gateway Integration</p>
                                <p>2. Data Encryption for User Privacy</p>
                                <p>3. User Account Security Features</p>
                           </div>
                        </div>
                        <div className=" w-1/2 h-[80%] rotate-[18deg]">
                            <svg fill="#B16CEA" className="w-full h-full" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>shield-check-line</title>
                                <path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z" class="clr-i-outline clr-i-outline-path-1"></path><path d="M10.88,16.87a1,1,0,0,0-1.41,1.41l6,6L26.4,13.77A1,1,0,0,0,25,12.33l-9.47,9.19Z" class="clr-i-outline clr-i-outline-path-2"></path>
                                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mt-10">
                <div className="flex justify-start items-start px-20 w-full" style={{height: 'calc(90vh - 80px)'}}>
                    <div className=" flex flex-row gap-x-4 justify-between items-start w-full h-full">
                        <div className="flex flex-col justify-center item-start gap-y-8 w-full h-full">
                            <h1 className="font-bold text-3xl">User Feedbacks</h1>
                            <div className="flex justify-start flex-col w-full mt-8">
                                <div div className="flex" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                                    <div className="flex space-x-6">
                                        <Feedbacks />
                                        <Feedbacks />
                                        <Feedbacks />
                                        <Feedbacks />
                                        <Feedbacks />
                                        <Feedbacks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative">
                <div className="flex justify-start items-start px-20 w-full" style={{height: 'calc(110vh - 80px)'}}>
                    <div className=" flex flex-row gap-x-4 justify-between items-start w-full h-full">
                        <div className="flex flex-col justify-start item-start gap-y-8 w-full h-full">
                            <h1 className="font-bold text-3xl">FAQ</h1>
                            <div className="w-full px-20">
                                <AccordionComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
