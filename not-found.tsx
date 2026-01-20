import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-auto text-center border-none shadow-none bg-transparent">
        <CardContent className="pt-6">
          <div className="flex mb-6 justify-center">
            <AlertCircle className="h-20 w-20 text-destructive/80" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">404 Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-xl">
              Return Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
