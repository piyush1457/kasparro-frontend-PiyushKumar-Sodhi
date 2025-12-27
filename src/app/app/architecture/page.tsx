import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowRight, Database, Brain, FileText, Layers, Server } from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <Container className="py-8 space-y-12">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">System Architecture</h1>
        <p className="text-gray-500">Visual representation of the Kasparro Engine</p>
      </div>

      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {/* Layer 1: Input Assembler */}
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            <Database className="h-4 w-4" /> Input Layer
          </div>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardTitle>InputAssembler</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Ingests brand assets (sitemap, PR), SERP data (Google, Bing), and Knowledge Graph entities. Normalizes unstructured data into a canonical format.
            </CardContent>
          </Card>
        </div>

        <ArrowRight className="h-6 w-6 text-gray-300 rotate-90" />

        {/* Layer 2: Context Pack */}
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            <Layers className="h-4 w-4" /> Context Contextualization
          </div>
          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="pb-2">
              <CardTitle>ContextPack</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Enriches raw data with semantic embeddings. Resolves entity ambiguity. Prepares specific "Context Packs" for each specific Audit Module to ensure relevance.
            </CardContent>
          </Card>
        </div>

        <ArrowRight className="h-6 w-6 text-gray-300 rotate-90" />

        {/* Layer 3: Audit Modules */}
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            <Brain className="h-4 w-4" /> AI Inference Layer
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gray-50 border-dashed">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-medium">LLM Visibility</span>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-dashed">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-medium">Trust & EEAT</span>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-dashed">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="font-medium">Sentiment</span>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-dashed">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="font-medium">... 4 more modules</span>
              </CardContent>
            </Card>
          </div>
        </div>

        <ArrowRight className="h-6 w-6 text-gray-300 rotate-90" />

        {/* Layer 4: Output Surfaces */}
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            <Server className="h-4 w-4" /> Output Layer
          </div>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle>Output Surfaces</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Delivers structured JSON-LD recommendations, Dashboard analytics, and generated Content Briefs for remediation.
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
