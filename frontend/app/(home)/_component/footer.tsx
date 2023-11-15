import Link from "next/link";

const Footer = () => {
    return ( 
        
      <div className="flex items-center gap-1 justify-center">
      <small className="text-xs text-center">All rights reserved to</small>
      <Link
        className="text-xs text-center font-bold"
        href="https://www.facebook.com/benarfahamza/"
      >
        Hamza Benarfa
      </Link>
    </div>
     );
}
 
export default Footer;