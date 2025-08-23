import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image'; 

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-[#6E4D42]">404</h1>
          <h2 className="text-2xl font-light text-[#C1B1AB]">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="relative w-64 h-64 mx-auto">
          <div className="absolute inset-0 bg-muted/10 rounded-full animate-pulse"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/illustration.png" 
              alt="404 Illustration" 
              width={256}
              height={256}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="pt-6">
          <Button asChild variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
