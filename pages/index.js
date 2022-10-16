import Link from "next/link";
import Navbar from "../component/navbar";
import Body from "../component/body";
import Footer from "../component/Footer";
const index=() =>{
  return (
    <>

    <header className="header">
    <Navbar />
    <Body />
    <Footer />
      <div className="brand_box"></div></header></>
  );
};

export default index;