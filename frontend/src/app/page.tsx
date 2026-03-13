import { ShrimpCard } from '@/components/ShrimpCard';
import { mockShrimps } from '@/data/mock';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shell, TrendingUp, Zap, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <Shell className="w-20 h-20 animate-bounce" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              欢迎来到虾群市场
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
              收集、交易、战斗！打造你的最强虾群，成为虾王！
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <TrendingUp className="w-5 h-5" />
                开始交易
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                <Zap className="w-5 h-5" />
                虾群对战
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 rounded-xl bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                <Shell className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,234</p>
                <p className="text-slate-500">在售虾群</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">567</p>
                <p className="text-slate-500">今日交易</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl bg-slate-50">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">8.9K</p>
                <p className="text-slate-500">注册用户</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="搜索虾群..."
              className="flex-1"
            />
            <Button className="bg-rose-500 hover:bg-rose-600">
              搜索
            </Button>
          </div>
        </div>
      </section>

      {/* Shrimp Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              热门虾群
            </h2>
            <Button variant="outline">查看更多</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockShrimps.map((shrimp) => (
              <ShrimpCard key={shrimp.id} shrimp={shrimp} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
