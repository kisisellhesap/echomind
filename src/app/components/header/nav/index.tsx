import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { FaGhost } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import UserBtn from "../../aside/userButton";
interface Props {
  toggle: boolean;
}

const Nav: FC<Props> = ({ toggle }) => {
  const links = [
    { href: "/whispers", label: "Whispers", icon: <FaGhost /> },
    { href: "/trends", label: "Trends", icon: <FaFire /> },
    { href: "/profile?tab=whispers", label: "Profile", icon: <FaUser /> },
  ];
  const path = usePathname();

  const active =
    path === "/whispers"
      ? "top-0"
      : path === "/trends"
      ? "top-[47px]"
      : "top-[95px]";

  return (
    <nav className="flex flex-col font-bold text-theme-white text-sm gap-3 items-center relative h-full">
      <div className="flex flex-col gap-3">
        {links.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.href}
              className={`text-center group flex items-center gap-3 p-2 rounded-2xl  relative max-md:justify-center max-md:min-w-[36px] outline-none  ${
                toggle ? "justify-center min-w-[36px]" : "min-w-[100px]"
              }`}
            >
              <span className={`max-md:text-xl ${toggle && "text-xl"}`}>
                {link.icon}
              </span>{" "}
              <span
                className={`max-md:p-1 max-md:absolute max-md:bg-theme-white max-md:text-theme-lavender max-md:rounded-full max-md:text-[.8rem] max-md:right-[-35px] max-md:opacity-0 max-md:transition-all 
         max-md:group-hover:opacity-100 max-md:group-hover:right-[-95px] max-md:min-w-[70px] 
         max-md:invisible max-md:group-hover:visible  ${
           toggle &&
           "absolute p-1 bg-theme-white text-theme-lavender rounded-full text-[.8rem] right-[-35px] opacity-0 transition-all group-hover:opacity-100 group-hover:right-[-95px] min-w-[70px] invisible group-hover:visible "
         }  `}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>

      <UserBtn toggle={toggle} />

      <div
        className={`text-center p-2 rounded-2xl  bg-theme-lavender h-[36px] transition-all duration-300 ease-in-out -z-10 absolute ${active} max-md:justify-center max-md:min-w-[36px] ${
          toggle ? "min-w-[36px]" : "min-w-[100px]"
        }
`}
      />
    </nav>
  );
};

export default Nav;
