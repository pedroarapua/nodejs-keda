const rabbit = require('amqplib');
const QUEUE_NAME = 'square';
const MESSAGE_QUEUE = process.env.MESSAGE_QUEUE;

// create connection variable
connection = rabbit.connect(MESSAGE_QUEUE);
// open connection
connection.then(async (conn)=>{
  // connect to the channel
  const channel = await conn.createChannel();
  // start to watch msgs in rabbitmq
  channel.consume(QUEUE_NAME, (m)=>{
    const number = parseInt(m.content.toString());
    const square = number * number;
    console.log(square);
    channel.ack(m);
  });
});