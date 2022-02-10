import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function Custom404() {
    return (
        <div>
            <Navbar lantoshow='en-us' pathname='en-us' />
                <div className="h-[80vh] bg-white dark:bg-slate-700 flex justify-center content-center flex-wrap">
                    <h1 className="text-black dark:text-gray-50 error-text text-4xl md:text-7xl	">
                        404 - Page Not Found
                    </h1>
                </div>
            <Footer paht='en-us' />
        </div>
    )
  }