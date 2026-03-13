'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { mockUser, mockShrimps, mockLeaderboard } from '@/data/mock';
import { 
  User, 
  Wallet, 
  Trophy, 
  Sword, 
  Settings, 
  Bell,
  CreditCard,
  LogOut,
  ChevronRight,
  Shield,
  Mail,
  Phone,
  Shell,
  Star,
  TrendingUp
} from 'lucide-react';

export default function UserPage() {
  const userShrimps = mockShrimps.filter(s => mockUser.shrimps.includes(s.id));
  const userRank = mockLeaderboard.find(l => l.userId === 'current-user');

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile Card */}
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400" />
          <CardContent className="relative pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-12">
              <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                <AvatarFallback className="text-4xl bg-gradient-to-br from-rose-400 to-orange-400">
                  {mockUser.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl font-bold">{mockUser.name}</h1>
                  <Badge className="bg-gradient-to-r from-rose-500 to-orange-500">Lv.{mockUser.level}</Badge>
                </div>
                <p className="text-slate-500">虾群大师 · 加入于 2024年1月</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <p className="text-2xl font-bold text-rose-500">{mockUser.coins.toLocaleString()}</p>
                <p className="text-sm text-slate-500">金币</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <p className="text-2xl font-bold text-blue-500">{userShrimps.length}</p>
                <p className="text-sm text-slate-500">虾群</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <p className="text-2xl font-bold text-green-500">{mockUser.wins}</p>
                <p className="text-sm text-slate-500">胜利</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <p className="text-2xl font-bold text-purple-500">#{userRank?.rank || '-'}</p>
                <p className="text-sm text-slate-500">排名</p>
              </div>
            </div>

            {/* Level Progress */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50">
              <div className="flex justify-between text-sm mb-2">
                <span>升级进度</span>
                <span>{mockUser.level} → {mockUser.level + 1}</span>
              </div>
              <Progress value={65} className="h-2" />
              <p className="text-xs text-slate-500 mt-2">再获得 3500 经验值即可升级</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto py-4 flex-col gap-2">
            <Wallet className="w-6 h-6 text-green-500" />
            <span>充值</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex-col gap-2">
            <CreditCard className="w-6 h-6 text-blue-500" />
            <span>提现</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex-col gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span>排行榜</span>
          </Button>
          <Button variant="outline" className="h-auto py-4 flex-col gap-2">
            <Sword className="w-6 h-6 text-red-500" />
            <span>对战</span>
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="shrimps" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="shrimps" className="flex-1">我的虾群 ({userShrimps.length})</TabsTrigger>
            <TabsTrigger value="orders" className="flex-1">订单记录</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1">设置</TabsTrigger>
          </TabsList>

          <TabsContent value="shrimps" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {userShrimps.map((shrimp) => (
                <Card key={shrimp.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-rose-100 to-orange-100 flex items-center justify-center text-3xl">
                        {shrimp.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{shrimp.name}</h3>
                        <Badge variant="secondary" className="mt-1">{shrimp.rarity}</Badge>
                        <div className="flex gap-3 mt-2 text-sm text-slate-500">
                          <span>⚔️ {shrimp.power}</span>
                          <span>⚡ {shrimp.speed}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardContent className="p-6 text-center text-slate-500">
                <Shell className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>暂无订单记录</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  <Button variant="ghost" className="w-full justify-between h-auto py-4 px-6 rounded-none">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-slate-500" />
                      <span>个人信息</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between h-auto py-4 px-6 rounded-none">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-slate-500" />
                      <span>邮箱设置</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between h-auto py-4 px-6 rounded-none">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-slate-500" />
                      <span>手机绑定</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between h-auto py-4 px-6 rounded-none">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-slate-500" />
                      <span>安全设置</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between h-auto py-4 px-6 rounded-none text-red-500">
                    <div className="flex items-center gap-3">
                      <LogOut className="w-5 h-5" />
                      <span>退出登录</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
