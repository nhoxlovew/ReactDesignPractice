const RahulYaduvanshi = () => {
    return (
        <div className="bg-pink-400 w-full h-screen flex justify-center items-center">

            <div className=" w-[350px] h-[500px] bg-[#242039] rounded-3xl flex-col flex justify-center items-center">

                <div className="border-1 text-black m-2 bg-amber-200 px-2 rounded-md mr-65 mt-4">PRO</div>
                <div className="w-[115px] h-[115px]">
                    <img src="https://jmoptik.dk/sites/default/files/2023-10/foto17_1.jpeg" alt="" className="w-full h-full rounded-full object-cover border-2 border-fuchsia-500" />
                </div>


                <div className="flex flex-col justify-center items-center pt-5 text-white">
                    <p className="text-md font-bold text-2xl">Rahul Yaduvanshi</p>
                    <p className="text-sm">Nokia,U.P</p>
                </div>

                <div className="p-7 text-center text-white text-sm">
                    <p >User interface designer and front-end developer</p>
                </div>

                <div className="text-white flex justify-between gap-1 pb-4">
                    <button className="w-full py-2 px-8 text-sm bg-fuchsia-500 text-white rounded-md">Message</button>
                    <button className="border-1 w-full py-2 px-8 text-sm rounded-md border-fuchsia-500 text-fuchsia-500">Following</button>
                </div>


                <div className="text-white pt-1 w-full rounded-b-3xl h-full pl-3 bg-[#1F1B34]">
                    <div className="pb-1">SKILLS</div>

                    <div className="flex  gap-4 flex-wrap px-4">
                        <p className="border-1 p-1 text-sm">UX/UI</p>
                        <p className="border-1 p-1 text-sm">Front End Development</p>
                        <p className="border-1 p-1 text-sm">HTML</p>
                        <p className="border-1 p-1 text-sm">CSS</p>
                        <p className="border-1 p-1 text-sm">JavaScript</p>
                        <p className="border-1 p-1 text-sm">React</p>
                        <p className="border-1 p-1 text-sm">Node</p>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default RahulYaduvanshi