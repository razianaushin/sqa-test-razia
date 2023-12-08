const WebSocket = require('ws');

describe('WebSocket Tests', () => 
{
    let ws;
    beforeEach(() => 
    {
        ws = new WebSocket('ws://localhost:3333/currency');
    });

    afterEach(() => 
    {
        if (ws.readyState === WebSocket.OPEN) 
            {
                ws.close();
            }
    });

  test('WebSocket Connection Establishment', (done) => 
    {
        ws.on('open', () => {
        expect(ws.readyState).toBe(WebSocket.OPEN);
        done();
    });
  });

  test('Receiving Cryptocurrency Price Updates', (done) => 
  {
    ws.on('message', (data) => {
      const parsedData = JSON.parse(data);
   
      expect(parsedData).toHaveProperty('currency');
      expect(parsedData).toHaveProperty('price');
      done();

    });
});

    test('Connection Stability', (done) => 
    {
        const interval = setInterval(() =>  // Simulate continuous data reception and check for stability
    {
      
    }, 5000);  // send/receive data at particular time as 5 seconds

    setTimeout(() => 
    {
        clearInterval(interval);
        done();
    },  30000);     // Test stability for 30 seconds
  });

  test('Error Handling', (done) => 
  {
    ws.on('error', (error) => 
    {
        expect(error).toBeInstanceOf(Error);  // Add assertions to check error handling
        done();
    });
});

});
