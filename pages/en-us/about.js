import Head from '@/components/meta'
import Navbar from '@/components/navbar'
import About from "@/components/about";
import Footer from '@/components/footer';
import {
    langenus
} from '@/script/languages'

export default function () {
    return(
        <div className='dark:bg-slate-800'>
            <Head title='About' image='/meta.png' />
            <Navbar lantoshow={langenus} pathname='en-us' page='/about' />
            <About />
            <Footer paht='en-us' />
        </div>
    )
}