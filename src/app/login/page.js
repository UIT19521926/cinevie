/* eslint-disable jsx-a11y/alt-text */
'use client'
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserInfo from "@/Hooks/useUserInfo";
export default function Login() {
    const router = useRouter();
    const { userInfo, updateUserInfo } = useUserInfo(); // Destructure userInfo and updateUserInfo from the hook
    const [checkTerms, setCheckTerms] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '', // Changed from email to password
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (checkTerms !== true) {
            toast.error("You must accept the terms and conditions.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        if (!formData.username || !formData.password) {
            toast.error("All fields are required.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        if (userInfo && userInfo.username === formData.username && userInfo.password === formData.password) {
            toast.success("Login successful!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            updateUserInfo(userInfo); // Ensure user info is updated
            router.push("/")
        } else {
            toast.error("Login failed. Invalid username or password.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <section className="relative">
            <ToastContainer />
            <div className="relative bg-black flex justify-center items-center" style={{height: 'calc(100vh - 80px)'}}>
                <div className=" w-full h-full absolute" style={{height: 'calc(100vh - 96px)'}}>
                    <img src="https://cdn.galaxycine.vn/media/2023/11/22/1200_1700638319306.jpg" className=" w-full h-full"/>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/[.6]"></div>
                <div className=" h-[520px] w-[540px] rounded-[2rem] flex flex-col justify-between items-center bg-glass p-10 z-30">
                    <div className="  h-[28%] rounded-t-[2rem] flex flex-col items-center justify-center w-full">
                        <h1 className=" font-semibold text-2xl mb-4">Sign In to CineVie</h1>
                        <div className="flex flex-row gap-x-8">
                            <div className=" w-14 h-14 rounded-full bg-white flex justify-center items-center cursor-pointer">
                                <img src="https://www.svgrepo.com/show/353817/google-icon.svg" alt="Google" className="w-8 h-8"/>
                            </div>
                            <div className=" w-14 h-14 rounded-full bg-white flex justify-center items-center cursor-pointer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="w-8 h-8"/>
                            </div>
                            <div className=" w-14 h-14 rounded-full bg-white flex justify-center items-center cursor-pointer">
                                <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/apple-512.png" alt="Google" className="w-8 h-8"/>
                            </div>
                        </div>
                        <div className=" relative flex flex-row justify-center items-center mt-4 w-full">
                            <hr className=" absolute border w-[30%] left-0 "/>
                            <p>or sign in with email</p>
                            <hr className=" absolute border w-[30%] right-0 "/>
                        </div>
                    </div>
                    <div className=" h-[42%] flex flex-col items-center justify-center w-full gap-y-2">
                        <div className=" flex flex-col justify-center items-center w-full gap-y-6 ">
                            <input name="username" type="text" placeholder="Enter username" className="w-full bg-transparent rounded-xl border shadow-md p-[0.7rem] placeholder-white" onChange={handleInputChange} />
                            <input name="password" type="password" placeholder="Enter password" className="w-full bg-transparent rounded-xl border shadow-md p-[0.7rem] placeholder-white" onChange={handleInputChange} />
                        </div>
                        <div className=" w-full relative">
                            <Link href="/forgetpwd">
                                <p className=" font-normal text-md right-0 absolute cursor-pointer hover:underline">Forget Password?</p>
                            </Link> 
                        </div>
                    </div>
                    <div className="h-[32%] rounded-b-[2rem] flex flex-col items-center justify-center w-full mt-2">
                        <div className=" flex-col justify-between items-center w-full gap-y-4 flex">
                            <div className="w-full relative pb-[1.5em]">  
                                <div className="w-full absolute flex flex-row items-center justify-start gap-x-2 left-0">
                                    <input type="checkbox" className="checkbox rounded-full border-white w-4 h-4 " onClick={() => {setCheckTerms(!checkTerms)}}/>
                                    <p className=" font-normal text-md text-white"><span className=" text-gray-500">Accept</span> Terms & Conditions</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <button className="text-white font-semibold py-3 rounded-full color-1 w-full" onClick={handleLogin}>Sign In</button>
                            </div>
                            <div className=" w-full justify-center items-center flex mt-2">
                                <p className=" text-white text-sm font-normal">New to CineVie? <Link href="/signup"><span className=" cursor-pointer hover:underline text-color-1 font-bold">Join now</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
