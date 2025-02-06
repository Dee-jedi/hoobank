# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// CONSTANTS

import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";

export const navLinks = [
{
id: "home",
title: "Home",
},
{
id: "features",
title: "Features",
},
{
id: "product",
title: "Product",
},
{
id: "clients",
title: "Clients",
},
];

export const features = [
{
id: "feature-1",
icon: star,
title: "Rewards",
content:
"The best credit cards offer some tantalizing combinations of promotions and prizes",
},
{
id: "feature-2",
icon: shield,
title: "100% Secured",
content:
"We take proactive steps make sure your information and transactions are secure.",
},
{
id: "feature-3",
icon: send,
title: "Balance Transfer",
content:
"A balance transfer credit card can save you a lot of money in interest charges.",
},
];

export const feedback = [
{
id: "feedback-1",
content:
"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
name: "Herman Jensen",
title: "Founder & Leader",
img: people01,
},
{
id: "feedback-2",
content:
"Money makes your life easier. If you're lucky to have it, you're lucky.",
name: "Steve Mark",
title: "Founder & Leader",
img: people02,
},
{
id: "feedback-3",
content:
"It is usually people in the money business, finance, and international trade that are really rich.",
name: "Kenn Gallagher",
title: "Founder & Leader",
img: people03,
},
];

export const stats = [
{
id: "stats-1",
title: "User Active",
value: "3800+",
},
{
id: "stats-2",
title: "Trusted by Company",
value: "230+",
},
{
id: "stats-3",
title: "Transaction",
value: "$230M+",
},
];

export const footerLinks = [
{
title: "Useful Links",
links: [
{
name: "Content",
link: "https://www.hoobank.com/content/",
},
{
name: "How it Works",
link: "https://www.hoobank.com/how-it-works/",
},
{
name: "Create",
link: "https://www.hoobank.com/create/",
},
{
name: "Explore",
link: "https://www.hoobank.com/explore/",
},
{
name: "Terms & Services",
link: "https://www.hoobank.com/terms-and-services/",
},
],
},
{
title: "Community",
links: [
{
name: "Help Center",
link: "https://www.hoobank.com/help-center/",
},
{
name: "Partners",
link: "https://www.hoobank.com/partners/",
},
{
name: "Suggestions",
link: "https://www.hoobank.com/suggestions/",
},
{
name: "Blog",
link: "https://www.hoobank.com/blog/",
},
{
name: "Newsletters",
link: "https://www.hoobank.com/newsletters/",
},
],
},
{
title: "Partner",
links: [
{
name: "Our Partner",
link: "https://www.hoobank.com/our-partner/",
},
{
name: "Become a Partner",
link: "https://www.hoobank.com/become-a-partner/",
},
],
},
];

export const socialMedia = [
{
id: "social-media-1",
icon: instagram,
link: "https://www.instagram.com/",
},
{
id: "social-media-2",
icon: facebook,
link: "https://www.facebook.com/",
},
{
id: "social-media-3",
icon: twitter,
link: "https://www.twitter.com/",
},
{
id: "social-media-4",
icon: linkedin,
link: "https://www.linkedin.com/",
},
];

export const clients = [
{
id: "client-1",
logo: airbnb,
},
{
id: "client-2",
logo: binance,
},
{
id: "client-3",
logo: coinbase,
},
{
id: "client-4",
logo: dropbox,
},
];

// INDEX.JS

import Navbar from "./Navbar";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
import Business from "./Business";
import Clients from "./Clients";
import CTA from "./CTA";
import Stats from "./Stats";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Hero from "./Hero";

export {
Navbar,
Billing,
CardDeal,
Business,
Clients,
CTA,
Stats,
Footer,
Testimonials,
Hero,
};

// STYLES

const styles = {
boxWidth: "xl:max-w-[1280px] w-full",

heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

flexCenter: "flex justify-center items-center",
flexStart: "flex justify-center items-start",

paddingX: "sm:px-16 px-6",
paddingY: "sm:py-16 py-6",
padding: "sm:px-16 px-6 sm:py-12 py-4",

marginX: "sm:mx-16 mx-6",
marginY: "sm:my-16 my-6",
};

export const layout = {
section: `flex md:flex-row flex-col ${styles.paddingY}`,
sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
# hoobank
