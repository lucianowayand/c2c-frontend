export default function ArrowLeft({size=32, color="currentColor"}: {size:number, color: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><polyline points="15 18 9 12 15 6"/></svg>
    )
}