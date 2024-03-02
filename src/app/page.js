import Image from 'next/image'
import HomePage from './home/page'
import { Header } from '@/componets'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
     <HomePage />
    </main>
  )
}