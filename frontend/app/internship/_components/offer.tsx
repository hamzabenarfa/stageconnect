import { Button } from '@/components/ui/button';
import Image from 'next/image';


interface OfferProps {
    id: string;
    img: string | "...";
    company: string;
    title: string;
    duration: number;
    place: string;
    paid: boolean;
}

const Offer = ({ id,img, company, paid, title, duration, place }: OfferProps) => {
    return (
        <div className="w-full md:w-[60%] grid grid-cols-3 md:grid-cols-7 place-items-center gap-4 p-2 rounded-2xl m-1 border-[3px] border-gray-200">
            <div className="col-span-1">
                {/* <Image
                    src={img}
                    width={64}
                    height={64}
                    alt={company}
                /> */}
                <img src={img} alt={company} className='w-16 h-16 rounded-full' />
            </div>
            <div className="col-span-2 justify-self-start">
                <h1 className='font-semibold '>{title}</h1>
                <p className='font-semibold text-gray-400'>{company}</p>
            </div>
            <div className="col-span-1">
                {paid ? <p className='bg-green-300 rounded-xl px-2'>paid</p> : <p className='bg-red-300 rounded-xl px-1'>unpaid</p>}
            </div>
            <div className="col-span-1 hidden md:block">
                {duration} months
            </div>
            <div className="col-span-1 hidden md:block">
                {place}
            </div>
            <Button variant="hero" className='col-span-2 md:col-span-1 w-full rounded-3xl' size="lg">Apply Now</Button>
        </div>
    );
}

export default Offer;
