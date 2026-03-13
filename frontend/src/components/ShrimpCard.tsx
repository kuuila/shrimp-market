'use client';

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shrimp } from '@/types';
import { cn } from '@/lib/utils';

interface ShrimpCardProps {
  shrimp: Shrimp;
}

const rarityConfig = {
  common: {
    label: '普通',
    className: 'bg-slate-500',
    border: 'border-slate-300',
    glow: '',
  },
  rare: {
    label: '稀有',
    className: 'bg-blue-500',
    border: 'border-blue-300',
    glow: 'hover:shadow-blue-200',
  },
  epic: {
    label: '史诗',
    className: 'bg-purple-500',
    border: 'border-purple-300',
    glow: 'hover:shadow-purple-200',
  },
  legendary: {
    label: '传奇',
    className: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    border: 'border-yellow-300',
    glow: 'hover:shadow-yellow-200',
  },
};

export function ShrimpCard({ shrimp }: ShrimpCardProps) {
  const config = rarityConfig[shrimp.rarity];

  return (
    <Link href={`/shrimp/${shrimp.id}`}>
      <Card className={cn(
        'cursor-pointer transition-all duration-300 hover:shadow-xl group',
        config.border,
        config.glow
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{shrimp.name}</CardTitle>
            <Badge className={config.className}>{config.label}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="aspect-square rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-8xl mb-4 group-hover:scale-105 transition-transform">
            {shrimp.image}
          </div>
          <p className="text-sm text-slate-600 line-clamp-2">{shrimp.description}</p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">战斗力</span>
              <span className="font-semibold">{shrimp.power}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">速度</span>
              <span className="font-semibold">{shrimp.speed}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">生命值</span>
              <span className="font-semibold">{shrimp.health}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-xl font-bold text-rose-500">
            ¥{shrimp.price}
          </div>
          {shrimp.forSale ? (
            <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
              购买
            </Button>
          ) : (
            <Button size="sm" variant="outline" disabled>
              已售
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
