import Head from "next/head";
import Link from "next/link";
const Navbar=() =>{
    return (
        <>
        <Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossorigin="anonymous" 
/>
</Head>
  
    <header>
        <nav>
            <div class="div1"></div>
            <div class="div2"><nav>
            <div className="topnav">
            </div>
            <h1 className="logo">LOGO</h1>
      <ul className="menu-bar">
        <Link href="/"><a className="tags">Home</a></Link>
        <Link href="/"><a className="tags">School Uniforms</a></Link>
        <Link href="/"><a className="tags">Corporate</a></Link>
        <Link href="/"><a className="tags">Sports</a></Link>
        <Link href="/"><a className="tags">Blogs</a></Link>

      </ul>
    </nav></div>
    <div className="headings">
        <p className="tops">Free Delivery on orders above Rs. 1000,  DON’T MISS</p>
        <span className="shopnow"><Link href="/">SHOP NOW</Link></span>
    </div>
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Category Sports</a></li>
    <li class="breadcrumb-item active" aria-current="page">Football Shirt</li>
  </ol>
        </nav>
        </nav>
    </header>

        </>
    );
};
export default Navbar;