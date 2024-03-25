import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";


export default function Home() {
  return (
    <div key="1" className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFD700] to-[#ff0009]">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#">
              <PlayIcon className="h-6 w-6" />
              <span className="sr-only">Donghua Streamer</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Home
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Donghua List
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex" href="#">
          <PlayIcon className="h-6 w-6" />
          <span className="sr-only">Donghua Streamer</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to SkyLnk Streamer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-x1 dark:text-gray-400">
                  Your one-stop platform for all your favourite Donghua. Explore our collection now!
                </p>
              </div>
              <div className="space-x-4">
                <Link className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/explore"
                >Explore Donghua
                </Link>
                <Link className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/auth"
                >Sign In
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-center">
              Unique Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center text-center border-black border-opacity-100">
                <CopyrightIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-semibold">Exclusive Content</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Access to exclusive Donghua not available anywhere else.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LibraryIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-semibold">Vast Library</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore our vast library of Donghua from various genres.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <UserIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-semibold">User-friendly Experience</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Enjoy a user-friendly experience with easy navigation and personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-center">
              Latest Updates
            </h2>
            <div className="mt-6">
              <div>
                <div className="mb-3">
                  <Card >
                    <CardHeader>
                      <h3 className="text-lg font-semibold">New Donghua Release</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out the latest release of our exclusive Donghua series.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mb-3">
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold">Upcoming Events</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">
                        Join us for the upcoming Donghua fan meet-up event.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mb-3">
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold">New Feature Update</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">
                        We have updated our platform with new features for a better user experience.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-center">
              Responsive Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center text-center">
                <Image
                  alt="Desktop Preview"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-semibold mt-4">Desktop</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  alt="Tablet Preview"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-semibold mt-4">Tablet</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  alt="Mobile Preview"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="text-lg font-semibold mt-4">Mobile</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-center">
              About Us
            </h2>
            <div className="flex flex-col items-center space-y-4 text-center mt-6">
              <p className="mx-auto max-w-[700px] text-fuchsia-900 md:text-xl">
                Skylnk Streamer is a dedicated platform for Donghua enthusiasts. Our mission is to provide a
                user-friendly platform where users can explore and enjoy their favorite Donghua. For more detailed
                information, visit our About Us page.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
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