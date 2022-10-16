import Link from "next/link"
const  footer=() =>{
    return (
        <>
        <footer>

        <div className="footercol">
            <div className="footer1">
            <h4 className="h3 white-color m-5px-b"><div>Sign Up Today and Get </div>
Rs. 200 off  On your first order.</h4>
<input placeholder="enter your e-mail"></input>


            </div>
            <div className="">
            <h5 className="footersty">Collection</h5>
            <ul className="list-unstyled links-white footer-link-1 gb-scope">
              <li><Link href="/">Clothing</Link></li>
              <li><Link href="/">Tops</Link></li>
              <li><Link href="/">Sweaters</Link></li>
              <li><Link href="/">Dresses</Link></li>
              <li><Link href="/">Shoes</Link></li>
            </ul>
          </div>
          <div className="">
            <h5 className="footersty">Company</h5>
            <ul className="list-unstyled links-white footer-link-1">
              <li><Link href="#">Carrier at toppers</Link ></li>
              <li><Link href="#">About Toppers</Link ></li>
              <li><Link href="#">Contact Us</Link ></li>
              <li><Link href="#">Gift Cards</Link ></li>
              <li><Link href="#">Blog</Link ></li>
            </ul>
          </div>
          <div className="">
            <h5 className="footersty"> Need Help</h5>
            <ul className="list-unstyled  links-white footer-link-1">
              <li> <Link href="">Order Status</Link > </li>
              <li> <Link href="">Shipping & Delivery</Link > </li>
              <li> <Link href="">FAQ & Helps</Link > </li>
              <li><Link href="">Terms & Conditions</Link ></li>
              <li><Link href="">Legal & Privacy</Link ></li>
            </ul>
          </div>
          <div className="">
            <h5 className="footersty"> Exclusive Services</h5>
            <ul className="list-unstyled links-white footer-link-1">
              <li> <Link href="">Call Us: +1 666 22322</Link > </li>
              <li> <Link href="">Send us an email</Link > </li>
              <li> <Link href="">Seen our stores</Link > </li>
            </ul>
          </div>
          </div>
          <p>
            <span className="white">&copy; 2022 <b>Company Name.</b>All Rights Reserved.</span>
            </p>
        </footer>
                </>
    );
};
export default footer;