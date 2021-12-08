const rabbit = require('amqplib');
const MESSAGE_QUEUE = process.env.MESSAGE_QUEUE;
const QUEUE_NAME = 'queue_number';
const EXCHANGE_TYPE = 'direct';
const EXCHANGE_NAME = 'main';
const KEY = 'myKey';
const numbers = ['1', '2', '3', '4', '5']

// create connection variable
connection = rabbit.connect(MESSAGE_QUEUE);
// open connection
connection.then(async (conn)=>{
  // connect to the channel
  const channel = await conn.createChannel();
  await channel.assertExchange(EXCHANGE_NAME, EXCHANGE_TYPE);
  await channel.assertQueue(QUEUE_NAME);
  channel.bindQueue(QUEUE_NAME, EXCHANGE_NAME, KEY);
  numbers.forEach((number)=>{
    console.log(`sending message => ${number}`);
    channel.sendToQueue(QUEUE_NAME, Buffer.from(number));
  })
})