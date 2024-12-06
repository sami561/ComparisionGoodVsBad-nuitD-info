export const codeExamples = [
  {
    id: 1,
    title: "I/O Operations Loop",
    badCode: `// Bad: Multiple I/O operations in loop
for (let i = 0; i < items.length; i++) {
  await fs.writeFile('log.txt', items[i]);
  await fs.appendFile('stats.txt', stats[i]);
}`,
    goodCode: `// Good: Batch I/O operations
const writePromises = items.map(item => 
  fs.writeFile('log.txt', item)
);
await Promise.all(writePromises);

const statsPromises = stats.map(stat => 
  fs.appendFile('stats.txt', stat)
);
await Promise.all(statsPromises);`,
    explanation: "Performing I/O operations in loops creates unnecessary system calls. Batch operations reduce system overhead and improve performance."
  },
  {
    id: 2,
    title: "String Concatenation",
    badCode: `// Bad: Inefficient string concatenation
let result = '';
for (let i = 0; i < 1000; i++) {
  result += data[i];
}`,
    goodCode: `// Good: Using array join or template literals
const result = data
  .slice(0, 1000)
  .join('');

// Or for template literals:
const result = \`\${data.slice(0, 1000)}\`;`,
    explanation: "String concatenation in loops creates multiple temporary strings, consuming extra memory. Using array methods or template literals is more memory-efficient."
  },
  {
    id: 3,
    title: "Exception Handling",
    badCode: `// Bad: Using exceptions for flow control
try {
  const user = users.find(u => 
    u.id === userId
  );
  if (!user) {
    throw new Error('User not found');
  }
  return user;
} catch (error) {
  return defaultUser;
}`,
    goodCode: `// Good: Using conditional logic
const user = users.find(u => 
  u.id === userId
);
if (user) {
  return user;
}
return defaultUser;`,
    explanation: "Using exceptions for normal flow control creates unnecessary stack traces and impacts performance. Simple conditionals are more efficient for expected scenarios."
  }
];