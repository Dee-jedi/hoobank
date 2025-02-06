const Stats = () => {
  const stats = [
    {
      label: '3800+',
      name: 'User Active',
    },
    {
      label: '230+',
      name: 'trusted by company',
    },
    {
      label: '$230M',
      name: 'transaction',
    },
  ];

  return (
    <div className="lg:px-16 p-6 max-w-7xl mx-auto -mt-8 sm:-mt-16">
      <div className="flex lg:gap-20 sm:gap-14 gap-4 w-full justify-center">
        {stats.map((stat, index) => (
          <div
            className="text-white uppercase flex space-x-2 items-center"
            key={index}
          >
            <h2 className="font-semibold lg:text-[24px] md:text-[18px] sm:text-[14px]  text-[12px] ">
              {stat.label}
            </h2>
            <p className="text-gradient lg:text-[16px]   sm:text-[12px] text-[9px] sm:text-nowrap">
              {stat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
