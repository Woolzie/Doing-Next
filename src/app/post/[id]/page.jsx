"use client";
import { usePathname } from "next/navigation";
export default function Post() {
 const pathname = usePathname();
return <p> the browser shows that this page is {pathname}</p>;//usePathname is a function that returns the current webpage route regarding the website, pathname 
// is a variable so the value can be in the return part of the Post function

}