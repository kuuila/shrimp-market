import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockLeaderboard, mockShrimps } from '@/data/mock';
import { 
  Trophy, 
  Medal, 
  Crown,
  TrendingUp,
  Sword,
  Shell,
  Star,
  Users,
  Zap
} from 'lucide-react';

const rankIcons: Record<number, React.ReactNode> = {
  1: <Crown className="w-6 h-6 text-yellow-500" />,
  2: <Medal className="w-6 h-6 text-slate-400" />,
  3: <Medal className="w-6 h-6 text-amber-600" />,
};

const rankBadges: Record<number, string> = {
  1: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
  2: 'bg-gradient-to-r from-slate-300 to-slate-400',
  3: 'bg-gradient-to-r from-amber-400 to-amber-600',
};

export default function LeaderboardPage() {
  const topThree = mockLeaderboard.slice(0, 3);
  const rest = mockLeaderboard.slice(3);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Trophy className="w-16 h-16 text-yellow-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            排行榜
          </h1>
          <p className="text-slate-500">最强虾王争夺战！</p>
        </div>

        {/* Top 3 Podium */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              {/* 2nd Place */}
              <div className="order-2 sm:order-1">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-2">
                    <AvatarFallback className="bg-gradient-to-br from-slate-200 to-slate-300 text-2xl">
                      {topThree[1].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className={rankBadges[2]}>🥈</Badge>
                  <h3 className="font-semibold mt-2">{topThree[1].userName}</h3>
                  <p className="text-sm text-slate-500">Score: {topThree[1].score.toLocaleString()}</p>
                </div>
                <div className="mt-4 h-24 bg-gradient-to-t from-slate-200 to-slate-100 rounded-t-lg flex items-end justify-center pb-2">
                  <div className="text-center">
                    <Sword className="w-4 h-4 mx-auto text-slate-500" />
                    <span className="text-xs text-slate-500">{topThree[1].wins}胜</span>
                  </div>
                </div>
              </div>

              {/* 1st Place */}
              <div className="order-1 sm:order-2">
                <div className="text-center">
                  <div className="relative inline-block">
                    <Avatar className="w-20 h-20 mx-auto mb-2">
                      <AvatarFallback className="bg-gradient-to-br from-yellow-300 to-yellow-500 text-3xl">
                        {topThree[0].avatar}
                      </AvatarFallback>
                    </Avatar>
                    <Crown className="w-6 h-6 absolute -top-2 -right-2 text-yellow-500" />
                  </div>
                  <Badge className={rankBadges[1]}>🥇</Badge>
                  <h3 className="font-bold text-lg mt-2">{topThree[0].userName}</h3>
                  <p className="text-sm text-rose-500 font-semibold">Score: {topThree[0].score.toLocaleString()}</p>
                </div>
                <div className="mt-4 h-32 bg-gradient-to-t from-yellow-300 to-yellow-100 rounded-t-lg flex items-end justify-center pb-2">
                  <div className="text-center">
                    <Sword className="w-5 h-5 mx-auto text-yellow-600" />
                    <span className="text-xs text-yellow-700">{topThree[0].wins}胜</span>
                  </div>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="order-3">
                <div className="text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-2">
                    <AvatarFallback className="bg-gradient-to-br from-amber-200 to-amber-400 text-2xl">
                      {topThree[2].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className={rankBadges[3]}>🥉</Badge>
                  <h3 className="font-semibold mt-2">{topThree[2].userName}</h3>
                  <p className="text-sm text-slate-500">Score: {topThree[2].score.toLocaleString()}</p>
                </div>
                <div className="mt-4 h-16 bg-gradient-to-t from-amber-300 to-amber-100 rounded-t-lg flex items-end justify-center pb-2">
                  <div className="text-center">
                    <Sword className="w-4 h-4 mx-auto text-amber-600" />
                    <span className="text-xs text-amber-700">{topThree[2].wins}胜</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Button variant="secondary" className="bg-rose-500 hover:bg-rose-600 text-white">
            综合榜
          </Button>
          <Button variant="outline">胜率榜</Button>
          <Button variant="outline">财富榜</Button>
          <Button variant="outline">虾群榜</Button>
        </div>

        {/* Full Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              完整排行榜
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {mockLeaderboard.map((item, index) => (
                <div
                  key={item.userId}
                  className={`flex items-center gap-4 py-4 ${
                    item.userId === 'current-user' ? 'bg-rose-50 -mx-6 px-6 rounded-lg' : ''
                  }`}
                >
                  <div className="w-8 text-center">
                    {item.rank <= 3 ? (
                      rankIcons[item.rank]
                    ) : (
                      <span className="text-lg font-bold text-slate-400">#{item.rank}</span>
                    )}
                  </div>
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-rose-200 to-orange-200">
                      {item.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{item.userName}</span>
                      {item.userId === 'current-user' && (
                        <Badge variant="secondary" className="text-xs">你</Badge>
                      )}
                    </div>
                    <div className="flex gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Sword className="w-3 h-3" /> {item.wins}胜
                      </span>
                      <span className="flex items-center gap-1">
                        <Shell className="w-3 h-3" /> {item.shrimps}虾
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{item.score.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">积分</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-2xl font-bold">9,850</p>
              <p className="text-sm text-slate-500">最高积分</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <p className="text-2xl font-bold">+12</p>
              <p className="text-sm text-slate-500">本周排名变化</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-purple-500" />
              <p className="text-2xl font-bold">42</p>
              <p className="text-sm text-slate-500">本周胜场</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
