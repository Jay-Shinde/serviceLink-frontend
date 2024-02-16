import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes : ["/","/sign-in","/sign-up","/service","/community","/blog","/api/webhook/route.ts"]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};