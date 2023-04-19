const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092']
});

const consumer = kafka.consumer({ groupId: 'test-group' })

const initKafka = async () => {
  console.log('start subscribe')
  await consumer.connect()
  await consumer.subscribe({ topic: 'multi-partitions', fromBeginning: true })
  await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      key: message.key.toString(),
      value: message.value.toString(),
      partition: partition
    })
  },
})
}

initKafka()