import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div className="space-y-6 text-center">
            <div>
                <h1>
                    Your AI Career Coach for 
                    <br />
                    Professional Success
                </h1>
                <p>
                Advance your career with personalized guidance, interview prep, and
                AI-powered tools for job success.
                </p>
            </div>
            <div>
                <Link href='/dashboard'>
                    <Button size="lg" className="px-8"> Get Started</Button>
                </Link>
                <Link href='https://www.youtube.com/results?search_query=next+js'>
                    <Button size="lg" className="px-8" variant={"outline"}> Demo</Button>
                </Link>
            </div>
            <div>
                <div>
                    <Image
                    src="/herobanner.jpg"
                    alt="Hero Banner"
                    width={1280}
                    height={720}
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
