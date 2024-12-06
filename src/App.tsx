import React from 'react';
import { Leaf } from 'lucide-react';
import { CodeExample } from './components/CodeExample';
import { codeExamples } from './data/examples';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Eco-Friendly Coding Practices</h1>
          </div>
          <p className="mt-4 max-w-2xl">
            Learn how to write more efficient code that reduces resource consumption
            and environmental impact. Small changes in coding practices can lead to
            significant improvements in performance and energy efficiency.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {codeExamples.map((example) => (
            <CodeExample
              key={example.id}
              title={example.title}
              goodCode={example.goodCode}
              badCode={example.badCode}
              explanation={example.explanation}
            />
          ))}
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Impact on Environment
            </h2>
            <p className="text-green-700">
              By following these best practices, we can significantly reduce:
            </p>
            <ul className="list-disc list-inside mt-2 text-green-700 space-y-2">
              <li>CPU usage and processing time</li>
              <li>Memory consumption</li>
              <li>Energy consumption in data centers</li>
              <li>Carbon footprint of our applications</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;