import icon1 from './../assets/images/icon1.png';
import icon2 from './../assets/images/icon2.png';

const Cards = ({ icon, heading, text }) => (
  <div
    className={`flex items-center gap-4 py-2 px-1  rounded-xl cursor-pointer hover ${
      text.includes('proactive') && 'bg-black-gradient'
    }`}
  >
    <div>
      <img
        className="xl:w-16 xl:h-16 lg:w-12 lg:h-12 h-10 w-10 object-contain"
        src={icon}
        alt=""
      />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">{heading}</h3>
      <p
        className={`text-dimWhite xl:text-[15px] lg:text-[14px] text-[12px] $ 
        `}
      >
        {text}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section
      id="about"
      className="lg:px-16 p-6 max-w-7xl mx-auto sm:mt-10 -mt-2"
    >
      <div className="text-white flex flex-col sm:flex-row md:justfy-between items-center md:gap-16 gap-6">
        <div className="flex flex-col sm:gap-5 gap-4 justify-start md:items-start items-center xl:w-3/5 md:w-1/2 w-4/5">
          <div>
            <h2 className="font-semibold xl:text-[32px] lg:text-[24px] md:text-[18px] sm:text-[14px]  text-[16px] lg:leading-[42px] leading-7 mb-2 sm:mb-0">
              You do the business, <br /> we’ll handle the money.
            </h2>
            <p className="text-dimWhite xl:text-[15px] lg:text-[14px] text-[12px] sm:leading-5 mb-2">
              With the right credit card, you can improve your financial life{' '}
              <br className="xl:block hidden" /> by building credit, earning
              rewards and saving money. But <br className="xl:block hidden" />
              with hundreds of credit cards on the market.
            </p>
          </div>
          <button
            type="button "
            className="bg-blue-gradient flex items-center justify-center text-black rounded-md sm:p-2 sm:text-sm font-medium px-4 py-2 text-[12px]"
          >
            Get Started
          </button>
        </div>

        <div className="flex flex-col xl:gap-4 gap-1 lg:w-3/5 md:w-1/2 ">
          <Cards
            icon={icon1}
            heading={'Reward'}
            text={`The best credit cards offer some tantalizing  combinations of promotions and prizes`}
          />
          <Cards
            icon={icon2}
            heading={'100% Guaranteed'}
            text={`We take proactive steps make sure your information and transactions are secure.`}
          />
          <Cards
            icon={icon1}
            heading={'Balance Transfer'}
            text={`A balance transfer credit card can save you a lot of money in interest charges.`}
          />
        </div>
      </div>
    </section>
  );
};

export default Business;
