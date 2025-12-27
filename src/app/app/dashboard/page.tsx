'use client';

import { useAppStore } from '@/store/useAppStore';
import brandsData from '@/data/brands.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { ArrowUp, ArrowDown, TrendingUp, Activity, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  const { selectedBrandId, setSelectedBrandId } = useAppStore();
  const selectedBrand = brandsData.find(b => b.id === selectedBrandId) || brandsData[0];

  return (
    <Container className="py-8 space-y-8">
      {/* Header & Brand Selector */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Overview for {selectedBrand.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Brand:</span>
          <select
            value={selectedBrandId}
            onChange={(e) => setSelectedBrandId(e.target.value)}
            className="block w-48 rounded-md border-gray-300 dark:border-zinc-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border bg-white dark:bg-zinc-900 dark:text-zinc-100 transition-colors"
          >
            {brandsData.map(brand => (
              <option key={brand.id} value={brand.id}>{brand.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Visibility Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selectedBrand.aggregateScore}%</div>
            <p className="text-xs text-muted-foreground text-green-600 flex items-center mt-1">
              <ArrowUp className="h-3 w-3 mr-1" /> +2.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trust & EEAT</CardTitle>
            <Shield className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">High</div>
            <p className="text-xs text-muted-foreground text-gray-500 mt-1">
              Knowledge Graph Verified
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Keyword Coverage</CardTitle>
            <Globe className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,204</div>
            <p className="text-xs text-muted-foreground text-red-600 flex items-center mt-1">
              <ArrowDown className="h-3 w-3 mr-1" /> -4% drop in top 3
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
            <Activity className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 days ago</div>
            <p className="text-xs text-muted-foreground text-gray-500 mt-1">
              Full scan completed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity / Graph Placeholder */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Visibility Trend (Last 30 Days)</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] flex items-end justify-between gap-2 px-4">
              {[40, 35, 55, 60, 58, 65, 72].map((h, i) => (
                <div key={i} className="w-full bg-blue-100 dark:bg-blue-900/40 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400 px-4">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Priority Actions</CardTitle>
            <p className="text-sm text-gray-500">Based on latest audit</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-red-800 dark:text-red-400">Fix Entity Disambiguation</p>
                  <p className="text-xs text-red-600 dark:text-red-300 mt-1">ChatGPT confuses you with a competitor.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-400">Improve Citation Authority</p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-1">Low coverage in industry journals.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </Container>
  );
}
