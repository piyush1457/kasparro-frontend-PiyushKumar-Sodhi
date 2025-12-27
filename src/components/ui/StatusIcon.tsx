import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';
import { AuditStatus } from '@/types/audit';

const statusMap = {
    pass: { icon: CheckCircle, color: 'text-green-500' },
    warning: { icon: AlertTriangle, color: 'text-yellow-500' },
    critical: { icon: XCircle, color: 'text-red-500' },
    info: { icon: Info, color: 'text-blue-500' },
};

export function StatusIcon({ status, className }: { status: AuditStatus; className?: string }) {
    const { icon: Icon, color } = statusMap[status];

    return <Icon className={`${color} ${className}`} />;
}
