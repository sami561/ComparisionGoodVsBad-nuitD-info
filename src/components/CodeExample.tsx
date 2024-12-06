import React from 'react';
import { Code2, CheckCircle, XCircle } from 'lucide-react';

interface CodeExampleProps {
  title: string;
  goodCode: string;
  badCode: string;
  explanation: string;
}

export function CodeExample({ title, goodCode, badCode, explanation }: CodeExampleProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Code2 className="w-6 h-6" />
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-red-600">
            <XCircle className="w-5 h-5" />
            <h3 className="font-semibold">Bad Practice</h3>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{badCode}</code>
          </pre>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <h3 className="font-semibold">Good Practice</h3>
          </div>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{goodCode}</code>
          </pre>
        </div>
      </div>
      
      <p className="mt-4 text-gray-600">{explanation}</p>
    </div>
  );
}