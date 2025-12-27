import { notFound } from 'next/navigation';
import auditModules from '@/data/audit-modules.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { StatusIcon } from '@/components/ui/StatusIcon';
import { AuditStatus } from '@/types/audit';
import { AlertTriangle, CheckCircle, Info, Lightbulb } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface PageProps {
    params: Promise<{ moduleId: string }>;
}

export default async function AuditModulePage({ params }: PageProps) {
    const { moduleId } = await params;
    const module = auditModules.find((m) => m.id === moduleId);

    if (!module) {
        notFound();
    }

    // Calculate color based on score
    const scoreColor = module.score >= 80 ? 'text-green-600' : module.score >= 60 ? 'text-yellow-600' : 'text-red-600';
    const progressColor = module.score >= 80 ? 'bg-green-600' : module.score >= 60 ? 'bg-yellow-600' : 'bg-red-600';

    return (
        <Container className="max-w-5xl space-y-8">
            {/* Header */}
            <div className="flex items-start justify-between border-b pb-6">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-100">{module.name}</h1>
                        <StatusIcon status={module.status as AuditStatus} className="h-6 w-6" />
                    </div>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">{module.description}</p>
                </div>
                <div className="text-right">
                    <div className={`text-4xl font-extrabold ${scoreColor}`}>{module.score}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium mt-1">Score</div>
                </div>
            </div>

            {/* Score Visual */}
            <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-2.5 mb-8">
                <div className={`h-2.5 rounded-full ${progressColor}`} style={{ width: `${module.score}%` }}></div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Insights & Issues */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Info className="h-5 w-5 text-blue-500" /> Key Insights
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {module.insights.map((insight, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-zinc-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                                        {insight}
                                    </li>
                                ))}
                                {module.insights.length === 0 && <li className="text-sm text-gray-500 dark:text-gray-400 italic">No specific insights available.</li>}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border-red-100 bg-red-50/30 dark:bg-red-900/10 dark:border-red-900/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                                <AlertTriangle className="h-5 w-5" /> Detected Issues
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {module.issues.map((issue, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-gray-800 dark:text-red-200">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                        {issue}
                                    </li>
                                ))}
                                {module.issues.length === 0 && <li className="text-sm text-gray-500 dark:text-gray-400 italic">No critical issues detected.</li>}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Recommendations */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-5 w-5 text-yellow-500" />
                        <h3 className="text-lg font-bold">Recommendations</h3>
                    </div>

                    <div className="space-y-4">
                        {module.recommendations.map((rec) => (
                            <Card key={rec.id} className="relative overflow-hidden">
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${rec.impact === 'high' ? 'bg-red-500' : rec.impact === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                <CardContent className="pt-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-gray-900 dark:text-zinc-100">{rec.title}</h4>
                                        <Badge variant={rec.impact === 'high' ? 'destructive' : rec.impact === 'medium' ? 'warning' : 'success'}>
                                            {rec.impact} impact
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{rec.description}</p>
                                    <Button size="sm" variant="outline" className="w-full">Auto-Fix with AI</Button>
                                </CardContent>
                            </Card>
                        ))}
                        {module.recommendations.length === 0 && (
                            <div className="p-8 text-center bg-gray-50 rounded-lg border border-dashed">
                                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                                <p className="text-gray-500 font-medium">No recommendations.</p>
                                <p className="text-sm text-gray-400">Your brand is performing well in this area.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
}

// Generate static params for all modules
export async function generateStaticParams() {
    return auditModules.map((module) => ({
        moduleId: module.id,
    }));
}
