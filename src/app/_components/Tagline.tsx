import { Text, Link, Button } from "@radix-ui/themes";
import { SignedOut } from "@clerk/nextjs";

export default function Tagline() {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="flex flex-col items-center p-0 pb-5">
        <Text className="text-6xl font-bold text-slate-900">
          <span className="text-span-col">Free</span> location sharing
        </Text>
        <Text className="text-6xl font-bold text-slate-900">
          your wallets will <span className="text-span-col">thank you.</span>
        </Text>
      </div>
      <SignedOut>
        <Link href="/sign-in">
          <Button className="">Get Started</Button>
        </Link>
      </SignedOut>
    </div>
  ); // planning to have it dynamically switch between text. inspired by https://www.prisma.io/ if you wanna see what im talking about
}