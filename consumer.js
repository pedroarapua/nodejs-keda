const rabbit = require('amqplib');
const QUEUE_NAME = 'queue_number';
const MESSAGE_QUEUE = process.env.MESSAGE_QUEUE;

// create connection variable
connection = rabbit.connect(MESSAGE_QUEUE);
// open connection
connection.then(async (conn)=>{
  // connect to the channel
  const channel = await conn.createChannel();
  // start to watch msgs in rabbitmq
  channel.consume(QUEUE_NAME, (m)=>{
    const msg = m.content.toString();
    console.log(`received message => ${msg}`);
    channel.ack(m);
  });
});