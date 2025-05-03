'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-green-900 text-white z-50 shadow-md">
      <div className="w-full px-6 py-6 flex items-center">

        {/* Left: Logo + Club Name */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="text-xl font-semibold">Ninox Nature Club</span>
          </Link>
        </div>

        {/* Spacer to push nav to the right */}
        <div className="flex-1" />

        {/* Right: Nav Links */}
        <nav className="flex items-center space-x-5 text-base">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/legacy" className="hover:underline">Legacy</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/timeline" className="hover:underline">Timeline</Link>
          <Link href="/gallery" className="hover:underline">Gallery</Link>
          <Link
            href="/join"
            className="ml-2 px-4 py-2 text-sm bg-white text-green-900 rounded hover:bg-gray-200 transition"
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  );
}