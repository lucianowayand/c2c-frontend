export default function Home() {
    return (
        <div className="flex flex-col items-center bg-zinc-200">
            <div className="bg-orange-600 h-52 w-screen flex flex-col items-center">
                <div className="absolute text-white font-black text-4xl left-0 ml-2 mt-2">C2C.</div>
                <div className="w-1/3 flex justify-center">
                    <input className="w-96 h-12 mt-6 flex-none" type="text" />
                    <a className="h-12 w-12 bg-white mt-6 ml-2 flex-none" href=""></a>
                </div>
                <div className="mt-12 flex space-x-7">
                    <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                    <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                    <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                    <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                    <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                    <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                    <a className="bg-white rounded-full w-16 h-16 flex-none" href=""></a>
                </div>
            </div>
            <div className="bg-white h-screen w-3/4"></div>
        </div>
    )
}