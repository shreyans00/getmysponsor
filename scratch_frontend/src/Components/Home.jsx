import About from "./Aboutus";
import Client from "./Client";
import Testimonial from "./Testimonial";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="newstyle">
          <img src="/images/gms_icon.png" alt="logo" />
          <h1>
            <b>GetMySponsor</b>
          </h1>
          <h5>Connect. Raise. Succeed</h5>
        </div>
      </div>
      <About />
      <Client />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Home;
