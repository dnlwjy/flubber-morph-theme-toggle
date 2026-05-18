import Link from 'next/link'
import Button from '../components/Button'

export default function NotFound() {
    return (
        <main>
            <section className="h-screen flex-col gap-10">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-center">I lost this page.</h1>
                    <p className="text-center">It seems the page you are looking for does not exist.</p>
                </div>
                <div>
                    <Link href="/">
                        <Button title="Go Back" />
                    </Link>
                </div>
            </section>
        </main>
    )
}