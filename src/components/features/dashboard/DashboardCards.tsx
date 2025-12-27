export default function DashboardCards() {
  const cards = [
    { label: 'AI Visibility Score', value: 72 },
    { label: 'Trust / EEAT Score', value: 68 },
    { label: 'Keyword Coverage', value: '54%' },
    { label: 'Last Audit', value: '2 days ago' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white p-4 rounded border"
        >
          <p className="text-sm text-gray-500">{card.label}</p>
          <p className="text-xl font-semibold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
