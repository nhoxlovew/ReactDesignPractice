
const MaeShaw = () => {
  return (
    <div className="bg-[#c0fcf4] w-full h-screen flex justify-center items-center">

      <div className="bg-white/50 z-10 w-[600px] h-[400px] rounded-4xl relative border-1 border-white">
       

        <div className="bg-white/40 z-20 w-[90%]  rounded-4xl flex absolute top-7 left-5">
        

          <div className="w-[170px] h-[170px] p-6 shrink-0 ">
            <div className="border-black-100 border-5  rounded-full h-full w-full object-cover">
              <img src="https://jmoptik.dk/sites/default/files/2023-10/foto17_1.jpeg" alt="" className="rounded-full h-full w-full object-cover" />
            </div>
          </div>


          <div className="flex flex-col w-full p-4 pt-15">

            <div>
              <p className="font-bold text-xl">Mae Shaw</p>
              <p className="font-bold">@maeshaw</p>
            </div>


            <p className="pt-5">If you like my work,consider suppporting me on PayPal and help me make a dream come true</p>


            <div className="flex pt-6 justify-between pr-10 ">
              <div className="flex-col border-r-1 pr-10">
                <p className="font-bold">74.3M</p>
                <p >Views</p>
              </div>

              <div className="flex-col border-r-1 pr-10 ">
                <p className="font-bold">17</p>
                <p >Rank</p>
              </div>

              <div className="flex-col">
                <p className="font-bold">45M</p>
                <p >Downloads</p>
              </div>
            </div>


            <div className="justify-between flex pt-10 gap-10">

              <button className="border-2 w-full rounded-md p-3 bg-black text-white">Follow</button>

              <button className="border-2 w-full rounded-md p-3 mr-10">Viewprofile</button>

            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default MaeShaw