import { useRef } from "react";

export default function AddUsers() {
    // use of useRef to capture input value
    const userNameInputRef = useRef();
    const interestsInputRef = useRef();
    const skillsInputRef = useRef();
    const descriptionInputRef = useRef();
    const jobInputRef = useRef();

    // use of useRouter from next/router to redirect this page to the Homepage
    // const router = useRouter();

    const addNewUserHandler = async (event) => {
        
        event.preventDefault();
        // store meal data in an object
        const userData = {
            userName: userNameInputRef.current.value,
            interests: interestsInputRef.current.value,
            skills: skillsInputRef.current.value,
            description: descriptionInputRef.current.value,
            job: jobInputRef.current.value
            };
            // console.log(userData);

    
            // use of Fetch API to make a request to the addusers api and get back a response
            const response = await fetch("/api/profile", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "content-Type": "application/json",
            },
            });
    
            // parses JSON response into native JavaScript objects
            const data = await response.json();
            
            console.log(data);

    
            // redirects this page to the Homepage
            // router.replace("/");
    }
    return (
        <div className="block p-6 rounded-lg shadow-lg  max-w-md">
  <form onSubmit={addNewUserHandler}>
    <div className="form-group mb-6">
    <label htmlFor="userName"  className="form-label inline-block mb-2 text-black-700">What's your User Name</label>
      <input type="text" ref={userNameInputRef} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="userName"
        placeholder="Enter username" />
    </div>
    <div className="form-group mb-6">
    <label htmlFor="interests" className="form-label inline-block mb-2 text-gray-700">What do you like to do in your free time?</label>
      <input type="text"  ref={interestsInputRef} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="interests"
        placeholder="Enter interests" />
    </div>
    <div className="form-group mb-6">
    <label htmlFor="job" className="form-label inline-block mb-2 text-gray-700">What's the you current occupation</label>
      <input type="text"  ref={jobInputRef} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="job"
        placeholder="Enter your current job position" />
    </div>
    <div className="form-group mb-6">
    <label htmlFor="description" className="form-label inline-block mb-2 text-gray-700">Tell me more about yourself</label>
      <input type="text"  ref={descriptionInputRef} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="description"
        placeholder="Enter description about yourself" />
    </div>
    <label htmlFor="skills"  className="form-label inline-block mb-2 text-gray-700">What are you good at?</label>
    <div className="form-group mb-6">
      <textarea ref={skillsInputRef}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="skills"
      rows="3"
      placeholder="Enter skills"
    ></textarea>
    </div>
    
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Save</button>
  </form>
</div>
    )
}