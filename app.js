const { execSync } = require('child_process');
const path = require('path');

const startCommand = 'npm run serve';

// Start the server
try {
  console.log('Starting the server...');
  execSync(startCommand, { stdio: 'inherit' });
} catch (error) {
  console.error('Error starting the server:', error);
  process.exit(1);
}

