export default function CloseIcon({size=14, color="black"}: {size?:number, color?: string}) {
    return <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L7.00001 7.00002M7.00001 7.00002L13 1M7.00001 7.00002L1 1M7.00001 7.00002L13 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}    