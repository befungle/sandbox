<?php
//amqp - test send script
require_once __DIR__ . '/vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPConnection;
use PhpAmqpLib\Message\AMQPMessage;

$connection = new AMQPConnection('localhost', 5672, 'guest', 'guest');
$channel = $connection->channel();


$channel->queue_declare('hello', false, false, false, false);

$time = date(s);
$msg = new AMQPMessage('Hello '.$time);
$channel->basic_publish($msg, '', 'hello');
echo " [x] Sent 'Hello ".$time."'\n";

$channel->close();
$connection->close();

?>
