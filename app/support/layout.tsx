'use client';

import { Suspense } from 'react';
import { SimpleHeader } from "@/components/SimpleHeader";
import { Loading } from '@/components/loading';

function SupportLayoutContent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SimpleHeader currentPage="support" />
            <main className="h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:flex flex-col justify-between bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100/90">
                    <div className="w-full flex-1 flex flex-col justify-center items-center px-16">
                        <div className="max-w-2xl ml-12">
                            <h1 className="text-5xl font-black text-black leading-tight mb-6">
                                Need
                                <br />
                                <span className="text-black">Help?</span>
                            </h1>
                            <p className="text-xl font-semibold text-gray-800">
                                We&apos;re here to support you every step of the way.
                                <br />
                                Send us a message and we&apos;ll get back to you
                                <br />
                                as soon as possible.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-xs mt-6 px-4 py-4">
                        <div className="font-semibold text-black">© 2025 Honeycomb AI</div>
                        <div className="space-x-4">
                            <a href="#" className="font-medium text-gray-700 underline">Terms of Service</a>
                            <a href="#" className="font-medium text-gray-700 underline">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div className="bg-white flex items-center justify-center px-6">
                    <div className="w-full max-w-md">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
}

export default function SupportLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense fallback={
            <div className="flex-1 flex flex-col items-center justify-center min-h-screen">
                <Loading />
                <p className="text-sm text-muted-foreground mt-4">Loading Support...</p>
            </div>}>
            <SupportLayoutContent>{children}</SupportLayoutContent>
        </Suspense>
    );
}
