const ContactSection = () => {
    return (
        <div className="relative flex flex-col bg-transparent px-4 py-8 lg:py-24 sm:px-8 md:px-16 lg:px-[2.5rem] font-montserrat">
            <div className="mx-auto px-2 mb-[40px] w-sm md:w-md">
                <h2 className="font-semibold text-4xl text-center">Got a Project ?</h2>
                <hr className="mx-auto border-4 border-solid border-[#000] w-[50%]"/>
            </div>
           
           {/* Form Container */}
            <form className="flex flex-col space-y-6 py-2 md:px-16 md:py-10 items-start md:flex-row md:justify-between md:items-center md:space-x-24 md:space-y-0 w-full">
                {/* Message Conatiner */}
                <div className="flex flex-col items-start px-2 md:py-8 space-y-12 text-left md:space-y-26 w-[100%] md:w-[50%]">
                    <h2 className="font-extrabold text-5xl md:text-6xl">Let's Talk</h2>
                    <div>
                        <h2 className="max-w-sm font-bold text-3xl md:text-4xl mb-8">SEND ME YOUR MESSAGE</h2>
                        <p className="text-l md:text-xl max-w-sm">Lets talk about our next project. I am sure you already have few ideas in mind. Let's connect and talk about it.</p>
                    </div>
                </div>
                {/* Input container */}
                <div className="flex flex-col space-y-6 items-center w-[100%] md:w-[50%] px-2 py-8 md:py-20">
                    <input type="text"  id="name" name="name" class="w-[100%] px-10 py-4 rounded-xl focus:outline-none bg-grey" placeholder="Your Name" required/>
                    <input type="email" id="email" name="email" class="w-[100%] px-10 py-4 rounded-xl focus:outline-none bg-grey" placeholder="Your Email Address" required/>
                    <textarea className="bg-grey w-[100%] px-10 py-4 focus:outline-none rounded-xl" name="message" rows={5} id="message" placeholder="Your Message" required>
                    </textarea>
                    {/* Submit Button */}
                    <div className="relative md:w-[60%]">
                        <button type="submit" className="md:-bottom-48 md:right-[100%] md:absolute md:w-[100%] md:text-xl text-center font-bold text-white bg-[#000] px-8 py-3 rounded-lg">Submit Form</button>  
                    </div> 
                </div>       
            </form>
        </div>
    )

}
export default ContactSection