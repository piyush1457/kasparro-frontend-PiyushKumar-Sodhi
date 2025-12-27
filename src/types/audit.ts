export type AuditStatus = 'pass' | 'warning' | 'critical' | 'info';

export interface AuditRecommendation {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  status: AuditStatus;
  insights: string[];
  issues: string[];
  recommendations: AuditRecommendation[];
  history?: { date: string; score: number }[];
}

export interface AuditReport {
  id: string;
  brandId: string;
  date: string;
  modules: AuditModule[];
  summary: string;
}
