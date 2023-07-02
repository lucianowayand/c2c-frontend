export default function ArrowLeft({size=32, color="currentColor"}: {size:number, color: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
    )
}