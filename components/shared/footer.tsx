'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { ChevronUp } from 'lucide-react'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
    return (
        <footer className='bg-black text-white underline-link'>
            <div className='w-full'>
                <Button
                    variant='ghost'
                    className='bg-gray-800 w-full rounded-none'
                    onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                    <ChevronUp className='mr-2 h-4 w-4' />
                    Back to Top
                </Button>
            </div>
            <div className='p-4'>
                <div className='flex justify-center gap-3 text-sm'>
                    <Link href='/page/conditions-of-use'>Condition of Use</Link>
                    <Link href='/page/privacy-policy'>Privacy Notice</Link>
                    <Link href='/page/help'>help</Link>
                </div>
                <div className='flex justify-center text-sm'>
                    <p>&copy; 2025, {APP_NAME}, Inc. or its affiliates</p>
                </div>
                <div className='mt-8 flex justify-center text-sm text-gray-400'>
                    Nganjuk, East Java, Zip 64473 | +62 813 3528 0612
                </div>
            </div>
        </footer>
    )
}