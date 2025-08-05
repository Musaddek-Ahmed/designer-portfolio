import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <p>© 2025 Nushrat. All rights reserved.</p>
      <div className="flex gap-3">
        {mySocials.map((social, index) => {
          const Icon = social.icon;
          return (

          <a href={social.href} key={index}>
            <Icon className="w-8 h-8 text-white hover:text-blue-200" />
          </a>
          )
})}
      </div>
      
    </section>
  );
};

export default Footer;
