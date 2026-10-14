import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background p-6 text-foreground">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Your new project</CardTitle>
          <CardDescription>Next.js, TypeScript, Tailwind CSS and shadcn/ui, ready to build on.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button render={<a href="https://ui.shadcn.com/docs/components" target="_blank" rel="noreferrer" />}>Browse components</Button>
        </CardContent>
      </Card>
    </main>
  );
}
