import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { mockShrimps, mockUser } from '@/data/mock';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Sword, 
  Zap, 
  Shield, 
  Clock,
  User,
  Trophy
} from 'lucide-react';

interface ShrimpDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ShrimpDetailPage({ params }: ShrimpDetailPageProps) {
  const { id } = await params;
  const shrimp = mockShrimps.find((s) => s.id === id);
  
  if (!shrimp) {
    notFound();
  }

  const rarityConfig = {
    common: { label: '普通', className: 'bg-slate-500' },
    rare: { label: '稀有', className: 'bg-blue-500' },
    epic: { label: '史诗', className: 'bg-purple-500' },
    legendary: { label: '传奇', className: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
  };

  const config = rarityConfig[shrimp.rarity];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <span>首页</span>
          <span>/</span>
          <span>虾群</span>
          <span>/</span>
          <span className="font-medium text-slate-800">{shrimp.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Image */}
          <Card>
            <CardContent className="p-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-100 via-pink-100 to-orange-100 flex items-center justify-center text-[12rem]">
                {shrimp.image}
              </div>
            </CardContent>
          </Card>

          {/* Right - Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{shrimp.name}</h1>
                <Badge className={config.className}>{config.label}</Badge>
              </div>
              <p className="text-slate-600">{shrimp.description}</p>
            </div>

            {/* Price & Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-slate-500">当前价格</p>
                    <p className="text-3xl font-bold text-rose-500">¥{shrimp.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">拥有者</p>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{shrimp.owner || '未知'}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-rose-500 hover:bg-rose-600 h-12 gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    立即购买
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">属性详情</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sword className="w-4 h-4 text-red-500" />
                      <span className="text-sm">战斗力</span>
                    </div>
                    <span className="font-semibold">{shrimp.power}/100</span>
                  </div>
                  <Progress value={shrimp.power} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">速度</span>
                    </div>
                    <span className="font-semibold">{shrimp.speed}/100</span>
                  </div>
                  <Progress value={shrimp.speed} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-sm">生命值</span>
                    </div>
                    <span className="font-semibold">{shrimp.health}/100</span>
                  </div>
                  <Progress value={shrimp.health} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs Section */}
        <Card className="mt-8">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="w-full justify-start rounded-b-none border-b">
              <TabsTrigger value="history">交易记录</TabsTrigger>
              <TabsTrigger value="battles">战斗记录</TabsTrigger>
              <TabsTrigger value="similar">相似虾群</TabsTrigger>
            </TabsList>
            <TabsContent value="history" className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <p className="font-medium">创建</p>
                      <p className="text-sm text-slate-500">{shrimp.createdAt.toLocaleDateString()}</p>
                    </div>
                  </div>
                  <span className="text-slate-500">-</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <p className="font-medium">铸造</p>
                      <p className="text-sm text-slate-500">系统</p>
                    </div>
                  </div>
                  <span className="text-slate-500">铸造费: ¥0</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="battles" className="p-6">
              <div className="text-center py-8 text-slate-500">
                <Trophy className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>暂无战斗记录</p>
                <Button variant="outline" className="mt-4">
                  发起挑战
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="similar" className="p-6">
              <div className="text-center py-8 text-slate-500">
                <p>暂无相似虾群</p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
