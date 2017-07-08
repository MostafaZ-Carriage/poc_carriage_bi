
require "rubygems"
require "bunny"

STDOUT.sync = true

if ENV['RABBIT_MQ_URL']
  conn = Bunny.new ENV['RABBIT_MQ_URL']
else
  conn = Bunny.new
end
conn.start

ch = conn.create_channel
q  = ch.queue("bunny.examples.hello_world", :auto_delete => true)

q.subscribe do |delivery_info, metadata, payload|
  OrderCount.first.update_attributes(number: payload.to_i)
  puts "Received #{payload}"
end

sleep 1.0
#conn.close

#Bunny.new.start.create_channel.queue('bunny.examples.hello_world', :auto_delete => true).subscribe do |_delivery_info, _metadata, payload|
#  OrderCount.first.tap{ |x| x.update_attributes(number: x.number+1)}
#  puts "Received #{payload}"
#  sleep 10
#end
