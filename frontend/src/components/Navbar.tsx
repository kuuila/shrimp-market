'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ShoppingCart, Trophy, User, Home, Shell } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: '首页', icon: Home },
  { href: '/cart', label: '购物车', icon: ShoppingCart },
  { href: '/leaderboard', label: '排行榜', icon: Trophy },
  { href: '/user', label: '用户中心', icon: User },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Shell className="w-8 h-8 text-rose-500 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
            虾群市场
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? 'default' : 'ghost'}
                  size="sm"
                  className={cn(
                    'gap-2',
                    pathname === item.href && 'bg-rose-500 hover:bg-rose-600'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* User Avatar */}
        <Link href="/user">
          <Avatar className="cursor-pointer hover:ring-2 hover:ring-rose-500 transition-all">
            <AvatarFallback className="bg-gradient-to-br from-rose-400 to-orange-400 text-white">
              虾
            </AvatarFallback>
          </Avatar>
        </Link>

        {/* Mobile Navigation */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-slate-200 px-4 py-2 flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'flex-col gap-1 h-14',
                    pathname === item.href && 'text-rose-500'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
