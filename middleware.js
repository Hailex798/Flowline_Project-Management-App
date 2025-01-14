import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//Protected Routes -->
const isProtectedRoute = createRouteMatcher([
  "/onboarding(.*)",
  "/organisation(.*)",
  "/project(.*)",
  "/issue(.*)",
]);


//Checking Middleware Logic | If a Unauthorized User is trying to access a protected Route: Redirect to SignIn Page
export default clerkMiddleware((auth, req) => {
  if(!auth().userId && isProtectedRoute(req)){
    return auth().redirectToSignIn(); 
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};