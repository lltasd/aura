// src/components/ServiceCard.tsx
export default function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3 text-blue-600">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
}