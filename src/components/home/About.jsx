import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="bg-card p-3">
      <div className="gap-5 flex flex-col md:flex-row w-[90%] mx-auto p-3">
        <div className="flex flex-col gap-4 self-center">
          <h3 className="font-sans text-2xl md:text-4xl text-main_light">
            Paramount Assets is a Self-Directed Trader’s Nerve Center
          </h3>
          <div className="flex gap-2 items-center">
            <div>
              <img src="/chevron-down.png" alt="" />
            </div>
            <p>
              Our mission is to help you make better trading decisions faster.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src="/chevron-down.png" alt="" />
            </div>
            <p>
              we are committed to creating efficient and powerful services for
              those who take charge of their own trades and investments.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src="/chevron-down.png" alt="" />
            </div>
            <p>
              Paramount Assets partners with professional traders around the
              globe to provide you a hub of information, education, strategy,
              live streams, social media ecosystsems and buy/sell signals for
              self-directed traders and investors.
            </p>
          </div>
          <div className="my-3">
            <Link to="/register" className="w-fit p-3 bg-main">
              Start Today
            </Link>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* More Abouts  */}
      <div className="w-[90%] mx-auto p-4 space-y-5">
        <h4 className="font-sans text-2xl md:text-4xl text-main_light">
          First Start your Financial Journey
        </h4>
        <p>
          Paramount Assets is a forex trading company . They have an algorithmic
          machine that handles all the trades . The machine studies all stocks
          then trade for you and make double profits daily.The system does all
          the trading for you, it uses an algorithm to trade and make profits
          for you . All you have to do is create an account then deposit crypto
          coin into your paramount asset account then the coin will be traded by
          the paramount machine and it will make profits for you by multiplying
          your coins then you can go ahead and withdraw your profits instantly .
          It’s currency is static and it doesn’t depreciate, It doesn’t go down
          in value but your profits goes up daily.
        </p>
        <p>
          Paramount Assets is an Hedge Funds company that take cares of your
          forex trading. They trade with your money and pay’s you 100% ROI,
          meaning you would get double of every amount you invest with them with
          in 24hours. The company has Algorithms that help them trades stocks/
          crypto in the market. This Algorithms can detect when a stock/crypto
          is going up or going down to maximize profits making . The Algorithm
          give’s signal for market execution and the company engage a good team
          of speculators for Technical Analysis. Paramount Asset is fully
          Certified by SEC The investment has different packages/plans . Here
          are the plans below
        </p>
        <ul className="space-y-[2rem]">
          <li>
            Basic plan: you can start this plan with a minimum of $100-$1000 and
            you would get a 100% interest within 24hours and it attracts more
            bonus to your account. They pay you double interest instantly and
            you can earn over $50,000 monthly on this plan .
          </li>
          <li>
            Bronze plan: you can start this plan with a minimum of $1000- $5000
            and you would get 100% profits interest with in 24hours.They pay you
            double interest instantly and you can earn over $100,000 monthly on
            this plan .
          </li>
          <li>
            silver plan : you can start this plan with $5000-$10,000 and you
            would get a 100% interest within 24hours and it attracts more bonus
            to your account.They pay you double interest instantly and you can
            earn over $200,000 monthly on this plan .
          </li>
          <li>
            Gold plan: you can start this plan with $10,000 - $100,000 and you
            would get a 100% interest within 24hours and it attracts more bonus
            to your account.They pay you double interest instantly and you can
            earn over $500,000 monthly on this plan .
          </li>
          <li>
            platinum plan: you can start this plan with $100,000 -$1,000,000 and
            you would get a 100% interest within 24hours and it attracts more
            bonus to your account.They pay you double interest instantly and you
            can earn over $10,000
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeAbout;
