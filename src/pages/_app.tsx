import type { AppProps } from 'next/app'
import 'styles/global.scss'
import '../styles/slick.scss'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
