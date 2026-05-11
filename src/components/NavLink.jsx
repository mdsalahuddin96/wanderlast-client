import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({item}) => {
    const {href,text}=item;
    const pathName=usePathname();
  return (
    <li className={`${pathName===href&&'text-[#15a1bf] border-b border-blue-400'}`}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default NavLink;
