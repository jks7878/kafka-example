const express = require('express');
const { Kafka } = require('kafkajs');

const app = express();
const port = 3000;

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092']
})

const producer = kafka.producer();

const initKafka = async () => {
  await producer.connect();
}

app.post('/events/:event', async (req, res) => {
  await producer.send({
    topic: 'quickstart-events',
    messages: [
      { value: req.params.event },
    ],
  })
  res.send('successfully stored event : '+ req.params.event + '\n')
});

app.post('/multi-partitions/:event', async (req, res) => {
  try {
    const arr = ["a", "b", "c"];

    for(let i = 0; i < 10; i++) {
      await producer.send({
        topic: 'multi-partitions',
        messages: [
          { key: arr[i % 3], value: i.toString() },
        ],
      })
    }
  
    res.send('successfully stored event : '+ req.params.event + '\n')
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, async  () => {
  console.log(`kafka app listening on port ${port}`)
});

initKafka();