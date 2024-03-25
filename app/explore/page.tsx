/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { PaginationPrevious, PaginationItem, PaginationLink, PaginationEllipsis, PaginationNext, PaginationContent, Pagination } from "@/components/ui/pagination"
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

export default function Explore() {
     return (
          <>
               <main className="w-full py-12 bg-gradient-to-br from-[#ffd900ec] to-[#da0007]">
                    <div className="container grid gap-6 md:gap-6 px-4 md:px-6 max-w-7xl mx-auto">
                         <div className="flex items-center relative">
                              <Image
                                   alt="Logo Image"
                                   height={100} 
                                   src="/logos/skylnk-high-resolution-logo-black-transparent 2.png"
                                   width={275}
                                   priority
                              />
                              <form className="flex items-center ml-7 px-5 py-1 gap-2 rounded-full bg-white">
                                   <Input className="w-full border-none" placeholder="Search donghua..." type="search" />
                                   <Image
                                        className="search-icon "
                                        src="/icons/search_icon.png"
                                        alt="Search icon"
                                        width="20"
                                        height="20"
                                        priority
                                   />
                              </form>
                              <div>
                                   <Button className="rounded-full ml-2 md:ml-4 " size="icon" variant="ghost">
                                        <UserIcon className="w-7 h-7" />
                                        <span className="sr-only">Toggle user menu</span>
                                   </Button>
                              </div>
                         </div>
                         <Carousel className="mt-2">
                              <CarouselContent>
                                   <CarouselItem>
                                        <div className="relative group">
                                             <Link className="absolute inset-0 z-10" href="#">
                                                  <span className="sr-only">View</span>
                                             </Link>
                                             <Image
                                                  alt="Donghua Image"
                                                  className="rounded-t-lg object-full w-full aspect-[23/7.4] group-hover:opacity-100 transition-opacity"
                                                  height={300}
                                                  src="/images/success.jpg"
                                                  width={400}
                                                  priority
                                             />
                                             <div className="relative bottom-0 bg-opacity-50 bg-black p-4 rounded-b-lg">
                                                  <h3 className="font-semibold text-white">The Success of Xuan Emperor of Empyrean</h3>
                                                  <p className="text-sm leading-none text-gray-200 dark:text-gray-400">Brief Information</p>
                                             </div>
                                        </div>
                                   </CarouselItem>
                                   <CarouselItem>
                                        <div className="relative group">
                                             <Link className="absolute inset-0 z-10" href="#">
                                                  <span className="sr-only">View</span>
                                             </Link>
                                             <Image
                                                  alt="Donghua Image"
                                                  className="rounded-t-lg object-full w-full aspect-[23/7.4] group-hover:opacity-100 transition-opacity"
                                                  height={300}
                                                  src="/placeholder.svg"
                                                  width={400}
                                                  priority
                                             />
                                             <div className="relative bottom-0 bg-opacity-50 bg-black p-4 rounded-b-lg">
                                                  <h3 className="font-semibold text-white">The Legend of the Condor Heroes</h3>
                                                  <p className="text-sm leading-none text-gray-200 dark:text-gray-400">Brief Information</p>
                                             </div>
                                        </div>
                                   </CarouselItem>
                                   <CarouselItem>
                                        <div className="relative group">
                                             <Link className="absolute inset-0 z-10" href="#">
                                                  <span className="sr-only">View</span>
                                             </Link>
                                             <Image
                                                  alt="Donghua Image"
                                                  className="rounded-t-lg object-full w-full aspect-[23/7.4] group-hover:opacity-100 transition-opacity"
                                                  height={300}
                                                  src="/images/king.jpg"
                                                  width={400}
                                                  priority
                                             />
                                             <div className="relative bottom-0 bg-opacity-50 bg-black p-4 rounded-b-lg">
                                                  <h3 className="font-semibold text-white">The King's Avatar</h3>
                                                  <p className="text-sm leading-none text-gray-200 dark:text-gray-400">Brief Information</p>
                                             </div>
                                        </div>
                                   </CarouselItem>
                              </CarouselContent>
                              <div className="hidden">
                                   <CarouselPrevious />
                                   <CarouselNext />
                              </div>
                         </Carousel>
                         <section className="mt-8 rounded-b-lg">
                              <div className="flex items-center justify-between rounded-t-lg bg-lime-400">
                                   <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl px-2">Featured Donghua</h2>
                                   <Link className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 px-2 font-semibold" href="#">
                                        See more
                                   </Link>
                              </div>
                              <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 bg-gradient-to-tl from-[#ffd900ec] to-[#da0007] rounded-b-lg py-2 pb-2" >
                                   <div className="relative group px-2 pt-2">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/king.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0 bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">The King's Avatar</h3>
                                        </div>
                                   </div>
                                   <div className="relative group px-2 pt-2">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/success.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0 bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">The Success of Empyrean Xuan Emperor</h3>
                                        </div>
                                   </div>
                                   <div className="relative group px-2 pt-2">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/swallowed.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0  bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">Swallowed Star</h3>
                                        </div>
                                   </div>
                                   <div className="relative group px-2 pt-2 ">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/renegade.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0  bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">Renegade Immortal</h3>
                                        </div>
                                   </div>
                                   <div className="relative group px-2 pt-2">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/battle.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0  bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">Battle Through The Heavens</h3>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         <section className="mt-0 rounded-b-lg">
                              <div className="flex items-center justify-between rounded-t-lg bg-lime-400">
                                   <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl px-2">Trending Donghua</h2>
                                   <Link className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 px-2 font-semibold" href="#">
                                        See more
                                   </Link>
                              </div>
                              <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 bg-gradient-to-tl from-[#ffd900ec] to-[#da0007] rounded-b-lg py-2 pb-2" >
                                   <div className="relative group px-2 pt-2">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/king.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0 bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">The King's Avatar</h3>
                                        </div>
                                   </div>
                                   <div className="relative group px-2 pt-2">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/success.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0 bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">The Success of Empyrean Xuan Emperor</h3>
                                        </div>
                                   </div>
                                   <div className="relative group px-2 pt-2">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/swallowed.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0  bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">Swallowed Star</h3>
                                        </div>
                                   </div>
                                   <div className="relative group px-2 pt-2 ">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/renegade.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid gap-0  bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">Renegade Immortal</h3>
                                        </div>
                                   </div>
                                   <div className="relative group px-2 pt-2">
                                        <Link className="absolute inset-0 z-10" href="#">
                                             <span className="sr-only">View</span>
                                        </Link>
                                        <Image
                                             alt="Donghua Image"
                                             className="rounded-t-lg object-full w-full aspect-[1.4/1.6] group-hover:opacity-100 transition-opacity"
                                             height={300}
                                             src="/images/battle.jpg"
                                             width={400}
                                             priority
                                        />
                                        <div className="grid bg-lime-500 rounded-b-lg">
                                             <h3 className="font-semibold text-center tracking-tighter">Battle Through The Heavens</h3>
                                        </div>
                                   </div>
                              </div>
                         </section>
                         <div className="flex items-center justify-center mt-8">
                              <Pagination>
                                   <PaginationContent>
                                        <PaginationItem>
                                             <PaginationPrevious href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                             <PaginationLink href="#">1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                             <PaginationLink href="#">2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                             <PaginationLink href="#">3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                             <PaginationEllipsis />
                                        </PaginationItem>
                                        <PaginationItem>
                                             <PaginationNext href="#" />
                                        </PaginationItem>
                                   </PaginationContent>
                              </Pagination>
                         </div>
                    </div>
               </main >
               <footer className="w-full border-t py-6 px-4 md:px-6 bg-white dark:bg-gray-950">
                    <div className="container mx-auto">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="text-center md:text-left">
                                   <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
                                   <nav className="flex justify-center md:justify-start space-x-5">
                                        <Link className="text-sm hover:underline underline-offset-4" href="#">
                                             <TwitterIcon className="h-6 w-6" />
                                             <span className="sr-only">Twitter</span>
                                        </Link>
                                        <Link className="text-sm hover:underline underline-offset-4" href="#">
                                             <FacebookIcon className="h-6 w-6" />
                                             <span className="sr-only">Facebook</span>
                                        </Link>
                                        <Link className="text-sm hover:underline underline-offset-4" href="#">
                                             <InstagramIcon className="h-6 w-6" />
                                             <span className="sr-only">Instagram</span>
                                        </Link>
                                   </nav>
                              </div>
                              <div className="text-center md:text-left">
                                   <h3 className="text-lg font-semibold mb-2">SkyLnk Streamer</h3>
                                   <nav className="space-y-2">
                                        <Link className="text-sm hover:underline underline-offset-4 py-2 px-1" href="#">
                                             Help/FAQ
                                        </Link>
                                        <Link className="text-sm hover:underline underline-offset-4 py-2 px-1" href="#">
                                             Terms of Use
                                        </Link>
                                        <Link className="text-sm hover:underline underline-offset-4 py-2 px-1" href="#">
                                             Get the APP
                                        </Link>
                                        <Link className="text-sm hover:underline underline-offset-4 py-2 px-1" href="#">
                                             Privacy Policy
                                        </Link>
                                   </nav>
                              </div>
                              <div className="text-center md:text-left">
                                   <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Donghua Streamer. All rights reserved.</p>
                                   <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                        This site does not store any files on its server. All contents are provided by non-affiliated third
                                        parties.
                                   </p>
                              </div>
                         </div>
                    </div>
               </footer>
          </>
     )
}

function CopyrightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <circle cx="12" cy="12" r="10" />
               <path d="M15 9.354a4 4 0 1 0 0 5.292" />
          </svg>
     )
}
function LibraryIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <path d="m16 6 4 14" />
               <path d="M12 6v14" />
               <path d="M8 8v12" />
               <path d="M4 4v16" />
          </svg>
     )
}


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
               <circle cx="12" cy="7" r="4" />
          </svg>
     )
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
     )
}


function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
     )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
               <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
     )
}