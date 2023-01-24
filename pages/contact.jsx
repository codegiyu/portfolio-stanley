import Head from 'next/head';
import { useRef } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Contact() {
    let nameRef = useRef(null)
    let emailRef = useRef(null)
    let messageRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-full min-h-screen bg-black">
            <Head>
                <title>Stanley - UI/UX Designer</title>
                <meta name="description" content="I'm Codegiyu, a Frontend React Developer. I build beautiful, fun and interactive things with code. Programmer portfolio website built with NextJS and Tailwind CSS." />
                <meta name="google-site-verification" content="mVKUksXdW1OhGyyAi4-iO8CT6zjQTo4uOK8GFwQUI8A" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="codegiyu, portfolio, react, developer, frontend" />
                <meta name="author" content="Edward-Precious Omegbu Codegiyu" />
                <meta property="og:type" content="portfolio" />
                <meta property="og:title" content="CodeGiyu - React Developer" />
                <meta property="og:description" content="I'm Codegiyu, a Frontend React Developer. I build beautiful, fun and interactive things with code. Programmer portfolio website built with NextJS and Tailwind CSS." />
                <meta property="og:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669041238/codegiyu2_caxu3o.jpg" />
                <meta property="og:url" content="https://portfolio-codegiyu.vercel.app" />
                <meta name="twitter:card" content="portfolio" />
                <meta name="twitter:title" content="CodeGiyu - React Developer" />
                <meta name="twitter:url" content="https://portfolio-codegiyu.vercel.app" />
                <meta name="twitter:site" content="@TheLonerider20" />
                <meta name="twitter:description" content="I'm Codegiyu, a Frontend React Developer. I build beautiful, fun and interactive things with code. Programmer portfolio website built with NextJS and Tailwind CSS." />
                <meta name="twitter:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669041238/codegiyu2_caxu3o.jpg" />
                <link rel="canonical" href="https://portfolio-codegiyu.vercel.app" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <header className={`w-full px-4 sm:px-8 md:px-16 lg:px-[2.5rem] xl:px-16 bg-black`}>
                <ErrorBoundary>
                    <Header obj={{ page: "contact" }} />
                </ErrorBoundary>
            </header>

            <main className={"w-full md:w-4/5 xl:w-[1080px] px-4 mx-auto z-[3] text-white font-montserrat"}>
                <section>
                    <h1 className="font-semibold text-6xl md:text-[70px] xl:text-[5vw] leading-[100%] text-center mt-16 kg:mt-[140px]">
                        Contact
                    </h1>
                    <p className="font-medium text-2xl md:text-[32px] xl:text-[2.5vw] leading-[110%] text-center my-[80px]">
                        Want to work with me ? Kindly fill out the short form and I will get back to you as soon as I can.
                    </p>
                </section>
                <section className="w-full pt-20 pb-14">
                    <form className="">
                        <div className="mb-12">
                            <label className="flex flex-col gap-6">
                                <span className="font-bold text-[24px] lg:text-[40px] leading-[100%]">
                                    Name*
                                </span>
                                <input 
                                    type="text"
                                    ref={nameRef}
                                    placeholder="Your Name"
                                    className="font-medium text-[16px] leading-[100%] px-6 lg:px-9 py-4 lg:py-7 bg-grey outline-none placeholder:text-[#FAFAFA] rounded-lg w-full"
                                />
                            </label>
                        </div>
                        <div className="mb-12">
                            <label className="flex flex-col gap-6">
                                <span className="font-bold text-[24px] lg:text-[40px] leading-[100%]">
                                    Email*
                                </span>
                                <input 
                                    type="text"
                                    ref={emailRef}
                                    placeholder="Your Email Address"
                                    className="font-medium text-[16px] leading-[100%] px-6 lg:px-9 py-4 lg:py-7 bg-grey outline-none placeholder:text-[#FAFAFA] rounded-lg w-full"
                                />
                            </label>
                        </div>
                        <div className="">
                            <label className="flex flex-col gap-6">
                                <span className="font-bold text-[24px] lg:text-[40px] leading-[100%]">
                                    Message*
                                </span>
                                <textarea 
                                    ref={messageRef}
                                    className="font-medium text-[16px] leading-[100%] px-6 lg:px-9 py-4 lg:py-7 bg-grey outline-none rounded-lg w-full"
                                    rows={10}
                                    defaultValue="Your Message"
                                />
                            </label>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit"
                                className="bg-white text-black font-semibold text-[20px] leading-[100%] py-[22px] px-[60px] rounded-[10px] mt-[200px]"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </main>

            <footer className={"px-4 sm:px-8 md:px-16 lg:px-[2.5rem] xl:px-16 w-full pt-12 pb-[200px]"}>
                <ErrorBoundary>
                <Footer theme="dark" />
                </ErrorBoundary>
            </footer>
        </div>
    )
}
