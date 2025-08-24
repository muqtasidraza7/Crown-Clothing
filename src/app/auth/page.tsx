import { SignIn, ClerkProvider } from "@clerk/nextjs";

export default function AuthPage() {
  return (
    <ClerkProvider>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="p-8 bg-white rounded-xl shadow-lg">
          <SignIn routing="hash" />
        </div>
      </div>
    </ClerkProvider>
  );
}
