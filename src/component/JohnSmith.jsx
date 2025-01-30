import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
const JohnSmith = () => {
    return (
        <div className="flex bg-fuchsia-400 w-full h-screen justify-center items-center ">

            <div className="border-1 bg-amber-200 w-[300px] h-[400px] flex flex-col justify-center items-center rounded-2xl">

                <div className="w-[100px] pt-1 ">
                    <img src="https://jmoptik.dk/sites/default/files/2023-10/foto17_1.jpeg" className="rounded-full w-full h-25 object-cover" />
                </div>


                <div className="text-center">
                    <p className="font-semibold text-3xl pt-7 pb-5">John Smith</p>
                    <p className="pl-8 pr-8">Im student of IIT Bombay and i like to design website</p>
                </div>

                <div className="flex w-full justify-between  items-center pr-25 pl-25 pt-5">
                    <FontAwesomeIcon icon={faFacebook} className="text-md text-black" />
                    <FontAwesomeIcon icon={faTwitter} className="text-md text-black" />
                    <FontAwesomeIcon icon={faTelegram} className="text-md text-black" />
                </div>


                <div className="pt-10">
                    <div className="bg-white rounded-2xl w-[150px] justify-center items-center flex ">
                        <button className="p-1 text-fuchsia-400 font-semibold text-sm">Message me</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JohnSmith