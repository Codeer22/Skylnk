import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { JSX, SVGProps } from "react";

export default function Details() {
     return (
          <div key="1" className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
               <header className="relative w-full h-[500px] overflow-hidden">
                    <Image
                         alt="Donghua cover image"
                         className="absolute inset-0 object-cover w-full h-full"
                         height="500"
                         src="/placeholder.svg"
                         style={{
                              aspectRatio: "1920/500",
                              objectFit: "cover",
                         }}
                         width="1920"
                         priority
                    />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="h-16 sm:h-20">
                              <div className="flex items-center justify-between h-full">
                                   <div className="flex items-center">
                                        <Link className="flex items-center gap-2 font-semibold" href="#">
                                             <HomeIcon className="h-6 w-6" />
                                             <span className="">Donghua</span>
                                        </Link>
                                   </div>
                                   <div className="flex items-center space-x-6">
                                        <DropdownMenu>
                                             <DropdownMenuTrigger>
                                                  <Button className="text-sm font-medium" variant="ghost">
                                                       Explore
                                                  </Button>
                                             </DropdownMenuTrigger>
                                             <DropdownMenuContent>
                                                  <DropdownMenuItem>
                                                       <Link href="#">Genre</Link>
                                                  </DropdownMenuItem>
                                                  <DropdownMenuItem>
                                                       <Link href="#">Year</Link>
                                                  </DropdownMenuItem>
                                                  <DropdownMenuItem>
                                                       <Link href="#">Categories</Link>
                                                  </DropdownMenuItem>
                                             </DropdownMenuContent>
                                        </DropdownMenu>
                                        <Link className="text-sm font-medium" href="#">
                                             Favorites
                                        </Link>
                                        <Link className="text-sm font-medium" href="#">
                                             Profile
                                        </Link>
                                   </div>
                              </div>
                         </div>
                         <div className="mt-24 sm:mt-32">
                              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Donghua Title</h1>
                         </div>
                    </div>
               </header>
               <main className="mt-8 sm:mt-12 lg:mt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                              <div className="sm:text-lg sm:leading-7 lg:col-span-8">
                                   <div className="mt-4" />
                                   <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">Synopsis</h2>
                                   <p className="mt-4 text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat.
                                   </p>
                                   <div className="mt-8">
                                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">Cast & Crew</h2>
                                        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                             <div className="flex items-center space-x-4">
                                                  <Image
                                                       alt="Cast member"
                                                       className="w-20 h-20 rounded-full"
                                                       height="80"
                                                       src="/placeholder.svg"
                                                       style={{
                                                            aspectRatio: "80/80",
                                                            objectFit: "cover",
                                                       }}
                                                       width="80"
                                                  />
                                                  <div className="text-sm leading-5">
                                                       <p className="font-medium text-gray-900 dark:text-gray-100">Cast Member Name</p>
                                                       <p className="text-gray-500 dark:text-gray-400">Role in Donghua</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <aside className="mt-12 lg:mt-0 lg:col-span-4">
                                   <div className="sticky top-4 space-y-8">
                                        <section>
                                             <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                                                  Related Donghua
                                             </h2>
                                             <div className="mt-4 space-y-4">
                                                  <div className="flex items-center space-x-4">
                                                       <Image
                                                            alt="Related donghua"
                                                            className="w-20 h-20 rounded-lg"
                                                            height="80"
                                                            src="/placeholder.svg"
                                                            style={{
                                                                 aspectRatio: "80/80",
                                                                 objectFit: "cover",
                                                            }}
                                                            width="80"
                                                       />
                                                       <div className="text-sm leading-5">
                                                            <p className="font-medium text-gray-900 dark:text-gray-100">Donghua Title</p>
                                                            <p className="text-gray-500 dark:text-gray-400">Donghua Subtitle</p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </section>
                                        <section>
                                             <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">Comments</h2>
                                             <div className="mt-4 space-y-6">
                                                  <div className="space-y-2">
                                                       <div className="flex items-center space-x-2">
                                                            <Image
                                                                 alt="Commenter"
                                                                 className="w-10 h-10 rounded-full"
                                                                 height="40"
                                                                 src="/placeholder.svg"
                                                                 style={{
                                                                      aspectRatio: "40/40",
                                                                      objectFit: "cover",
                                                                 }}
                                                                 width="40"
                                                            />
                                                            <div className="text-sm leading-5">
                                                                 <p className="font-medium text-gray-900 dark:text-gray-100">Commenter Name</p>
                                                                 <p className="text-gray-500 dark:text-gray-400">10 days ago</p>
                                                            </div>
                                                       </div>
                                                       <p className="text-sm text-gray-500 dark:text-gray-400">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                            labore et dolore magna aliqua.
                                                       </p>
                                                  </div>
                                             </div>
                                        </section>
                                   </div>
                              </aside>
                         </div>
                    </div>
               </main>
          </div>
     )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
               <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
               <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
     )
}
