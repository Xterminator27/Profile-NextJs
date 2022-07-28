// create the app
import Image from "next/image";
import zoroImage from '../public/zoro.jpg'
import { getMainUser } from "./api/profile";

export default function Home({user}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image className="w-full" src={zoroImage} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-center text-xl mb-2 ">Heyy I'm {user[0].userName}</div>
    <p className="text-gray-700 text-base">
    I am currently working as a {user[0].job}.<br></br> 
      {user[0].description}
        {/* Heyy guys. I am a junior developer. I have been a part of the crypto space since April of last year 
        and found a lot of amazing things and technology being used in different projects. 
        I would love to contribute to the space in one or the other way in the future */}
    </p>
    <p className="text-gray-700 text-base">In my free time I love to {user[0].interests}</p>
  </div>
  
  <div className="px-6 pt-4 pb-2">
    <p className="text-gray-700 text-base py-2 text-center">These are the technologies I'm familiar with: {user[0].skills}</p>
  </div>
</div>
  )
}


export  async function getStaticProps(){
  const user = await getMainUser();
  // console.log(user);
  return {
    props:{
      user
    }
  }
}