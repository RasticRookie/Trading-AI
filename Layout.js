import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { TrendingUp, BarChart3, Briefcase, Sparkles, Menu, Newspaper, Target } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Market Dashboard",
    url: createPageUrl("Dashboard"),
    icon: TrendingUp,
  },
  {
    title: "Trading Strategies",
    url: createPageUrl("TradingStrategies"),
    icon: Target,
  },
  {
    title: "News Feed",
    url: createPageUrl("NewsFeed"),
    icon: Newspaper,
  },
  {
    title: "Stock Analyzer",
    url: createPageUrl("StockAnalyzer"),
    icon: BarChart3,
  },
  {
    title: "My Portfolio",
    url: createPageUrl("Portfolio"),
    icon: Briefcase,
  },
  {
    title: "AI Recommendations",
    url: createPageUrl("Recommendations"),
    icon: Sparkles,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --background: 10 10 12;
          --foreground: 250 250 250;
          --card: 16 16 18;
          --card-foreground: 250 250 250;
          --primary: 34 197 94;
          --primary-foreground: 0 0 0;
          --muted: 39 39 42;
          --accent: 22 163 74;
          --destructive: 220 38 38;
          --border: 39 39 42;
        }
        body {
          background: #0a0a0c;
          color: #fafafa;
        }
      `}</style>
      <div className="min-h-screen flex w-full bg-zinc-950 text-zinc-50">
        <Sidebar className="border-r border-zinc-800 bg-zinc-900/50">
          <SidebarHeader className="border-b border-zinc-800 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-lg">TradeAI</h2>
                <p className="text-xs text-zinc-400">Smart Trading Platform</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-200 rounded-lg mb-1 ${
                          location.pathname === item.url ? 'bg-emerald-500/20 text-emerald-400 border-l-2 border-emerald-500' : 'text-zinc-300'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-zinc-900/50 border-b border-zinc-800 px-6 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="lg:hidden hover:bg-zinc-800 p-2 rounded-lg transition-colors duration-200">
                <Menu className="w-5 h-5" />
              </SidebarTrigger>
              <div className="flex-1">
                <h1 className="text-xl font-bold">{currentPageName}</h1>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-auto bg-zinc-950">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
