interface RouteGroup {
  [key: string]: string;
}

class Routes {
  private public: RouteGroup;
  private protected: RouteGroup;

  constructor() {
    this.public = {
      home: "/",
      signIn: "/sign-in",
      signUp: "/sign-up",
    };
    this.protected = {
      dashboard: "/dashboard",
    };
  }
  public getHome() {
    return this.public.home;
  }
  public getSignIn() {
    return this.public.signIn;
  }
  public getSignUp() {
    return this.public.signUp;
  }
  public getDashboard() {
    return this.protected.dashboard;
  }
  public isPublicRoute(path: string): boolean {
    return Object.values(this.public).includes(path);
  }

  public isProtectedRoute(path: string): boolean {
    return Object.values(this.protected).includes(path);
  }
}

export const routes = new Routes();
