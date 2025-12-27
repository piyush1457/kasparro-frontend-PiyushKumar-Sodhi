import { redirect } from 'next/navigation';

export default function AuditRootPage() {
  redirect('/app/audit/llm_visibility');
}
