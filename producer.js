const rabbit = require('amqplib');
const MESSAGE_QUEUE = process.env.MESSAGE_QUEUE;
const QUEUE_NAME = 'queue_number';
const EXCHANGE_TYPE = 'direct';
const EXCHANGE_NAME = 'main';
const KEY = 'myKey';
const count = parseInt(process.env.MESSAGE_COUNT || 5)

// create connection variable
connection = rabbit.connect(MESSAGE_QUEUE);
// open connection
connection.then(async (conn)=>{
  // connect to the channel
  const channel = await conn.createChannel();
  await channel.assertExchange(EXCHANGE_NAME, EXCHANGE_TYPE);
  await channel.assertQueue(QUEUE_NAME);
  channel.bindQueue(QUEUE_NAME, EXCHANGE_NAME, KEY);
  for(i = 1; i <= count; i++) {
    console.log(`sending message => ${i}`);
    channel.sendToQueue(QUEUE_NAME, Buffer.from(i));
  }
})