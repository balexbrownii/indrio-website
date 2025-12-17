import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/indrio-logo.png"
              alt="Indrio Fields"
              width={100}
              height={40}
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/80 max-w-md mb-6">
              Pay farmers for flavor and nutrition. Connect them to people who care.
              That&apos;s how you fix the food system.
            </p>
            {/* Newsletter Signup */}
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Your email"
                className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4>Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/learn">Learn</Link></li>
              <li><Link href="/fielder">Fielder</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4>Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/learn/share-framework">S.H.A.R.E. Framework</Link></li>
              <li><Link href="/fielder/methodology">Methodology</Link></li>
              <li><Link href="/newsletter">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Indrio Brands. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
