import { Button } from "@/components/ui/button";


export default function PromotionsAndOffers() {
    return (
        <main >
            <section className="relative">
                <div className="relative flex justify-start items-start " style={{height: 'calc(80vh - 80px)'}}>
                    <div className=" w-full h-full absolute px-20 mt-10 rounded-xl" style={{height: 'calc(65vh - 80px)'}}>
                        <img src="/8185679.jpg" className=" w-full h-full rounded-xl"/>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="relative  flex justify-start items-start w-full" style={{height: 'calc(80vh - 80px)'}}>
                    <div className=" w-full h-full absolute px-20 mt-10 rounded-xl flex justify-between " style={{height: 'calc(65vh - 80px)'}}>
                        <div className=" w-[45%] h-full flex flex-col justify-start items-start gap-y-[25px] ">
                            <div className=" flex flex-col gap-y-2">
                                <h1 className=" font-bold text-2xl">C’STUDENT - 45K FOR STUDENTS </h1>
                                <p className=" font-normal text-sm">SAME PRICE 45K/ 2D FOR STUDENTS/TEACHERS/ U22 ALL WEEKEND AT ALL CINESTAR THEATER.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className=" font-medium text-xl">Condition:</p>
                                <p className=" font-normal text-sm">Students present their student ID card or ID card and are under 22 years old.</p>
                                <p className=" font-normal text-sm">Lecturer/teacher presents lecturer card.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-xl">Note:</p>
                                <p className=" font-normal text-sm">Each card can buy one ticket.</p>
                                <p className=" font-normal text-sm">Does not apply to holidays, Tet, or screenings with surcharges from the film distributor.</p>
                            </div>
                            <div className="w-full">
                                <button className=" bg-gradient-to-b from-orange-300 to-pink-400 px-12 py-4 rounded-lg"> Book tickets now</button>
                            </div>
                        </div>
                        <div className="w-1/2 h-full">
                            <img src="/8185679.jpg" className=" w-full h-full rounded-xl"/>
                        </div>
                    </div>
                </div>
            </section>
            {/* 1 */}
            <section className="relative">
                <div className="relative  flex justify-start items-start w-full" style={{height: 'calc(80vh - 80px)'}}>
                    <div className=" w-full h-full absolute px-20 mt-10 rounded-xl flex justify-between " style={{height: 'calc(65vh - 80px)'}}>
                        <div className="w-1/2 h-full">
                            <img src="/8185679.jpg" className=" w-full h-full rounded-xl"/>
                        </div>
                        <div className=" w-[45%] h-full flex flex-col justify-start items-start gap-y-[25px] ">
                            <div className=" flex flex-col gap-y-2">
                                <h1 className=" font-bold text-2xl">C’STUDENT - 45K FOR STUDENTS </h1>
                                <p className=" font-normal text-sm">SAME PRICE 45K/ 2D FOR STUDENTS/TEACHERS/ U22 ALL WEEKEND AT ALL CINESTAR THEATER.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className=" font-medium text-xl">Condition:</p>
                                <p className=" font-normal text-sm">Students present their student ID card or ID card and are under 22 years old.</p>
                                <p className=" font-normal text-sm">Lecturer/teacher presents lecturer card.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-xl">Note:</p>
                                <p className=" font-normal text-sm">Each card can buy one ticket.</p>
                                <p className=" font-normal text-sm">Does not apply to holidays, Tet, or screenings with surcharges from the film distributor.</p>
                            </div>
                            <div className="w-full">
                                <button className=" bg-gradient-to-b from-orange-300 to-pink-400 px-12 py-4 rounded-lg"> Buy tickets now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2 */}
            <section className="relative">
                <div className="relative flex justify-start items-start w-full" style={{height: 'calc(80vh - 80px)'}}>
                    <div className=" w-full h-full absolute px-20 mt-10 rounded-xl flex justify-between " style={{height: 'calc(65vh - 80px)'}}>
                        <div className=" w-[45%] h-full flex flex-col justify-start items-start gap-y-[25px] ">
                            <div className=" flex flex-col gap-y-2">
                                <h1 className=" font-bold text-2xl">C’STUDENT - 45K FOR STUDENTS </h1>
                                <p className=" font-normal text-sm">SAME PRICE 45K/ 2D FOR STUDENTS/TEACHERS/ U22 ALL WEEKEND AT ALL CINESTAR THEATER.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className=" font-medium text-xl">Condition:</p>
                                <p className=" font-normal text-sm">Students present their student ID card or ID card and are under 22 years old.</p>
                                <p className=" font-normal text-sm">Lecturer/teacher presents lecturer card.</p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-xl">Note:</p>
                                <p className=" font-normal text-sm">Each card can buy one ticket.</p>
                                <p className=" font-normal text-sm">Does not apply to holidays, Tet, or screenings with surcharges from the film distributor.</p>
                            </div>
                            <div className="w-full">
                                <button className=" bg-gradient-to-b from-orange-300 to-pink-400 px-12 py-4 rounded-lg"> Buy tickets now</button>
                            </div>
                        </div>
                        <div className="w-1/2 h-full">
                            <img src="/8185679.jpg" className=" w-full h-full rounded-xl"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}