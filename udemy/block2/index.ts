//23. More advanced Type and type intersection (Intersection)
const port3000: number = 3000;
const port3001: number = 3001;
type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 }; //Intersection
type Role = {
  role: string;
};
type ConfigWithRole = Config & Role; //Obj template
type startFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string; //Func template

const serverConfig: ConfigWithRole = {
  protocol: 'http',
  port: 3000,
  role: 'admin',
};

const backupConfig: ConfigWithRole = {
  protocol: 'http',
  port: 3001,
  role: 'dev',
};

const startServer: startFunction = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started!' => {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error('Invalid port!');
  }
  return 'Server started!';
};

startServer(serverConfig.protocol, serverConfig.port);