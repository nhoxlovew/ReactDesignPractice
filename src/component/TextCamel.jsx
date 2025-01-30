

const TextCamel = () => {
    return (
        <div className='flex bg-sky-600 w-full h-screen justify-center items-center'>
            <div className='bg-white flex rounded-2xl w-[550px]  p-4 gap-6'>
                <div className='h-full w-[250px] shrink-0'>
                    <img src="https://cdn.shopify.com/s/files/1/0170/3952/3904/files/cesar-rincon-XHVpWcr5grQ-unsplash.jpg?v=1680164399" className='object-cover w-full h-full' />
                </div>

                <div className='flex flex-col w-full justify-between'>

                    <div className='flex-col '>
                        <div className='font-bold'>
                            <h1 className='text-3xl'>Alex Morrision</h1>
                        </div>
                        <h2 className='text-2xl'>Senior Journalist</h2>
                    </div>

                    <div className='bg-[#f1f5f8] w-full rounded-lg flex justify-between p-3'>
                        <div className='flex flex-col'>
                            <p className='text-[#B0B8C7]'>Articles</p>
                            <p className='font-bold '>38</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[#B0B8C7]'>Followers</p>
                            <p className='font-bold '>980</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[#B0B8C7]'>Rating</p>
                            <p className='font-bold '>8.9</p>
                        </div>
                    </div>

                    <div className='flex justify-between gap-2'>
                        <button className='border rounded-lg text-blue-400 border-blue-400 w-full py-2'>Chat</button>
                        <button className='bg-blue-500 text-white rounded-lg w-full'>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextCamel