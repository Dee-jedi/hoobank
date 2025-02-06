import started from './../assets/images/started.png';
import robot from '/robot.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:px-16 p-6  md:py-20 max-w-7xl mx-auto sm:mt-0  mt-16"
    >
      <div className="flex justify-between items-center md:flex-row flex-col space-x-3 relative">
        <div className="text-white flex flex-col relative">
          <div className="flex flex-row items-center">
            <h1 className="font-semibold  xl:text-[68px] lg:text-[60px] sm:text-[45px] text-[34px] xl:leading-[100.87px] lg:leading-[85px]">
              The Next <br />
              <span className="text-gradient ">Generation</span>
            </h1>
            <img
              src={started}
              alt=""
              className="xl:w-[140px] xl:h-[140px] lg:h-[90px] lg:w-[90px] md:w-[75px] md:h-[75px] w-[65px] h-[65px]  md:ml-10 ml-3 cursor-pointer object-contain"
            />
          </div>
          <h1 className="font-semibold  xl:text-[68px] lg:text-[60px] xl:leading-[100.87px] lg:leading-[85px] sm:text-[45px] text-[34px] text-nowrap">
            Payment Method
          </h1>
          <p className="text-dimWhite xl:text-[16px] lg:text-[14px] text-[12px] md:mt-6 mt-3 sm:w-full ">
            Our team of experts uses a methodology to identify{' '}
            <br className="md:block hidden" /> the credit cards most likely to
            fit your needs. <br className="sm:block hidden" /> We examine annual
            percentage rates, annual fees.
          </p>
        </div>

        <div className="mt-10 relative ">
          <div className="absolute z-0 top-0 right-0 h-[35%] pink__gradient w-[40%]" />
          <div className="absolute bottom-40 right-0  white__gradient w-[80%] h-[80%]" />
          <div className="absolute bottom-20 right-20  blue__gradient w-[50%] h-[50%]" />
          <img
            src={robot}
            alt=""
            className="xl:w-[500px] xl:h-[500px] sm:w-[420px] sm:h-[420px] h-[320px] w-[320px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
