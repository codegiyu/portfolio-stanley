import { useState } from "react"
import helpers from "../helpers";
import Alert from "./Alert";


const ContactSection = () => {
    const initialFormValues = {
        name : "",
        message: "",
        email:""
    };

    // state to set the alert on the form
    const[alert, setAlert] = useState({message:"", type:null});

    const [isSubmitting, setIsSubmitting] =  useState(false);

    // using use state method to store the values from the input
    const [formValues, setFormValues]= useState(initialFormValues);

    // checking Form error values

    const [formErrorValues, setFormErrorValues] = useState(initialFormValues);

    // Function to handle blur on inputs errors

    const handleBlur = (e) =>{
        let type = e.target.type, name = e.target.name, value = e.target.value;
        try {
            if (value) {
                if (type === "email") {
                    if (!/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+]*/.test(value)) {
                        throw new Error("Invalid Email Address")
                    }
                } else if (name === "name") {
                    if (!/^[a-z\-\.]{2,}( [a-z\-\.]{2,})*$/i.test(value.trim())) throw new Error("Invalid Name")
                } else if (name === "message") {
                    if (!/^(?=.*[A-Za-z]).{2,}$/i.test(value.trim())) throw new Error("Invalid Message")
                }
            }
            
            setFormErrorValues((prevState) => {
                return { ...prevState, [name]: "" }
            })
            
        } catch (err) {

            setFormErrorValues((prevState) => {
                return { ...prevState, [name]: err.message }
            })
        }

    }
    
    // const emailRef = useRef(null);

    const handleInputChange = (e) => {
        let type = e.target.type, name = e.target.name, value = e.target.value;
        // update form values on any change
        setFormValues((prevState) =>{
            return {...prevState, [name]: value}
        })
    }


    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        console.log(formValues);
        if(helpers.allFieldsAreErrorFree(formErrorValues)){
            try {
                setIsSubmitting(true);
                const response = await fetch("/api/contact", {
                    method: "POST",
                    body: JSON.stringify(formValues),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        "Content-Type": "application/json"
                    }
                })
                setIsSubmitting(false);
                if(response.status === 200){
                    const responseBody = await response.text();
                    const readAbleResponse = JSON.parse(responseBody);
                    setAlert({message:"Message sent Successfully", type: 'success'})
                    console.log(readAbleResponse);
                    setFormValues(initialFormValues);
                    
                }else{
                    throw new Error (response.statusText)
                }
            } catch (error) {
                setAlert({message:error.message, type:'error'});
            }

        }else{
            setAlert({message:'Please resolve all input fields', type:'error'});
        }
        
    }
    return (
        <div className="relative flex flex-col bg-transparent px-4 py-8 lg:py-24 sm:px-8 md:px-16 lg:px-[2.5rem] font-montserrat">
                  {/* Got a project */}
            <div className="mx-auto px-2 mb-[40px] w-sm md:w-md">
                <h2 className="font-semibold text-4xl text-center">Got a Project ?</h2>
                <hr className="mx-auto border-4 border-solid border-[#000] w-[50%]"/>
            </div>

           <Alert alertProps={{alert, setAlert}} />

           {/* Form Container */}
            <form onSubmit={handleFormSubmit} className="flex flex-col md:px-16 md:py-10 md:justify-between md:items-center md:space-x-24 md:space-y-0">
                <div className="flex flex-col md:flex-row w-full md:mb-24 md:py-8">
                    {/* Message Conatiner -left items */}
                    <div className="md:w-[50%]">
                        <h1 className="font-extrabold text-5xl mb-12 md:text-6xl">Let's Talk</h1>
                        <h2 className="max-w-sm font-bold text-3xl md:text-4xl mb-8 md:mb-10">SEND ME YOUR MESSAGE</h2>
                        <p className="md:leading-7 text-l md:text-xl max-w-sm">Lets talk about our next project. I am sure you already have few ideas in mind. Let's connect and talk about it.</p>
                    </div>

                    {/* Input container */}
                    <div className="flex flex-col space-y-6 items-center w-[100%] md:w-[50%] px-2 py-8 md:py-0 text-white">
                            {/* Input section */}
                        <input type="text" onChange={handleInputChange} onBlur={handleBlur} id="name" name="name" value={formValues.name} className={`w-[100%] px-10 py-4 rounded-xl focus:outline-none bg-grey border-4 placeholder:text-black ${formErrorValues.name ? "border-red" : "border-transparent"}`} placeholder="Your Name" required/>
                        
                        <input type="email" onChange={handleInputChange} onBlur={handleBlur} value={formValues.email} id="email" name="email" className={`w-[100%] px-10 py-4 rounded-xl focus:outline-none bg-grey placeholder:text-black border-4  ${formErrorValues.email ? "border-red" : "border-transparent"}`} placeholder="Your Email Address" required/>
                        
                        <textarea onChange={handleInputChange} onBlur={handleBlur} className={`bg-grey w-[100%] px-10 py-4 focus:outline-none rounded-xl placeholder:text-black border-4  ${formErrorValues.message ? "border-red" : "border-transparent"}`} name="message" rows={5} id="message" placeholder="Your Message" required value={formValues.message}
                        >
                        </textarea>
                    </div> 
                </div>
                
                {/* Submit Button */}
                <div className="mx-auto">
                    <button type="submit" disabled={isSubmitting} className="md:mr-20 md:text-xl text-center font-bold text-white bg-[#000] px-8 py-3 md:py-4 md:px-32 rounded-lg md:self-center disabled:cursor-not-allowed">
                        {isSubmitting ? "Submitting Form..." : "Submit Form"} 
                    </button>  
                </div>       
            </form>
        </div>
    )

}
export default ContactSection